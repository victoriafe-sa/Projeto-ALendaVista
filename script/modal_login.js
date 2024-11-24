// Obter o modal
var modal = document.getElementById("loginModal");

// Obter o botão que abre o modal
var btn = document.getElementById("loginBtn");

// Obter o botão de fechar
var closeBtn = document.getElementById("closeBtn");

// Quando o usuário clica no botão, abre o modal (se você tiver um botão com id 'loginBtn')
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clica no botão de fechar, fecha o modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
