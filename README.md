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
    - **[Entry Point](#entry-point-ponto-de-entrada)**
    - **[Output Point](#output-point-ponto-de-saida)**
    - **[Loaders](#loaders)**
      - **[Babel-loader](#babel-loader-)**
      - **[Css-loader e Style-loader](#css-loader-e-style-loader-)**
    - **[Plugins](#plugins)**
      - **[Mini-Css-Extract-Plugin](#mini-css-extract-plugin-)**
- **[Fontes](#fontes)**

<img id="resumo" src="https://user-images.githubusercontent.com/82516932/186561412-e82b73f2-b819-4b71-bbb0-f1473c9e344c.svg">

No resumo, irei colocar apenas os arquivos já configurados para agilizar a sua vida caso já tenha lido o artigo ou deseja apenas testar o webpack.

#### Instalação geral

```SHEEL
npm i -D webpack webpack-cli @babel/core @babel/preset-env babel-loader css-loader style-loader mini-css-extract-plugin
```

#### Configurações

```JS
  //packeage.json

  {
    "name": "testewebpack",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build:dev": "webpack -w --mode development",
      "build:prod": "webpack --mode production"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "@babel/core": "^7.18.13",
      "@babel/preset-env": "^7.18.10",
      "babel-loader": "^8.2.5",
      "core-js": "^3.25.0",
      "css-loader": "^6.7.1",
      "mini-css-extract-plugin": "^2.6.1",
      "style-loader": "^3.3.1",
      "webpack": "^5.74.0",
      "webpack-cli": "^4.10.0"
    }
  }
```

```JS
  //webpack.config.js

  const path = require('path');
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  module.exports = {
    entry: ["./src/index.js"],
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/js')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-env'],
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader','css-loader']
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "../css/style.css"
      })
    ]
  };
```

```JS
  //babel.config.js

  module.exports = {
    presets: ['@babel/preset-env']
  }
```

#### Arquivos

```JS
  //index.js

  import './css/style.css';
```

Lembrando que essas configurações são referentes aos exemplos que fizemos, isso deverá ser adaptado para os arquivos do seu projeto.

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

    <br>

    Agora vamos precisar criar um arquivo dentro do nosso repositório chamado **"webpack.config.js"**, nele que iremos adicionar todos os pontos de entrada, sáida, loaders e plugins o quanto for necessário.

    <br>

    Além desse arquivo, ainda precisamos criar duas pastas dentro do nosso repositório. Elas representam o caminho padrão que o webpack captura quando não é configurado. São elas:

    - **src**: Local onde ficará todos os arquivos .js que iremos trabalhar
    - **dist**: Pasta onde ficará os arquivos de sáida, no caso, o main.js, style.css e outros. Aqui também que será a **refência** que iremos adicionar no **HEAD do HTML**.

    <br>

    Dentro dessas pastas, precisamos criar dois arquivos respectivamente, sendo eles:

    - **index.js**: Esse se trata do arquivo principal dentro do nosso projeto, onde irá receber todos os módulos e será a **porta de entrada para o webpack**.
    - **js/main.js** ou **js/bundle.js**: Será o arquivo final que conterá todos o nossos módulos e codação em geral relizada a partir da pasta "src". Esse arquivo atualmente, **por conveção** é chamado de **main.js**, mas também é possivel ver ele com o nome de **bundle.js**.
      Importante ressaltar que a pasta **js/** é uma maneira que eu utilizo nos meus códigos, mas poderia muito bem ser direto no dist sem nenhuma outra pasta junto.

    #### OBS: o nome desses <u>arquivos/pastas</u> são uma convenção, não há obrigatoriedade deles serem nomeados assim.

    Agora podemos configurar o arquivo **webpack.config.js** (porém, se não configurassemos, ele iria usar os caminhos que criamos por padrão no projeto, o **"src/index.js"** e **"dist/main.js"**).

    <br>

    ```JS
      //webpack.config.js
      module.exports = {
        entry: ['./src/index.js','./src/fazerAlgo.js'],
      };
    ```

    Aqui nesse exemplo podemos ver como é a sintaxe do arquivo de configuração do webpack, precisamos **exportar o módulo com o entry (ponto de entrada)**, nele passamos um array contendo todos os caminhos que o webpack vai iniciar sua unificação.

    <br>

    Nesse exemplo usamos o **'./src/index.js'** e o **'./src/fazerAlgo.js'** para mostrar que é possível ter vários pontos de entrada, eles são arquivos que usamos quando precisamos que dois arquivos não tenham ligação. Mas nesse artigo, usaremos apenas o index.js.

    <br>

    Com isso, finalizamos a parte do entry point...

    ***

    - ## Output Point (Ponto de Saida)

    <img src="https://user-images.githubusercontent.com/82516932/186043701-302e76c0-a13b-48b3-958c-5fbfe1ea2131.svg">

    Aqui ficará todo o código dos módulos importados, incluindo a trasnpilação com o babel e importação de apenas um tag no HTML para sua utilização.

    <br>

    Por padrão, esse arquivo tem o nome de **"main.js"** como sáida, sendo esse um nome de convenção, porém, também é bastante utilizado o **"bundle.js"** como conveção.

    <br>

    E assim como o Ponto de Entrada, a saída também pode ter vários arquivos dependendo da sua configuração, mas por padrão, gera apenas um.

    ### EXEMPLO

    Vamos continuar usando o exemplo anterior, agora, fazeremos a saída desses módulos, para isso, precisaremos **configurar o ponto de saída do webpack.**

    <br>

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

    <br>

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
    >   Nesse modo, o arquivo final não é minificado e apenas remove o que não é necessário, diminuindo um pouco o tamanho do arquivo, por isso é a opção de desenvolvimento.
    >
    >   Sua sintaxe possui a **flag -w**, servindo como uma maneira de refazr o processo de build toda vez que atualizar o arquivo, parecido com o **Nodemon do NodeJS**.
    >   <br>
    >
    > - **build:prod**: Será utilizado para upar o arquivo para a produção, ele irá gerar o arquivo completamente minificado, bem reduzido e com nome de váriaveis trocadas para otimizar a performace do software.

    Abaixo podemos ver como deveria ficar seu repositório até o momento. <br>

    <div align="center">
      <img src="https://user-images.githubusercontent.com/82516932/186559704-686165a8-bfef-4080-8b02-ff740499773f.png">
    </div>

    > **Não há problema nenhum se estiver um pouco diferente**, o importante é entender o que foi feito para chegarmos aqui.

    <br>

    Agora só precisamos executar os scripts que colocamos no packeage.json e pronto.

    <br>

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

    <br>

    Esses loaders serão compilados e transformados em arquivos que o webpack entenda, realizando assim, a ideia inicial de poder unificar arquivos. No geral, eles trabalham juntamente com os plugins, gerando assim inumeras possíbilidades para o desenvolvimento da aplicação.

    No geral, podemos separar os loaders em subcategorias:

    - Arquivos (.jpg, .png...)
    - Transpiling (ES5, .jsx, .vue, .ts...)
    - Styling (.css, .scss...)

    Agora vamos entrar em alguns exemplos das quais iremos mostrar.

    Usaremos os determinados loaders nesse exemplo:

    - Arquivos: <strong>"url-loader"</strong>, <strong>"file-loader"</strong>;
    - Transpiling: <strong>"babel-loader"</strong>;
    - Styling: **"style-loader"**, **"css-loader"**.

    Então, vamos começar com o nossos loaders, primeiro, vamos começar com o **Babel**.

    ### Babel-loader 👍

    Ele é responsavel por converter nosso código ES6+ em ES5, sendo útil quando algum recurso não é suportado pelo browser.

    Primeiro, devemos fazer sua instalação:

    ```SHELL
    npm i -D @babel/core @babel/preset-env babel-loader
    ```

    > Leve resumo do que se trata cada um deles:
    >
    > - **@babel/core**: se trata do Babel em si;
    > - **@babel/preset-env**: é um plugin necessário para que o babel faça essa transpilação para ES5, pois ele sozinho, não tem essa capacidade;
    > - **babel-loader**: serve para ser usado como loader do webpack, ou seja, dois dois em conjunto;

    Depois de instalado, necessitamos criar um arquivo na raiz do nosso prjeto chamado **babel.config.js**, ele será necessário para incluirmos o plugin de transpilação que acabos de instalar.

    ```JS
    //babel.config.js

    modules.exports = {
      presets: ['@babel/preset-env']
    }
    ```

    Com isso, precisamos agora configurar o loader dentro do arquivo do webapack, para que toda vez que seja compilado o bundle, sejá transpilado para ES5.

    ```JS
    //webpack.config.js

    const path = require('path');

    module.exports = {
      entry: ["./src/index.js"],
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/js')
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env']
              }
            }
          },
        ]
      }
    };
    ```

    Nesse arquivo podemos ver que o **entry** e o **output**, foram os que já fizemos nos exemplos anteriores, só estamos reaproveitando eles aqui. Porém agora temos um novo item, o **module**.

    Dentro do **module** que configuramos nossos loaders e dentro dele podemos ter várias **rules (regras) diferentes para cada loader**.

    > Dentro do nosso _rules_, temos três itens importantes de serem comentados.
    >
    > - **test**: serve para fazer um teste em todos os arquivos, aqui colocamos um RegExp procurando por todos os arquivos com ".js" no final.
    > - **exclude**: Já aqui, estamos excluindo a pasta node_modules pois não queremos que ela seja renderizada.
    > - **use**: E aqui sim estamos utilizando o loader.

    Por fim, nosso arquivo deverá ficar parecido com isso

    <div align="center">
      <img src="https://user-images.githubusercontent.com/82516932/187085465-3684d128-ef08-471a-b31b-2a00df7d54f3.png" alt="Imagem exemplo">
    </div>

    E agora basta executar os nossos comandos de **build** e pronto, ES6+ convertido para ES5.

    ### Css-loader e Style-loader 👍

    Assim como eu já havia comentado, é possivel conveter outros formatos de arquivo em JS para que o webpack possa entender. E nesse caso, vamos utilizar o **style-loader** e o **css-loader**.

    Primeiro vamos instalar ambos:

    ```SHELL
    npm i -D css-loader style-loader
    ```

    Mais a fundo de cada um deles:

    > - **css-loader**: Lê o arquivo CSS e armazena em uma variavel em forma de string.
    > - **style-loader**: injeta essa variavel dentro do html da página usando a tag _style_.

    Agora, devemos configurar o mesmo dentro do **webpack.config.js**.

    ```js
    //webpack.config.js

    const path = require("path");

    module.exports = {
      entry: ["./src/index.js"],
      output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist/js"),
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: ["@babel/preset-env"],
              },
            },
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    };
    ```

    Usamos o exemplo anterior do babel e também, do css agora com esse novo **teste** e o **use**. Isso vai se aplicar para todos loader que quiser adicionar.

    <br>

    Agora vamos precisar gerar o **bundle** do arquivo.

    Para isso, precisaremos de um arquivo css para fazermos o teste.

    ```CSS
    /* css/style.css */

    body{
      background-color: #FF0000; /* RED */
    }
    ```

    Agora precisamos apenas importar esse arquivo para dentro do nosso index.js e pronto, basta executar nossos comandos de **build** que o css estará incluido na pagina.

    ```JS
    //index.js

    import './css/style.css';
    ```

    > OBS: Com esse loader, o css fica dentro do body, mas o ideal era usar ele como um arquivo externo, por isso, precisaremos de um _plugin_ para manter ele em um outro arquivo.
    >
    > Vamos falar sobre ele no próximo exemplo.

    <hr>

    - ## Plugins

    <div align="center">
      <img src="https://user-images.githubusercontent.com/82516932/187091949-3891be58-287f-4a67-8c2e-f642129ab209.png">
    </div>

    Plugins expõe pontos específicos do empacotamento, ou seja, alteram alguma parte do processo do webpack, adicionando ou altereando alguma tarefa.

    Agora que entendemos um pouco do funcionamento, vamos a um exemplo disso.

    ### Mini-Css-Extract-Plugin 👍

    Agora vamos utilizar um plugin bem legal que já comentei no assunto anterior. Vamos utilizar o **mini-CSS-extract-plugin**

    ele fará a extração do css para arquivos separados.

    Vamos fazer a instalação entao:

    ```SHELL
    npm i -D mini-css-extract-plugin
    ```

    E agora vamos configurar dentro do webapack:

    ```JS
    //webpack.config.js

    const path = require('path');

    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    module.exports = {
      entry: ["./src/index.js"],
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/js')
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ]
      },

      plugins: [
        new MiniCssExtractPlugin({
          filename: "../css/style.css"
        })
      ]
    };
    ```

    > Percebe que agora além de adicionar um loader, criamos uma chave chamada plugins contendo a classe **MiniCssExtractPlugins**?
    >
    > Exatamente, essa é uma das partes do plugin, onde, dentro do objeto, devemos colocar o nome do arquivo que conterá o css que iremos utilizar no projeto.
    >
    > Já no **test** temos a caotura do arquivos css e a utilização do plugin juntamente com o css-loader que utilizamos.

    Agora, basta estar com o css importado no **index.js** e rodar a aplicação que o css estará completamente separado.

    #### Porém, existem diversos plugins...

    Devemos ter em mente que existem inumeras possibilidades, nesse exemplo, mostrei apenas uma delas e a que eu mais curto de usar.

    Mas, por fim, terminamos o webpack, finalizando assim todos os conceitos!

    Até um próximo artigo, valeu 😎.
    <hr>

    <img id="fontes" src="https://user-images.githubusercontent.com/82516932/185760260-92710eef-ae41-449e-a023-9f10b6011b13.svg">

    - **Web Dev Drops:**
      <u>https://www.webdevdrops.com/webpack-sem-medo-parte-2-loaders-1d1239df3945/</u>

    - **Blog Fellyph:**
      <u>https://blog.fellyph.com.br/javascript/introducao-webpack-parte-2-loaders/</u>
