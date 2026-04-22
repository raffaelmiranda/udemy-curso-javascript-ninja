(function () {
  "use strict";

  var del = confirm("Deseja realmente excluir este item?");
  if (del) console.log("Item excluído.", del);
  else console.log("Ação cancelada.");
})();
