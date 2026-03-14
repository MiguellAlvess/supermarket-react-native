import { View, TextInput, Button, StyleSheet } from "react-native"
import { useState } from "react"
import { router } from "expo-router"

export default function Login() {

  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")

  function entrar() {

    if (nome && senha) {
      router.replace("/produtos")
    } else {
      alert("Preencha os campos")
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

     <div className="space-x-2 flex items-center">
       <Button
        title="Entrar"
        onPress={entrar}
      />

      <Button
        title="Cadastrar"
        onPress={() => router.push("/cadastro")}
      />
     </div>

    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  }

})