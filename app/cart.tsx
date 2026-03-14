import { ScrollView, StyleSheet, Text, View } from "react-native";
import { EmptyState } from "../components/ui/empty-state";
import { Header } from "../components/ui/header";
import { PrimaryButton } from "../components/ui/primary-button";
import { Colors, FontSizes, Radius, Spacing } from "../constants/theme";
import { useToast } from "../context/toast-context";
import { useCart } from "../hooks/use-cart";
import { useColorScheme } from "../hooks/use-color-scheme";

const CartScreen = () => {
  const { cart, removeProduct, total } = useCart();
  const colorScheme = useColorScheme() ?? "light";
  const palette = Colors[colorScheme];
  const { showToast } = useToast();

  const groupedProducts: Record<
    number,
    { id: number; name: string; price: number; quantity: number }
  > = {};

  cart.forEach((product) => {
    const existingProduct = groupedProducts[product.id];

    if (!existingProduct) {
      groupedProducts[product.id] = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };

      return;
    }

    existingProduct.quantity += 1;
  });

  const productList = Object.values(groupedProducts);

  const handleRemoveSingleItem = (productId: number) => {
    removeProduct(productId);
    showToast("Item removido do carrinho.", "info");
  };

  const isEmpty = productList.length === 0;

  if (isEmpty) {
    return (
      <View style={[styles.container, { backgroundColor: palette.background }]}>
        <View style={styles.headerContainer}>
          <Header
            title="Seu carrinho"
            subtitle="Revise os itens antes de finalizar a compra."
          />
        </View>

        <View style={styles.emptyWrapper}>
          <EmptyState
            title="Carrinho vazio"
            description="Você ainda não adicionou nenhum produto. Volte para a lista e escolha seus itens favoritos."
          />
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <View style={styles.headerContainer}>
        <Header
          title="Seu carrinho"
          subtitle="Revise os itens antes de finalizar a compra."
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {productList.map((item) => (
          <View key={item.id} style={styles.productRow}>
            <View style={styles.productInfo}>
              <Text style={[styles.name, { color: palette.text }]}>
                {item.name}
              </Text>
              <Text style={[styles.detail, { color: palette.muted }]}>
                Quantidade: <Text style={styles.bold}>{item.quantity}</Text>
              </Text>
              <Text style={[styles.detail, { color: palette.muted }]}>
                Preço unitário:{" "}
                <Text style={styles.bold}>R$ {item.price.toFixed(2)}</Text>
              </Text>
              <Text style={[styles.itemTotal, { color: palette.text }]}>
                Total: R$ {(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>

            <PrimaryButton
              label="Remover 1"
              onPress={() => handleRemoveSingleItem(item.id)}
              variant="outline"
              style={styles.removeButton}
            />
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={[styles.totalLabel, { color: palette.muted }]}>
            Total da compra
          </Text>
          <Text style={[styles.totalValue, { color: palette.text }]}>
            R$ {total.toFixed(2)}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing["2xl"],
  },

  headerContainer: {
    marginBottom: Spacing.lg,
  },

  emptyWrapper: {
    flex: 1,
    justifyContent: "center",
  },

  scroll: {
    paddingBottom: Spacing["2xl"],
    gap: Spacing.md,
  },

  productRow: {
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderColor: "#E1E5ED",
    borderRadius: Radius.md,
    marginBottom: Spacing.sm,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productInfo: {
    flex: 1,
    marginRight: Spacing.md,
  },

  name: {
    fontSize: FontSizes.lg,
    fontWeight: "600",
    marginBottom: Spacing.xs,
  },

  detail: {
    fontSize: FontSizes.sm,
    marginBottom: 2,
  },

  bold: {
    fontWeight: "600",
  },

  itemTotal: {
    marginTop: Spacing.xs,
    fontSize: FontSizes.md,
    fontWeight: "600",
  },

  removeButton: {
    minWidth: 110,
  },

  footer: {
    marginTop: Spacing.lg,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: "#E1E5ED",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    fontSize: FontSizes.sm,
  },

  totalValue: {
    fontSize: FontSizes.xl,
    fontWeight: "700",
  },
});
