(function () {
  var myobject = {
    myProperty: 1,
    init: function () {
      return this;
    },
  };
  console.log(myobject.init()); //this aponta para o objeto myobject

  function myFunction() {
    return this;
  }
  console.log(myFunction()); // this aponta para o objeto global Window quando a função é executada no browser, ou para o objeto global global quando a função é executada no Node.js

  function MyConstructor() {
    this.myProperty1 = 14;
    this.myProperty2 = 29;
  }
  var myInstance = new MyConstructor();
  console.log(myInstance);
})();
