    //exercicio 04

const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  let totalFaturamento = 0;
  for (const estado in faturamento) {
    totalFaturamento += faturamento[estado];
  }
  
  const percentualRepresentacao = {};
  for (const estado in faturamento) {
    percentualRepresentacao[estado] = (faturamento[estado] / totalFaturamento) * 100;
  }
  
  console.log(percentualRepresentacao);