import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {

  function irLogin() {
    router.push("/login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Supermercado</Text>

      <Button
        title="Ir para Login"
        onPress={irLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20
  }

});