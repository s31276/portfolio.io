'use strict';

{
  // API
  function inViewCallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }

  const toTop = document.getElementById('to_top');
  const header = document.querySelector('header');
  const inViewObserver = new IntersectionObserver(inViewCallback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    inViewObserver.observe(el);
  });

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // モーダル
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');
  const input = document.getElementById('input-name');
  const mail = document.getElementById('input-mail');
  const textarea = document.getElementById('deatil');
  const check = document.querySelector('#check');

  open.addEventListener('click', () => {
    if (input.value == "" || mail.value == "" || textarea.value == "") {
      alert("必須項目が入力されていません");
      return;
    }
    if (check.checked !== true) {
      alert("チェックされていません");
      return;
    }
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  // アコーディオン
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('answer');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('answer');
        }
      });
    });
  });

  // スクロール
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 94;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

  // ハンバーガメニュー

  const openMenu = document.getElementById('openMenu');
  const overlay = document.querySelector('.overlay');
  const closeMenu = document.getElementById('nav-close');

  openMenu.addEventListener('click', () => {
    overlay.classList.add('show');
  });
  closeMenu.addEventListener('click', () => {
    overlay.classList.remove('show');
  });
  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
  });

  //スライド
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.getElementById('slide');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('btn-hidden');
    next.classList.remove('btn-hidden');

    if (currentIndex === 0) {
      prev.classList.add('btn-hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('btn-hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDocs();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.work-nav').appendChild(button);
    }
    dots[0].classList.add('current');
  }

  function updateDocs() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateDocs();
    updateButtons();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateDocs();
    updateButtons();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });
}