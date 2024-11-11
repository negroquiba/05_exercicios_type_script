enum DiasSemana {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo",
  }
  
  function ehFimDeSemana(dia: DiasSemana): boolean {
    return dia === DiasSemana.Sabado || dia === DiasSemana.Domingo;
  }
  
  console.log(ehFimDeSemana(DiasSemana.Domingo)); // true
  console.log(ehFimDeSemana(DiasSemana.Quinta)); // false
  