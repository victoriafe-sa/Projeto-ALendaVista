function validarIdade() {
    const dataNascimento = document.getElementById('data_nascimento').value;
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();

    if (idade < 18 || (idade === 18 && m < 0)) {
        alert('Você precisa ter pelo menos 18 anos para se inscrever.');
        return false; // impede o envio
    }

    enviarEmail(); // Chama a função de envio de email
    window.location.href = '../estrut/index.html';  // Redireciona após a validação
    return false;  // Previne o envio do formulário para não recarregar a página
}

function enviarEmail() {
    alert("Inscrição realizada com sucesso! Verifique seu email para mais informações.");
}