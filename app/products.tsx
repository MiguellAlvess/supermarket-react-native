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
        <View style={{ flex: 1 }}>
          <Header
            title="Produtos"
            subtitle="Escolha seus itens favoritos do mercado."
            titleSize={22}
            subtitleSize={14}
          />
        </View>
        <View style={styles.headerButtons}>
          <PrimaryButton
            label="Ver carrinho"
            onPress={() => router.push("/cart")}
            style={styles.cartButton}
          />
          <PrimaryButton
            label="Sair"
            onPress={() => router.replace("/login")}
            variant="outline"
            style={styles.logoutButton}
          />
        </View>
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
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.sm,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: Spacing.sm,
  },

  headerButtons: {
    flexDirection: "column",
    gap: Spacing.xs,
    alignItems: "flex-end",
  },

  listContent: {
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.xl,
  },

  columnWrapper: {
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },

  cardWrapper: {
    flex: 1,
  },

  cartButton: {
    minWidth: 120,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    marginBottom: Spacing.xs,
  },
  logoutButton: {
    minWidth: 120,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
  },
});
export default ProductsScreen;
