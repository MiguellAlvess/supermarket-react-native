import { View, ScrollView, Button, StyleSheet } from "react-native"
import { router } from "expo-router"
import { produtos } from "../constants/produtos"
import ProdutoCard from "../components/ProdutoCard"
import { useCarrinho } from "../hooks/useCarrinho"

export default function Produtos() {

  const { adicionarProduto } = useCarrinho()

  return (

    <View style={styles.container}>

      <Button
        title="Ir para Carrinho"
        onPress={() => router.push("/carrinho")}
      />

      <ScrollView contentContainerStyle={styles.scroll}>

        {produtos.map((produto) => (

          <ProdutoCard
            key={produto.id}
            produto={produto}
            adicionar={adicionarProduto}
          />

        ))}

      </ScrollView>

    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  scroll: {
    padding: 10
  }

})