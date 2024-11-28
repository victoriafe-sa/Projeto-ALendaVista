 // Definindo o usuário admin e senha
 const adminUser = {
    email: "admin@example.com",
    password: "1234"
};

// Captura o evento de submit do formulário para validar o login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtendo os valores dos campos de email e senha
    const email = document.getElementById("loginEmail").value.trim(); // .trim() remove espaços
    const password = document.getElementById("loginPassword").value.trim(); // .trim() remove espaços

    // Console.log() para depuração
    console.log("Email:", email);  // Confirma o valor do email
    console.log("Senha:", password); // Confirma o valor da senha

    // Validação do email e senha
    if (email === adminUser.email && password === adminUser.password) {
        // Redireciona para "form.html" após login bem-sucedido
        window.location.href = "form.html"; // Alterado para "form.html"
    } else {
        // Exibe uma mensagem de erro se o login falhar
        alert("Email ou senha incorretos!");
    }
});

// Função para fechar o modal
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("loginModal").style.display = "none";
});