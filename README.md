# PageFlow

**PageFlow** é um aplicativo de desktop desenvolvido usando Electron, que permite a navegação em páginas da web dentro de uma janela personalizada. O aplicativo apresenta uma interface com controles de janela, um tema claro e escuro, e um iframe para exibir o conteúdo carregado. Este documento fornece uma visão geral do software, suas funcionalidades.

## Multiplataforma

Pode ser executado em diferentes sistemas operacionais, como **Windows**, **macOS** e **Linux**, sem a necessidade de modificar o código-fonte. Isso garante uma ampla acessibilidade e facilidade de uso para desenvolvedores e usuários em diversos ambientes, proporcionando uma experiência consistente em todas as plataformas.

## Funcionalidades

- **Controles de Janela Personalizados**: O aplicativo possui uma barra de controle no topo, que permite minimizar, maximizar e fechar a janela, semelhante a aplicações nativas.
- **Botão de Recarregar**: Ao lado dos botões de controle da janela, existe um botão dedicado para recarregar a página atual (semelhante ao atalho `Ctrl + R`), facilitando a atualização do conteúdo exibido sem precisar usar o teclado.
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


### Descrição dos Arquivos

- **/nav/**: Contém os arquivos relacionados à interface de usuário do aplicativo.
  - `nav.js`: Contém a lógica princial em JavaScript para os controles da janela e a alternância de tema.
  - `nav.html`: O HTML que define a estrutura da interface de usuário.
  - `nav.css`: O CSS que estiliza a interface do aplicativo.
  
- **/pack/**: Contém o arquivo HTML da página a ser exibida no iframe.
  - `index.html`: O conteúdo carregado dentro do iframe.

- **main.js**: O arquivo principal que inicia o aplicativo Electron e gerencia a janela principal.

- **preload.js**: Um script de pré-carregamento que expõe a API do Electron ao contexto da página.

- **package.json**: Contém as dependências do projeto e informações sobre o aplicativo.

# Atalhos

## Refresh (**Ctrl + R**)

- Permite que os desenvolvedores verifiquem rapidamente as mudanças feitas no código.
- Deve ser usado SEMPRE após alterar algo no código.

## DevTools (**Ctrl + Shift + I**)

O DevTools, ou Ferramentas de Desenvolvimento, é um conjunto de ferramentas integradas na maioria dos navegadores modernos que permite aos desenvolvedores web inspecionar, depurar e otimizar suas páginas da web. Um atalho comum para abrir o DevTools é pressionar  **Ctrl + Shift + I** (Windows/Linux) ou **Command + Option + I** (Mac).

#### Importância do DevTools:

1. **Inspeção de Elementos**:
   - Permite que os desenvolvedores vejam a estrutura HTML de uma página, editem elementos em tempo real e visualizem as alterações instantaneamente. Isso ajuda a entender como o DOM (Document Object Model) é construído e como diferentes elementos interagem entre si.

2. **Depuração de CSS**:
   - Com as ferramentas de CSS, os desenvolvedores podem visualizar e modificar estilos CSS diretamente. Isso é crucial para ajustar rapidamente o layout e a aparência visual de uma página sem a necessidade de editar o código-fonte e recarregar a página.

3. **Console de JavaScript**:
   - O console permite que os desenvolvedores executem comandos JavaScript, verifiquem erros e testem pequenos trechos de código. É uma ferramenta poderosa para debugging e experimentação.

4. **Monitoramento de Rede**:
   - A aba de rede ajuda a monitorar todas as requisições feitas pela página, permitindo que os desenvolvedores vejam o tempo de carregamento de cada recurso, a ordem em que são carregados e se há algum erro. Isso é essencial para otimização de desempenho.

5. **Performance**:
   - O DevTools fornece recursos para analisar o desempenho da página, incluindo o tempo de resposta do servidor, a renderização de elementos e a eficiência do código. Isso ajuda a identificar gargalos de desempenho e a melhorar a experiência do usuário.

6. **Depuração de Aplicativos Web**:
   - Para aplicativos web complexos, especialmente aqueles que utilizam frameworks como React ou Angular, as ferramentas de desenvolvimento permitem depurar o estado da aplicação e as interações do usuário, facilitando a identificação de problemas.

7. **Teste de Responsividade**:
   - Os desenvolvedores podem simular diferentes tamanhos de tela e dispositivos usando o DevTools, garantindo que a aplicação seja responsiva e ofereça uma boa experiência em dispositivos móveis.



## Instalação

Para instalar e executar o PageFlow, siga os passos abaixo:



1. **Certifique-se de ter o Node.js instalado no seu computador. Você pode baixá-lo em [nodejs.org](https://nodejs.org).**
    
2.  Instalação global do Electron :

     ```bash 
     npm install electron
     

3. **Instale o Módulo @electron/remote**
   ```bash
   npm install @electron/remote


   
4. **Clone o repositório**:

   ```bash
   git clone https://github.com/matheusfillipe-0/PageFlow.git
   

5. **Acesse o diretório do projeto**: 
   ```bash
   cd PageFlow <caminho da pasta clonada>


6. **Instale as dependências:**: 
   ```bash
   npm install

7. **Iniciar o app:**: 
   ```bash
   npm start
   

   
## No app :
 

Para utilizar o PageFlow como um renderizador de arquivos, siga estas etapas:

1. **Preparar seus Arquivos**: Crie ou obtenha os arquivos que deseja renderizar. Embora o aplicativo seja frequentemente utilizado para arquivos HTML e CSS, ele pode ler outros tipos de arquivos também, desde que haja um arquivo principal chamado `index.html`.

2. **Colocar os Arquivos na Pasta Correta**: Coloque todos os seus arquivos (HTML, CSS, ou qualquer outro tipo que você queira incluir) na pasta `pack` do repositório do PageFlow. O aplicativo irá procurar automaticamente por um arquivo chamado `index.html` nesta pasta para exibir o conteúdo no iframe apartir dele.

   
## Visual do PageFlow (EXEMPLO)

## Dark Mode :
<img src="https://i.postimg.cc/mZPryKng/black.png" width="600" />


## Light Mode :
<img src="https://i.postimg.cc/255Y8ZRS/white.png" width="600" />



