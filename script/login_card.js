// Função para registrar um novo usuário no localStorage
function handleRegister(event) {
    event.preventDefault();

    // Pega os valores dos campos de registro
    const email = document.querySelector('.register input[type="email"]').value;
    const name = document.querySelector('.register input[type="text"]').value;
    const password = document.querySelector('.register input[type="password"]').value;

    // Verifica se o usuário já existe
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Checa se o email já foi registrado
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('Esse email já está registrado. Faça login.');
        return;
    }

    // Cria o novo usuário e armazena no localStorage
    const newUser = { email, name, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Conta criada com sucesso! Faça login para acessar.');
}

// Função para validar o login do usuário
function handleLogin(event) {
    event.preventDefault();

    // Pega os valores dos campos de login
    const email = document.querySelector('.login input[type="text"]').value;
    const password = document.querySelector('.login input[type="password"]').value;

    // Recupera os usuários armazenados no localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se existe um usuário com o email e senha fornecidos
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        window.location.href = 'form.html';  // Redireciona para o form.html
    } else {
        alert('Email ou senha inválidos');
    }
}

// Certifica-se de que o DOM está totalmente carregado antes de adicionar os listeners
document.addEventListener('DOMContentLoaded', () => {
    // Event listener para o formulário de login
    const loginForm = document.querySelector('.login form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Event listener para o formulário de registro
    const registerForm = document.querySelector('.register form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});
