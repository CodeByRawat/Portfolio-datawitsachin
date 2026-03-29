/* ==============================================
   DATAWITHSACHIN.COM — JavaScript
   ============================================= */

// ---- Spline Watermark Killer (Aggressive & Lightweight) ----
(function () {
  function nukeWatermarks() {
    // 1. Direct query for any spline links in normal DOM
    const links = document.querySelectorAll('a[href*="spline.design"], .spline-watermark');
    links.forEach(el => {
      // If the link is wrapped in a container that only exists for the watermark, nuke the container.
      const parent = el.parentElement;
      if (parent && parent !== document.body && parent.children.length === 1 && parent.tagName.toLowerCase() === 'div') {
        parent.remove();
      } else {
        el.remove();
      }
    });

    // 2. Deep Shadow DOM query (for newer or custom Spline implementations)
    document.querySelectorAll('*').forEach(node => {
      if (node.shadowRoot) {
        const shadowLinks = node.shadowRoot.querySelectorAll('a[href*="spline.design"], .spline-watermark');
        shadowLinks.forEach(el => el.remove());
      }
    });
  }

  // Initial sweeps
  nukeWatermarks();

  // Non-blocking observer on body matching dynamic insertions
  const observer = new MutationObserver((mutations) => {
    let shouldNuke = false;
    for (const m of mutations) {
      if (m.addedNodes.length > 0) shouldNuke = true;
    }
    if (shouldNuke) {
      // Defer to avoid blocking rendering
      requestAnimationFrame(nukeWatermarks);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Fallback high-frequency sweep during the heavy load phase (first 5 seconds)
  let sweepCount = 0;
  const interval = setInterval(() => {
    nukeWatermarks();
    if (++sweepCount > 50) clearInterval(interval);
  }, 100);
})();


// ---- Cursor Glow ----
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

// ---- Meteor Cursor ----
(function() {
  const t = document.createElement("div");
  t.id = "meteor-cursor";
  t.innerHTML = `<div class="meteor-tail"></div><div class="meteor-head"></div>`;
  document.body.appendChild(t);
  
  const tail = t.querySelector(".meteor-tail");
  const head = t.querySelector(".meteor-head");
  
  let x = window.innerWidth / 2, y = window.innerHeight / 2;
  let tx = x, ty = y;
  let lastAngle = 0;
  
  window.addEventListener("mousemove", e => {
    tx = e.clientX;
    ty = e.clientY;
  });
  
  function update() {
    let dx = tx - x;
    let dy = ty - y;
    x += dx * 0.45; // Smooth tracking
    y += dy * 0.45;
    
    let speed = Math.sqrt(dx*dx + dy*dy);
    if (speed > 0.5) {
      lastAngle = Math.atan2(dy, dx) * 180 / Math.PI;
    }
    
    t.style.transform = `translate(${x}px, ${y}px)`;
    
    // Tail elongation
    let tailLen = Math.min(speed * 3 + 10, 150);
    tail.style.width = tailLen + "px";
    
    // Straight tail pointing backwards
    tail.style.transform = `translateY(-1.5px) rotate(${lastAngle + 180}deg)`;
    tail.style.opacity = speed > 1 ? Math.min(speed / 10, 1) : 0;
    
    requestAnimationFrame(update);
  }
  update();
  
  // Hover effects
  setTimeout(() => {
    const interactables = document.querySelectorAll('a, button, input, textarea, select, .service-card, .btn-primary, .btn-ghost');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        head.style.transform = 'scale(2)';
        head.style.background = 'var(--accent)';
      });
      el.addEventListener('mouseleave', () => {
        head.style.transform = 'scale(1)';
        head.style.background = '#ffffff';
      });
    });
  }, 500);
})();

// ---- Hero Invert Circle (mix-blend-mode: difference) ----
(function () {
  const wrap   = document.getElementById('hero-title');
  const circle = document.getElementById('invert-circle');
  if (!wrap || !circle) return;

  let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  let tx = cx, ty = cy;

  // Track universally to prevent desyncs and frame hitching
  window.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
  });

  function tick() {
    cx += (tx - cx) * 0.15;
    cy += (ty - cy) * 0.15;
    circle.style.left = cx + 'px';
    circle.style.top  = cy + 'px';
    requestAnimationFrame(tick);
  }
  tick(); // Loop forever to guarantee smooth positional follow

  // CSS transitions handle the pop-in/pop-out scale effect
  wrap.addEventListener('mouseenter', () => circle.classList.add('active'));
  wrap.addEventListener('mouseleave', () => circle.classList.remove('active'));
})();



