class Person {
    na2me ;
    surname;
    constructor(name, surname){
        this.na2me = name;
        this.surname = surname;
    }
    print(){
    console.log(this.na2me);
    console.log(this.surname);
    }
}
let user = new Person('fgdxgfd', 'hgchgch');
console.log(user);

let prom = prompt('Введите пароль:123456789');
class User extends Person{
    #password;
    constructor(na2me, surname, password){
        super(na2me, surname);
        this.#password = password;
    }
    check = (password) => {
        if(this.#password === password){
            console.log(`name ${this.na2me} surname ${this.surname}`);
        }else{
            console.log('Incorect password');
        }
    } 

}
let user2 = new User('yfjchgch', 'hvjhvjhv', '12345678' );
console.log(user2.check(prom));

