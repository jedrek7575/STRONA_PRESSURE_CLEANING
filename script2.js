// Obserwator dla h1
let observerH1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const menu = document.querySelector(".menu");
    const tabs = document.querySelectorAll(".tab");

    if (entry.isIntersecting) {
      // Dodajemy klasę "visible" do h1
      entry.target.classList.add("visible");

      // Dodajemy klasę "white" do menu i każdej karty .tab
      if (menu && !menu.classList.contains("white")) {
        menu.classList.add("white");
      }

      tabs.forEach(tab => {
        if (!tab.classList.contains("white")) {
          tab.classList.add("white");
        }
      });
    } else {
      // Usuwamy klasę "visible" z h1
      entry.target.classList.remove("visible");
    }
  });
}, { threshold: 0.9 });

// Obserwator dla headtt
let observerHeadtt = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const menu = document.querySelector(".menu");
    const tabs = document.querySelectorAll(".tab");

    if (entry.isIntersecting) {
      // Usuwamy klasę "white" z menu i z każdej .tab
      if (menu && menu.classList.contains("white")) {
        menu.classList.remove("white");
      }

      tabs.forEach(tab => {
        tab.classList.remove("white");
      });
    }
  });
}, { threshold: 0.9 });

// Obserwowanie h1
document.querySelectorAll("h1").forEach(el => observerH1.observe(el));

// Obserwowanie headtt
document.querySelectorAll(".headtt").forEach(el => observerHeadtt.observe(el));


