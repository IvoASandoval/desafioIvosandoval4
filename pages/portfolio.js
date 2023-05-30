function getSerC(params = {}) {
    const cont = document.querySelector('.container-madre');
    const temp = document.querySelector('#template-card');

    temp.content.querySelector(".container-service__img").src = params.imagen;
    temp.content.querySelector(".container-services__paragraph").textContent = params.paragraph;
    temp.content.querySelector(".container-services__title").textContent = params.titulo;

    const clone = document.importNode(temp.content, true);
    cont.appendChild(clone);
}

function addService() {
    return fetch("https://cdn.contentful.com/spaces/zwwrf2atjupp/environments/master/entries?access_token=RHpibft3v8j78VzU0mWayeySpv6_zaORfJGSe_MLiuM&&content_type=portfolioWorks")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            const fieldsColletions = data.items.map((item) => {
                const imag = searchImg(item.fields.imagenW.sys.id, data);
                return {
                    titulo: item.fields.tituloW,
                    paragraph: item.fields.infoW,
                    imagen: imag.fields.file.url,
                };
            });
            return fieldsColletions;
        });

    function searchImg(id, data) {
        const searching = data.includes.Asset.find((asset) => {
            return asset.sys.id == id
        });
        return searching;
    };
};

function getWelcom(params = {}) {
    const t = document.querySelector('#welcome-template');
    const c = document.querySelector('.contenedor-template-welTrabajos');
    t.content.querySelector('.wel-container__title').textContent = params.titul;
    t.content.querySelector('.wel-container__img').src = params.img;

    const clonex = document.importNode(t.content, true);
    c.appendChild(clonex);

}

function addW() {
    return fetch('https://cdn.contentful.com/spaces/zwwrf2atjupp/environments/master/entries?access_token=RHpibft3v8j78VzU0mWayeySpv6_zaORfJGSe_MLiuM&&content_type=portfolioW')
        .then((resp) => {
            return resp.json()
        })
        .then((dato) => {
            console.log(dato, "estesstetste");
            const i = dato.includes.Asset[0].fields.file.url;
            return {
                titul: dato.items[0].fields.title,
                img: i,
            }

        })
}
function main() {

    addService().then((serv) => {
        console.log(serv);
        for (const s of serv) {
            getSerC(s)
        }
    });


    addW().then((ser) => {
        console.log(ser);
        getWelcom(ser)
    })


    const welEl = document.querySelector('.contenedor-template-welTrabajos');
    welcomeCardEl(welEl)


    const cardEle = document.querySelector('.container-portfolios');
    cardEl(cardEle);


    const headerEl = document.querySelector(".header-container");
    headerComponent(headerEl);


    const footerEl = document.querySelector(".footer-container");
    footerComponent(footerEl);


};
main();