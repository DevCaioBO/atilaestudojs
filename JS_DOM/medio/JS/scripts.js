
//caio<- pegando o  input
const newTask = document.getElementById('newTask')
//caio<-botão de add
const addTask = document.getElementById('addTask')
//caio<- pegando nossa lista
const ListenerOfTasks = document.getElementById('ListenerOfTasks')

addTask.addEventListener('click',()=>{
    //caio<- vamos pegar o texto que foi digitado no elemento input
    const textTask = newTask.value.trim()
    //caio<- método trim para limpar os espaços

    if(textTask !== ''){
        addTasks(textTask)
        newTask.value = ''
        newTask.focus(); // coloca o target do foco no input
    }

})

function addTasks(text){
    const itemList = document.createElement('li');
    const spanTask = document.createElement('span')
    spanTask.textContent = text
    itemList.appendChild(spanTask)

    const btnRemove = document.createElement('button')
    btnRemove.textContent ='remover'
    itemList.appendChild(btnRemove)

    //caio<- vamos manipular o evento click para deixar a tarefa checked

    spanTask.addEventListener('click',()=>{
        itemList.classList.toggle('complete')
    })
    btnRemove.addEventListener('click',()=>{
        ListenerOfTasks.removeChild(itemList)
    })

    ListenerOfTasks.appendChild(itemList)
}


