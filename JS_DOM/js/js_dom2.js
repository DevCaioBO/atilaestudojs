// Seleciona a div

let container = document.getElementById('container')
//cria dentro da div container
let divInterna = document.createElement('div');
// criando dois elementos p

let h3Nome = document.createElement('h3');
h3Nome.textContent = 'Nome: '
// criando dois elementos p

const  pPreco = document.createElement('p')
pPreco.textContent = 'Preço'


// const quebra = document.createElement('br')
const paragrafo2 =  document.createElement('p')
paragrafo2.textContent = 'Diponivel:'

//parágrafo estolizado - método classlist()
h3Nome.classList.add('paragrafo-estilizado')
pPreco.classList.add('paragrafo-estilizado')
paragrafo2.classList.add('paragrafo-estilizado')

  


divInterna.appendChild(h3Nome)

divInterna.appendChild(pPreco)
divInterna.appendChild(paragrafo2)
container.appendChild(divInterna)
