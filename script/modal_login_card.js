// Verifica se o usuário já existe no localStorage
function checkAdminUser() {
    const adminUser = {
        email: 'admin@example.com',
        password: 'admin123'
    };

    // Armazenando o usuário admin no localStorage, caso ainda não tenha sido armazenado
    if (!localStorage.getItem('adminUser')) {
        localStorage.setItem('adminUser', JSON.stringify(adminUser));
    }
}

// Função para validar o login
function handleLogin(event) {
    event.preventDefault();

    // Pega os valores dos campos de login
    const email = document.querySelector('.login input[type="text"]').value;
    const password = document.querySelector('.login input[type="password"]').value;

    // Recupera o usuário admin do localStorage
    const storedAdminUser = JSON.parse(localStorage.getItem('adminUser'));

    // Verifica se as credenciais estão corretas
    if (email === storedAdminUser.email && password === storedAdminUser.password) {
        window.location.href = 'form.html';  // Redireciona para o form.html
    } else {
        alert('Email ou senha inválidos');
    }
}

// Função para registrar um novo usuário (não implementado no seu código, mas pode ser feito)
function handleRegister(event) {
    event.preventDefault();

    // Pega os valores dos campos de registro
    const email = document.querySelector('.register input[type="email"]').value;
    const name = document.querySelector('.register input[type="text"]').value;
    const password = document.querySelector('.register input[type="password"]').value;

    // Aqui você pode armazenar o usuário registrado em algum lugar, como localStorage ou uma API
    alert('Conta criada com sucesso! Faça login para acessar.');
}

// Inicializa a criação do usuário admin no localStorage
checkAdminUser();

// Certifica-se de que o DOM está totalmente carregado antes de adicionar os listeners
document.addEventListener('DOMContentLoaded', () => {
    // Event listener para o formulário de login
    document.querySelector('.login form').addEventListener('submit', handleLogin);

    // Event listener para o formulário de registro (se necessário)
    document.querySelector('.register form').addEventListener('submit', handleRegister);
});
