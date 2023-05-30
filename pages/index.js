function getWelcome(params = {}) {
    const t = document.querySelector("#welcome-template");
    const co = document.querySelector(".welcome-container-index");
    t.content.querySelector(".wel-container__title").textContent = params.title;
    t.content.querySelector(".wel-container__img").src = params.imag;

    const clon = document.importNode(t.content, true);
    co.appendChild(clon);
}

function addWelcome() {
    return fetch("https://cdn.contentful.com/spaces/zwwrf2atjupp/environments/master/entries?access_token=RHpibft3v8j78VzU0mWayeySpv6_zaORfJGSe_MLiuM&&content_type=portfolioW")
        .then(res => {
            return res.json()
        })
        .then((data) => {
            const imagen = data.includes.Asset[1].fields.file.url;
            // console.log(data, "aca stoy");
            const fieldsCollections = {
                title: data.items[2].fields.title,
                imag: imagen,
            };
            return fieldsCollections
        });
}

function main() {

    addWelcome().then((work) => {
        // console.log(work);
        getWelcome(work)
    });
    const welcomeCard = document.querySelector(".welcome-container-index")
    welcomeCardEl(welcomeCard);

    const card = document.querySelector(".container-servicios");
    cardEl(card);


    const headerEl = document.querySelector(".header-container");
    headerComponent(headerEl);


    const footerEl = document.querySelector(".footer-container");
    footerComponent(footerEl);


};

main();
