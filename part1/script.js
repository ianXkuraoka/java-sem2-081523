//lista de usuários
let listaDados = [];

//DISPARAR O BOTÃO COM DOM
const btnEnviar = document.querySelector("#btnSubmit")

//evento do click
btnEnviar.addEventListener('click', ()=>{
    const inputCampo1 = document.querySelector('#campo1');

    //pega tudo que estiver dentro da lista dados
    listaDados.push();

    //armazena tudo que for adicionado na lista dadosconvertido com JSON
    localStorage.setItem("dados",JSON.stringify(listaDados))
})