const form = document.getElementById("form-AB"); // Colocando o elemento formulário em uma variável

form.addEventListener('submit', function(e) { // Aplicando um evento de submit ao formulário
    e.preventDefault(); // Cancelando configuração padrão de atualização da página
    

const campoA = document.getElementById('campoA'); // Resgatando o que é escrito no campo A e adicionando em uma variável
const campoB = document.getElementById('campoB'); // Resgatando o que é escrito no campo B e adicionando em uma variável
const mensagemValido = `Válido! ${campoB.value} é maior que ${campoA.value}!!!`; // Editando atributo CSS em uma variável
const mensagemErro = "Tudo errado! Tente novamente."
const containerMensagemErro = document.querySelector('.mensagem-erro') //Armazenando classe do CSS em uma variável
const containerMensagemValido = document.querySelector('.mensagem-valido')

// Limpar mensagem anterior de sucesso, se existir
containerMensagemErro.innerHTML = "";
containerMensagemErro.style.display = 'none';

// Limpar mensagem anterior de erro, se existir
containerMensagemValido.innerHTML = "";
containerMensagemValido.style.display = 'none'; 

// Verifica se o valor do campo B é maior que o valor do campo A
    if (parseInt(campoB.value) < parseInt(campoA.value)) {
    // Puxando a mensagem armazenada na variável "mensagemErro"
    containerMensagemErro.innerHTML = mensagemErro; 
    containerMensagemErro.style.display = 'flex'; // Mostrando a mensagem de erro na tela
    } 
    // Caso a condição esteja certa
    else {
    // Puxando a mensagem armazenada na variável "mensagemValido"   
    containerMensagemValido.innerHTML = mensagemValido;
    containerMensagemValido.style.display = 'flex'; // Mostrando a mensagem de valido na tela
    }
    
}
)

console.log (form); //imprime o elemento form do HTML no console do devTools

