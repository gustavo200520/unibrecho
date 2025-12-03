const dados = [
  { titulo: "Camisa Azul", descricao: "Tamanho M", preco: "R$ 30" },
  { titulo: "Calça Jeans", descricao: "Tamanho 40", preco: "R$ 50" },
  { titulo: "Tênis Branco", descricao: "Nº 42", preco: "R$ 80" }
];

const template = document.getElementById("item-template");
const lista = document.getElementById("lista");

dados.forEach(item => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".titulo").textContent = item.titulo;
  clone.querySelector(".descricao").textContent = item.descricao;
  clone.querySelector(".preco").textContent = item.preco;
  lista.appendChild(clone);
});
