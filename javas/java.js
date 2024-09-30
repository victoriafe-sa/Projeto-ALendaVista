//FORMULARIO WHATSAPP
document.getElementById('zap').onclick = function (event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const whatsappMessage = `Olá, meu nome é ${nome}. Meu telefone é ${telefone}. Meu email é ${email}. Estou interessado em ${assunto}. Mensagem: ${mensagem}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
};

//FORMULARIO EMAIL
document.getElementById('emailBtn').onclick = function (event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const emailDestinatario = "alendavistacompany@gmail.com"; // Substitua pelo seu e-mail
    const emailAssunto = `Contato de ${nome}: ${assunto}`;
    const emailBody = `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`;

    window.location.href = `mailto:${emailDestinatario}?subject=${encodeURIComponent(emailAssunto)}&body=${encodeURIComponent(emailBody)}`;
};

// WHATSAPP
document.getElementById('whatsappLogo').addEventListener('click', function() {
    const whatsappNumber = '1234567890'; // Substitua pelo número do destinatário
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
    window.open(whatsappURL, '_blank');
});

// INSTAGRAM
document.getElementById("instagramLogo_alv").addEventListener("click", function() {
    window.open("https://www.instagram.com/instagram/", "_blank");
});