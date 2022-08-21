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
        No geral, essa ferramenta possui 4 conceitos fundamentais: <strong> Entry Point, Output Point, Loaders e plugins</strong>.
      </p>
      <ul>
        <li>
          <h5>Entry Point (Ponto de Entrada)</h5>
          <p>
          </p>
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
    <img src="https://user-images.githubusercontent.com/82516932/185760103-42c80151-8bc4-4488-88b7-81360bfad2df.svg" width="800">
</div>

<br>

<div align="left">
    <img src="https://user-images.githubusercontent.com/82516932/185760260-92710eef-ae41-449e-a023-9f10b6011b13.svg" width="800">
    <p align="justify">
      - Web Dev Drops: https://www.webdevdrops.com/webpack-sem-medo-parte-2-loaders-1d1239df3945/
    </p>
</div>
