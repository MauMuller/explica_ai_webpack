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
      <li><strong>ES Modules</strong>:</li>
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
        <li>
          <h5>Entry Point (Ponto de Entrada)</h5>
          <img src="https://user-images.githubusercontent.com/82516932/186042900-0b4d9134-e096-4374-94cb-11a60c3123e9.svg">
          <p align="justify">
            Por aqui que o webpack irá interpretar quais serão os módulos que serão unificados, a partir de um arquivo inicial <strong>(por padrão ele captura o "index.js")</strong> é capturado todos os outros importados sucessivamente.
          </p>
          <br>
          <p align="justify">          
            É importante ressaltar que é possível ter vários arquivos como ponto de entrada assim como é possível trocar o nome de todos esses arquivos normalmente, o <strong>index.js é apenas uma convenção</strong>.
          </p>
        </li>
        <li>
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
        <li>
          <h5>Loaders</h5>
          <img src="https://user-images.githubusercontent.com/82516932/186047057-ade3f86a-eaa0-4d09-99a4-21a2f05e6d62.svg">
          <p align="justify">
            São <strong>módulos instalados separadamente</strong> do Webpack, como arquivos que não sejam Javascript. Isso acontece por que por padrão o webpack não entende nenhum arquivo que não seja .js, mas com esses plugins que é possível fazer isso.
          </p>
          <br>
          <p align="justify">
            Esses plugins serão compilados e transformados em arquivos que o webpack entenda, realizando assim, a ideia inicial de poder unificar arquivos. Ainda é possível fazer algo bem interessante com esses plugins, transpilar diferentes arquivos .js para o ES6+, como o caso do Typescript.
          </p>
          <br>
          <p align="justify">
            E é possivel fazer algo mais legal ainda, transpilar todo o nosso código ES6+ para ES5, com todos os recursos atuais funcionando 100%.
          </p>
        </li>
        <li>
          <h5>Plugins</h5>
        </li>
      </ul>
    </ul>
  </p>
</div>

<br>

<div align="left">
    <img src="https://user-images.githubusercontent.com/82516932/185759904-f738ecff-9a00-40fe-8694-6e0ca0e52c0c.svg" width="800">
</div>

<br>

<div align="left">
    <img src="https://user-images.githubusercontent.com/82516932/186051912-672d5bf6-15da-4885-ad00-cc785995b772.svg" width="800">
</div>

<br>

<div align="left">
    <img src="https://user-images.githubusercontent.com/82516932/186052090-6f33de4d-6a4e-4990-b360-bd868e898d40.svg" width="800">
</div>

<br>

<div align="left">
    <img src="https://user-images.githubusercontent.com/82516932/185760260-92710eef-ae41-449e-a023-9f10b6011b13.svg" width="800">
    <p align="justify">
      - Web Dev Drops: https://www.webdevdrops.com/webpack-sem-medo-parte-2-loaders-1d1239df3945/
    </p>
</div>
