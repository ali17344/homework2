// let 
// const
// var 
// Object
// []
//все переменые 
class Person {
    name = 'Ali';
    age = 18;
    #password;
    static staticAge = 61;
    constructor (name, age, password) {
    this.name = name;
    this.age = age;
    this.#password = this.#passwordCheck(password)
    }
    print (){
        console.log(this.name);
    }
    static showStatic(){
        console.log(this.staticAge);
    }
    show(){
        console.log(this.#password);
    }
    #passwordCheck(password){
       if(typeof(password) !== 'string'){
        if((password + '').length > 5 ){
            return password
        }else{
            console.log('Ваш пароль короче 5 и он заменён на 12345');
            return 12345
        }
       }else{
        if(password.length > 5 ){
            console.log(password);
        }else{
            console.log('Ваш пароль короче 5 и он заменён на 12345');
            return 12345
        }
       }
    }
    get password(){
        return this.#password
    }//чтобы получить скрытые данные
    set password(newPassword){
        return this.#password = newPassword
    }//чтобы изменить дынные
}
let man = new Person('Peter', 15, 123456789);//new всегда обязательно
// man.name = 'Beka';
// man.age = 22;
// man.show() 
// console.log(man);
// let woman = new Person('Anna', 20, '987654321');
// Person.staticAgeAge = 10// можно изменить только через класс//static обротиться только через класс
// Person.showStatic()
// woman.name = 'Anna';
// woman.age = 20; 
man.password = 1234567898765432
console.log(man.password);
//наследование
class Student extends Person{
    constructor(name, age, password, point){
        super(name, age, password)
        this.point = point
    }
}
let student = new Student('Askar', 15, 123456, 4)
console.log(student);