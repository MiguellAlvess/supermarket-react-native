export interface Product {
  id: number
  name: string
  price: number
  image: any
}

export const products: Product[] = [
  {
    id: 1,
    name: "Arroz",
    price: 10,
    image: require("../assets/images/arroz.png")
  },
  {
    id: 2,
    name: "Feijão",
    price: 8,
    image: require("../assets/images/feijao.png")
  },
  {
    id: 3,
    name: "Leite",
    price: 6,
    image: require("../assets/images/leite.png")
  },
  {
    id: 4,
    name: "Café",
    price: 12,
    image: require("../assets/images/cafe.png")
  },
  {
    id: 5,
    name: "Macarrão",
    price: 5,
    image: require("../assets/images/macarrao.png")
  },
  {
    id: 6,
    name: "Açúcar",
    price: 4,
    image: require("../assets/images/acucar.png")
  }
]

