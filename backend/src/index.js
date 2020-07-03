const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/** 
 * Rota / Recurso ---> o que vem depois da '/' é a rota que temos que colocar
 */

/**
 * Metódos HTTP:
 * 
 * GET: Buscar/listar uma info do back-end
 * POST: Criar uma info no back-end (cadastrando)
 * PUT: Alterar uma info no back-end
 * DELETE: Deletar uma info no back-end
 */

 /** 
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após '?' (Filtros, paginação) ->acesso .query (colocar ? na rota)
 * Route Params: Parâmetros utilizados para identificar recuros '/:id' -> acesso por .params(colocar /:id na rota)
 * Request Body: Corpo da requisção, utilizado para criar ou alterar recursos ->acesso por .body
 */

 /** 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */
 


