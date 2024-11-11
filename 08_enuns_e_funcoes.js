var DiasSemana;
(function (DiasSemana) {
    DiasSemana["Segunda"] = "Segunda-feira";
    DiasSemana["Terca"] = "Ter\u00E7a-feira";
    DiasSemana["Quarta"] = "Quarta-feira";
    DiasSemana["Quinta"] = "Quinta-feira";
    DiasSemana["Sexta"] = "Sexta-feira";
    DiasSemana["Sabado"] = "S\u00E1bado";
    DiasSemana["Domingo"] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
function ehFimDeSemana(dia) {
    return dia === DiasSemana.Sabado || dia === DiasSemana.Domingo;
}
console.log(ehFimDeSemana(DiasSemana.Domingo)); // true
console.log(ehFimDeSemana(DiasSemana.Quinta)); // false
