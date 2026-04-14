/* ============================================
   MODAL JS — Login / Registro (Event Delegation)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('loginModal');
  const modal = modalOverlay?.querySelector('.modal');
  const closeBtn = document.getElementById('modalClose');

  if (!modalOverlay || !modal) return;

  /* ——— Abrir Modal (delegação de eventos) ——— */

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-modal]');
    if (trigger) {
      e.preventDefault();
      openModal();
    }
  });

  /* ——— Fechar Modal ——— */

  // Botão X
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Click fora do modal
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Reset para estado de login
    modal.classList.remove('active');
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ——— Toggle Login ↔ Registro ——— */

  const signupLink = modal.querySelector('.signup-link');
  const loginLink = modal.querySelector('.login-link');

  if (signupLink) {
    signupLink.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  }

  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('active');
    });
  }

  /* ——— Autenticação com localStorage ——— */

  // Criar usuários de teste se não existirem
  if (!localStorage.getItem('adminUser')) {
    localStorage.setItem('adminUser', JSON.stringify({
      email: 'admin@example.com',
      password: 'admin123'
    }));
  }

  if (!localStorage.getItem('regularUser')) {
    localStorage.setItem('regularUser', JSON.stringify({
      email: 'user@example.com',
      password: 'user123'
    }));
  }

  // Handler de Login
  const loginForm = modal.querySelector('.modal__form-wrapper--login form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = loginForm.querySelector('input[type="text"]')?.value;
      const password = loginForm.querySelector('input[type="password"]')?.value;

      const admin = JSON.parse(localStorage.getItem('adminUser'));
      const user = JSON.parse(localStorage.getItem('regularUser'));

      if (email === admin?.email && password === admin?.password) {
        window.location.href = 'pages/adm.html';
      } else if (email === user?.email && password === user?.password) {
        window.location.href = 'pages/form.html';
      } else {
        // Checar usuários registrados
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const found = users.find(u => u.email === email && u.password === password);

        if (found) {
          window.location.href = 'pages/form.html';
        } else {
          showToast('Email ou senha inválidos', 'error');
        }
      }
    });
  }

  // Handler de Registro
  const registerForm = modal.querySelector('.modal__form-wrapper--register form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = registerForm.querySelector('input[type="email"]')?.value;
      const name = registerForm.querySelector('input[type="text"]')?.value;
      const password = registerForm.querySelector('input[type="password"]')?.value;

      if (!email || !name || !password) {
        showToast('Preencha todos os campos', 'error');
        return;
      }

      let users = JSON.parse(localStorage.getItem('users')) || [];

      if (users.some(u => u.email === email)) {
        showToast('Esse email já está registrado. Faça login.', 'error');
        return;
      }

      users.push({ email, name, password });
      localStorage.setItem('users', JSON.stringify(users));

      showToast('Conta criada com sucesso! Faça login.', 'success');

      // Voltar para login
      modal.classList.remove('active');
      registerForm.reset();
    });
  }

  /* ——— Toast Notification (substitui alert) ——— */

  function showToast(message, type = 'info') {
    // Remover toast existente
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;

    // Estilos inline para o toast (evita criar CSS extra)
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      padding: '12px 24px',
      borderRadius: '8px',
      color: '#fff',
      fontSize: '14px',
      fontWeight: '500',
      zIndex: '9999',
      animation: 'fadeInUp 0.3s ease',
      boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      background: type === 'error'
        ? 'linear-gradient(135deg, #e74c3c, #c0392b)'
        : 'linear-gradient(135deg, #27ae60, #2ecc71)'
    });

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = '0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
});
