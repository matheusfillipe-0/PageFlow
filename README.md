# PageFlow

**PageFlow** é um aplicativo de desktop desenvolvido usando Electron, que permite a navegação em páginas da web dentro de uma janela personalizada. O aplicativo apresenta uma interface com controles de janela, um tema claro e escuro, e um iframe para exibir o conteúdo carregado. Este documento fornece uma visão geral do software, suas funcionalidades e referências de código.

## Funcionalidades

- **Controles de Janela Personalizados**: O aplicativo possui uma barra de controle no topo, que permite minimizar, maximizar e fechar a janela, semelhante a aplicações nativas.
- **Alternância de Tema**: O usuário pode alternar entre o tema claro e escuro para personalizar a aparência do aplicativo.
- **Iframe**: O conteúdo das páginas da web é carregado em um iframe, permitindo que os usuários naveguem sem sair do aplicativo.
- **Interface Intuitiva**: A interface do usuário é limpa e fácil de usar, com um design inspirado em aplicativos do macOS.

## Estrutura do Repositório

A estrutura do repositório é a seguinte:

PageFlow/  
├── nav/  
│   ├── nav.js  
│   ├── nav.html  
│   └── nav.css  
├── pack/  
│   └── index.html  
├── main.js  
├── preload.js  
└── package.json  


markdown
Copiar código

### Descrição dos Arquivos

- **/nav/**: Contém os arquivos relacionados à interface de usuário do aplicativo.
  - `nav.js`: Contém a lógica para os controles da janela e a alternância de tema.
  - `nav.html`: O HTML que define a estrutura da interface de usuário.
  - `nav.css`: O CSS que estiliza a interface do aplicativo.
  
- **/pack/**: Contém o arquivo HTML da página a ser exibida no iframe.
  - `index.html`: O conteúdo carregado dentro do iframe.

- **main.js**: O arquivo principal que inicia o aplicativo Electron e gerencia a janela principal.

- **preload.js**: Um script de pré-carregamento que expõe a API do Electron ao contexto da página.

- **package.json**: Contém as dependências do projeto e informações sobre o aplicativo.

## Instalação

Para instalar e executar o PageFlow, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone  
   

2. **Acesse o diretório do projeto**: 
   ```bash
   cd PageFlow


2. **Instale as dependências:**: 
   ```bash
   npm install

2. **Iniciar o app:**: 
   ```bash
   npm start
   
   
## Uso:

Para utilizar o PageFlow como um renderizador de arquivos, siga estas etapas:

1. **Preparar seus Arquivos**: Crie ou obtenha os arquivos que deseja renderizar. Embora o aplicativo seja frequentemente utilizado para arquivos HTML e CSS, ele pode ler outros tipos de arquivos também, desde que haja um arquivo principal chamado `index.html`.

2. **Colocar os Arquivos na Pasta Correta**: Coloque todos os seus arquivos (HTML, CSS, ou qualquer outro tipo que você queira incluir) na pasta `pack` do repositório do PageFlow. O aplicativo irá procurar automaticamente por um arquivo chamado `index.html` nesta pasta para exibir o conteúdo no iframe apartir dele.


