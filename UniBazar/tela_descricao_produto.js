const dados = [
  { titulo: "Camisa radiohead", tamanho: "Tamanho G", preco: "R$ 45",genero:"Masculino",descricao:"camisa legal da banda radiohead" },
  { titulo: "Calça Jeans", tamanho: "Tamanho M", preco: "R$ 50",genero:"Feminino",descricao:"calca jeans" },
  { titulo: "Tênis Branco", tamanho: "Tamanho M", preco: "R$ 45",genero:"Masculino",descricao:"camisa legal da banda radiohead" }
];

const template = document.getElementById("item-template");
const lista = document.getElementById("lista");

const parametro = new URLSearchParams(window.location.search);
const selecionado = parametro.get("parametro");





  const clone = template.content.cloneNode(true);
  clone.querySelector(".titulo").textContent = dados.at(selecionado).titulo;
  clone.querySelector(".descricao").textContent = dados.at(selecionado).descricao;
  clone.querySelector(".preco").textContent = dados.at(selecionado).preco;
  clone.querySelector(".tamanho").textContent = dados.at(selecionado).tamanho;
  clone.querySelector(".genero").textContent = dados.at(selecionado).genero;
  lista.appendChild(clone);
;

