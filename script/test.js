// Função para verificar e armazenar os usuários no localStorage
function checkUsers() {
    const adminUser = {
        email: 'admin@example.com',
        password: 'admin123'
    };

    const regularUser = {
        email: 'user@example.com',
        password: 'user123'
    };

    // Armazenando os usuários no localStorage, caso ainda não tenham sido armazenados
    if (!localStorage.getItem('adminUser')) {
        localStorage.setItem('adminUser', JSON.stringify(adminUser));
    }
    
    if (!localStorage.getItem('regularUser')) {
        localStorage.setItem('regularUser', JSON.stringify(regularUser));
    }
}

// Função para validar o login
function handleLogin(event) {
    event.preventDefault();

    // Pega os valores dos campos de login
    const email = document.querySelector('.login input[type="text"]').value;
    const password = document.querySelector('.login input[type="password"]').value;

    // Recupera os usuários do localStorage
    const storedAdminUser = JSON.parse(localStorage.getItem('adminUser'));
    const storedRegularUser = JSON.parse(localStorage.getItem('regularUser'));

    // Verifica se as credenciais estão corretas para o admin ou o user
    if (email === storedAdminUser.email && password === storedAdminUser.password) {
        window.location.href = 'adm.html';  // Redireciona para o adm.html para admin
    } else if (email === storedRegularUser.email && password === storedRegularUser.password) {
        window.location.href = 'form.html';  // Redireciona para o form.html para user
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

// Inicializa a criação dos usuários no localStorage
checkUsers();

// Certifica-se de que o DOM está totalmente carregado antes de adicionar os listeners
document.addEventListener('DOMContentLoaded', () => {
    // Event listener para o formulário de login
    document.querySelector('.login form').addEventListener('submit', handleLogin);

    // Event listener para o formulário de registro (se necessário)
    document.querySelector('.register form').addEventListener('submit', handleRegister);
});
