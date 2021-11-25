<img src="./images/voip.gif" width="500px"/>

---

# ProjetoAspecBack

O projeto em questão é um desafio Back-End que participei, e nele foi dado os seguintes passos para conclusão do desafio.

Desenvolver uma API em formato REST. Essa API servirá de base para uma aplicação do
tipo "TODO list" e deverá satisfazer os seguintes requisitos:

- Salvar os dados em um arquivo do tipo JSON no server-side OU em um banco de dados 
PostgreSQL. ✔
- Listar as tarefas. ✔
- Criar/editar as tarefas. ✔
- Armazenar a data de criação da tarefa. ✔
- Marcá-la como "à fazer" (to do), "fazendo" (doing) ou "feito" (done). Não permitindo que
uma tarefa tenha mais de uma marcação (“feito” e “fazendo”, por exemplo). ✔

Deverá conter os seguintes nós:
- GET /issues (listar todas as tarefas salvas) ✔
- GET /issues/{id} (retornar a issue com o id passado no parâmetro {id}) ✔
- POST /issues (criar uma nova issue) ✔
- PUT /issues/{id} (editar a issue com o id passado no parâmetro {id}) ✔

A tarefa (issue) deverá ter atributos de acordo com o exemplo abaixo:

```
id: 1,
desc: 'Descrição da tarefa',
create_at: '13/09/2021'
todo: false,
doing: true,
done: false
```

Foi desenvolvido e finalizado dia 25/11/2021.

O software que utilizar para fazer os testes dos endpoint's foi o insomnia.
Na pasta insomnia, existe o arquivo .json que fará o import das URL's da aplicação.


- Endpoint's

```
(POST) Criar issue:           localhost:3000/issues
(GET)  Listar issue:          localhost:3000/issues
(GET)  Procurar issue com id: localhost:3000/issues/1
(PUT)  Atualizar issue:       localhost:3000/issues/1
```

- Corpo do JSON no POST E PUT

```
{
	"desc": "",
	"todo": false,
	"doing": false,
	"done": false
}
```

# - Executando

### Para rodar a aplicação você precisa seguir os passos seguintes

#### OBS: Para executar os comando você irá necessitar baixar o <a href="https://nodejs.org/en/">NPM (Node Package Manager)</a>

- 1 - Instalar os pacotes

Entrando na pasta do projeto, você irá digitar no seu cmd o comando.

```
npm install
```

Com o comando acima você irá baixar todos os pacotes que serão utilizados para rodar a aplicação.

- 2 - Executando

Finalizando a instalação.

Você irá digitar no seu cmd o comando.

```
npm start
```

ou 

```
nodemon server.js
```

Assim os endpoint's serão iniciados na porta 3000, no server localhost.
