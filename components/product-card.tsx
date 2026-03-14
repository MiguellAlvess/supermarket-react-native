import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { Colors, Radius, Spacing, FontSizes } from "../constants/theme"

type Product = {
  id: number
  name: string
  price: number
  image: any
}

type ProductCardProps = {
  product: Product
  onAdd: (product: Product) => void
}

const ProductCard = ({ product, onAdd }: ProductCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={product.image} style={styles.image} />
      </View>

      <Text numberOfLines={2} style={styles.name}>
        {product.name}
      </Text>

      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => onAdd(product)}
      >
        <Text style={styles.buttonLabel}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.light.surface,
    padding: Spacing.md,
    borderRadius: Radius.lg,
    alignItems: "stretch",
    shadowColor: "#000000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacing.sm
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: Radius.md
  },
  name: {
    fontSize: FontSizes.sm,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: Spacing.xs
  },
  price: {
    fontSize: FontSizes.md,
    fontWeight: "600",
    color: Colors.light.primary,
    marginBottom: Spacing.sm
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.pill,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonLabel: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: FontSizes.xs,
    textTransform: "uppercase"
  }
})
export default ProductCard