var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nome, som) {
        this.nome = nome;
        this.som = som;
    }
    Animal.prototype.emitirSom = function () {
        return "".concat(this.nome, " faz ").concat(this.som);
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, som, raca) {
        var _this = _super.call(this, nome, som) || this;
        _this.raca = raca;
        return _this;
    }
    return Cachorro;
}(Animal));
var rex = new Cachorro("Rex", "au au", "Labrador");
console.log(rex.emitirSom());
console.log("Ra\u00E7a: ".concat(rex.raca));
