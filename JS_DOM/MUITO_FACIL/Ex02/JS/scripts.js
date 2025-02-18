const myParagraph = document.getElementById("myParagraph")
const myBtn = document.getElementById("myBtn")

myBtn.addEventListener('click',()=>{
    for(let i=0; i<=20; i++){
    myParagraph.textContent += 'Adicionando Texto'
    }

})