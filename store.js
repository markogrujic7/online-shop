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


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const naziv = document.getElementById('naziv').value;
    const cena = document.getElementById('cena').value;
    const opis = document.getElementById('opis').value;
    
    const noviArtikal = new Artical(naziv, cena, opis);
    articals.push(noviArtikal);
    
    const tr = document.createElement("tr");
    const br = document.createElement("td");
    const nazivTd = document.createElement("td");
    const cenaTd = document.createElement("td");

    br.textContent = articals.length;
    nazivTd.textContent = noviArtikal.naziv;
    cenaTd.textContent = noviArtikal.cena;

    tr.appendChild(br);
    tr.appendChild(nazivTd);
    tr.appendChild(cenaTd);

    table.appendChild(tr);
    
    document.getElementById('naziv').value = '';
    document.getElementById('cena').value = '';
    document.getElementById('opis').value = '';
    
    tr.addEventListener('click', function() {
        document.querySelector('.details tr:nth-child(1) div').textContent = `Naziv: ${noviArtikal.naziv}`;
        document.querySelector('.details tr:nth-child(2) div').textContent = `Cena: ${noviArtikal.cena}$`;
        document.querySelector('.details tr:nth-child(3) div').textContent = `Opis: ${noviArtikal.opis}`;
    });
});
