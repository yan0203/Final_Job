const express = require('express'); /*contem todas as funcionalidades do express*/

const cors = require('cors');
const routes = require('./routes');


/*criar uma variavel que avai armazenar minha aplicaçao*/
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);












/*  GET: Buscar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/
/*
Tipos de parâmetros:
    Query Parms: parâmetros nomeados e enviados na rota, apos o simbolo de interrogação(filtros, paginação)
    Route Parms: parâmetros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
*/

/*
SQL: Mysql, SQlite, PostgreSQL, Oracle ...

NoSQL: MongoDB, CouchDB, etc

Podemos instalar o driver: Buscar os usuarios(SELECT * FROM users)
Ou podemos usar Query builder Utilizando Javascript (table('users').select('*').where)

    Ferramenta que será utilizada será o KNEX.JS 

*/


/*mandar a aplicação ouvir a porta 3333. oara acessar a aplicação */
