import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Header } from "../components/ui/header";
import { PrimaryButton } from "../components/ui/primary-button";
import { TextInputField } from "../components/ui/text-input-field";
import { Colors, Radius, Spacing } from "../constants/theme";
import { useToast } from "../context/toast-context";
import { useColorScheme } from "../hooks/use-color-scheme";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const palette = Colors[scheme];
  const { showToast } = useToast();

  const handleSignIn = () => {
    showToast("Bem-vindo!", "success");
    router.replace("/products");
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: palette.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.wrapper}>
        <View
          style={[
            styles.card,
            {
              backgroundColor: palette.surface,
              borderColor: palette.border,
            },
          ]}
        >
          <Header
            title="Supermercado"
            subtitle="Faça login para começar suas compras."
          />

          <View style={styles.form}>
            <TextInputField
              label="E-mail"
              placeholder="Insira seu e-mail"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
            />

            <TextInputField
              label="Senha"
              placeholder="Insira sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              returnKeyType="done"
            />

            <View style={styles.actionsRow}>
              <PrimaryButton
                label="Entrar"
                onPress={handleSignIn}
                style={styles.primaryButton}
              />

              <PrimaryButton
                label="Cadastrar"
                onPress={() => router.push("/register")}
                variant="outline"
                style={styles.secondaryButton}
              />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
  },

  card: {
    width: "100%",
    maxWidth: 420,
    padding: Spacing.xl,
    borderRadius: Radius.lg,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },

  form: {
    marginTop: Spacing.xl,
    gap: Spacing.lg,
  },

  actionsRow: {
    marginTop: Spacing.md,
    flexDirection: "row",
    gap: Spacing.md,
  },

  primaryButton: {
    flex: 1,
  },

  secondaryButton: {
    flex: 1,
  },
});

export default LoginScreen;
