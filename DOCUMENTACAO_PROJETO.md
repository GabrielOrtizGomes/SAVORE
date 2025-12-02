# 📚 Documentação Completa do Projeto SAVORE

## Restaurante SAVORE - Website Institucional

**Desenvolvido por:** Gabriel Ortiz, Natã Peralta, Andrey Pires  
**Data:** Dezembro 2025

---

## 📋 Índice

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Bibliotecas e Tecnologias Utilizadas](#bibliotecas-e-tecnologias-utilizadas)
3. [Arquivo Principal: style.css](#arquivo-principal-stylecss)
4. [Arquivo JavaScript: main.js](#arquivo-javascript-mainjs)
5. [Páginas do Projeto](#páginas-do-projeto)
   -  [index.html - Página Inicial](#1-indexhtml---página-inicial)
   -  [cardapio.html - Cardápio](#2-cardapiohtml---cardápio)
   -  [chef.html - Chef](#3-chefhtml---chef)
   -  [reservas.html - Reservas](#4-reservashtml---reservas)
   -  [delivery.html - Delivery](#5-deliveryhtml---delivery)
   -  [blog.html - Blog](#6-bloghtml---blog)
   -  [galeria-ambiente.html - Galeria](#7-galeria-ambientehtml---galeria)
   -  [sobre.html - Sobre Nós](#8-sobrehtml---sobre-nós)
   -  [localizacao.html - Localização](#9-localizacaohtml---localização)
   -  [contato.html - Contato](#10-contatohtml---contato)
   -  [feedback.html - Feedback](#11-feedbackhtml---feedback)
   -  [faq.html - FAQ](#12-faqhtml---faq)

---

## 🎯 Visão Geral do Projeto

O **SAVORE** é um website institucional completo para um restaurante de alta gastronomia. O projeto foi desenvolvido utilizando HTML5, CSS3 e JavaScript, com foco em:

-  **Design responsivo** (Mobile First)
-  **Experiência do usuário (UX)** aprimorada
-  **Animações suaves** e transições elegantes
-  **Acessibilidade** e semântica HTML

### Estrutura de Pastas

```
ProjetoFinalheaderup/
├── index.html          # Página inicial
├── cardapio.html       # Cardápio do restaurante
├── chef.html           # Página do Chef
├── reservas.html       # Sistema de reservas
├── delivery.html       # Serviço de delivery
├── blog.html           # Blog gastronômico
├── galeria-ambiente.html # Galeria de fotos
├── sobre.html          # História do restaurante
├── localizacao.html    # Mapa e localização
├── contato.html        # Formulário de contato
├── feedback.html       # Avaliações de clientes
├── faq.html            # Perguntas frequentes
├── css/
│   ├── style.css       # Estilos globais
│   ├── index.css       # Estilos da home
│   ├── cardapio.css    # Estilos do cardápio
│   ├── chef.css        # Estilos página chef
│   ├── delivery.css    # Estilos delivery
│   ├── blog.css        # Estilos blog
│   ├── galeria.css     # Estilos galeria
│   ├── sobre.css       # Estilos sobre
│   ├── localizacao.css # Estilos localização
│   ├── contato.css     # Estilos contato
│   ├── feedback.css    # Estilos feedback
│   └── faq.css         # Estilos FAQ
├── js/
│   └── main.js         # JavaScript principal
└── img/                # Imagens do projeto
```

---

## 🛠️ Bibliotecas e Tecnologias Utilizadas

### 1. Bootstrap 5.3.2

```html
<link
   href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
   rel="stylesheet"
/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

**O que é:** Framework CSS mais popular do mundo para desenvolvimento responsivo.

**Por que usamos:**

-  **Sistema de Grid**: Layout responsivo com 12 colunas
-  **Componentes prontos**: Navbar, Modal, Carousel, Accordion
-  **Classes utilitárias**: `d-flex`, `justify-content-center`, `mb-3`, etc.
-  **Responsividade automática**: Breakpoints pré-definidos (sm, md, lg, xl)

**Componentes Bootstrap usados no projeto:**

-  `navbar` - Menu de navegação responsivo
-  `modal` - Janelas de confirmação
-  `carousel` - Galeria de imagens rotativas
-  `accordion` - FAQ com perguntas expansíveis
-  `collapse` - Menu mobile expansível

### 2. AOS (Animate On Scroll) 2.3.1

```html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

**O que é:** Biblioteca de animações que ativa efeitos quando elementos entram na viewport.

**Por que usamos:**

-  Animações suaves ao rolar a página
-  Melhora a experiência visual do usuário
-  Fácil implementação com atributos `data-aos`

**Atributos utilizados:**

```html
<!-- Efeitos de animação -->
data-aos="fade-up"
<!-- Aparece de baixo para cima -->
data-aos="fade-right"
<!-- Aparece da esquerda para direita -->
data-aos="fade-left"
<!-- Aparece da direita para esquerda -->
data-aos-delay="100"
<!-- Atraso de 100ms -->
data-aos-delay="200"
<!-- Atraso de 200ms -->
```

**Configuração no main.js:**

```javascript
AOS.init({
   duration: 800, // Duração da animação (ms)
   easing: "ease-in-out", // Tipo de suavização
   once: true, // Anima apenas uma vez
   offset: 100, // Distância do viewport para ativar
});
```

### 3. Lucide Icons

```html
<link
   rel="stylesheet"
   href="https://unpkg.com/lucide-static@latest/font/lucide.css"
/>
<script src="https://unpkg.com/lucide@latest"></script>
```

**O que é:** Biblioteca de ícones SVG leves e personalizáveis.

**Por que usamos:**

-  Ícones vetoriais escaláveis
-  Estilização via CSS
-  Mais de 1000 ícones disponíveis

**Exemplos de uso:**

```html
<i data-lucide="phone"></i>
<!-- Ícone de telefone -->
<i data-lucide="mail"></i>
<!-- Ícone de email -->
<i data-lucide="map-pin"></i>
<!-- Ícone de localização -->
<i data-lucide="facebook"></i>
<!-- Ícone do Facebook -->
<i class="lucide-award"></i>
<!-- Ícone de prêmio -->
```

### 4. jQuery 3.7.1

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

**O que é:** Biblioteca JavaScript para manipulação do DOM.

**Por que usamos:**

-  Simplifica seletores e manipulação DOM
-  Necessário para o filtro do cardápio
-  Animações como `fadeIn()` e `fadeOut()`

**Uso no projeto (filtro de cardápio):**

```javascript
$(".filter-btn").on("click", function () {
   const category = $(this).data("category");
   $(".menu-card").each(function () {
      if (category === "todos" || $(this).data("category") === category) {
         $(this).fadeIn(400);
      } else {
         $(this).fadeOut(400);
      }
   });
});
```

### 5. Flatpickr (Date Picker)

```html
<link
   rel="stylesheet"
   href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
```

**O que é:** Biblioteca leve para seleção de datas.

**Por que usamos:**

-  Calendário estilizado para reservas
-  Bloqueio de datas passadas
-  Formato de data brasileiro

**Configuração:**

```javascript
flatpickr("#dateInput", {
   minDate: "today", // Bloqueia datas passadas
   dateFormat: "d/m/Y", // Formato brasileiro
   locale: "pt", // Idioma português
});
```

### 6. GLightbox (Galeria)

```html
<link
   rel="stylesheet"
   href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/glightbox.min.js"></script>
```

**O que é:** Biblioteca para lightbox (zoom em imagens) moderno.

**Por que usamos:**

-  Visualização ampliada de fotos
-  Navegação touch-friendly
-  Efeitos de abertura suaves

**Configuração:**

```javascript
GLightbox({
   selector: ".glightbox",
   touchNavigation: true,
   loop: true,
   zoomable: true,
   openEffect: "zoom",
   closeEffect: "fade",
});
```

### 7. Smooth Scroll

```html
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@16.1.3/dist/smooth-scroll.polyfills.min.js"></script>
```

**O que é:** Biblioteca para rolagem suave entre âncoras.

**Configuração:**

```javascript
new SmoothScroll('a[href*="#"]', {
   speed: 800,
   speedAsDuration: true,
   easing: "easeInOutCubic",
});
```

---

## 🎨 Arquivo Principal: style.css

### Conceitos CSS Fundamentais

#### 1. Reset CSS e Box-Sizing

```css
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
```

**Explicação:**

-  `*` = Seletor universal (aplica a todos os elementos)
-  `margin: 0; padding: 0` = Remove espaçamentos padrão dos navegadores
-  `box-sizing: border-box` = **MUITO IMPORTANTE!** Faz com que padding e border sejam incluídos na largura/altura total do elemento

**Sem box-sizing: border-box:**

```
Largura total = width + padding + border
(100px + 20px + 2px = 122px)
```

**Com box-sizing: border-box:**

```
Largura total = width (inclui padding e border)
(100px total, conteúdo se ajusta)
```

#### 2. CSS Custom Properties (Variáveis CSS)

```css
:root {
   --neutral-50: #fafafa;
   --neutral-100: #f5f5f5;
   --neutral-200: #e5e5e5;
   --neutral-300: #d4d4d4;
   --neutral-400: #a3a3a3;
   --neutral-500: #737373;
   --neutral-600: #525252;
   --neutral-700: #404040;
   --neutral-800: #262626;
   --neutral-900: #171717;
   --neutral-950: #0a0a0a;
   --amber-500: #f59e0b;
   --amber-600: #d97706;
   --green-500: #22c55e;
}
```

**Explicação:**

-  `:root` = Pseudo-classe que representa o elemento raiz (html)
-  `--nome-variavel` = Declaração de variável CSS
-  Uso: `color: var(--amber-500);`

**Vantagens:**

-  Facilita manutenção (altere uma vez, atualiza todo o site)
-  Tema consistente
-  Possibilita temas dinâmicos com JavaScript

#### 3. Position Fixed (Header Fixo)

```css
#header {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 1050;
   background-color: rgba(23, 23, 23, 0.95);
   backdrop-filter: blur(8px);
}
```

**Explicação:**

-  `position: fixed` = Elemento fixo em relação à viewport (não rola com a página)
-  `top: 0; left: 0; right: 0` = Posiciona no topo ocupando toda a largura
-  `z-index: 1050` = Camada de sobreposição (quanto maior, mais "na frente")
-  `rgba(23, 23, 23, 0.95)` = Cor com 95% de opacidade
-  `backdrop-filter: blur(8px)` = Efeito de desfoque no fundo (glassmorphism)

#### 4. Flexbox

```css
.hero-buttons {
   display: flex;
   gap: 1rem;
   justify-content: center;
   flex-wrap: wrap;
}
```

**Explicação:**

-  `display: flex` = Ativa o modo flexbox
-  `gap: 1rem` = Espaçamento entre itens
-  `justify-content: center` = Centraliza horizontalmente
-  `flex-wrap: wrap` = Permite quebra de linha

**Propriedades principais do Flexbox:**

```css
/* Container (pai) */
display: flex;
flex-direction: row | column; /* Direção dos itens */
justify-content: center | space-between; /* Alinhamento horizontal */
align-items: center | flex-start; /* Alinhamento vertical */
gap: 1rem; /* Espaçamento */
flex-wrap: wrap; /* Quebra de linha */

/* Itens (filhos) */
flex-grow: 1; /* Cresce para ocupar espaço */
flex-shrink: 0; /* Não encolhe */
flex-basis: 200px; /* Tamanho base */
```

#### 5. CSS Grid

```css
.footer-grid {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 2.5rem;
}
```

**Explicação:**

-  `display: grid` = Ativa o modo grid
-  `grid-template-columns: repeat(4, 1fr)` = 4 colunas de tamanho igual
-  `1fr` = Unidade fracionária (divide o espaço disponível)
-  `gap` = Espaçamento entre células

**Exemplos de grid:**

```css
/* 3 colunas iguais */
grid-template-columns: repeat(3, 1fr);

/* Colunas responsivas automáticas */
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

/* Colunas específicas */
grid-template-columns: 200px 1fr 2fr;
```

#### 6. Media Queries (Responsividade)

```css
/* Mobile First: Estilos padrão para mobile */
.footer-grid {
   grid-template-columns: 1fr;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
   .footer-grid {
      grid-template-columns: repeat(2, 1fr);
   }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
   .footer-grid {
      grid-template-columns: repeat(4, 1fr);
   }
}
```

**Breakpoints comuns do Bootstrap:**

-  `576px` - Small (sm)
-  `768px` - Medium (md)
-  `992px` - Large (lg)
-  `1200px` - Extra large (xl)
-  `1400px` - XXL

#### 7. Transitions (Transições)

```css
.nav-link {
   color: var(--neutral-300);
   transition: color 0.3s;
}

.nav-link:hover {
   color: var(--amber-500);
}
```

**Explicação:**

-  `transition: color 0.3s` = Anima a mudança de cor em 0.3 segundos

**Sintaxe completa:**

```css
transition: propriedade duração timing-function delay;
transition: all 0.3s ease-in-out;
transition: transform 0.5s ease, opacity 0.3s;
```

**Timing functions:**

-  `ease` - Início e fim lentos
-  `ease-in` - Início lento
-  `ease-out` - Fim lento
-  `ease-in-out` - Início e fim lentos
-  `linear` - Velocidade constante

#### 8. Transform e Hover Effects

```css
.btn-primary:hover {
   background-color: var(--amber-600);
   transform: scale(1.05);
}

.dish-card:hover .dish-image img {
   transform: scale(1.1);
}

.feature-card:hover {
   transform: translateY(-4px);
   box-shadow: 0 12px 20px rgba(0, 0, 0, 0.4);
}
```

**Funções transform:**

-  `scale(1.1)` = Aumenta 10%
-  `translateX(10px)` = Move 10px para direita
-  `translateY(-4px)` = Move 4px para cima
-  `rotate(45deg)` = Rotaciona 45 graus

#### 9. Pseudo-elementos e Pseudo-classes

```css
/* Pseudo-classes (estado do elemento) */
.nav-link:hover {
} /* Mouse sobre */
.nav-link:active {
} /* Clicando */
.nav-link:focus {
} /* Com foco */
.nav-link:first-child {
} /* Primeiro filho */
.nav-link:last-child {
} /* Último filho */

/* Pseudo-elementos (parte do elemento) */
.btn::before {
} /* Antes do conteúdo */
.btn::after {
} /* Depois do conteúdo */
.input::placeholder {
} /* Texto placeholder */
```

#### 10. Object-fit (Imagens)

```css
.hero-image {
   width: 100%;
   height: 100%;
   object-fit: cover;
}
```

**Valores de object-fit:**

-  `cover` = Cobre todo o container (pode cortar)
-  `contain` = Mostra toda a imagem (pode ter espaço vazio)
-  `fill` = Estica para preencher
-  `none` = Tamanho original

#### 11. Clamp() para Tipografia Responsiva

```css
.hero-content h1 {
   font-size: clamp(3rem, 7vw, 5rem);
}
```

**Explicação:**

-  `clamp(mínimo, preferido, máximo)`
-  `3rem` = Nunca menor que 3rem
-  `7vw` = 7% da largura da viewport
-  `5rem` = Nunca maior que 5rem

---

## ⚡ Arquivo JavaScript: main.js

### Conceitos JavaScript Utilizados

#### 1. DOMContentLoaded

```javascript
document.addEventListener("DOMContentLoaded", function () {
   // Código aqui executa quando o HTML está pronto
});
```

**Explicação:**

-  Garante que o código só execute após o DOM estar completamente carregado
-  Evita erros de "elemento não encontrado"

#### 2. Seletores DOM

```javascript
// Seleciona um elemento por ID
const yearSpan = document.getElementById("year");

// Seleciona todos os elementos com uma classe
const navLinks = document.querySelectorAll(".nav-link");

// Seleciona o primeiro elemento que corresponde
const menuCollapse = document.querySelector("#navLinks");
```

#### 3. Manipulação de Conteúdo

```javascript
// Alterar texto
yearSpan.textContent = new Date().getFullYear();

// Alterar atributo
icon.setAttribute("data-lucide", iconName);

// Verificar classe
if (menuCollapse.classList.contains("show")) {
   // ...
}
```

#### 4. Event Listeners

```javascript
navLinks.forEach((link) => {
   link.addEventListener("click", () => {
      // Código executado ao clicar
   });
});
```

#### 5. Verificação de Bibliotecas

```javascript
// Verifica se a biblioteca está carregada antes de usar
if (typeof AOS !== "undefined") {
   AOS.init({
      /* configurações */
   });
}

if (typeof Swiper !== "undefined" && document.querySelector(".dishesSwiper")) {
   new Swiper(".dishesSwiper", {
      /* configurações */
   });
}
```

#### 6. Bootstrap Collapse API

```javascript
const bsCollapse = new bootstrap.Collapse(menuCollapse, {
   toggle: false,
});

bsCollapse.hide(); // Fecha o menu
bsCollapse.show(); // Abre o menu
```

---

## 📄 Páginas do Projeto

---

### 1. index.html - Página Inicial

**Arquivo CSS:** `css/index.css`

**Descrição:** Landing page principal do restaurante com hero section, pratos em destaque e chamadas para ação.

#### Estrutura HTML Principal

```html
<!-- Hero Section -->
<section class="hero">
   <div class="hero-overlay"></div>
   <img src="..." alt="Restaurante" class="hero-image" />
   <div class="hero-content" data-aos="fade-up">
      <h1>SAVORE</h1>
      <p>by Alessandro Martins</p>
      <div class="hero-buttons">
         <a href="cardapio.html" class="btn btn-primary">Ver Cardápio</a>
         <a href="reservas.html" class="btn btn-secondary">Fazer Reserva</a>
      </div>
   </div>
</section>
```

#### Conceitos CSS Específicos

**Hero com Overlay:**

```css
.hero {
   height: 85vh; /* 85% da altura da viewport */
   min-height: 500px; /* Altura mínima */
   position: relative; /* Para posicionar filhos absolutos */
   display: flex;
   align-items: center;
   justify-content: center;
   overflow: hidden; /* Esconde conteúdo que extrapola */
}

.hero-overlay {
   position: absolute;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.7); /* Escurece a imagem */
   z-index: 1; /* Acima da imagem */
}

.hero-content {
   position: relative;
   z-index: 2; /* Acima do overlay */
}
```

**Dish Cards com Grid:**

```css
.dish-grid {
   display: flex;
   flex-direction: column;
   gap: 2rem;
}

/* Efeito de zoom na imagem ao hover */
.dish-card:hover .dish-image img {
   transform: scale(1.1);
}
```

---

### 2. cardapio.html - Cardápio

**Arquivo CSS:** `css/cardapio.css`

**Descrição:** Página do cardápio com filtro por categorias e cards de pratos.

#### Funcionalidade Principal: Filtro de Categorias

**HTML dos botões:**

```html
<div class="filter-buttons">
   <button class="filter-btn active" data-category="todos">Todos</button>
   <button class="filter-btn" data-category="entradas">Entradas</button>
   <button class="filter-btn" data-category="principais">
      Pratos Principais
   </button>
   <button class="filter-btn" data-category="sobremesas">Sobremesas</button>
</div>
```

**HTML dos cards:**

```html
<div class="menu-card" data-category="entradas">
   <!-- Conteúdo do card -->
</div>
```

**JavaScript (jQuery):**

```javascript
$(".filter-btn").on("click", function () {
   const category = $(this).data("category");

   // Atualiza classe ativa
   $(".filter-btn").removeClass("active");
   $(this).addClass("active");

   // Filtra os cards
   $(".menu-card").each(function () {
      const cardCategory = $(this).data("category");
      if (category === "todos" || cardCategory === category) {
         $(this).fadeIn(400);
      } else {
         $(this).fadeOut(400);
      }
   });
});
```

#### Conceitos CSS

**Botões de Filtro:**

```css
.filter-btn {
   border: 2px solid var(--primary-color);
   background: transparent;
   padding: 8px 20px;
   border-radius: 30px; /* Bordas bem arredondadas */
   cursor: pointer;
   transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
   background: var(--primary-color);
   color: var(--white);
}

.filter-btn.active {
   box-shadow: 0 4px 10px rgba(245, 158, 11, 0.3);
}
```

**Grid Responsivo com auto-fill:**

```css
.menu-grid {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   gap: 2rem;
}
```

-  `auto-fill` = Cria quantas colunas couberem
-  `minmax(300px, 1fr)` = Mínimo 300px, máximo 1 fração

---

### 3. chef.html - Chef

**Arquivo CSS:** `css/chef.css`

**Descrição:** Apresentação do chef com biografia, prêmios e linha do tempo.

#### Conceitos CSS Específicos

**Layout Alternado (Texto/Imagem):**

```css
.chef-profile-container {
   display: grid;
   grid-template-columns: 1fr;
   gap: 3rem;
   align-items: center;
}

/* Mobile: Imagem primeiro, texto depois */
.chef-content {
   order: 2;
}
.chef-image-wrapper {
   order: 1;
}

/* Desktop: Texto primeiro, imagem depois */
@media (min-width: 1024px) {
   .chef-profile-container {
      grid-template-columns: 1fr 1fr;
   }
   .chef-content {
      order: 1;
   }
   .chef-image-wrapper {
      order: 2;
   }
}
```

**Timeline (Linha do Tempo):**

```css
.timeline-item {
   display: flex;
   gap: 1.5rem;
   padding: 1.5rem;
   background-color: var(--neutral-900);
   border-left: 4px solid var(--amber-500); /* Barra lateral colorida */
   border-radius: 0.5rem;
   transition: transform 0.3s;
}

.timeline-item:hover {
   transform: translateX(10px); /* Move para direita ao hover */
}

.timeline-year {
   width: 60px;
   height: 60px;
   background-color: var(--amber-500);
   border-radius: 50%; /* Círculo perfeito */
   display: flex;
   align-items: center;
   justify-content: center;
}
```

---

### 4. reservas.html - Reservas

**Descrição:** Formulário de reservas com date picker integrado.

#### Conceito: Integração Flatpickr

**HTML:**

```html
<input
   type="text"
   id="dateInput"
   name="data"
   placeholder="Selecione a data"
   required
/>
```

**JavaScript:**

```javascript
flatpickr("#dateInput", {
   minDate: "today", // Não permite datas passadas
   dateFormat: "d/m/Y", // Formato brasileiro
   locale: "pt", // Idioma português
});
```

#### Conceito: Modal de Confirmação Bootstrap

**HTML:**

```html
<div class="modal fade" id="reservaModal" tabindex="-1">
   <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
         <div class="modal-body">
            <h2>Reserva Confirmada!</h2>
            <button
               type="button"
               class="btn btn-primary"
               data-bs-dismiss="modal"
            >
               Fechar
            </button>
         </div>
      </div>
   </div>
</div>
```

**JavaScript para abrir:**

```javascript
const modal = new bootstrap.Modal(document.getElementById("reservaModal"));
modal.show();
```

---

### 5. delivery.html - Delivery

**Arquivo CSS:** `css/delivery.css`

**Descrição:** Informações sobre o serviço de delivery com passos visuais.

#### Conceitos CSS

**Cards de Passos Numerados:**

```css
.step-icon-wrapper {
   flex-shrink: 0; /* Não encolhe */
   width: 2.5rem;
   height: 2.5rem;
   border-radius: 50%;
   background-color: var(--amber-500);
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-weight: bold;
}
```

**Feature Cards com Ícones:**

```css
.feature-icon {
   width: 4rem;
   height: 4rem;
   color: var(--amber-500);
   margin: 0 auto 1.5rem;
   background-color: rgba(245, 158, 11, 0.05); /* Fundo sutil */
   border-radius: 50%;
   padding: 0.75rem;
}
```

---

### 6. blog.html - Blog

**Arquivo CSS:** `css/blog.css`

**Descrição:** Blog gastronômico com posts filtráveis e modais de leitura.

#### Conceitos CSS

**Post em Destaque:**

```css
.blog-post-featured {
   border: 2px solid var(--amber-500);
}

.featured-badge {
   position: absolute;
   top: 1rem;
   left: 1rem;
   background: var(--amber-500);
   color: black;
   padding: 0.5rem 1rem;
   border-radius: 4px;
   font-weight: bold;
}
```

**Tags de Categoria:**

```css
.category-tag {
   display: inline-block;
   padding: 0.25rem 0.75rem;
   background-color: rgba(245, 158, 11, 0.1);
   color: var(--amber-500);
   font-size: 0.75rem;
   font-weight: 600;
   border-radius: 9999px; /* Pill shape */
}
```

---

### 7. galeria-ambiente.html - Galeria

**Arquivo CSS:** `css/galeria.css`

**Descrição:** Galeria de fotos do ambiente com carrosséis e lightbox.

#### Conceito: Bootstrap Carousel

```html
<div id="carouselSalao" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">
      <div class="carousel-item active">
         <img src="img/salao.jpg" class="d-block w-100" alt="Salão" />
      </div>
      <div class="carousel-item">
         <img src="img/salao2.jpg" class="d-block w-100" alt="Salão 2" />
      </div>
   </div>
   <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselSalao"
      data-bs-slide="prev"
   >
      <span class="carousel-control-prev-icon"></span>
   </button>
   <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselSalao"
      data-bs-slide="next"
   >
      <span class="carousel-control-next-icon"></span>
   </button>
</div>
```

#### Conceito: Overlay em Imagens

```css
.gallery-item {
   position: relative;
   overflow: hidden;
}

.gallery-overlay {
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
   padding: 1rem;
}
```

---

### 8. sobre.html - Sobre Nós

**Arquivo CSS:** `css/sobre.css`

**Descrição:** História do restaurante, valores e estatísticas.

#### Conceitos CSS

**Seção de Estatísticas com Gradiente:**

```css
.stats-container {
   background: linear-gradient(135deg, var(--neutral-800), var(--neutral-900));
   padding: 4rem 2rem;
   border-radius: 8px;
}

.stat-number {
   font-size: 3rem;
   font-weight: bold;
   color: var(--amber-500);
}
```

**Valores em Cards:**

```css
.value-icon {
   width: 3rem;
   height: 3rem;
   color: var(--amber-500);
   margin: 0 auto 1.5rem; /* Centraliza e adiciona espaço */
}
```

---

### 9. localizacao.html - Localização

**Arquivo CSS:** `css/localizacao.css`

**Descrição:** Mapa interativo, endereço e pontos de referência.

#### Conceito: Embed de Google Maps

```html
<div class="map-iframe-wrapper">
   <iframe
      src="https://www.google.com/maps/embed?pb=..."
      width="100%"
      height="100%"
      allowfullscreen=""
      loading="lazy"
   >
   </iframe>
</div>
```

```css
.map-iframe-wrapper {
   width: 100%;
   height: 400px;
   border-radius: 8px;
   overflow: hidden;
   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.map-iframe-wrapper iframe {
   border: 0; /* Remove borda padrão */
}
```

#### Conceito: Cards de Pontos de Referência

```css
.landmark-item {
   display: flex;
   gap: 1rem;
   align-items: center;
}

.landmark-image {
   width: 100%;
   height: 150px;
   object-fit: cover;
   border-radius: 8px;
}
```

---

### 10. contato.html - Contato

**Arquivo CSS:** `css/contato.css`

**Descrição:** Formulário de contato e informações de comunicação.

#### Conceito: Formulário Estilizado

```css
.form-container {
   max-width: 600px;
   margin: 0 auto;
   padding: 2.5rem;
   background-color: var(--neutral-900);
   border-radius: 8px;
}

.form-control {
   background-color: var(--neutral-800);
   border: 1px solid var(--neutral-700);
   color: white;
}

.form-control:focus {
   border-color: var(--amber-500);
   box-shadow: 0 0 0 0.25rem rgba(245, 158, 11, 0.25);
}
```

---

### 11. feedback.html - Feedback

**Arquivo CSS:** `css/feedback.css`

**Descrição:** Avaliações de clientes com estatísticas e cards de reviews.

#### Conceito: Barras de Progresso com CSS Variables

**HTML:**

```html
<div class="stat-bar" style="--stat-width: 98%;"></div>
```

**CSS:**

```css
.stat-bar-wrapper {
   flex: 1;
   height: 10px;
   background: var(--neutral-700);
   border-radius: 4px;
   overflow: hidden;
}

.stat-bar {
   height: 100%;
   background: var(--amber-500);
   width: var(--stat-width); /* Usa a variável inline */
   transition: width 0.5s ease-out;
}
```

#### Conceito: Cards de Review

```css
.review-card {
   padding: 1.5rem;
   background: var(--neutral-800);
   border-radius: 8px;
   border-left: 4px solid var(--amber-500);
}

.review-badge {
   display: inline-block;
   padding: 0.25rem 0.5rem;
   background: rgba(245, 158, 11, 0.1);
   color: var(--amber-500);
   border-radius: 4px;
   font-size: 0.75rem;
}
```

---

### 12. faq.html - FAQ

**Arquivo CSS:** `css/faq.css`

**Descrição:** Perguntas frequentes organizadas em accordion.

#### Conceito: Bootstrap Accordion Customizado

**HTML:**

```html
<div class="accordion" id="accordionReservas">
   <div class="accordion-item faq-accordion-item">
      <h3 class="accordion-header" id="heading1">
         <button
            class="accordion-button collapsed faq-accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
         >
            <span>Pergunta aqui?</span>
         </button>
      </h3>
      <div
         id="collapse1"
         class="accordion-collapse collapse"
         data-bs-parent="#accordionReservas"
      >
         <div class="accordion-body faq-accordion-body">
            <p>Resposta aqui.</p>
         </div>
      </div>
   </div>
</div>
```

**CSS para sobrescrever estilos Bootstrap:**

```css
.faq-accordion-item {
   background: var(--neutral-800);
   border: 1px solid var(--neutral-700);
   border-radius: 8px;
   margin-bottom: 1rem;
}

.faq-accordion-button {
   background: transparent;
   color: var(--neutral-100);
}

/* Muda a cor da seta do accordion para branco */
.accordion-button::after {
   filter: brightness(0) invert(1);
}

.faq-accordion-body {
   padding: 1.25rem;
   color: var(--neutral-300);
   border-top: 1px solid var(--neutral-700);
}
```

---

## 🎓 Resumo dos Conceitos Principais

### CSS

| Conceito             | Descrição                        | Exemplo                             |
| -------------------- | -------------------------------- | ----------------------------------- |
| **Box-sizing**       | Inclui padding/border na largura | `box-sizing: border-box`            |
| **CSS Variables**    | Variáveis reutilizáveis          | `--cor: #f59e0b`                    |
| **Flexbox**          | Layout unidimensional            | `display: flex`                     |
| **Grid**             | Layout bidimensional             | `display: grid`                     |
| **Media Queries**    | Responsividade                   | `@media (min-width: 768px)`         |
| **Transitions**      | Animações suaves                 | `transition: all 0.3s`              |
| **Transform**        | Transformações 2D/3D             | `transform: scale(1.1)`             |
| **Position**         | Posicionamento                   | `position: fixed/absolute/relative` |
| **Pseudo-classes**   | Estados                          | `:hover`, `:focus`, `:active`       |
| **Pseudo-elementos** | Partes do elemento               | `::before`, `::after`               |

### JavaScript

| Conceito             | Descrição            | Exemplo                                             |
| -------------------- | -------------------- | --------------------------------------------------- |
| **DOMContentLoaded** | Aguarda DOM carregar | `document.addEventListener("DOMContentLoaded", fn)` |
| **Seletores**        | Selecionar elementos | `querySelector`, `getElementById`                   |
| **Event Listeners**  | Ouvir eventos        | `element.addEventListener("click", fn)`             |
| **Manipulação DOM**  | Alterar conteúdo     | `element.textContent = "texto"`                     |
| **jQuery**           | Biblioteca DOM       | `$(".classe").fadeIn()`                             |

### Bibliotecas

| Biblioteca        | Uso Principal                     |
| ----------------- | --------------------------------- |
| **Bootstrap 5**   | Grid, componentes, responsividade |
| **AOS**           | Animações ao scroll               |
| **Lucide Icons**  | Ícones SVG                        |
| **jQuery**        | Manipulação DOM, animações        |
| **Flatpickr**     | Seletor de data                   |
| **GLightbox**     | Galeria de imagens                |
| **Smooth Scroll** | Rolagem suave                     |

---

## 📝 Considerações Finais

Este projeto demonstra a aplicação prática de conceitos modernos de desenvolvimento web:

1. **Mobile First**: Estilos base para mobile, expandidos com media queries
2. **Componentização CSS**: Cada página tem seu CSS específico
3. **Reutilização**: Variáveis CSS e classes utilitárias
4. **Acessibilidade**: Semântica HTML, atributos ARIA, contraste adequado
5. **Performance**: Lazy loading de imagens, bibliotecas via CDN
6. **UX**: Animações suaves, feedback visual, navegação intuitiva

---

**Documento criado para fins educacionais**  
**Projeto SAVORE - Dezembro 2025**
