const users = []; // database user

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
                    password: this.password
                });
            }
        } else {
            users.push({
                username: this.username,
                password: this.password
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
            // Notes Kasih validasi Role dari item user base on class role == seller
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
            console.log('Role tidak sesuai!')
            return
        }

        console.log("Logi!");
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
            console.log('Role tidak sesuai!')
            return
        }

        console.log("Logi!");
    }
}

// 
console.log("Untuk kondisi users Array Kosong");
const user0 = new Seller("user@email.com", "123", "seller");
user0.registrasi();

// List User di database
const user1 = new Seller("user@emil1.com", "123", "seller");
user1.registrasi()
const user2 = new Seller("user@emil2.com", "123", "seller");
user2.registrasi()
const user3 = new Buyyer("user@emil3.com", "123", "buyyer");
user3.registrasi()
const user4 = new Buyyer("user@emil4.com", "123", "buyyer");
user4.registrasi()

console.log(users);

const user5 = new Buyyer("user@email.com", "123", "buyyer");
user5.registrasi();

const userLogin = new Seller();
userLogin.login("user@emil3.com", "1232");

// 1. login seller tapi di class buyyer >>
// 2. login buyyer tapi di class seller
// 3. login seler dan buyyer salah password atau user tidak terdaptar.
