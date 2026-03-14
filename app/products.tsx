import { router } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import ProductCard from "../components/product-card";
import { Header } from "../components/ui/header";
import { PrimaryButton } from "../components/ui/primary-button";
import { products } from "../constants/products";
import { Colors, Spacing } from "../constants/theme";
import { useToast } from "../context/toast-context";
import { useCart } from "../hooks/use-cart";
import { useColorScheme } from "../hooks/use-color-scheme";

const ProductsScreen = () => {
  const { addProduct } = useCart();
  const colorScheme = useColorScheme() ?? "light";
  const palette = Colors[colorScheme];
  const { showToast } = useToast();

  const handleAdd = (product: (typeof products)[number]) => {
    addProduct(product);
    showToast(`${product.name} foi adicionado ao carrinho.`, "success");
  };

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <View style={styles.headerContainer}>
        <Header
          title="Produtos"
          subtitle="Escolha seus itens favoritos do mercado."
        />

        <PrimaryButton
          label="Ver carrinho"
          onPress={() => router.push("/cart")}
          style={styles.cartButton}
        />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <ProductCard product={item} onAdd={handleAdd} />
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.md,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: Spacing.md,
  },

  listContent: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing["2xl"],
  },

  columnWrapper: {
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },

  cardWrapper: {
    flex: 1,
  },

  cartButton: {
    alignSelf: "flex-start",
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
});
export default ProductsScreen;
