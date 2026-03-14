export interface Produto {
  id: number
  nome: string
  preco: number
  imagem: any
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Arroz",
    preco: 10,
    imagem: require("../assets/images/arroz.png")
  },
  {
    id: 2,
    nome: "Feijão",
    preco: 8,
    imagem: require("../assets/images/feijao.png")
  },
  {
    id: 3,
    nome: "Leite",
    preco: 6,
    imagem: require("../assets/images/leite.png")
  },
  {
    id: 4,
    nome: "Café",
    preco: 12,
    imagem: require("../assets/images/cafe.png")
  },
  {
    id: 5,
    nome: "Macarrão",
    preco: 5,
    imagem: require("../assets/images/macarrao.png")
  },
  {
    id: 6,
    nome: "Açúcar",
    preco: 4,
    imagem: require("../assets/images/acucar.png")
  }
]
