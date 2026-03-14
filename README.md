## Supermarket React Native

Aplicação mobile construída com React Native e Expo que simula o fluxo de compras em um supermercado, incluindo autenticação fictícia, listagem de produtos e carrinho de compras.

### Objetivo do projeto

O objetivo deste projeto é servir como um protótipo frontend para um aplicativo de supermercado, demonstrando:

- **Fluxo básico de autenticação de usuário** (login e cadastro, apenas para fins visuais).
- **Listagem de produtos** com imagem, nome e preço.
- **Adição de produtos ao carrinho** a partir da lista.
- **Visualização do carrinho** com itens agrupados, quantidade e total da compra.

Não há qualquer integração com backend ou persistência real de dados.

### Funcionalidades implementadas

- **Tela de Login**
  - Entrada de nome e senha.
  - Navegação para cadastro.
  - Navegação para a tela de produtos após login.
  - Feedback visual via toast em caso de sucesso.

- **Tela de Cadastro**
  - Formulário com nome, senha e confirmação de senha.
  - Retorno para a tela de login após “salvar”.

- **Tela de Produtos**
  - Exibição de uma lista de produtos estáticos com:
    - imagem
    - nome
    - preço
  - Botão para adicionar produto ao carrinho.
  - Botão para navegar para a tela de carrinho.
  - Toasts informando quando um produto é adicionado ao carrinho.

- **Tela de Carrinho**
  - Exibição dos produtos adicionados ao carrinho, agrupados por item.
  - Exibição de:
    - nome do produto
    - quantidade
    - preço unitário
    - total por item
    - total geral da compra
  - Botão para remover uma unidade de cada produto.
  - Estado vazio com mensagem amigável quando não há itens.

- **Toasts de feedback**
  - Sucesso ao realizar login.
  - Sucesso ao adicionar produto ao carrinho.
  - Mensagem informando remoção de item do carrinho.

### Telas do sistema

- **Login**
  - Campos de nome e senha.
  - Botões de “Entrar” e “Cadastrar”.

- **Cadastro**
  - Campos de nome, senha e confirmação de senha.
  - Botão de “Salvar”, retornando ao login.

- **Produtos**
  - Lista de produtos com card moderno (imagem, título, preço e botão de ação).
  - Botão no topo para acessar o carrinho.

- **Carrinho**
  - Lista de itens agrupados com quantidade e totais.
  - Botão para remover uma unidade de cada item.
  - Exibição do total geral da compra.
  - Estado de “carrinho vazio” com mensagem explicativa.

### Tecnologias utilizadas

- **React Native** (Expo)
- **Expo Router** para navegação baseada em arquivos
- **TypeScript**
- **Context API + Hooks** para gerenciamento de estado do carrinho e toasts

### Como instalar o projeto

1. Certifique-se de ter **Node.js** e **npm** instalados.
2. Clone este repositório:

   ```bash
   git clone <URL-DO-REPOSITORIO>
   cd supermarket-react-native
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

### Como rodar o projeto

1. Inicie o servidor de desenvolvimento do Expo:

   ```bash
   npx expo start
   ```

2. Você pode abrir o app de diferentes formas:

- **Dispositivo físico**: usando o aplicativo Expo Go (Android/iOS) e escaneando o QR Code.
- **Emulador Android**: via Android Studio.
- **Simulador iOS**: via Xcode (apenas em macOS).

### Como usar a aplicação

- **Login**
  - Preencha o nome e a senha com qualquer valor.
  - Toque em “Entrar” para ir para a tela de produtos.
  - Use “Cadastrar” caso queira navegar para o formulário de cadastro.

- **Cadastro**
  - Preencha os campos de nome, senha e confirmação de senha.
  - Toque em “Salvar” para retornar à tela de login.
  - Não há validação real de dados ou persistência: é apenas simulação visual.

- **Produtos**
  - Navegue pela lista de produtos.
  - Toque em “Adicionar ao carrinho” para incluir um item.
  - Use o botão “Ver carrinho” para ir para a tela de carrinho.

- **Carrinho**
  - Visualize os itens adicionados, quantidades e totais.
  - Use o botão “Remover 1” para remover uma unidade de um produto.
  - Quando todos os itens forem removidos, a tela exibirá o estado de carrinho vazio.

### Estrutura de pastas (simplificada)

```text
app/
  _layout.tsx        # Layout principal com providers
  login.tsx          # Tela de Login
  register.tsx       # Tela de Cadastro
  products.tsx       # Tela de Produtos
  cart.tsx           # Tela de Carrinho

components/
  product-card.tsx   # Card de produto
  ui/
    Header.tsx
    primary-button.tsx
    text-input-field.tsx
    empty-state.tsx
    loader.tsx

constants/
  products.ts        # Lista estática de produtos
  theme.ts           # Tema (cores, espaçamentos, tipografia)

context/
  toast-context.tsx  # Contexto para gerenciamento de toasts

hooks/
  useCart.tsx             # Contexto e hook do carrinho
  use-color-scheme.ts     # Detecção de tema claro/escuro
  use-theme-color.ts      # Utilitário de cores por tema
```

### Observações importantes

- **Somente frontend**: este projeto não possui backend, banco de dados ou autenticação real.
- **Dados simulados**: a lista de produtos é fixa e definida em código.
- **Sem persistência**: ao fechar o app, o carrinho e demais estados são perdidos.
- **Projeto acadêmico**: o código foi organizado para servir de exemplo em contexto universitário, com foco em:
  - boas práticas de organização de pastas
  - componentização
  - uso de contexto e hooks
  - design moderno e consistente para um app de compras
