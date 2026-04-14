/* ============================================
   HEADER JS — Scroll Effect + Hamburger Menu
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  const overlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav__link');

  /* ——— Efeito Scroll no Header ——— */

  const handleScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // estado inicial

  /* ——— Hamburger Toggle ——— */

  const toggleMenu = () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('active');

    if (overlay) {
      overlay.classList.toggle('active');
    }

    // Impedir scroll do body quando menu aberto
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  if (overlay) {
    overlay.addEventListener('click', toggleMenu);
  }

  /* ——— Fechar menu ao clicar em link ——— */

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  /* ——— Smooth Scroll para Ancoragens ——— */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');

      // Ignora se for apenas "#"
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ——— Scroll Reveal ——— */

  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));
  }
});
