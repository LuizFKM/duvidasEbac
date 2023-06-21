const form = document.getElementById("form-AB");

function validaForm(valores) {
    const valorA = x;
    const valorB = y;
    const comparar = valores.parseInt(valorA, valorB)
    return comparar = valorA < valorB;
}


form.addEventListener('submit', function(e) {
e.preventDefault()

    const ValordeA = document.getElementById('campoA');
    const ValordeB = document.getElementById('campoB');
    if (!validaForm (ValordeA.value) < (ValordeB.value));
    {
        alert('teste');
    }
    

})


console.log (form);



