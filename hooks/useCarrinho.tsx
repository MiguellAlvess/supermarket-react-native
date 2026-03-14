import React, { createContext, useContext, useState, ReactNode } from "react"
import { Produto } from "../constants/produtos"

interface CarrinhoContextData {
  carrinho: Produto[]
  adicionarProduto: (produto: Produto) => void
  total: number
}

const CarrinhoContext = createContext<CarrinhoContextData | undefined>(undefined)

interface ProviderProps {
  children: ReactNode
}

export function CarrinhoProvider({ children }: ProviderProps) {

  const [carrinho, setCarrinho] = useState<Produto[]>([])

  function adicionarProduto(produto: Produto) {
    setCarrinho((prev) => [...prev, produto])
  }

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0)

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarProduto,
        total
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}

export function useCarrinho() {

  const context = useContext(CarrinhoContext)

  if (!context) {
    throw new Error("useCarrinho precisa estar dentro de CarrinhoProvider")
  }

  return context
}