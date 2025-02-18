//caio<- vamos pegar o elemento ul com o id = list/lista
const myList = document.getElementById("myList")

//caio<- vamos pegar o elemento input com id = newItem/novoItem

const newItem = document.getElementById("newItem")

//caio<- vamos pegar o button com o id = buttonAdd

const btnAdd = document.getElementById("buttonAdd")

//caio<- vamos adicionar um ouvinte do tipo click

btnAdd.addEventListener('click',()=>{
    //caio<- vamos ler um novo produto a ser adicionado na lista
  
    const newItemText = newItem.value;

    //caio<- usando if de uma linha só
    if(newItemText !== ""){
        //caio<- criar um novo elemento li
         const NewItemElement = document.createElement('li')
         //caio<- vamos adicionar um texto ao novo li
         NewItemElement.textContent = newItemText
         //caio<- apendando a nova li 
         myList.appendChild(NewItemElement)
         newItem.value = ""
        }
})