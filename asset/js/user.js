const users = [];

class User {
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    registrasi() {
        if (users.length > 0) {
            const user = users.find((item) => {
                if (item.username === this.username) return item;
            });
            if (user) {
                console.error("Maaf Username sudah terdaptar!");
            } else {
                users.push({
                    username: this.username,
                    password: this.password,
                    role: this.role
                });
            }
        } else {
            users.push({
                username: this.username,
                password: this.password,
                role: this.role
            });
        }
    }

    profile() { }
}

class Seller extends User {
    constructor(username, password, role) {
        super(username, password, role);
    }
    login(username, password) {
        const user = users.find((item) => {
            // Notes Kasih validasi Role dari item user base on class role = buyyer
            if (item.username === username) return item;
        });

        if (!user) {
            console.log('Username tidak terdaftar!')
            return
        }

        if (user.password != password) {
            console.log('Password salah!')
            return
        }

        if (user.role != 'seller') {
            console.log('Gagal Login Role tidak sesuai!')
            return
        }

        console.log("Seller Berhasil Login!");
    }
}

class Buyyer extends User {
    constructor(username, password, role) {
        super(username, password, role);
    }

    login(username, password) {
        const user = users.find((item) => {
            // Notes Kasih validasi Role dari item user base on class role = buyyer
            if (item.username === username) return item;
        });

        if (!user) {
            console.log('Username tidak terdaftar!')
            return
        }

        if (user.password != password) {
            console.log('Password salah!')
            return
        }

        if (user.role != 'buyer') {
            console.log('Gagal Login Role tidak sesuai!')
            return
        }

        console.log("Buyyer Berhasil Login!");
    }
}

// 1. login seller tapi di class buyyer >>
// 2. login buyyer tapi di class seller
// 3. login seler dan buyyer salah password atau user tidak terdaptar.


// register buyer and seller
let buyer1 = new Buyyer('inibuyer1', 'password123', 'buyer')
buyer1.registrasi()
let seller1 = new Seller('iniseller1', 'password123', 'seller')
seller1.registrasi()


// test login buyer and seller (username salah)
let loggedBuyer1 = new Buyyer();
loggedBuyer1.login('inibuyer', 'password123')
let loggedSeller1 = new Seller();
loggedSeller1.login('iniseller', 'password123')

// test login buyer and seller (password salah)
let loggedBuyer2 = new Buyyer();
loggedBuyer2.login('inibuyer1', 'password1234')
let loggedSeller2 = new Seller();
loggedSeller2.login('iniseller1', 'password1234')

// test login buyer and seller (role salah)
let loggedBuyer3 = new Buyyer();
loggedBuyer3.login('iniseller1', 'password123')
let loggedSeller3 = new Seller();
loggedSeller3.login('inibuyer1', 'password123')

// test login buyer and seller (benar)
let loggedBuyer4 = new Buyyer();
loggedBuyer4.login('inibuyer1', 'password123')
let loggedSeller4 = new Seller();
loggedSeller4.login('iniseller1', 'password123')