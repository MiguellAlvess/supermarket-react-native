import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Cadastro() {

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  function salvar() {

    if (nome && senha) {
      alert("Usuário cadastrado!");
      router.replace("/login");
    } else {
      alert("Preencha todos os campos");
    }

  }

  return (

    <View style={styles.container}>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button
        title="Salvar"
        onPress={salvar}
      />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff"
  }

});