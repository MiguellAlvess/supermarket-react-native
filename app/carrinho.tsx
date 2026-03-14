import { View, Text, StyleSheet } from "react-native";
import { useCarrinho } from "../hooks/useCarrinho";

export default function Carrinho() {

  const { carrinho } = useCarrinho();

  const produtosAgrupados: any = {};

  carrinho.forEach((produto) => {

    if (!produtosAgrupados[produto.id]) {

      produtosAgrupados[produto.id] = {
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1
      };

    } else {

      produtosAgrupados[produto.id].quantidade += 1;

    }

  });

  const listaProdutos = Object.values(produtosAgrupados);

  const totalCompra = listaProdutos.reduce(
    (soma: number, item: any) => soma + item.preco * item.quantidade,
    0
  );

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>Carrinho</Text>

      {listaProdutos.map((item: any, index: number) => (

        <View key={index} style={styles.produto}>

          <Text style={styles.nome}>
            {item.nome}
          </Text>

          <Text>
            Quantidade: {item.quantidade}
          </Text>

          <Text>
            Total: R$ {item.preco * item.quantidade}
          </Text>

        </View>

      ))}

      <Text style={styles.total}>
        Total da Compra: R$ {totalCompra}
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  produto: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold"
  },

  total: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold"
  }

});