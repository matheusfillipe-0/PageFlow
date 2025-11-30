# PageFlow

**PageFlow** PageFlow é uma aplicação desktop desenvolvida em Electron, projetada para transformar qualquer conteúdo web em um software real, moderno e totalmente personalizável.

Mais do que um simples navegador interno, o PageFlow funciona como um renderizador universal: ele abre páginas web — tanto hospedadas online quanto arquivos locais — dentro de uma janela desktop elegante, com tema claro/escuro, controles próprios, barra de navegação personalizada e ambiente isolado do navegador comum.

Seu diferencial está na capacidade de gerar um executável (.exe) contendo exatamente o conteúdo que você quiser. Basta colocar seus arquivos na pasta pack e, com um único comando, você produz um programa portátil, profissional e independente que roda em Windowns , Mac , ou Linux , sem precisar de navegador, servidor ou instalação adicional.
O resultado é um software pronto para uso, que carrega a interface que você criou, protege seu conteúdo, oferece navegação privada e facilita a integração com IA e automações avançadas, permitindo que esses recursos acessem arquivos, dados e sistemas internos da máquina com muito mais segurança e liberdade do que em um navegador comum.
 
## Visual do PageFlow (EXEMPLO)

## Dark Mode :
<img src="https://i.postimg.cc/mZPryKng/black.png" width="600" />


## Light Mode :
<img src="https://i.postimg.cc/255Y8ZRS/hite.png" width="600" />


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


## Instalação (windows)

Para instalar e executar o PageFlow, siga os passos abaixo:



1. **Certifique-se de ter o Node.js instalado no seu computador. Você pode baixá-lo em [nodejs.org](https://nodejs.org).**
    
2.  Instalação global do Electron :

     ```bash 
     npm install -g electron
     

3. **Instale o Módulo @electron/remote**
   ```bash
   npm install @electron/remote


   
4. **Clone o repositório**:

   ```bash
   git clone https://github.com/matheusfillipe-0/PageFlow.git
   

5. **Acesse o diretório do projeto**: 
   ```bash
   cd <caminho da pasta clonada>


6. **Instale as dependências:**
   ```bash
   npm install

7. **Iniciar o app:**
   ```bash
   npm start

   
## No app:

Para utilizar o PageFlow como um renderizador de arquivos ou como um carregador de sites hospedados, siga estas etapas:

Preparar seus Arquivos
Crie ou organize os arquivos que deseja exibir no aplicativo.
Normalmente utiliza-se HTML, CSS e JavaScript, mas qualquer conteúdo web pode ser carregado — desde que exista um arquivo principal chamado index.html.

**Colocar os Arquivos na Pasta Correta**
Coloque seus arquivos dentro da pasta pack.
Por padrão, o PageFlow procura automaticamente pelo arquivo index.html nessa pasta e renderiza esse conteúdo dentro do iframe na inicialização.

Escolher o que será exibido primeiro

Você pode manter o index.html local, configurando-o como a tela inicial do seu sistema.

Ou, se preferir, pode alterar o conteúdo do iframe no nav.html para carregar um link externo hospedado, como:

- Seu site online

- Sua API com interface

- Seu painel hospedado

- Um sistema rodando em localhost (para uso interno)

Isso permite que o PageFlow funcione tanto como um aplicativo offline (usando arquivos locais) quanto como um navegador dedicado para soluções hospedadas, mantendo o visual personalizado, ambiente fechado e segurança do aplicativo desktop.


## Gerando o Executável (.exe)

Uma das maiores vantagens do PageFlow é a possibilidade de transformar todo o conteúdo configurado dentro do aplicativo — seja um sistema local ou uma página hospedada — em um executável (.exe) totalmente independente.
Isso permite distribuir seu projeto como um software real, pronto para rodar em qualquer computador , sem necessidade de instalar dependências, abrir navegador ou configurar servidor.

Para gerar o executável, utilize o comando abaixo no terminal, dentro da pasta do projeto:

    ``` 
     npx electron-packager . "Nome_do_sistema" --platform=win32 --arch=x64 --icon=assets/icon.ico --overwrite
   
     
Isso gera :
    
    ``` 
    Nome_do_sistema-win32-x64/
    

Dentro a pasta é gerado o aplicativo final, o arquivo 'Nome_do_sistema.exe', que já pode ser usado, enviado ou instalado em outras máquinas.


   





