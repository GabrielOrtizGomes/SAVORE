document.addEventListener("DOMContentLoaded", function () {
   // 1. ATUALIZAÇÃO AUTOMÁTICA DO ANO (Footer)
   // Pega o elemento com id="year" e coloca o ano atual
   const yearSpan = document.getElementById("year");
   if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
   }

   // 2. FECHAR O MENU MOBILE AO CLICAR
   const navLinks = document.querySelectorAll(".nav-link");
   const menuCollapse = document.getElementById("navLinks");

   if (menuCollapse && typeof bootstrap !== "undefined") {
      const bsCollapse = new bootstrap.Collapse(menuCollapse, {
         toggle: false,
      });

      navLinks.forEach((link) => {
         link.addEventListener("click", () => {
            if (menuCollapse.classList.contains("show")) {
               bsCollapse.hide();
            }
         });
      });
   }

   // 3. INICIALIZAÇÃO DE BIBLIOTECAS VISUAIS

   // AOS (Animate On Scroll)
   if (typeof AOS !== "undefined") {
      AOS.init({
         duration: 800,
         easing: "ease-in-out",
         once: true,
         offset: 100,
      });
   }

   // Lucide Icons
   if (typeof lucide !== "undefined") {
      // Converter ícones com class="lucide-xxx" para data-lucide="xxx"
      document.querySelectorAll('i[class*="lucide-"]').forEach((icon) => {
         const classes = icon.className.split(" ");
         const lucideClass = classes.find(
            (c) => c.startsWith("lucide-") && c !== "lucide"
         );
         if (lucideClass) {
            const iconName = lucideClass.replace("lucide-", "");
            icon.setAttribute("data-lucide", iconName);
         }
      });

      lucide.createIcons();
   }

   // 4. INICIALIZAÇÃO DE COMPONENTES ESPECÍFICOS
   initSwiper();
   initMenuFilter();
   initDatePicker();
   initGallery();
   initSmoothScroll();
});

/* =========================================
   FUNÇÕES AUXILIARES
   ========================================= */

// Swiper Slider (Carrossel de Pratos)
function initSwiper() {
   if (
      typeof Swiper !== "undefined" &&
      document.querySelector(".dishesSwiper")
   ) {
      new Swiper(".dishesSwiper", {
         modules: [Swiper.Autoplay, Swiper.Pagination, Swiper.Navigation],
         spaceBetween: 30,
         slidesPerView: 1,
         autoplay: { delay: 4000, disableOnInteraction: false },
         pagination: { el: ".swiper-pagination", clickable: true },
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         },
         breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
         },
      });
   }
}

// Menu Filter (Filtro do Cardápio - Requer jQuery)
function initMenuFilter() {
   if (typeof $ !== "undefined" && $(".filter-btn").length > 0) {
      $(".filter-btn").on("click", function () {
         const category = $(this).data("category");

         // Atualiza classe ativa no botão
         $(".filter-btn").removeClass("active");
         $(this).addClass("active");

         // Filtra os cards
         $(".menu-card").each(function () {
            const cardCategory = $(this).data("category");
            // Se for 'todos' ou a categoria bater, mostra. Senão, esconde.
            if (category === "todos" || cardCategory === category) {
               $(this).fadeIn(400);
            } else {
               $(this).fadeOut(400);
            }
         });
      });
   }
}

// Date Picker (Calendário de Reservas)
function initDatePicker() {
   const dateInput = document.getElementById("dateInput");
   if (dateInput && typeof flatpickr !== "undefined") {
      flatpickr(dateInput, {
         minDate: "today",
         dateFormat: "d/m/Y",
         locale: "pt", // Certifique-se de importar o locale pt do flatpickr se quiser traduzido
      });
   }
}

// Gallery Lightbox (Zoom nas imagens)
function initGallery() {
   // Verifica se existe a biblioteca e elementos de galeria
   if (
      typeof GLightbox !== "undefined" &&
      (document.querySelector(".gallery-item") ||
         document.querySelector(".glightbox"))
   ) {
      GLightbox({
         selector: ".glightbox", // Padrão recomendado: usar links com classe .glightbox
         touchNavigation: true,
         loop: true,
         zoomable: true,
         draggable: true,
         openEffect: "zoom",
         closeEffect: "fade",
      });
   }
}

// Smooth Scroll (Rolagem Suave)
function initSmoothScroll() {
   if (typeof SmoothScroll !== "undefined") {
      new SmoothScroll('a[href*="#"]', {
         speed: 800,
         speedAsDuration: true,
         easing: "easeInOutCubic",
      });
   }
}
