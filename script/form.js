function validarIdade() {
    const dataNascimento = document.getElementById('data_nascimento').value;
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();

    // Valida se a idade é inferior a 18 anos
    if (idade < 18 || (idade === 18 && m < 0)) {
        alert('Você precisa ter pelo menos 18 anos para se inscrever.');
        return false; // impede o envio do formulário
    }

    // Se a idade for válida, chama a função de envio de email
    enviarEmail();

    // Redireciona para a página index.html após o alerta
    window.location.href = '../estrut/index.html';  // Substitua pelo caminho correto

    return false; // Previne o envio do formulário para não recarregar a página
}

function enviarEmail() {
    // Exibe a mensagem de sucesso
    alert("Inscrição realizada com sucesso! Verifique seu email para mais informações.");
}
