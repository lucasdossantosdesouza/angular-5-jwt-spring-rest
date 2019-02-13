"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(name) {
        this.name = name;
    }
    Pessoa.prototype.showAge = function (age) {
        console.log(this.name + " tem " + age + " anos de vida");
    };
    Object.defineProperty(Pessoa.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.js.map