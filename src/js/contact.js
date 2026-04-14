/* ============================================
   CONTACT JS — WhatsApp + Email
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const fields = {
    nome: document.getElementById('contactNome'),
    telefone: document.getElementById('contactTelefone'),
    email: document.getElementById('contactEmail'),
    assunto: document.getElementById('contactAssunto'),
    mensagem: document.getElementById('contactMensagem')
  };

  const whatsappBtn = document.getElementById('btnWhatsapp');
  const emailBtn = document.getElementById('btnEmail');

  /* ——— Validação simples ——— */

  function getFormData() {
    const data = {};
    let isValid = true;

    for (const [key, el] of Object.entries(fields)) {
      if (!el) continue;
      data[key] = el.value.trim();

      if (!data[key] && el.required) {
        el.style.borderColor = '#e74c3c';
        isValid = false;
      } else {
        el.style.borderColor = '';
      }
    }

    return { data, isValid };
  }

  /* ——— WhatsApp ——— */

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const { data, isValid } = getFormData();

      if (!isValid) return;

      const message = [
        `Olá, meu nome é ${data.nome}.`,
        `Telefone: ${data.telefone}`,
        `Email: ${data.email}`,
        `Interesse: ${data.assunto}`,
        `Mensagem: ${data.mensagem}`
      ].join('\n');

      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  /* ——— Email ——— */

  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const { data, isValid } = getFormData();

      if (!isValid) return;

      const destinatario = 'alendavistacompany@gmail.com';
      const assunto = `Contato de ${data.nome}: ${data.assunto}`;
      const body = [
        `Nome: ${data.nome}`,
        `Telefone: ${data.telefone}`,
        `Email: ${data.email}`,
        `Assunto: ${data.assunto}`,
        `Mensagem: ${data.mensagem}`
      ].join('\n');

      window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;
    });
  }
});
