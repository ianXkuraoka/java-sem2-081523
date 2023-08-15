//lista de usuários
let listaDados = [];

//criando a base(construtor)
function Campos(campo1){
    this.campo1 = campo1
}

//DISPARAR O BOTÃO COM DOM
const btnEnviar = document.querySelector("#btnSubmit")

//evento do click
btnEnviar.addEventListener('click', ()=>{
    const inputCampo1 = document.querySelector('#campo1');

    //instanciando o objeto para receber no campo
    let info = new Campos(inputCampo1.value)
    
    //pega tudo que estiver dentro da lista dados
    listaDados.push(info);

    //armazena tudo que for adicionado na lista dadosconvertido com JSON
    localStorage.setItem("dados",JSON.stringify(listaDados))
})