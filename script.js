document.addEventListener('DOMContentLoaded', function () {
  const tryb = document.querySelector('.tryb');
  const karty = document.querySelector('.karty');
  const body = document.body;
  const tabs = document.querySelectorAll('.karty .tab');

  // Kliknięcie w ikonę tryb (menu)
  tryb.addEventListener('click', function (e) {
    e.preventDefault();

    tryb.classList.toggle('active');
    karty.classList.toggle('unzip');

    if (karty.classList.contains('unzip')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  });

  // Kliknięcie w zakładkę .tab
  tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      // Ustaw aktywną zakładkę
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // Zapisz do localStorage
      localStorage.setItem('activeTab', this.getAttribute('href'));

      // Zamknij menu mobilne
      tryb.classList.remove('active');
      karty.classList.remove('unzip');
      body.style.overflow = '';
    });
  });

  // Przywróć aktywną zakładkę po przeładowaniu strony
  const savedTab = localStorage.getItem('activeTab');
  const currentPath = window.location.pathname;

  tabs.forEach(tab => {
    const tabHref = tab.getAttribute('href');
    if ((savedTab && tabHref === savedTab) || (!savedTab && tabHref === currentPath)) {
      tab.classList.add('active');
    }
  });

  // Kliknięcie poza menu zamyka je
  document.addEventListener('click', function (e) {
    if (!karty.contains(e.target) && !tryb.contains(e.target)) {
      tryb.classList.remove('active');
      karty.classList.remove('unzip');
      body.style.overflow = '';
    }
  });
});

