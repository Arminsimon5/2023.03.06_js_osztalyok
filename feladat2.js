class Pont {
    #x;
    #y;
    constructor (x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x(){
        return this.#x;
    }

    set x(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő gombokat tudja kezelni.")
        }
        else{
            this.#x = value
        }
        
    }
    
    get y(){
        return this.#y;
    }

    set y(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő gombokat tudja kezelni.")
        }
        else{
            this.#y = value
        }
        
    }


    getX() {
        return this.#x
    }

    setX(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő gombokat tudja kezelni.")
        }
        else{
            this.#x = value
        }
    }

    getY() {
        return this.#y
    }

    setY(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő gombokat tudja kezelni.")
        }
        else{
            this.#y = value
        }
    }

    toString() {
        return `Pont{x = ${this.x},y = ${this.y}}`
    }

    tavolsagAzOrigotol() {
        const tavolsag = (this.x * this.x) + (this.y * this.y);
        return tavolsag;
    }
    static statikus_tavolsag(p1,p2){
        return Math.sqrt(((p2.x-p1.x)*(p2.x-p1.x))+((p2.y-p1.y)*(p2.y-p1.y))); 
    }
}