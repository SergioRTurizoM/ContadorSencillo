

const valor = document.querySelector('#valores');

const incrementar = document.querySelector('#incrementar')
const decrementar = document.querySelector('#decrementar');

let valores = 0;

incrementar.addEventListener('click', ()=>{
    valores++
    valor.textContent = valores
})

decrementar.addEventListener('click', () => {
   
    if (valores>0){
        valores--
        valor.textContent = valores;
    }
} )



