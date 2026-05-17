/* ============================================================
   main.js — Portafolio Litzy Castellanos
   Cursor personalizado · Navbar · Animaciones de scroll
   Carrousel circular
   ============================================================ */

// Esperamos a que toda la página HTML cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

  /* ── Cursor personalizado ──────────────────────────────── */
  // Buscamos los dos elementos del cursor: el puntito y el anillo
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  // Solo activamos el cursor custom en pantallas grandes (no en celular)
  if (dot && ring && window.innerWidth > 900) {
    // Guardamos la posición actual del mouse
    let mouseX = 0, mouseY = 0;
    // Guardamos la posición del anillo (va un poco atrás del mouse)
    let ringX  = 0, ringY  = 0;

    // Cada vez que el mouse se mueve, actualizamos su posición
    document.addEventListener('mousemove', e => {
      mouseX = e.clientX; // posición horizontal
      mouseY = e.clientY; // posición vertical
      // El puntito sigue al mouse de forma inmediata
      dot.style.left  = mouseX + 'px';
      dot.style.top   = mouseY + 'px';
    });

    // El anillo sigue al mouse con un pequeño retraso (efecto suave)
    function animateRing() {
      // Va acercándose poco a poco al mouse (12% por frame)
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      // Se llama a sí misma 60 veces por segundo para animación fluida
      requestAnimationFrame(animateRing);
    }
    animateRing(); // arrancamos la animación

    // Cuando el mouse pasa sobre un elemento clickeable, el cursor se agranda
    const interactivos = document.querySelectorAll(
      'a, button, .project-card, .skill-item, .nav-toggle, input, textarea, .carousel-btn, .carousel-dot, .masonry-card, .carousel-card'
    );
    interactivos.forEach(el => {
      // Al entrar: agrandamos el cursor
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
      // Al salir: volvemos al tamaño normal
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // Si el mouse sale de la ventana del navegador, ocultamos el cursor
    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    // Cuando vuelve, lo mostramos
    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    });
  }

  /* ── Navbar scroll ─────────────────────────────────────── */
  // Cuando el usuario hace scroll, el navbar cambia de apariencia
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      // Si bajamos más de 60px, le agregamos la clase 'scrolled' (fondo oscuro)
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true }); // passive: true mejora el rendimiento del scroll
  }

  /* ── Menú móvil ────────────────────────────────────────── */
  // El botón de las 3 líneas (hamburguesa) abre el menú en celular
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      // Alternamos la clase 'open' — si está abierto lo cerramos y viceversa
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen); // accesibilidad
      // Bloqueamos el scroll del body cuando el menú está abierto
      document.body.style.overflow = isOpen ? 'hidden' : '';
      
      // Animamos las 3 líneas del botón para convertirlas en una X
      const spans = toggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(6px) rotate(45deg)';  // línea arriba → diagonal
        spans[1].style.opacity   = '0';                               // línea del medio desaparece
        spans[2].style.transform = 'translateY(-6px) rotate(-45deg)'; // línea abajo → diagonal
      } else {
        // Volvemos las líneas a su posición original
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Si el usuario hace clic en un enlace del menú, lo cerramos automáticamente
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
        const spans = toggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      });
    });
  }

  /* ── Reveal on scroll (IntersectionObserver) ───────────── */
  // Los elementos con clase 'reveal' aparecen con animación al hacer scroll
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    // IntersectionObserver detecta cuando un elemento entra en la pantalla
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) { // si el elemento ya es visible
          // data-delay define cuánto esperar antes de animar (escalonado)
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('visible'), delay * 120);
          observer.unobserve(entry.target); // dejamos de observarlo (ya apareció)
        }
      });
    }, { threshold: 0.12 }); // se activa cuando el 12% del elemento es visible

    reveals.forEach(el => observer.observe(el)); // observamos cada elemento
  }

  /* ── Skill bars animadas ───────────────────────────────── */
  // Las barras de habilidades se llenan cuando el usuario llega a esa sección
  const skillFills = document.querySelectorAll('.skill-fill');
  if (skillFills.length) {
    const skillObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          // El porcentaje viene del atributo data-width en el HTML
          const target = fill.dataset.width || '0%';
          // Esperamos 200ms y luego llenamos la barra
          setTimeout(() => { fill.style.width = target; }, 200);
          skillObs.unobserve(fill);
        }
      });
    }, { threshold: 0.5 }); // se activa cuando el 50% es visible

    skillFills.forEach(f => skillObs.observe(f));
  }

  /* ── Timeline reveal ───────────────────────────────────── */
  // Los elementos de la línea de tiempo aparecen uno por uno al hacer scroll
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timelineItems.length) {
    const tlObs = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Cada ítem aparece 150ms después del anterior (efecto cascada)
          setTimeout(() => entry.target.classList.add('visible'), i * 150);
          tlObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    timelineItems.forEach(item => tlObs.observe(item));
  }

  /* ── Marca link activo en navbar ───────────────────────── */
  // Resalta en el menú qué página estás viendo actualmente
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    // Limpiamos rutas relativas para comparar solo el nombre del archivo
    const cleanHref = href.replace('../', '').replace('./', '');
    if (cleanHref === currentPage || (currentPage === '' && cleanHref === 'index.html')) {
      a.classList.add('active'); // le ponemos la clase active al enlace actual
    }
  });

  /* ── Contador animado (estadísticas) ───────────────────── */
  // Los números de estadísticas cuentan desde 0 hasta su valor final
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cntObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseInt(el.dataset.count, 10); // número final
          const suffix = el.dataset.suffix || '';         // sufijo opcional (ej: "+")
          let current  = 0;                               // empezamos desde 0
          const step   = Math.ceil(target / 40);          // cuánto sumar por tick
          // setInterval ejecuta el código cada 40ms hasta llegar al número final
          const timer  = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current + suffix;
            if (current >= target) clearInterval(timer); // paramos cuando llegamos
          }, 40);
          cntObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => cntObs.observe(c));
  }

  /* ── Scroll suave para anclas internas ─────────────────── */
  // Cuando haces clic en un enlace tipo "#contacto", baja suavemente
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return; // ignoramos enlaces vacíos
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault(); // evitamos el salto brusco por defecto
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Inicializar reveals visibles al cargar ────────────── */
  // Si algún elemento 'reveal' ya está en pantalla al cargar, lo mostramos
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect(); // posición del elemento en pantalla
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible'); // ya está visible, lo mostramos de una
      }
    });
  }, 100); // esperamos 100ms para que el DOM esté listo

  /* ═══════════════════════════════════════════════════════════
     CARROUSEL CIRCULAR
     Funciona con botones anterior/siguiente y dots de navegación
     ═══════════════════════════════════════════════════════════ */
  const track        = document.getElementById('carouselTrack');
  const prev         = document.getElementById('carouselPrev');
  const next         = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');

  if (track && prev && next && dotsContainer) {
    const cards      = track.querySelectorAll('.carousel-card');
    const totalCards = cards.length;
    let currentIndex = 0; // empezamos en la primera tarjeta

    // Creamos un dot (puntito) por cada tarjeta
    for (let i = 0; i < totalCards; i++) {
      const dot = document.createElement('span');
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('active'); // el primero empieza activo
      dot.addEventListener('click', () => goToSlide(i)); // clic en dot → ir a esa tarjeta
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    // Actualiza la posición visual del carrusel y los dots
    function updateCarousel() {
      // Movemos el track horizontalmente según el índice actual
      const offset = -currentIndex * (100 / 2);
      track.style.transform = `translateX(${offset}%)`;

      // Marcamos el dot activo
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });

      // Desactivamos el botón anterior si estamos al inicio
      prev.style.opacity      = currentIndex === 0 ? '0.3' : '1';
      prev.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
      // Desactivamos el botón siguiente si estamos al final
      next.style.opacity      = currentIndex >= totalCards - 3 ? '0.3' : '1';
      next.style.pointerEvents = currentIndex >= totalCards - 3 ? 'none' : 'auto';
    }

    // Navega a una tarjeta específica por índice
    function goToSlide(index) {
      // Math.max y Math.min aseguran que no salgamos del rango válido
      currentIndex = Math.max(0, Math.min(index, totalCards - 2));
      updateCarousel();
    }

    // Botones de navegación
    prev.addEventListener('click', () => goToSlide(currentIndex - 1));
    next.addEventListener('click', () => goToSlide(currentIndex + 1));

    // Soporte para swipe táctil (celular)
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX; // guardamos dónde empezó el dedo
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX; // cuánto se movió
      if (Math.abs(diff) > 50) { // solo si el swipe fue de más de 50px
        diff > 0 ? goToSlide(currentIndex + 1) : goToSlide(currentIndex - 1);
      }
    });

    updateCarousel(); // inicializamos el carrusel
  }

  /* ── Tostón — gira 3 veces al cargar y queda estático ─── */
  // Buscamos el elemento de la foto circular
  const toston = document.querySelector('.hero-toston');
  if (toston) {
    toston.style.transform  = 'rotateY(0deg)';           // posición inicial: de frente
    toston.style.transition = 'transform 1.8s ease-in-out'; // duración y suavidad del giro
    setTimeout(() => {
      // Después de 500ms, giramos 1080° (3 vueltas completas) y se queda ahí
      toston.style.transform = 'rotateY(1080deg)';
    }, 500);
  }

  // Mensaje en la consola del navegador (solo para devs que inspeccionen el código)
  console.log('%c✨ Litzy Castellanos %c· %cPortafolio listo %c🚀',
    'color:#BFA181;font-size:1.1rem;',
    '',
    'color:#D4C5B0;',
    '');
});