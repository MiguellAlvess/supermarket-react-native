import React, { createContext, useContext, useState, ReactNode } from "react"
import { Product } from "../constants/products"

interface CartContextData {
  cart: Product[]
  addProduct: (product: Product) => void
  removeProduct: (productId: number) => void
  total: number
}

const CartContext = createContext<CartContextData | undefined>(undefined)

interface ProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: ProviderProps) => {
  const [cart, setCart] = useState<Product[]>([])

  const addProduct = (product: Product) => {
    setCart((previousCart) => [...previousCart, product])
  }

  const removeProduct = (productId: number) => {
    setCart((previousCart) => {
      const index = previousCart.findIndex((item) => item.id === productId)

      if (index === -1) {
        return previousCart
      }

      const copy = [...previousCart]
      copy.splice(index, 1)

      return copy
    })
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }

  return context
}

