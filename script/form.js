function validarIdade() {
    const dataNascimento = document.getElementById("data_nascimento").value;
    if (!dataNascimento) {
        alert("Por favor, insira a sua data de nascimento.");
        return false;
    }

    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    const dia = hoje.getDate() - nascimento.getDate();

    // Verifica se a pessoa tem mais de 16 anos
    if (idade < 16 || (idade === 16 && (mes < 0 || (mes === 0 && dia < 0)))) {
        alert("Você precisa ter mais de 16 anos para se cadastrar.");
        document.getElementById("data_nascimento").style.borderColor = "red"; // Destaca o campo
        return false;
    }

    return true;
}