"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("../licao01-classe-heranca-sobrescrita-metodo/pessoa");
var dao_1 = require("./dao");
var dao = new dao_1.DAO();
var p = new pessoa_1.Pessoa('Lucas');
dao.insert(p);
//# sourceMappingURL=main.js.map