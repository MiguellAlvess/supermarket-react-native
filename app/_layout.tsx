
import { Stack } from "expo-router";
import { CarrinhoProvider } from "../hooks/useCarrinho";

export default function Layout() {
  return (
    <CarrinhoProvider>
      <Stack screenOptions={{ headerShown: true }} />
    </CarrinhoProvider>
  );
}