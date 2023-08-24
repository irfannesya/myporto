const persons = [];

class Person {
    constructor(
        name,
        gender
    ) {
        this.name = name;
        this.gender = gender;

        // 1. Tambahkan di constructor untuk set value gender
    }
    setName(name) {
        this.name = name
        return this
    }
    setGender(gender) {
        this.gender = gender
        return this

    }

    setTitle() {
        if (this.gender === "L") {
            this.name = "Tuan " + this.name
        } else {
            this.name = "Nyonya " + this.name
        }


        // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai 
        // name nya menjadi contoh, 
        // name = Tuan Jhon
    }

    static find(name) {
        // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
        //return.persons.find(item => item.name = name)
        return persons.find((person) => person.name === name)
    }
}

// 3. buat kan 2 object person
// 1 person laki laki
// panggil funsi setTittle dari object person 
const person2 = new Person("Agung", "L");
person2.setTitle();

// 1 person perempuan
// panggil funsi setTittle dari object person 
const person1 = new Person("Sabrina", "P");
person1.setTitle();

// 4. setiap object person nya ditambahkan ke array object persons
persons.push(person1);
persons.push(person2);

// 5. tampilkan object persons.
console.log("list array person :");
console.log(persons)

// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.
const personFind = Person.find("Nyonya Sabrina")
console.log("hasil pencarian : ");
console.log(personFind);

class Student extends Person {
    setKelas(kelas) {
        //1. argumant set nilai class
        this.kelas = kelas
        return this;
    }
    // 4. tambahkan method setSekolah
    setSekolah(sekolah) {
        this.sekolah = sekolah;
        return this;
    }


}

// 2. Set class dengan bentuk builder pattern

const student1 =
    new Student()
        .setName("Fitri")
        .setGender("P")
        .setKelas("FWD")
        .setSekolah("Binar")


// 3. Tampilkan student
console.log(student1);