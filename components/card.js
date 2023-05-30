function cardEl(el) {
  const cardCreateEl = document.createElement("div");
  cardCreateEl.innerHTML = `
    <div class="container-madre">
    
    <template id="template-card">

    <div class="container-cards">

      <img
        class="container-service__img"

        src="img/Course Website Landing Page Thumbnail 1.png"

        alt=""
      />
      <h4 class="container-services__title">Hola hijo de puta</h4>

      <p class="container-services__paragraph">

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis

        inventore unde autem architecto, eligendi facere

      </p>
      </div>
      </template>
      </div>`
    ;

  el.appendChild(cardCreateEl)

};