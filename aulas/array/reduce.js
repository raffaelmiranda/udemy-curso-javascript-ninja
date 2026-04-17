/*
O reduce é um método de arrays em JavaScript usado para reduzir todos os valores de um array a um único valor.
Esse valor final pode ser:

um número (ex: soma)
um objeto
um array
uma string
ou qualquer outro tipo.

A ideia central é: percorrer o array acumulando um resultado.

Quando usar reduce?
Use reduce quando você quiser:

- Somar valores
- Transformar arrays em objetos
- Contar itens
- Agrupar dados
- Criar pipelines de transformação
*/

//================= Exemplo 1: Somar números =================
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(soma); // 10

//================= Exemplo 2: Contar ocorrências =================
const frutas = ["maçã", "banana", "maçã", "laranja", "banana"];
const contagem = frutas.reduce((acumulador, fruta) => {
  acumulador[fruta] = (acumulador[fruta] || 0) + 1;
  return acumulador;
}, {});

console.log(contagem); // { maçã: 2, banana: 2, laranja: 1 }

//================= Exemplo 3: Somar valores de objetos =================
const pedidosSimples = [
  { produto: "camisa", preco: 50 },
  { produto: "calça", preco: 100 },
  { produto: "sapato", preco: 200 },
];
const total = pedidosSimples.reduce((acc, pedido) => {
  return acc + pedido.preco;
}, 0);

console.log(total); // 350

//================= Exemplo 4: Flatten (achatar) arrays =================
const arrays = [[1, 2], [3, 4], [5]];

const flat = arrays.reduce((acc, atual) => {
  return acc.concat(atual);
}, []);

console.log(flat); // [1, 2, 3, 4, 5]

//================= Cenário real: sistema de vendas =================
const pedidos = [
  {
    id: 1,
    cliente: "Rafael",
    status: "pago",
    itens: [
      { produto: "Camisa", preco: 50, quantidade: 2 },
      { produto: "Calça", preco: 120, quantidade: 1 },
    ],
  },
  {
    id: 2,
    cliente: "Ana",
    status: "pendente",
    itens: [{ produto: "Tênis", preco: 300, quantidade: 1 }],
  },
  {
    id: 3,
    cliente: "Rafael",
    status: "pago",
    itens: [{ produto: "Meia", preco: 20, quantidade: 3 }],
  },
];
const relatorio = pedidos.reduce(
  (acc, pedido) => {
    // garante que o cliente exista no relatório
    if (!acc.totalPorCliente[pedido.cliente]) {
      acc.totalPorCliente[pedido.cliente] = 0;
    }

    // só considera pedidos pagos
    if (pedido.status === "pago") {
      const totalPedido = pedido.itens.reduce((soma, item) => {
        acc.quantidadeItensVendidos += item.quantidade;
        return soma + item.preco * item.quantidade;
      }, 0);

      acc.totalFaturado += totalPedido;
      acc.totalPorCliente[pedido.cliente] += totalPedido;
    }

    return acc;
  },
  {
    totalFaturado: 0,
    totalPorCliente: {},
    quantidadeItensVendidos: 0,
  },
);

console.log(relatorio);
/*
O acumulador é um objeto complexo
reduce dentro de reduce
Regra de negócio dentro da redução
*/
