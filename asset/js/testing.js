
class Human {
    // static property
    static tangan = 2;
    static kaki = 2;

    // static method
    static makan() {
        return 'manusia sedang makan';
    }
    static jalan() {
        return 'manusia sedang berjalan';
    }

    constructor(nama, umur) {
        // instance property
        this.nama = nama;
        this.umur = umur;
    }

    // instance method
    sapa() {
        return `halo, nama saya ${this.nama}`;
    }
}


console.log(Human.tangan);
console.log(Human.kaki);
console.log(Human.makan());
console.log(Human.jalan());

let human1 = new Human('sabrina', 34);
console.log(human1.nama);
console.log(human1.umur);
console.log(human1.sapa());                                                        