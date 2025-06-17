document.addEventListener('DOMContentLoaded', function() {
  // Pobierz wszystkie zakładki
  const tabs = document.querySelectorAll('.tab');
  
  // Funkcja zmieniająca aktywną zakładkę
  function setActiveTab(clickedTab) {
    // Usuń klasę active ze WSZYSTKICH zakładek (w tym "Strony głównej")
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Dodaj klasę active tylko do klikniętej zakładki
    clickedTab.classList.add('active');
    
    // Zapisz w localStorage (opcjonalne)
    localStorage.setItem('activeTab', clickedTab.getAttribute('href'));
  }

  // Obsługa kliknięcia w zakładkę
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      // e.preventDefault(); // Odkomentuj dla SPA (bez przeładowania strony)
      setActiveTab(this);
    });
  });

  // Przywróć aktywną zakładkę po przeładowaniu strony
  const savedTab = localStorage.getItem('activeTab');
  const currentPath = window.location.pathname;
  
  tabs.forEach(tab => {
    const tabHref = tab.getAttribute('href');
    if ((savedTab && tabHref === savedTab) || (!savedTab && tabHref === currentPath)) {
      setActiveTab(tab);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const trybBtn = document.querySelector(".tryb");
  const menuItems = document.querySelectorAll(".dropdown ul li");

  // Obsługa kliknięcia w ikonę trybu (otwieranie/zamykanie menu)
  trybBtn.addEventListener("click", function (event) {
    menu.classList.toggle("active");
    trybBtn.classList.toggle("active");
    event.stopPropagation(); // Zapobiega propagacji kliknięcia do document
  });

  // Obsługa kliknięcia w elementy menu (zamykanie)
  menuItems.forEach(item => {
    item.addEventListener("click", function () {
      menu.classList.remove("active");
      trybBtn.classList.remove("active");
    });
  });

  // Kliknięcie poza menu lub w .tryb zamyka je
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !trybBtn.contains(event.target)) {
      menu.classList.remove("active");
      trybBtn.classList.remove("active");
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const tryb = document.querySelector('.tryb');
  const rozwijaneMenu = document.querySelector('.rozwijane-menu');
  const body = document.body;

  tryb.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Toggle klas active
    this.classList.toggle('active');
    rozwijaneMenu.classList.toggle('active');
    
    // Blokada scrolla gdy menu jest otwarte
    if (this.classList.contains('active')) {
      body.style.overflow = 'hidden';
      rozwijaneMenu.style.height = '100vh';
    } else {
      body.style.overflow = '';
      rozwijaneMenu.style.height = '';
    }
  });

  // Zamknij menu po kliknięciu na link
  const menuLinks = document.querySelectorAll('.rozwijane-menu .tab');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      tryb.classList.remove('active');
      rozwijaneMenu.classList.remove('active');
      body.style.overflow = '';
    });
  });
});

