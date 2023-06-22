const form = document.getElementById("form-AB");

form.addEventListener('submit', function(e) {

const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

    // Verifica se o valor do campo B é maior que o valor do campo A
    if (parseInt(campoB.value) < parseInt(campoA.value)) {
    // Impede o envio do formulário se a condição não for atendida
    e.preventDefault();
    alert('O valor do campo B deve ser maior que o valor do campo A.');
    } // Caso a condição esteja certa, envia mensagem de
    else {
    alert ("Formulário valido com sucesso!")
    }
}
)


console.log (form);

