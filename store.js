'use strict';

class Artical {
    constructor(naziv, cena, opis) {
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

function ucitajArtikle() {
    const sacuvaniArtikli = localStorage.getItem('articals');
    if (sacuvaniArtikli) {
        const parsedArtikli = JSON.parse(sacuvaniArtikli);
        return parsedArtikli.map(art => new Artical(art.naziv, art.cena, art.opis));
    }
    return [];
}

let articals = ucitajArtikle();

function sacuvajArtikle() {
    localStorage.setItem('articals', JSON.stringify(articals));
}

function prikaziArtikle() {
    const tbody = document.querySelector('.tabela-artikli');
    tbody.innerHTML = '';

    articals.forEach((artical, index) => {
        const tr = document.createElement('tr');
        
        const br = document.createElement('td');
        const naziv = document.createElement('td');
        const cena = document.createElement('td');

        br.textContent = index + 1;
        naziv.textContent = artical.naziv;
        cena.textContent = artical.cena;

        tr.appendChild(br);
        tr.appendChild(naziv);
        tr.appendChild(cena);

        tr.addEventListener('click', () => prikaziDetalje(artical));
        
        tbody.appendChild(tr);
    });
}

function prikaziDetalje(artical) {
    document.querySelector('.detalji-naziv').textContent = `Naziv: ${artical.naziv}`;
    document.querySelector('.detalji-cena').textContent = `Cena: ${artical.cena}$`;
    document.querySelector('.detalji-opis').textContent = `Opis: ${artical.opis || 'Nema opisa'}`;
}

function dodajArtikal(naziv, cena, opis) {
    const noviArtikal = new Artical(naziv, cena, opis);
    articals.push(noviArtikal);
    sacuvajArtikle(); 
    prikaziArtikle(); 
}

prikaziArtikle();

document.querySelector('.forma').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const naziv = document.querySelector('.input-naziv').value.trim();
    const cena = document.querySelector('.input-cena').value.trim();
    const opis = document.querySelector('.input-opis').value.trim();
    
    dodajArtikal(naziv, cena, opis);   
    this.reset();
});
