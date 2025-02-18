//caio<- Vamos pegar o elemento h1
const elementTitle = document.getElementById("title")

//caio<- Vamos pegar agora o button
const elementButton = document.getElementById("myButton")




// elementButton.addEventListener('click',function(){
//     //caio <- mudar o texto do H1
//     elementTitle.textContent = "Texto Alterado!"
// })
//caio<- vamos adicionar um manipulador de evento do JS

elementButton.addEventListener('click',()=>{
    //caio <- mudar o texto do H1
    elementTitle.textContent = "Texto Alterado!"
})