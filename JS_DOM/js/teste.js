// Seleciona a div

let container = document.getElementById('container')
//cria dentro da div container
let ditInterna = document.createElement('div');
// criando dois elementos p

const  paragrafo1 = document.createElement('p')
paragrafo1.textContent = 'Este é o primeiro parágrafo'


// const quebra = document.createElement('br')
const paragrafo2 =  document.createElement('p')
paragrafo2.textContent = 'Este é o segundo parágrafo'

//parágrafo estolizado - método classlist()
paragrafo1.classList.add('paragrafo-estilizado')
paragrafo2.classList.add('paragrafo-estilizado')

for(i = 0; i<=20; i++){
ditInterna.appendChild(paragrafo1)
}
ditInterna.appendChild(paragrafo2)
container.appendChild(ditInterna)
