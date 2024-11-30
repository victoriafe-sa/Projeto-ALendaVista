// Obter o modal
var modal = document.getElementById("loginModal");

// Obter o botão que abre o login
var btn = document.getElementById("loginBtn")
var btn1 = document.getElementById("loginBut1")
var btn2 = document.getElementById("loginBut2")
var btn3 = document.getElementById("loginBut3")
var btn4 = document.getElementById("loginBut4");

// Obter o botão de fechar
var closeBtn = document.getElementById("closeBtn");

// Quando clica no botão, abre o modal)
btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
    modal.style.display = "block";
}
btn4.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clica no botão de fechar, fecha
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
