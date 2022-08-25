<div align="center">
  <img src="https://user-images.githubusercontent.com/82516932/185523194-471d4bcd-9463-47eb-a896-d4774f161f07.svg" width="800">
</div>

<br><br>

![Preview](https://user-images.githubusercontent.com/82516932/185759115-243e5619-9fec-4fd3-b576-734775b57f4c.svg)

Hoje falaremos sobre **Webpack**, um assunto muito importante e daora de ser tratado entre os Dev's. Aqui, mostrarei o por que você deveria usar essa ferramenta e quais usos esse empacotador de arquivos pode ter no seu dia a dia. Também vou mostrar quais tecnologias já a utilizam e você provalvelmente não sabia.

![Topicos](https://user-images.githubusercontent.com/82516932/186565522-dce89059-ec52-4d0f-96f9-d804db6293ba.svg)

- **[Resumo](#resumo)**
- **[Artigo Completo](#artigo-completo)**
  - **[ES Modules](#es-modules)**
  - _Conceitos Fundamentais do Webpack_
    - **[Entry Point](#entryPoint)**
    - **[Output Point](#outputPoint)**
    - **[Loaders](#loaders)**
    - **[Plugins](#plugins)**
- **[Fontes](#fontes)**

<img id="resumo" src="https://user-images.githubusercontent.com/82516932/186561412-e82b73f2-b819-4b71-bbb0-f1473c9e344c.svg">

<br><br>

<img id="artigo-completo" src="https://user-images.githubusercontent.com/82516932/186561432-62d12540-895b-4a1d-917d-d502ad52fb69.svg">

O webpack é um **empacotador de módulos para javascript**, ou seja, ele junta arquivos JS ou outros formatos, assim como bibliotecas, frameworks, pré-processaores em um **único arquivo só**. Tudo isso com diferentes formas trabalhar **(Produção e Desenvolvimento)** e sem duplicar arquivos, tudo na ordem certa como o menor tamanho possível para o deploy.

No geral, essa ferramenta consegue fazer algumas coisas bem legais com arquivos que trabalhamos diariamente, porém, levando as **"boas práticas" a outro nível**. Aqui temos algumas coissas que é possível fazer:

- Javascript com: **ES6+, JSX, Typescript e Babel;**
  Outros formatos de arquivos como: **CSS, SASS, LESS, Styles Componentes, SVG, PNG, JPG** e outros...

### Funcionamento

Essa ferramenta funciona a partir de **"Módulos"**, para quem já está acostumado com ES6+ deve saber como funciona os **import/exports** porém para quem não sabe, vou fazer um overview abaixo.

- #### **ES Modules**

  <h3>Funcionamento</h3>
  <p align="justify">
    Essa ferramenta funciona a partir de <strong>"Módulos"</strong>, para quem já está acostumado com ES6+ deve saber como funciona os <strong>import/exports</strong> porém para quem não sabe, vou fazer um overview abaixo.
    <ul>
      <li id="esModules"><strong>ES Modules</strong>:</li>
      <p align="justify">
        Os "Imports/Exports" funcionam para acessar determinadas funções, objetos, array, classes ou variaveis de outro arquivo. Ou seja, o "import" recebe a partir do diretório e o "export" envia. 
      </p>
      <p align="justify">
        Aqui vou mostrar um pequeno exemplo do funcionamento:
      </p>

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

<p>
    É possivel entender com o exemplo que a classe foi exportada para dentro do "index.js", isso é o que chamamos de módulo, lembrando que cada módulo possui seu próprio escopo.
  </p>
    <li><strong>Conceitos Fundamentais do Webpack</strong>:</li>
    <p align="justify">
      No geral, essa ferramenta possui 4 conceitos fundamentais: <strong> Entry Point, Output Point, Loaders e Plugins</strong>.
    </p>
<ul>
<li id="pontoDeEntrada">
  <h5>Entry Point (Ponto de Entrada)</h5>
  <img src="https://user-images.githubusercontent.com/82516932/186042900-0b4d9134-e096-4374-94cb-11a60c3123e9.svg">
  <p align="justify">
    Por aqui que o webpack irá interpretar quais serão os módulos que serão unificados, a partir de um arquivo inicial <strong>(por padrão ele captura o "index.js")</strong> é capturado todos os outros importados sucessivamente.
  </p>
  <br>
  <p align="justify">          
    É importante ressaltar que é possível ter vários arquivos como ponto de entrada assim como é possível trocar o nome de todos esses arquivos normalmente, o <strong>index.js é apenas uma convenção</strong>.
  </p>
  <h3>EXEMPLO</h3>
  <p align="justify">
    Primeiramente, é necessário instalar o webpack:
  </p>

```SHELL
  npm init -y
```

```SHELL
  npm i -D webpack webpack-cli
```

  <ul>
    <li>
      <strong>webpack</strong>: se trata das dependencia do recurso;
    </li>
    <li>
      <strong>webpack-cli</strong>: possibilidade de executar esse webpack por linha de comando.
    </li>
  </ul>
  <br>
  <p aling="justify">
    Agora vamos precisar criar um arquivo dentro do nosso repositório chamado <strong>"webpack.config.js"</strong>, nele que iremos adicionar todos os pontos de entrada, sáida, loaders e plugins o quanto for necessário. 
  </p>
  <br>
  <p>
    Além desse arquivo, ainda precisamos criar duas pastas dentro do nosso repositório. Elas representam o caminho padrão que o webpack captura quando não é configurado. São elas:
  </p>
  <ul>
    <li><strong>src</strong>: Local onde ficará todos os arquivos .js que iremos trabalhar</li> 
    <li><strong>dist</strong>: Pasta onde ficará os arquivos de sáida, no caso, o main.js, style.css e outros. Aqui também que será a <strong>refência</strong> que iremos adicionar no <strong>HEAD do HTML</strong></li> 
  </ul>
  <br>
  <p>
    Dentro dessas pastas, precisamos criar dois arquivos respectivamente, sendo eles:
  </p>
  <ul>
    <li>
      <strong>index.js</strong>: Esse se trata do arquivo principal dentro do nosso projeto, onde irá receber todos os módulos e será a <strong>porta de entrada para o webpack</strong></li> 
      <li><strong>js/main.js ou js/bundle.js</strong>: Será o arquivo final que conterá todos o nossos módulos e codação em geral relizada a partir da pasta "src". Esse arquivo atualmente, <strong>por conveção</strong> é chamado de <strong>main.js</strong>, mas também é possivel ver ele com o nome de <strong>bundle.js</strong>. 
      <br><br>
      Importante ressaltar que o <strong>js/</strong> é uma maneira que eu utilizo nos meus códigos, mas poderia muito bem ser direto no dist sem nenhuma outra pasta junto.
    </li> 
  </ul>
  <h5>
    OBS: o nome desses <u>arquivos/pastas</u> são uma convenção, não há obrigatoriedade deles serem nomeados assim.
  </h5>
  <hr>
  <img src="https://user-images.githubusercontent.com/82516932/186549730-75d69ac5-455e-4783-bf43-65eef5430d47.png">
  <br>  
  <i>
    Demonstração de como deveria ficar o respositório. 
  </i>
  <hr>
  <p>
    Agora podemos configurar o arquivo <strong>webpack.config.js</strong> (porém, se não configurassemos, ele iria usar os caminhos que criamos por padrão no projeto, o <strong>"src/index.js"</strong> e <strong>"dist/main.js"</strong>).
  </p>
  <br>

```JS
  //webpack.config.js
  module.exports = {
    entry: ['./src/index.js','./src/fazerAlgo.js'],
  };
```

  <p>
    Aqui nesse exemplo podemos ver como é a sintaxe do arquivo de configuração do webpack, precisamos <strong>exportar o módulo com o entry (ponto de entrada)</strong>, nele passamos um array contendo todos os caminhos que o webpack vai iniciar sua unificação.
  </p>
  <br>
  <p>
    Nesse exemplo usamos o <strong>'./src/index.js'</strong> e o <strong>'./src/fazerAlgo.js'</strong> para mostrar que é possível ter vários pontos de entrada, eles são arquivos que usamos quando precisamos que dois arquivos não tenham ligação. Mas nesse artigo, usaremos apenas o index.js.
  </p>
  <br>
  <p>
    Com isso, finalizamos a parte do entry point...
  </p>
</li>
<li id="pontoDeSaida">
  <h5>Output Point (Ponto de Saída)</h5>
  <img src="https://user-images.githubusercontent.com/82516932/186043701-302e76c0-a13b-48b3-958c-5fbfe1ea2131.svg">
  <p align="justify">
    Aqui ficará todo o código dos módulos importados, incluindo a trasnpilação com o babel e importação de apenas um tag no HTML para sua utilização.
  </p>
  <br>
  <p align="justify">          
    Por padrão, esse arquivo tem o nome de <strong>"main.js"</strong> como sáida, sendo esse um nome de convenção, porém, também é bastante utilizado o <strong>"bundle.js"</strong> como conveção.
  </p>
  <br>
  <p align="justify">          
    E assim como o Ponto de Entrada, a saída também pode ter vários arquivos dependendo da sua configuração, mas por padrão, gera apenas um. 
  </p>
  <h3>Exemplo</h3>
  <p>
    Vamos continuar usando o exemplo anterior, agora, fazeremos a saída desses módulos, para isso, precisaremos <strong>configurar o ponto de saída do webpack.</strong>
  </p>
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

  <p>
    <i>
      Agora, criamos uma chave chamada output (ponto de saída), ela aceita basicamente duas outras chaves para declarar a sáida do arquivo. O <strong>filename</strong> e o <strong>path</strong>.  
    </i>
    <br><br>
    <i>
      <strong>Filename:</strong> se trata do nome que o arquivo terá, é importante lembrar que ele será a refêrencia dentro do HTML como arquivo unificado. 
    </i>
    <br><br>
    <i>
      <strong>Path:</strong> Trata-se do caminho absoluto até a pasta que desejamos, esse path faz o papel de direcionar ao webpack em qual pasta iremos querer a sáida do arquivo final. 
    </i>
  </p>
  <hr>
  <p>
    Com esse arquivo configurado, precisamos criar um outro arquivo, agora em HTML. Ele será nosso <strong>index.html</strong>, arquivo que terá a referência do nosso <strong>main.js</strong>.
  </p>
  <br>

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

  <p>
    Com a refência adicionada no HTML, agora podemos criar os script para finalmente rodar o webpack.
  </p>

  <h5>OBS: é possível simplesmente com essas configurações usar o webpack da maneira mais básica possivel, nos próximos conceitos, iremos aprofundar mais na possibilidades da ferramenta.</h5>

  <p>
    Agora vamos adicionar os scripts do webpack.
  </p>

```JS
//package.json
  "scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build:dev": "webpack -w --mode development",
  "build:prod": "webpack --mode production"
},
```

  <p>
    <i>Dentro do nosso <strong>package.json</strong> vamos adicionar os scripts:</i>
  </p>

  <ul>
    <li>
      <i><strong>build:dev</strong>: Servirá como uma forma de usar o webpack apenas no ambiente de desenvolvimento, ou seja, será utilizado apenas quando estivermos realizando a manutenção, correção de bugs ou novas features. 
      <br><br>
      Nesse modo, o arquivo final não é minificado e apenas remove o que não é necessário, diminuindo um pouco o tamanho do arquivo, por isso é a opção de desenvolvimento.<br><br>
      Sua sintaxe possui a <strong>flag -w</strong>, servindo como uma maneira de refazr o processo de build toda vez que atualizar o arquivo, parecido com o <strong>Nodemon do NodeJS</strong>
      </i>
    </li>
    <br>
    <li>
      <i><strong>build:prod</strong>: Será utilizado para upar o arquivo para a produção, ele irá gerar o arquivo completamente minificado, bem reduzido e com nome de váriaveis trocadas para otimizar a performace do software.</i>
    </li>
  </ul>
  <hr>
  <img src="https://user-images.githubusercontent.com/82516932/186559704-686165a8-bfef-4080-8b02-ff740499773f.png">
  <br>  
  <i>
    Por fim, nosso respositório acaba ficando assim. 
  </i>
  <hr>

  <p>
    Após concluir todos esses passos, basta executar os comandos abaixos de acordo com a necessidade e abrir o website para ver o funcionamento geral.
  </p>

  <ul>
    <li>
      <p>
        Para desenvolver, executaremos:
      </p>

```SHELL
npm run build:dev
```

  </li>

  <li>
      <p>
        E para fazer o deploy, executaremos:
      </p>

```SHELL
npm run build:prod
```

  </li>
  </ul>

  <p>Finalizando assim, a parte do ponto de saída...</p>

</li>
        <li id="loaders">
          <h5>Loaders</h5>
          <img src="https://user-images.githubusercontent.com/82516932/186047057-ade3f86a-eaa0-4d09-99a4-21a2f05e6d62.svg">
          <p align="justify">
            São <strong>módulos instalados separadamente</strong> do Webpack, como arquivos que não sejam Javascript. Isso acontece por que por padrão o webpack não entende nenhum arquivo que não seja .js, mas com esses plugins que é possível fazer isso.
          </p>
          <br>
          <p align="justify">
            Esses loaders serão compilados e transformados em arquivos que o webpack entenda, realizando assim, a ideia inicial de poder unificar arquivos. No geral, eles trabalham juntamente com os plugins, gerando assim inumeras possíbilidades para o desenvolvimento da aplicação.
          </p>
          <br>
          <p align="justify">
            No geral, podemos separar os loaders em subcategorias:
          </p>
          <ul align="justify">
            <li>Arquivos (.jpg, .png...)</li>
            <li>Transpiling (ES5, .jsx, .vue, .ts...)</li>
            <li>Styling (.css, .scss...)</li>
          </ul>
          <h3>EXEMPLO</h3>
          <p align="justify">
            Usaremos os determinados loaders nesse exemplo:
          </p>
          <ul>
            <li>
              Arquivos: <strong>"url-loader"</strong>, <strong>"file-loader"</strong>;
            </li>
            <li>
              Transpiling: <strong>"babel-loader"</strong>;
            </li>
            <li>
              Styling: <strong>"style-loader"</strong>, <strong>"css-loader"</strong>.
            </li>
          </ul>
          <br>

  </li>
        <li id="plugins">
          <h5>Plugins</h5>
        </li>
      </ul>
    </ul>
  </p>
</div>

<br>

<div align="left">
    <img src="https://user-images.githubusercontent.com/82516932/185760260-92710eef-ae41-449e-a023-9f10b6011b13.svg" width="800">
    <ul>
      <li>
        <strong>Web Dev Drops:</strong>
        <br>
        <u>https://www.webdevdrops.com/webpack-sem-medo-parte-2-loaders-1d1239df3945/</u>
      </li>
      <li>
        <strong>Blog Fellyph:</strong>
        <br> 
        <u>https://blog.fellyph.com.br/javascript/introducao-webpack-parte-2-loaders/</u>
      </li>
    </ul>
</div>
