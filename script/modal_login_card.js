
    // Função para lidar com o login
    function handleLogin(event) {
        event.preventDefault(); // Impede o envio do formulário para fazer validação via JS

        // Obter os valores inseridos no formulário
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Definir as credenciais de administrador (exemplo)
        const adminEmail = 'admin@example.com';
        const adminPassword = 'admin123';

        // Verificar se as credenciais estão corretas
        if (email === adminEmail && password === adminPassword) {
            // Redirecionar para a página form.html se as credenciais forem válidas
            window.location.href = 'form.html';
        } else {
            // Caso as credenciais não sejam válidas, mostrar um alerta
            alert('Email ou senha inválidos!');
        }
    }

    // Fechar o modal ao clicar no botão de fechar
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('loginModal').style.display = 'none';
    });
