<div align="center">
  <img src="https://user-images.githubusercontent.com/82516932/185523194-471d4bcd-9463-47eb-a896-d4774f161f07.svg" width="800">
</div>

<br><br>

<div align="left">
  <img src="https://user-images.githubusercontent.com/82516932/185759115-243e5619-9fec-4fd3-b576-734775b57f4c.svg" width="800">
  <p align="justify">
    Hoje falaremos sobre <strong>Webpack</strong>, um assunto muito importante e daora de ser tratado entre os Dev's. Aqui, mostrarei o por que você deveria usar essa ferramenta e quais usos esse empacotador de arquivos pode ter no seu dia a dia. Também vou mostrar quais tecnologias já a utilizam e você provalvelmente não sabia.
  </p>
</div>

<br>

<div align="left">
  <img src="https://user-images.githubusercontent.com/82516932/186055317-417eb956-94ba-4889-b929-fbe141835f2f.svg" width="800">
  <ul>
    <li>
      <strong><a href="#doQueSeTrata">Do que se trata?</a></strong>
      <ul>
        <li>
            <strong><a href="#esModules">ES Modules</a></strong>
        </li> 
        <li>
          <i>Conceitos Fundamentais do Webpack</i>  
          <ul>
            <li>
              <strong><a href="#pontoDeEntrada">Ponto de Entrada</a></strong>
            </li>
            <li>
              <strong><a href="#pontoDeSaida">Ponto de Saída</a></strong>
            </li>
            <li>
              <strong><a href="#loaders">Loaders</a></strong>
            </li>
            <li>
              <strong><a href="#plugins">Plugins</a></strong>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <br>
    <li><strong><a href="#comoInstalo">Como instalo?</a></strong></li>
  </ul>
</div>

<br>

<div align="left" id="doQueSeTrata">
    <img src="https://user-images.githubusercontent.com/82516932/185759801-a12dee7e-88c9-49f1-a2f4-c11dd14eddc8.svg" width="800">
  <p align="justify">
    O webpack é um <strong>empacotador de módulos para javascript</strong>, ou seja, ele junta arquivos JS ou outros formatos, assim como bibliotecas, frameworks, pré-processaores em um <strong>único arquivo só</strong>. Tudo isso com diferentes formas trabalhar <strong>(Produção e Desenvolvimento)</strong> e sem duplicar arquivos, tudo na ordem certa como o menor tamanho possível para o deploy.
  </p>

  <p align="justify">
    No geral, essa ferramenta consegue fazer algumas coisas bem legais com arquivos que trabalhamos diariamente, porém, levando as <strong>"boas práticas" a outro nível</strong>. Aqui temos algumas coissas que é possível fazer:
  </p>

  <ul>
    <li>Javascript com: <strong>ES6+, JSX, Typescript e Babel;</strong></li>
    <li>Outros formatos de arquivos como: <strong>CSS, SASS, LESS, Styles Componentes, SVG, PNG, JPG</strong> e outros...</li>
  </ul>

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
    <li><strong>index.js</strong>: Esse se trata do arquivo principal dentro do nosso projeto, onde irá receber todos os módulos e será a <strong>porta de entrada para o webpack</strong></li> 
    <li><strong>main.js/bundle.js</strong>: Será o arquivo final que conterá todos o nossos módulos e codação em geral relizada a partir da pasta "src". Esse arquivo atualmente, <strong>por conveção</strong> é chamado de <strong>main.js</strong>, mas também é possivel ver ele com o nome de <strong>bundle.js</strong>.</li> 
  </ul>
  <h5>
    OBS: o nome desses <u>arquivos/pastas</u> são uma convenção, não há obrigatoriedade deles serem nomeados assim.
  </h5>
  <hr>
  <img src="https://user-images.githubusercontent.com/82516932/186433705-ebe98aca-1287-4ca6-8f96-0be946444ddb.png">
  <br>  
  <i>
    Demonstração de como deveria ficar o respositório. 
  </i>
  <hr>
  <p>
    Agora podemos configurar o arquivo <strong>webpack.config.js</strong> (porém, se não configurassemos, ele iria usar os caminhos que criamos por padrão no projeto, o <strong>"src/index.js"</strong> e <strong>"dist/main.js"</strong>).
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

<div align="left" id="comoInstalo">
    <img src="https://user-images.githubusercontent.com/82516932/185759904-f738ecff-9a00-40fe-8694-6e0ca0e52c0c.svg" width="800">
</div>

<br>

<div align="left">
    <img src="https://user-images.githubusercontent.com/82516932/186051912-672d5bf6-15da-4885-ad00-cc785995b772.svg" width="800">
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
