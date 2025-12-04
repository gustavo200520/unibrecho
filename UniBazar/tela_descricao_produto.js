const dados = [
  { titulo: "Camisa radiohead", imagem:"fotos/radioheadcamisa.jpg", tamanho: "Tamanho G", preco: "R$ 45",genero:"Masculino",descricao:"Camisa legal da banda radiohead" },
  { titulo: "Calça Jeans", imagem:"fotos/Stok di awal februari💫.jpg", tamanho: "Tamanho M", preco: "R$ 50",genero:"Feminino",descricao:"calca jeans" },
  { titulo: "Tênis Branco", tamanho: "Tamanho M", preco: "R$ 45",genero:"Masculino",descricao:"camisa legal da banda radiohead" }
];

const template = document.getElementById("item-template");
const lista = document.getElementById("lista");

const parametro = new URLSearchParams(window.location.search);
const selecionado = parametro.get("produto");


/*let desejado=false;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnlista_de_desejo').addEventListener('click', () => {
          desejado = !desejado;
          if (desejado == true) {
    clone.querySelector(".desejo").textContent='desfavoritar';
    window.alert("Adicionado á lista de desejos com sucesso!");        
  }
  else clone.querySelector(".desejo").textContent='favoritar';
    });
});
*/

function mostrarPopup() {
    window.alert("Dados salvos com sucesso!");
}

  
  const clone = template.content.cloneNode(true);
  

  
  clone.querySelector(".titulo").textContent = dados.at(selecionado).titulo;
  clone.querySelector(".descricao").textContent = dados.at(selecionado).descricao;
  clone.querySelector(".preco").textContent = dados.at(selecionado).preco;
  clone.querySelector(".tamanho").textContent = dados.at(selecionado).tamanho;
  clone.querySelector(".genero").textContent = dados.at(selecionado).genero;
  clone.querySelector(".imagem").src = dados.at(selecionado).imagem;
  lista.appendChild(clone);
;


