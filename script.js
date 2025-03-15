document.addEventListener('DOMContentLoaded', function() {
    // Terminal typing effect
    const terminalText = document.querySelector('.terminal-text');
    const terminalLoader = document.querySelector('.terminal-loader');
    const terminalCursor = document.querySelector('.terminal-cursor');
    
    const fullText = `> Maks.currentLocation
  "Lviv, Ukraine"
  
  > Maks.education
  "Bachelor's in Computer Science"
  
  > Maks.yearsOfExperience
  3
  
  > Maks.interests
  ["Web Development", "UI/UX Design", "Open Source", "New Technologies"]
  
  > Maks.contactMe()
  "Let's work together!"
  `;
  
    // Simulate terminal loading
    setTimeout(() => {
      terminalLoader.style.display = 'none';
      terminalCursor.style.display = 'inline-block';
      
      // Start typing effect
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          terminalText.textContent += fullText.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
    }, 1500);
  
    // Blinking cursor
    setInterval(() => {
      terminalCursor.style.opacity = terminalCursor.style.opacity === '0' ? '1' : '0';
    }, 500);
  
    // Hero section animations
    const heroElements = document.querySelectorAll('.hero h1, .hero p, .hero .btn-group');
    heroElements.forEach((element, index) => {
      element.style.opacity = '0';
      setTimeout(() => {
        element.style.opacity = '1';
      }, 200 * (index + 1));
    });
  
    // Add floating code lines animation
    const heroAnimation = document.querySelector('.hero-animation');
    for (let i = 0; i < 10; i++) {
      const codeLine = document.createElement('div');
      codeLine.classList.add('code-line');
      codeLine.style.top = `${Math.random() * 100}%`;
      codeLine.style.animationDelay = `${Math.random() * 5}s`;
      codeLine.style.animationDuration = `${8 + Math.random() * 10}s`;
      heroAnimation.appendChild(codeLine);
    }
  
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const contactSuccess = document.querySelector('.contact-success');
    const btnText = document.querySelector('.btn-text');
    const btnLoading = document.querySelector('.btn-loading');
    const sendAnother = document.getElementById('send-another');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        btnText.classList.add('hidden');
        btnLoading.classList.remove('hidden');
        
        // Simulate form submission
        setTimeout(() => {
          contactForm.classList.add('hidden');
          contactSuccess.classList.remove('hidden');
        }, 1500);
      });
    }
  
    if (sendAnother) {
      sendAnother.addEventListener('click', function() {
        contactSuccess.classList.add('hidden');
        contactForm.classList.remove('hidden');
        btnText.classList.remove('hidden');
        btnLoading.classList.add('hidden');
        contactForm.reset();
      });
    }
  
    // Scroll animations
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeIn 1s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      section.style.opacity = '0';
      observer.observe(section);
    });
  
    // Add matrix rain effect to hero section
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = 600;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-2';
    canvas.style.opacity = '0.2';
    
    const hero = document.querySelector('.hero');
    hero.style.position = 'relative';
    hero.appendChild(canvas);
    
    // Matrix rain effect
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]()=+-*/|&^%$#@!~';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#4ade80';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    }
    
    setInterval(draw, 35);
  
    // Responsive navigation
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      });
    }
    document.getElementById("resume-btn").addEventListener("click", function() {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      });
    document.getElementById("view-btn").addEventListener("click", function() {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      });
    document.getElementById("contact-btn").addEventListener("click", function() {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      });
  });