// ---- Spline Drag Blocker ----
(function () {
  const blockers = document.querySelectorAll('.spline-drag-blocker');
  if (!blockers.length) return;

  blockers.forEach(blocker => {
    const wrap = blocker.parentElement;
    const viewer = wrap ? wrap.querySelector('spline-viewer') : null;

    // Block every flavour of "press" so drag-orbit never starts
    ['pointerdown', 'mousedown', 'touchstart'].forEach(type => {
      blocker.addEventListener(type, e => {
        e.preventDefault();
        e.stopPropagation();
      }, { passive: false });
    });

    // Forward mouse movement to the viewer element
    if (viewer) {
      blocker.addEventListener('mousemove', e => {
        viewer.dispatchEvent(new MouseEvent('mousemove', {
          bubbles: true, cancelable: false,
          clientX: e.clientX, clientY: e.clientY,
          movementX: e.movementX, movementY: e.movementY,
        }));
      });
    }

    // Also prevent context-menu on right-click
    blocker.addEventListener('contextmenu', e => e.preventDefault());
  });
})();


// ---- Hero Spline Blob (Canvas Runtime) ----
(function () {
  const canvas = document.getElementById('canvas3d');
  if (!canvas) return;

  import('https://esm.sh/@splinetool/runtime')
    .then(({ Application }) => {
      const app = new Application(canvas);
      // Loading the self-hosted clean splinecode file
      app.load('https://raw.githubusercontent.com/CodeByRawat/codebyrawat/main/scene-clean.splinecode').then(() => {
        // Automatic reaction for mobile (no hover)
        let autoMoveInterval;
        let angle = 0;
        
        function manageMobileAutoReact() {
          const isMobile = window.innerWidth <= 768;
          if (isMobile && !autoMoveInterval) {
            autoMoveInterval = setInterval(() => {
              angle += 0.05;
              const cx = window.innerWidth / 2;
              const cy = window.innerHeight / 2;
              const r = 40; // small radius
              const px = cx + Math.cos(angle) * r;
              const py = cy + Math.sin(angle) * r;
              
              // Create the pointer event
              const ptrEvent = new PointerEvent('pointermove', {
                clientX: px,
                clientY: py,
                screenX: px,
                screenY: py,
                bubbles: true,
                cancelable: true,
                pointerType: 'mouse'
              });
              
              // In many browsers, synthetic PointerEvents do not reliably populate pageX/pageY.
              // Spline heavily relies on these coordinates for 'Look At' triggers.
              // Without this, pageY often defaults to zero (causing the robot to permanently look straight up at the very top of the document).
              Object.defineProperty(ptrEvent, 'pageX', { get: () => px + window.scrollX });
              Object.defineProperty(ptrEvent, 'pageY', { get: () => py + window.scrollY });
              
              window.dispatchEvent(ptrEvent);
            }, 50);
          } else if (!isMobile && autoMoveInterval) {
            clearInterval(autoMoveInterval);
            autoMoveInterval = null;
          }
        }
        
        // Setup initial and resize listeners
        manageMobileAutoReact();
        window.addEventListener('resize', manageMobileAutoReact);

        // Allow react on click (synthesize pointerdown/up)
        canvas.addEventListener('click', (e) => {
          canvas.dispatchEvent(new PointerEvent('pointerdown', {
            clientX: e.clientX, clientY: e.clientY, bubbles: true, cancelable: true, pointerType: 'mouse'
          }));
          setTimeout(() => {
            canvas.dispatchEvent(new PointerEvent('pointerup', {
              clientX: e.clientX, clientY: e.clientY, bubbles: true, cancelable: true, pointerType: 'mouse'
            }));
          }, 150);
        });
      });
    })
    .catch(err => console.warn('Hero Spline failed:', err));
})();


