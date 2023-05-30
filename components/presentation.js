function presCardEl(pp = {}) {
  const pcardEl = document.createElement("div");
  pcardEl.innerHTML =
    `
<template id="template-presentation">
<div class="presentation-container">
  <div class="presentation-container__text">
    <h2 class="presentation-container__text--title">Soy Ivo</h2>
    <p class="presentation-container__text--paragraph">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel
      aut quo? Quos eligendi esse corporis facilis perferendis possimus
      fugiat tenetur! Ratione dolorem perspiciatis, perferendis voluptate
      officia vitae impedit corporis.aut quo? Quos eligendi esse corporis
      facilis perferendis possimus fugiat tenetur! Ratione dolorem
      perspiciatis, perferendis voluptate officia vitae impedit corporis.
    </p>
  </div>
  <img class="presentation-container__img" src="" alt="" />
</div>
</template>
`
  const t = pcardEl.querySelector('#template-presentation');
  const c = document.querySelector('.pres-container');
  t.content.querySelector('.presentation-container__img').src = pp.imagen;
  t.content.querySelector('.presentation-container__text--title').textContent = pp.titulo;
  t.content.querySelector('.presentation-container__text--paragraph').textContent = pp.texto;

  const clone = document.importNode(t.content, true);
  c.appendChild(clone);
};

function addPresentation() {
  return fetch("https://cdn.contentful.com/spaces/zwwrf2atjupp/environments/master/entries?access_token=RHpibft3v8j78VzU0mWayeySpv6_zaORfJGSe_MLiuM&&content_type=portfoliobio")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      // console.log(data, "soy este data");
      const imagen = data.includes.Asset[0].fields.file.url;
      const fieldsCollections = {
        imagen: imagen,
        titulo: data.items[0].fields.titlebio,
        texto: data.items[0].fields.txtbio,
      }
      return fieldsCollections;
    });
};

function main() {
  addPresentation().then((pres) => {
    // console.log(pres);
    presCardEl(pres)
    // for (const p of pres) {
    // }
  });

}

main();