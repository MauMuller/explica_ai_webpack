<div align="center">
  <img src="https://user-images.githubusercontent.com/82516932/185523194-471d4bcd-9463-47eb-a896-d4774f161f07.svg" width="800">
</div>

<br><br>

![Preview](https://user-images.githubusercontent.com/82516932/185759115-243e5619-9fec-4fd3-b576-734775b57f4c.svg)

Hoje falaremos sobre **Webpack**, um assunto muito importante e daora de ser tratado entre os Dev's. Aqui, mostrarei o por que você deveria usar essa ferramenta e quais usos esse empacotador de arquivos pode ter no seu dia a dia. Vou deixar um resuminho também para você apenas pegar os arquivos prontos a aplicar no projeto, tamo junto 👍

![Topicos](https://user-images.githubusercontent.com/82516932/186565522-dce89059-ec52-4d0f-96f9-d804db6293ba.svg)

- **[Resumo](#resumo)**
- **[Artigo Completo](#artigo-completo)**
  - **[ES Modules](#es-modules)**
  - _Conceitos Fundamentais do Webpack_
    - **[Entry Point](#entry-point-\(ponto-de-entrada\))**
    - **[Output Point](#output-point-\(ponto-de-saida\))**
    - **[Loaders](#loaders)**
    - **[Plugins](#plugins)**
- **[Fontes](#fontes)**

<img id="resumo" src="https://user-images.githubusercontent.com/82516932/186561412-e82b73f2-b819-4b71-bbb0-f1473c9e344c.svg">

<br><br>

<img id="artigo-completo" src="https://user-images.githubusercontent.com/82516932/186561432-62d12540-895b-4a1d-917d-d502ad52fb69.svg">

O webpack é um **empacotador de módulos para javascript**, ou seja, ele junta arquivos JS ou outros formatos, assim como bibliotecas, frameworks, pré-processaores em um **único arquivo só**. Tudo isso com diferentes formas trabalhar **(Produção e Desenvolvimento)** e sem duplicar arquivos, tudo na ordem certa como o menor tamanho possível para o deploy.

No geral, essa ferramenta consegue fazer algumas coisas bem legais com arquivos que trabalhamos diariamente, porém, levando as **"boas práticas" a outro nível**. Aqui temos algumas coissas que é possível fazer:

- Javascript com: **ES6+, JSX, Typescript e Babel;**
- Outros formatos de arquivos como: **CSS, SASS, LESS, Styles Componentes, SVG, PNG, JPG** e outros...

Essa ferramenta funciona a partir de **"Módulos"**, para quem já está acostumado com ES6+ deve saber como funciona os **import/exports** porém para quem não sabe, vou fazer um overview abaixo.

- # ES Modules

  Os "Imports/Exports" funcionam para acessar determinadas funções, objetos, array, classes ou variaveis de outro arquivo. Ou seja, o "import" recebe a partir do diretório e o "export" envia.

  Aqui vou mostrar um pequeno exemplo do funcionamento:

  ```JS
    //PessoaFisica.js
    export default class PessoaFisica{
      constructor(nome, idade, trabalho){
        this.nome = nome;
        this.idade = idade;
        this.trabalho = trabalho;
      }
    }
  ```

  ```JS
    //index.js
    import PessoaFisica from "./models/PessoaFisica.js";

    const pessoaFisica = new PessoaFisica('José', 24, 'Programador');
  ```

  É possivel entender com o exemplo que a classe foi exportada para dentro do "index.js", isso é o que chamamos de módulo, lembrando que cada módulo possui seu próprio escopo.

- # Conceitos Fundamentais do Webpack

  No geral, essa ferramenta possui 4 conceitos fundamentais: **Entry Point, Output Point, Loaders e Plugins**.

  - ## Entry Point (Ponto de Entrada)

    <img src="https://user-images.githubusercontent.com/82516932/186042900-0b4d9134-e096-4374-94cb-11a60c3123e9.svg">

    Por aqui que o webpack irá interpretar quais serão os módulos que serão unificados, a partir de um arquivo inicial **(por padrão ele captura o "index.js")** é capturado todos os outros importados sucessivamente.

    É importante ressaltar que é possível ter vários arquivos como ponto de entrada assim como é possível trocar o nome de todos esses arquivos normalmente, o **index.js é apenas uma convenção**.

    ### EXEMPLO

    Primeiramente, é necessário instalar o webpack:

    ```SHELL
      npm init -y
    ```

    ```SHELL
      npm i -D webpack webpack-cli
    ```

    - **webpack**: se trata das dependencia do recurso;
    - **webpack-cli**: possibilidade de executar esse webpack por linha de comando.

    Agora vamos precisar criar um arquivo dentro do nosso repositório chamado **"webpack.config.js"**, nele que iremos adicionar todos os pontos de entrada, sáida, loaders e plugins o quanto for necessário.

    Além desse arquivo, ainda precisamos criar duas pastas dentro do nosso repositório. Elas representam o caminho padrão que o webpack captura quando não é configurado. São elas:

    - **src**: Local onde ficará todos os arquivos .js que iremos trabalhar
    - **dist**: Pasta onde ficará os arquivos de sáida, no caso, o main.js, style.css e outros. Aqui também que será a **refência** que iremos adicionar no **HEAD do HTML**.

    Dentro dessas pastas, precisamos criar dois arquivos respectivamente, sendo eles:

    - **index.js**: Esse se trata do arquivo principal dentro do nosso projeto, onde irá receber todos os módulos e será a **porta de entrada para o webpack**.
    - **js/main.js** ou **js/bundle.js**: Será o arquivo final que conterá todos o nossos módulos e codação em geral relizada a partir da pasta "src". Esse arquivo atualmente, **por conveção** é chamado de **main.js**, mas também é possivel ver ele com o nome de **bundle.js**.
      Importante ressaltar que a pasta **js/** é uma maneira que eu utilizo nos meus códigos, mas poderia muito bem ser direto no dist sem nenhuma outra pasta junto.

    #### OBS: o nome desses <u>arquivos/pastas</u> são uma convenção, não há obrigatoriedade deles serem nomeados assim.

    Agora podemos configurar o arquivo **webpack.config.js** (porém, se não configurassemos, ele iria usar os caminhos que criamos por padrão no projeto, o **"src/index.js"** e **"dist/main.js"**).

    ```JS
      //webpack.config.js
      module.exports = {
        entry: ['./src/index.js','./src/fazerAlgo.js'],
      };
    ```

    Aqui nesse exemplo podemos ver como é a sintaxe do arquivo de configuração do webpack, precisamos **exportar o módulo com o entry (ponto de entrada)**, nele passamos um array contendo todos os caminhos que o webpack vai iniciar sua unificação.

    Nesse exemplo usamos o **'./src/index.js'** e o **'./src/fazerAlgo.js'** para mostrar que é possível ter vários pontos de entrada, eles são arquivos que usamos quando precisamos que dois arquivos não tenham ligação. Mas nesse artigo, usaremos apenas o index.js.

    Com isso, finalizamos a parte do entry point...

    ***

    - ## Output Point (Ponto de Saida)

    <img src="https://user-images.githubusercontent.com/82516932/186043701-302e76c0-a13b-48b3-958c-5fbfe1ea2131.svg">

    Aqui ficará todo o código dos módulos importados, incluindo a trasnpilação com o babel e importação de apenas um tag no HTML para sua utilização.

    Por padrão, esse arquivo tem o nome de **"main.js"** como sáida, sendo esse um nome de convenção, porém, também é bastante utilizado o **"bundle.js"** como conveção.

    E assim como o Ponto de Entrada, a saída também pode ter vários arquivos dependendo da sua configuração, mas por padrão, gera apenas um.

    ### EXEMPLO

    Vamos continuar usando o exemplo anterior, agora, fazeremos a saída desses módulos, para isso, precisaremos **configurar o ponto de saída do webpack.**

    ```JS
      //webpack.config.js
      const path = require('path');

      module.exports = {
        entry: ['./src/index.js'],
        output: {
          filename: 'main.js',
          path: path.resolve(__dirname, 'dist');
        }
      };
    ```

    > Agora, criamos uma chave chamada output (ponto de saída), ela aceita basicamente duas outras chaves para declarar a sáida do arquivo. O **filename** e o **path**.
    >
    > **Filename:** se trata do nome que o arquivo terá, é importante lembrar que ele será a refêrencia dentro do HTML como arquivo unificado.
    >
    > **Path:** Trata-se do caminho absoluto até a pasta que desejamos, esse path faz o papel de direcionar ao webpack em qual pasta iremos querer a sáida do arquivo final.

    Com esse arquivo configurado, precisamos criar um outro arquivo, agora em HTML. Ele será nosso **index.html**, arquivo que terá a referência do nosso **main.js**.

    ```HTML
      <!-- index.html -->
      <!DOCTYPE html>
      <html lang="br-BR">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script defer src="./dist/js/main.js"></script>
          <title>TESTE</title>
        </head>
        <body></body>
      </html>
    ```

    Com a refência adicionada no HTML, agora podemos criar os script para finalmente rodar o webpack.

    #### OBS: é possível simplesmente com essas configurações usar o webpack da maneira mais básica possivel, nos próximos conceitos, iremos aprofundar mais na possibilidades da ferramenta.

    Agora vamos adicionar os scripts do webpack.

    ```JS
    //package.json
      "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build:dev": "webpack -w --mode development",
      "build:prod": "webpack --mode production"
    },
    ```

    > Dentro do nosso **package.json** vamos adicionar os scripts:
    >
    > - **build:dev**: Servirá como uma forma de usar o webpack apenas no ambiente de desenvolvimento, ou seja, será utilizado apenas quando estivermos realizando a manutenção, correção de bugs ou novas features.
    >     
    >    Nesse modo, o arquivo final não é minificado e apenas remove o que não é necessário, diminuindo um pouco o tamanho do arquivo, por isso é a opção de desenvolvimento.
    >   
    >   Sua sintaxe possui a **flag -w**, servindo como uma maneira de refazr o processo de build toda vez que atualizar o arquivo, parecido com o **Nodemon do NodeJS**.
    >   <br>
    > - **build:prod**: Será utilizado para upar o arquivo para a produção, ele irá gerar o arquivo completamente minificado, bem reduzido e com nome de váriaveis trocadas para otimizar a performace do software.

    Abaixo podemos ver como deveria ficar seu repositório até o momento. <br>

    <div align="center">
      <img src="https://user-images.githubusercontent.com/82516932/186559704-686165a8-bfef-4080-8b02-ff740499773f.png">
    </div>

    > **Não há problema nenhum se estiver um pouco diferente**, o importante é entender o que foi feito para chegarmos aqui.

    Agora só precisamos executar os scripts que colocamos no packeage.json e pronto.

    - Para desenvolver, executaremos: <br>

    ```SHELL
    npm run build:dev
    ```

    - E para fazer o deploy, executaremos: <br>

    ```SHELL
    npm run build:prod
    ```

    Finalizando assim, a parte do ponto de saída...

    ***

    - ## Loaders    

    <div align="center">
      <img src="https://user-images.githubusercontent.com/82516932/186047057-ade3f86a-eaa0-4d09-99a4-21a2f05e6d62.svg">
    </div>

    São **módulos instalados separadamente** do Webpack, como arquivos que não sejam Javascript. Isso acontece por que por padrão o webpack não entende nenhum arquivo que não seja .js, mas com esses plugins que é possível fazer isso.
    
    Esses loaders serão compilados e transformados em arquivos que o webpack entenda, realizando assim, a ideia inicial de poder unificar arquivos. No geral, eles trabalham juntamente com os plugins, gerando assim inumeras possíbilidades para o desenvolvimento da aplicação.

    No geral, podemos separar os loaders em subcategorias:

    - Arquivos (.jpg, .png...)
    - Transpiling (ES5, .jsx, .vue, .ts...)
    - Styling (.css, .scss...)
          
    ### EXEMPLO

    Usaremos os determinados loaders nesse exemplo:
    - Arquivos: <strong>"url-loader"</strong>, <strong>"file-loader"</strong>;
    - Transpiling: <strong>"babel-loader"</strong>;
    - Styling: **"style-loader"**, **"css-loader"**.

    <hr>

    - ## Plugins 

    <hr>

    <img id="fontes" src="https://user-images.githubusercontent.com/82516932/185760260-92710eef-ae41-449e-a023-9f10b6011b13.svg">

    - **Web Dev Drops:**
    <u>https://www.webdevdrops.com/webpack-sem-medo-parte-2-loaders-1d1239df3945/</u>
    
    - **Blog Fellyph:**
    <u>https://blog.fellyph.com.br/javascript/introducao-webpack-parte-2-loaders/</u>
