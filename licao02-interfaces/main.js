"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./../licao01-classe-heranca-sobrescrita-metodo/pessoa");
var pessoa_dao_1 = require("./pessoa.dao");
var pessoaDao = new pessoa_dao_1.PessoaDAO();
var pessoa = new pessoa_1.Pessoa('Lucas');
pessoaDao.insert(pessoa);
//# sourceMappingURL=main.js.map