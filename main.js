const form = document.getElementById("form-deposito");

const numeroA = document.getElementById("numero-A");
const numeroB = document.getElementById("numero-B");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (numeroA.value > numeroB.value){
        alert("O número B deve ser maior que o número A.")
    }else{
        alert("Parabéns, você preencheu o formulário corretamente!")
        numeroA.value = null;
        numeroB.value = null;
    }    
})

console.log(form);