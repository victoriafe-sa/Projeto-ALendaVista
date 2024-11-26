function validarIdade() {
    // Aqui você pode adicionar a lógica de validação da idade, por exemplo:
    const dataNascimento = document.getElementById('data_nascimento').value;
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();

    // Se a idade for menor que 18, pode bloquear o envio do formulário
    if (idade < 18 || (idade === 18 && m < 0)) {
        alert('Você precisa ter pelo menos 18 anos para se inscrever.');
        return false; // impede o envio
    }

    // Se a idade for válida, redireciona para a página 'index.html'
    window.location.href = '../estrut/index.html';  // Redireciona após a validação
    return false;  // Previne o envio do formulário para não recarregar a página
}