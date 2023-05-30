function footerComponent(el) {
  const footerCompEl = document.createElement('div');
  footerCompEl.innerHTML = `
    <div class="footer">
    <a href="/">
        <img
          class="footer__logo"
          src="https://img.logoipsum.com/245.svg"
          alt=""
          />
          </a>

        <div class="container">
          <div class="container-services">
          <a href="/">
            <span class="span">
              <!-- agregar a a los span -->
              <img class="container-services__img" src="img/home.png" alt="" />
              HOME</span
            >
            </a>
            <a href="servicios.html">
            <span class="span">
            <img class="container-services__img" src="img/phone.png" alt="" />
             
            SERVICIOS</span
            >
            </a>
            <a href="contacto.html">
            <span class="span">
              <img
                class="container-services__img"
                src="img/usuario.png"
                alt=""
              />
              CONTACTO</span>
              </a>
          </div>
          <div class="container-redes">
          <a href="https://github.com">
            <img class="container-redes__img" src="img/github.png" alt="" />
            </a>
            <a href="https://linkedin.com">
            <img class="container-redes__img" src="img/linkedin.png" alt="" />
            </a>
            <a href="http://twitter.com">
            <img class="container-redes__img" src="img/twitter.png" alt="" />
            </a>
          </div>
        </div>
        <tfoot>
        <a href="https://apx.school">
        <span class="tfoot-footer">
        ©2022 - https://apx.school
        </span>
        </a>
        </tfoot>
      </div>` ;

  el.appendChild(footerCompEl);
};