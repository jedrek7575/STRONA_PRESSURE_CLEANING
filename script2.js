// Obserwator dla h1
let observerH1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const menu = document.querySelector(".menu");
  
      if (entry.isIntersecting) {
        // Dodajemy klasę "visible" do h1
        entry.target.classList.add("visible");
  
        // Dodajemy klasę "white" do menu tylko wtedy, gdy jeszcze jej nie ma
        if (menu && !menu.classList.contains("white")) {
          menu.classList.add("white");
        }
      } else {
        // Usuwamy klasę "visible" z h1, ale nie z menu
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.9 });
  
  // Obserwator dla headtt
  let observerHeadtt = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const menu = document.querySelector(".menu");
  
      if (entry.isIntersecting) {
        // Usuwamy klasę "white" z menu, gdy headtt stanie się widoczny
        if (menu && menu.classList.contains("white")) {
          menu.classList.remove("white");
        }
      }
    });
  }, { threshold: 0.9 });
  
  // Obserwowanie h1
  document.querySelectorAll("h1").forEach(el => observerH1.observe(el));
  
  // Obserwowanie headtt
  document.querySelectorAll(".headtt").forEach(el => observerHeadtt.observe(el));
  