// ---- Particle Canvas (Interactive) ----
(function() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const mouse = { x: -1000, y: -1000, active: false };
  const particleCount = window.innerWidth <= 768 ? 70 : 150; // Decreased particle density for a cleaner look

  function resize() {
    const oldW = W || window.innerWidth;
    const oldH = H || window.innerHeight;

    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;

    // Linearly distribute existing particles to the new screen dimensions
    if (particles.length > 0) {
      const scaleX = W / oldW;
      const scaleY = H / oldH;
      particles.forEach(p => {
        p.x *= scaleX;
        p.y *= scaleY;
        p.baseX *= scaleX;
        p.baseY *= scaleY;
      });
    }
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });
  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  function Particle() {
    this.init();
  }
  Particle.prototype.init = function() {
    this.baseX = Math.random() * W;
    this.baseY = Math.random() * H;
    this.x = this.baseX;
    this.y = this.baseY;
    this.size = Math.random() * 1.5 + 0.5;
    this.baseVx = (Math.random() - 0.5) * 0.3; // Slower intrinsic drift
    this.baseVy = (Math.random() - 0.5) * 0.3;
    this.vx = 0;
    this.vy = 0;
    this.accX = 0;
    this.accY = 0;
    this.friction = 0.92; // Settles faster after scatter
  };
  Particle.prototype.update = function() {
    // 1. Advance the base positions so the stars still slowly meander
    this.baseX += this.baseVx;
    this.baseY += this.baseVy;

    // 2. Loop base positions at boundaries
    if (this.baseX < 0) this.baseX += W;
    if (this.baseX > W) this.baseX -= W;
    if (this.baseY < 0) this.baseY += H;
    if (this.baseY > H) this.baseY -= H;

    // 3. Elastic Spring force tying actual position to the roaming base position
    let springDx = this.baseX - this.x;
    let springDy = this.baseY - this.y;
    this.accX += springDx * 0.02; // How strongly they snap back
    this.accY += springDy * 0.02;

    // 4. Mouse Interactive Scattering
    if (mouse.active) {
      let mdx = mouse.x - this.x;
      let mdy = mouse.y - this.y;
      let dist = Math.sqrt(mdx * mdx + mdy * mdy);
      let forceRadius = 140;

      if (dist < forceRadius) {
        let force = (forceRadius - dist) / forceRadius;
        // Push aggressively away from mouse
        this.accX -= (mdx / dist) * force * 1.2;
        this.accY -= (mdy / dist) * force * 1.2;
      }
    }

    // 5. Apply physics integration
    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;
    
    this.x += this.vx;
    this.y += this.vy;
    
    this.accX = 0;
    this.accY = 0;
  };
  Particle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 255, 140, 0.4)'; // Theme colored dots
    ctx.fill();
  };

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }
  loop();
})();

// ---- Navbar Scroll Effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ---- Hamburger Menu ----
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ---- Page Navigation ----
function showPage(page) {
  const pages  = document.querySelectorAll('.page');
  const links  = document.querySelectorAll('.nav-link');

  pages.forEach(p => p.classList.remove('active'));
  links.forEach(l => l.classList.remove('active'));

  const target = document.getElementById('page-' + page);
  const link   = document.getElementById('nav-' + page);
  if (target) { target.classList.add('active'); window.scrollTo(0,0); }
  if (link)   link.classList.add('active');
}

document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const page = el.dataset.page;
    history.pushState({}, '', '#' + page);
    showPage(page);
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Handle direct hash navigation on load
(function() {
  const hash = window.location.hash.replace('#', '');
  if (['home','blog','contact'].includes(hash)) {
    showPage(hash);
  } else {
    showPage('home');
  }
})();

// ---- Blog Filters ----
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.blog-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = '';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ---- Intersection Observer (Reveal) ----
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

function observeReveal() {
  document.querySelectorAll('.service-card, .step, .blog-card, .process-steps, .contact-wrap').forEach((el, i) => {
    el.classList.add('reveal');
    if (i % 4 === 1) el.classList.add('reveal-delay-1');
    if (i % 4 === 2) el.classList.add('reveal-delay-2');
    if (i % 4 === 3) el.classList.add('reveal-delay-3');
    io.observe(el);
  });
}
observeReveal();

// ---- Service Card Glow on Mouse ----
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x    = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y    = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0,255,140,0.06) 0%, rgba(255,255,255,0.025) 60%)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

