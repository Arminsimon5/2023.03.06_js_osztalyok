class Etel {
    #nev;
    #ar;
    #kategoria;
    #osszetevok;

    constructor(nev,ar,kategoria,osszetevok){
        this.#nev = nev;
        this.#ar = ar;
        this.#kategoria = kategoria;
        this.#osszetevok = osszetevok;
    }

    get nev() {
        return this.#nev;
    }
    set nev(value) {
        this.#nev = value;
    }
    
    get ar() {
        return this.#ar;
    }
    set ar(value) {
        this.#ar = value;
    }
    
    get kategoria() {
        return this.#kategoria;
    }
    set kategoria(value) {
        this.#kategoria = value;
    }
    
    get osszetevok() {
        return this.#osszetevok;
    }
    set osszetevok(value) {
        this.#osszetevok = value;
    }

    toString(){
        return `<tr>
        <td>${this.#nev}</td>
        <td>${this.#ar}</td>
        <td>${this.#kategoria}</td>
        <td>${this.#osszetevok}</td>
        </tr>`;
    }
}