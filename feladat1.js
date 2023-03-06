class szemely{
    #vezeteknev;
    #keresztnev;
    #eletkor;
    #hobbi;
    constructor(vezeteknev,keresztnev,eletkor,hobbi) {
        this.#vezeteknev = vezeteknev;
        this.#keresztnev = keresztnev;
        this.#eletkor = eletkor;
        this.#hobbi = hobbi;
    }

    
    get vezeteknev() {
        return this.#vezeteknev;
    }
    set vezeteknev(value) {
        this.#vezeteknev = value;
    }
    
    get keresztnev() {
        return this.#keresztnev;
    }
    set keresztnev(value) {
        this.#keresztnev = value;
    }
    
    get eletkor() {
        return this.#eletkor;
    }
    set eletkor(value) {
        this.#eletkor = value;
    }

    get hobbi() {
        return this.#hobbi;
    }
    set hobbi(value) {
        this.#hobbi = value;
    }
    teljesnev(){
        return `${this.#vezeteknev} ${this.#keresztnev}`;
    }

    eletkor(){
        return this.#eletkor;
    }

    setHobby(value) {
        this.#hobbi = value;
    }

    getHobby() {
        return this.#hobbi;
    }

}