# Teste para de desenvolvimento FullStack Oncoclinicas

Olá meu nome é Vento, tudo bem contigo??

Esse repositório contém o meu teste para a oportunidade na Oncoclinicas e tem o intuito de demonstrar os meus conhecimentos técnicos e aplicar alguns "estudos" no desenvolvimento de aplicações em NodeJS e ReactJS, consistindo em uma API para cadastro de médicos, onde utiliza boa parte dos métodos HTTP de para a realização de requisições no formato Rest.

Nesse teste estou contemplando uma rota `/medicos`, validade por uma chave Bearer gerado dinâmicamente através de um login préviamente cadastrado. Em resumo um CRUD completo para um cadastro simples, isso sendo consumido e alimentado por uma aplicação em ReactJS. Todas essa estrutura rodando em cima de containers separados por função.

____
## Backend

A estrutura do backend foi desenvolvido em *NodeJS* com o framework *Express* para gerenciar as requisições e respostas HTTP. Para a persisênvia foi optado em utilizar o ORM *Sequelize* para conectar a base de dados *MySQL* de forma simples e prática, dessa forma podemos trocar para qualquer outra base se for necessário para refatorar ou amplicar esse modelo de teste/estudo (algo que provavelmente faça).

Com a utilização do *Sequelize* eu utilizei os conceitos de Migration e Seeder para criar os usuário inicial do sistema, porém devido a uma característica desse teste e do Docker acabei utilizando somente no desenvolvimento, já que automatizei o cadastro por um dump que é executado quando o container é instanciado. Além dessa características, foram utilizados ids não sequenciais com UUIDv4 e as deleções do banco de dados estão embasadas em SoftDelete.

Em um formato de API, o sistema conta com as rotas prefixadas por `/api/v1/`, além de separar por tipo de requisições cada ação que seu controller precisa realizar, ou seja, todas as responsabilidade das requisições estào agrupadas por um "prefixo", por exemplo `/medicos` cuida de todas as ações refernte a médicos, `/usuarios` cuida de todas as ações referentes ao usuários, etc.

Essa estrutura da API pode ser acompanhada pela breve documentação disponibilizado no link abaixo:
- https://documenter.getpostman.com/view/259965/UVRAKnXy


### Instalação e operação

Para rodar essa aplicação de forma simples serparada das outras aplicações, você precisará ter o NodeJS 16 instalado na máquina e rodar, configurar as variáveis de ambiente para a conexão com o banco de dados no arquivo `.env`, localizado na raiz do projeto e rodar:

- Primeiro de tudo rode (se já não o fez) o comando `npm install` ou `yarn install`;
- Para ambiente de desenvolvimento: `npm run dev` ou `yarn dev`;
- Para ambiente de produção: `npm run start` ou `yarn start`;

Essa aplicação rodará na porta 3000 do seu computador, sendo possível acessar pelo Postman, Insomnia ou pela aplicação ReactJS contidos nesse repositório `http://localhost:3001`.

Após iniciar a aplicação por completa e prevendo que você criou e configurou a base e suas conexões, você precisará rodar as migrations, criando as tabelas na base de dados:

`npm run sequelize db:migrate` ou `yarn sequelize db:migrate`

Com esse comando serão criadas as tabelas `tb_doctors` e `tb_users` em sua base de dados.

Caso queira criar já um usuário padrão para acessar via admin, você pode rodar o seeder:

`npm run sequelize db:seed:all` ou `yarn sequelize db:seed:all`

Esse comando irá cadastrar o usuário:

- Name: Master User
- Email: vento@oncoclinicas.com.br
- Pass: 19Oncoclinicas@19

Com isso, sendo possível agora utilizar a API e seu Token para validar seus acessos.
____
  
## Frontend

O Frontend está construído de forma estruturada e bem componentizada com *ReactJS*, separadas em uma estrutura hierárquica de diretórios para deixar mais intuitiva a navegação entre os arquivos e utilizano nomes bem claros para suas repsonsabilidades.

Nessse projeto procurei utilizar todas as boas práticas que eu conheço, além de aplicar tecnologias/tecnicas como Context API para gerenciar os estados de autenticação, Serviços para gerenciar as requisições, Helpers para funções de auxilio e a componeneticação de tudo que fosse identificado como um código potencialmente reaproveitável nesse e em outros projetos.

Para rodar essa aplicação você precisa:

- Primeiro de tudo rode (se já não o fez) o comando `npm install` ou `yarn install`;
- Para ambiente de desenvolivmento: `npm run start` ou `yarn start`;
- Para ambiente de produção você precisará construir seu bundle e sua estrutura, com o seguinte comando: `npm run build` ou `yarn build`;

Essa aplicação rodará na porta 3000 do seu computador, sendo possível acessar pelo seu computador, tablet ou smartphone pelo endereço `http://localhost:3000` de forma responsiva e de fácil utilização.

## Docker

Para rodar essa estrutura eu utilizei o *Docker* orquestrado pelo docker-composer para que seja simples para rodar esse teste, ficando boa parte automatizada sendo necessário rodar um comando (meio óbvio para a tecnologia, mas é bom reafirmar). Dessa forma, ficaram 4 containers rodando nessa estrutura que são:

  1. Container para rodar o MySQL
  2. Container para rodar o PhpMyAdmin
  3. Container para rodar o Backend em NodeJS
  4. Container para rodar o desenvolvimento em React
  5. Container para rodar o NGINX como proxy reverso para as aplicações.

Todos as aplicações estão com seu *Dockerfile* dentro de seu diretório e na raiz do repositório/projeto está o arquivo *docker-compose* com a orquestração dos containers e configurações de cada um.

Para rodar essa aplicação de forma orquestrada e completa será necessário que você tenha o docker instalado na máquina e rode o comando `docker-compose up -d` (onde o -d não irá segurar o seu terminal depois de tudo instanciado). 

Aqui a mágica irá acontecer e tudo estará disponível para sue acesso no endereço `http://localhos` diretamente na porta 80 do seu computador.

## TypeScript, NextJS e Testes Unitários

 Como esse repositório de estudos além de um repositório para um teste, eu estarei atualizando de tempos em tempos com os avanços no meu estudo em JS, NodeJS e ReactJS, então irão constar nesse repositório essas e outras tecnologias e técnicas em breve.

 ## Contato
 Eu sou o Vento, venho brincando a algum tempo com esse treco de desenvolver software e estou animado com as novas oportunidades que surgem, então se quiser entre em contato comigo.