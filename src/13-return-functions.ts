(()=>{
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  const printTotal = (prices: number[]): void => { //Funciones sin retorno void
    const rta = calcTotal(prices);
    console.log(rta);
  }

  printTotal([1,2,1,1,1]);
})();
