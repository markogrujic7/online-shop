'use strict';

class Artical {
    constructor(naziv, cena, opis) {
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

const articals = [
    new Artical("Monitor", 165, "Full HD monitor 27 inch"),
    new Artical("TV", 650, "4K Smart TV"),
    new Artical("Miš", 20, "Bežični miš")
];


let table = document.querySelector('.table-1')

articals.forEach((artical, index) => {
    let tr = document.createElement("tr");
    
    let br = document.createElement("td");
    let naziv = document.createElement("td");
    let cena = document.createElement("td");

    br.textContent = index + 1;
    naziv.textContent = artical.naziv;
    cena.textContent = artical.cena;

    tr.appendChild(br);
    tr.appendChild(naziv);
    tr.appendChild(cena);

    table.appendChild(tr);

    tr.addEventListener('click', function() {
        document.querySelector('.details tr:nth-child(1) div').textContent = `Naziv: ${artical.naziv}`;
        document.querySelector('.details tr:nth-child(2) div').textContent = `Cena: ${artical.cena}$`;
        document.querySelector('.details tr:nth-child(3) div').textContent = `Opis: ${artical.opis}`;
    });
});



