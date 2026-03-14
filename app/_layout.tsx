import { Stack } from "expo-router";
import { ToastProvider } from "../context/toast-context";
import { CartProvider } from "../hooks/use-cart";

const Layout = () => {
  return (
    <CartProvider>
      <ToastProvider>
        <Stack
          screenOptions={{
            headerShown: true,
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen name="login" options={{ title: "Login" }} />
          <Stack.Screen name="register" options={{ title: "Cadastro" }} />
          <Stack.Screen name="products" options={{ title: "Produtos" }} />
          <Stack.Screen name="cart" options={{ title: "Carrinho" }} />
          {/* Tabs and other routes keep their default titles */}
        </Stack>
      </ToastProvider>
    </CartProvider>
  );
};

export default Layout;
