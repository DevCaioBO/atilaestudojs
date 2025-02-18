//caio<-pegando o botão

const ToggleButton = document.getElementById('ToggleButton')

//caio<- pegando a caixinha de mensagem
const Message = document.getElementById('message')

//vamos adicionar o ouvinte para o evento click do elemento button

ToggleButton.addEventListener('click',()=>{
    //caio<- verificar se a mensagem está oculta
    if(Message.classList.contains('ocult')){
        //caio<- vamos remover esse estilo
        Message.classList.remove('ocult')
    }else{
        //caio<- adicionando o estilo oculto
        Message.classList.add('ocult')
    }

})