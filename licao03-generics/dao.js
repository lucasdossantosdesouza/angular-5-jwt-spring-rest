"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
    }
    DAO.prototype.insert = function (obj) {
        console.log('inserindo');
        return true;
    };
    DAO.prototype.update = function (obj) {
        throw new Error("Method not implemented.");
    };
    DAO.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    DAO.prototype.find = function (id) {
        throw new Error("Method not implemented.");
    };
    DAO.prototype.findAll = function () {
        throw new Error("Method not implemented.");
    };
    return DAO;
}());
exports.DAO = DAO;
//# sourceMappingURL=dao.js.map