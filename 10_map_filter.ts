function filtrarPrecosAltos(precos: number[]): number[] {
    return precos.filter(preco => preco > 100);
  }
  
  console.log(filtrarPrecosAltos([50, 150, 200, 30])); // [150, 200]
  