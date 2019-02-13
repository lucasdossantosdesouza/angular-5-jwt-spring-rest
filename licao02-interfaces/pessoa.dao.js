"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
    }
    PessoaDAO.prototype.insert = function (pes) {
        console.log(pes.Name);
        return true;
    };
    PessoaDAO.prototype.update = function (obj) {
        throw new Error("Method not implemented.");
    };
    PessoaDAO.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    PessoaDAO.prototype.find = function (id) {
        throw new Error("Method not implemented.");
    };
    PessoaDAO.prototype.findAll = function () {
        throw new Error("Method not implemented.");
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
//# sourceMappingURL=pessoa.dao.js.map