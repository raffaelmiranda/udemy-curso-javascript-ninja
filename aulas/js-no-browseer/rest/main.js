(function () {
  function soma(...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
  }

  soma(1, 2, 3, 4); // 10
})();
