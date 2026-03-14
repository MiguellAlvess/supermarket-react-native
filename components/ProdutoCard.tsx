import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

type Produto = {
  id: number
  nome: string
  preco: number
  imagem: any
}

type Props = {
  produto: Produto
  adicionar: (produto: Produto) => void
}

export default function ProdutoCard({ produto, adicionar }: Props) {

  return (

    <View style={styles.card}>

      <Image
        source={produto.imagem}
        style={styles.imagem}
      />

      <Text style={styles.nome}>
        {produto.nome}
      </Text>

      <Text style={styles.preco}>
        R$ {produto.preco.toFixed(2)}
      </Text>

      <TouchableOpacity
        style={styles.botao}
        activeOpacity={0.6}
        onPress={() => adicionar(produto)}
      >
        <Text style={styles.textoBotao}>
          Adicionar ao Carrinho
        </Text>
      </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3
  },

  imagem: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },

  preco: {
    fontSize: 16,
    marginBottom: 10
  },

  botao: {
    backgroundColor: "#2ecc71",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center"
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold"
  }

})