function headerComponent(el) {
  const headerCompEl = document.createElement('div');
  headerCompEl.innerHTML = `
    <nav class="header__nav">
    <a href="/">
    <img class="header__logo" src="https://img.logoipsum.com/245.svg" />
    </a>
    <ul class="header__list">
      <li class="header__item">
        <a href="portfolio.html" class="header__link">Portfolio</a>
      </li>
      <li class="header__item">
        <a href="servicios.html" class="header__link">Servicios</a>
      </li>
      <li class="header__item">
        <a href="contacto.html" class="header__link">Contacto</a>
      </li>
    </ul>
    <div class="hamburger">
      <span class="hamburger__item"></span>
      <span class="hamburger__item"></span>
      <span class="hamburger__item"></span>
    </div>
  </nav>` ;
  const hamburgerEl = headerCompEl.querySelector(".hamburger");
  const navListEl = headerCompEl.querySelector(".header__list");
  hamburgerEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("active");
    navListEl.classList.toggle("active");
  });
  el.appendChild(headerCompEl);
};