// ---- Contact Form (Home & Page) ----
function handleForm(formId, successId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<span>Sending…</span>';

    // Collect values manually since there are no generic 'name' attributes on the inputs
    const isHome = formId === 'contact-form';
    const nameVal = document.getElementById(isHome ? 'form-name' : 'cp-name')?.value || '';
    const emailVal = document.getElementById(isHome ? 'form-email' : 'cp-email')?.value || '';
    const serviceVal = document.getElementById(isHome ? 'form-service' : 'cp-service')?.value || '';
    const budgetVal = document.getElementById(isHome ? 'form-budget' : null)?.value;
    const messageVal = document.getElementById(isHome ? 'form-message' : 'cp-message')?.value || '';

    const payload = {
      name: nameVal,
      email: emailVal,
      service: serviceVal,
      message: messageVal
    };
    if (budgetVal) {
      payload.budget = budgetVal;
    }

    try {
      await fetch("https://formsubmit.co/ajax/sachinrawat.in.com@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.error('Form submission error:', err);
    }
    
    // Reset and show success regardless of CORS or adblock (since it usually succeeds silently anyway)
    btn.innerHTML = '<span>Send Message</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';
    btn.disabled = false;
    form.reset();
    const success = document.getElementById(successId);
    if (success) {
      success.classList.add('visible');
      setTimeout(() => success.classList.remove('visible'), 5000);
    }
  });
}
handleForm('contact-form', 'form-success');
handleForm('contact-page-form', 'cp-form-success');

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  const href = a.getAttribute('href');
  if (!['#home','#blog','#contact'].includes(href)) return;
  if (a.dataset.page) return; // handled by page nav
  a.addEventListener('click', e => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---- Counter Animation ----
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = el.textContent;
    const num    = parseInt(target);
    if (isNaN(num)) return;
    const suffix = target.replace(/\d/g, '');
    let start    = 0;
    const step   = Math.ceil(num / 40);
    const timer  = setInterval(() => {
      start += step;
      if (start >= num) { start = num; clearInterval(timer); }
      el.textContent = start + suffix;
    }, 30);
  });
}

const statsEl = document.querySelector('.hero-stats');
if (statsEl) {
  const statsObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      statsObs.disconnect();
    }
  }, { threshold: 0.5 });
  statsObs.observe(statsEl);
}

// ---- Lazy-load Services Spline Robot via @splinetool/runtime ----
// Uses canvas + runtime API (not <spline-viewer>) to avoid dual WebGL
// context competition. Loaded only when the section scrolls into view.
(function () {
  const servicesSection = document.getElementById('services');
  const canvas          = document.getElementById('services-spline-canvas');
  const loader          = document.getElementById('services-spline-loader');
  if (!servicesSection || !canvas) return;

  let loaded = false;

  const lazyObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !loaded) {
      loaded = true;
      lazyObs.disconnect();

      // Dynamically import the Spline runtime from ESM CDN
      import('https://esm.sh/@splinetool/runtime')
        .then(({ Application }) => {
          const spline = new Application(canvas);
          return spline.load('https://prod.spline.design/t5CtFVumxrL9X-lW/scene.splinecode')
            .then(() => {
              // Hide the loading spinner once scene is ready
              if (loader) {
                loader.classList.add('hidden');
                setTimeout(() => loader.style.display = 'none', 650);
              }
            });
        })
        .catch(err => {
          console.warn('Services Spline failed to load:', err);
          if (loader) loader.style.display = 'none';
        });
    }
  }, { rootMargin: '150px' }); // pre-load slightly before visible

  lazyObs.observe(servicesSection);
})();

// ---- Floating Parallax Robot Effect ----
// Makes the robot smoothly follow the cursor even when you are fully outside the bounds of the section
(function() {
  const robotContainer = document.getElementById('spline-robot-col');
  if (!robotContainer) return;
  
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animate() {
    // Increased lerp speed for zippier following
    currentX = lerp(currentX, targetX, 0.1);
    currentY = lerp(currentY, targetY, 0.1);
    robotContainer.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animate);
  }

  // Always running to allow global tracking
  requestAnimationFrame(animate);

  // Track globally on document
  document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Much more aggressive travel distances
    const maxTravelX = 280; // pixels left/right
    const maxTravelY = 180; // pixels up/down
    
    targetX = ((e.clientX - centerX) / centerX) * maxTravelX;
    targetY = ((e.clientY - centerY) / centerY) * maxTravelY;
  });
})();
