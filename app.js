/*
Código para a Página, que serve para alterar o tema
da mesma ao clicar o botão.
*/

const troca = document.querySelector('.btn');
troca.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Tema Escuro";
    }
    else{
        this.textContent ="Tema Claro";
    }
});

