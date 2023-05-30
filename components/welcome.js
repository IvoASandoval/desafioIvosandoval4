function welcomeCardEl(i) {
  const componentWelEl = document.createElement("div");
  componentWelEl.innerHTML = `
  <div class="contenedor-template-wel">
    <template id="welcome-template">
      <div class="wel-container">
        <h1 class="wel-container__title">
          Hola <br />
          <span class="wel-container__title--span"> que tal </span>
        </h1>
        <div class="contenedor-imagenes">
          <img class="wel-container__img" src="img/astronave.png" alt="" />
          <div class="shadow"></div>
        </div>
      </div>
    </template>
    </div> 
    `;
  i.appendChild(componentWelEl)
};
