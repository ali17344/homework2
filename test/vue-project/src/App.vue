
<template>
  <div className="box">
      <input type="text" v-model="userName" placeholder="Name">
      <input type="password" v-model="userPass" placeholder="Password">
      <input type="email" v-model="userEmail" placeholder="Email">
      <button @click="sendData()">Enter</button>
    </div>
    <p className="error">{{ error }}</p>
    <div v-if="users.length == 0" className="user">
      У нас нет пользователей
    </div>
    <div v-if="users.length == 1" className="user">
      У нас 1 пользователь
    </div> 
  <User v-for="(el, index) in users" :key="index" :user="el" :index="index" :deleteUser="deleteUser"/>
</template>

<script>
import User from "./components/User.vue"
    export default {
      components: {User},
      data() {
        return {
          users: [],
          error: '',
          userName: '',
          userPass: '',
          userEmail: ''
          // info : 'Hello',
          // someInfo : 'Anons of massage'
        }
      }, 
      methods: {
          sendData(){
            if(this.userName === ''){
                this.error = 'Имя не введено';
                return;
            }else  if(this.userPass === ''){
                this.error = 'Пароль не введён';
                return;
            }else  if(this.userEmail === ''){
                this.error = 'Email не введён';
                return;
            }
            this.error = ''
            this.users.push({
              name: this.userName,
              pass: this.userPass,
              email: this.userEmail
            })
          },
          deleteUser(index) {
            this.users.splice(index, 1);
          }
      //   userData() {
      //     this.info = 'World'
      //     this.someInfo = 'Some new'
      // }
        }
      }
</script>
  
<style scoped>

input{
  display: block;
  width: 200px;
  height: 40px;
  margin: 5px auto;
  background-color: #f0f0f0;
  border: 1px solid black ;
  font-size: medium;
}
button{
  margin-left: 100px;
  background-color: #239546;
  width: 100px;
  height: 30px;
  color: #f0f0f0;
}
.user{
  width: 400px;
  background-color: #f3f1f1;
  text-align: left;
  padding: 10px;
  border: 1px solid black;
  border-radius: 30px;
  box-shadow: 5px 2px 10px black;
  margin: 5px auto;
}
.error{
  color: #a50000;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
}
</style> 
<!-- <template>
    <div className="container">
        <h1>Погодное приложение</h1>
        <p>Узнать погоду в {{ city  == "" ? "вашем городе" : cityName}}</p>
        <input type="text" @input="this.city = $event.target.value" placeholder="Ведите город" city>
        <button v-show="city != ''" @click="getWeather()">Получить погоду</button>
        <p className="error">{{ error }}</p>
        <div v-if="info != null">
          <p>{{ showTemp }}</p>
          <p>{{ showFeelsLike }}</p>
          <p>{{ showMinTemp }}</p>
          <p>{{ showMaxTemp }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
  export default {
    data(){
      return {
        city:'',
        error: '',
        api: "9fd16030a35eb376021bd00165c49549",
        info: ""
      }
    }, 
    computed: {
      cityName() {
        return "'" + this.city + "'"
      },
      showTemp(){
        return" Температура:" + this.info.main.temp
      },
      showFeelsLike(){
        return "Ощущается как:" + this.info.main.feel_like
      },
      showMinTemp(){
        return "Минимальная температура:" + this.info.main.temp_min
      },
      showMaxTemp(){
        return "Максимальная температура:" + this.info.main.temp_max
      }
    },
    methods: {
      getWeather(){
        if(this.city.trim().length < 2){
          this.error = "Нужно название более одного символа :)"
          return false
        }
        this.error = '';
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.api}`).then(res => (this.info = res.data))
      }
    }
  }
</script>

<style scoped>
.error{
  color:#ff0000
}
.container{
  width: 900px;
  height: 500px;
  border-radius: 50px;
  background-color: #1f0f24;
  padding: 20px;
  text-align: center;
  color: #ffffff;
}
.container h1{
  margin-top: 50px;
}
.container p{
  margin-top: 20px;
}
.container input{
  margin-top: 30px;
  background-color: transparent ;
  border-bottom: 2px solid #110813;
  color: #fcfcfc;
  font-size: 14px;
  padding: 5px 8px;
  outline: none;
}
.container input:focus{
  border-bottom-color: #6e2d7d;
}
.container button{
  background-color: #e3bc4b;
  color: #fff;
  border-radius: 10px;
  border: 2px solid #b99935;
  padding: 10px 15px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
}
.container button:hover{
  transform: scale(1.1) translateY(-5px);
}
</style> -->
 <!-- <template>
  <div class="container">
      <h1>Погодное приложение</h1>
      <p>Узнать погоду в {{ city === "" ? "вашем городе" : cityName }}</p>
      <input type="text" v-model="city" placeholder="Введите город">
      <button v-show="city != ''" @click="getWeather">Получить погоду</button>
      <p class="error">{{ error }}</p>
      <div v-if="info">
        <p>{{ showTemp }}</p>
        <p>{{ showFeelsLike }}</p>
        <p>{{ showMinTemp }}</p>
        <p>{{ showMaxTemp }}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
      return {
          city: '',
          error: '',
          api: "9fd16030a35eb376021bd00165c49549",
          info: null
      }
  },
  computed: {
      cityName() {
          return "'" + this.city + "'"
      },
      showTemp() {
          return "Температура: " + this.info.main.temp + "°C";
      },
      showFeelsLike() {
          return "Ощущается как: " + this.info.main.feels_like + "°C";
      },
      showMinTemp() {
          return "Минимальная температура: " + this.info.main.temp_min + "°C";
      },
      showMaxTemp() {
          return "Максимальная температура: " + this.info.main.temp_max + "°C";
      }
  },
  methods: {
      getWeather() {
          if (this.city.trim().length < 2) {
              this.error = "Нужно название более одного символа :)";
              return false;
          }
          this.error = '';
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.api}`)
              .then(res => {
                  this.info = res.data;
              })
              .catch(() => {
                  this.error = "Город не найден!";
                  this.info = null;
              });
      }
  }
}
</script>

<style scoped>
.error {
  color: #ff0000;
}
.container {
  width: 900px;
  height: 500px;
  border-radius: 50px;
  background-color: #1f0f24;
  padding: 20px;
  text-align: center;
  color: #ffffff;
}
.container h1 {
  margin-top: 50px;
}
.container p {
  margin-top: 20px;
}
.container input {
  margin-top: 30px;
  background-color: transparent;
  border-bottom: 2px solid #110813;
  color: #fcfcfc;
  font-size: 14px;
  padding: 5px 8px;
  outline: none;
}
.container input:focus {
  border-bottom-color: #6e2d7d;
}
.container button {
  background-color: #e3bc4b;
  color: #fff;
  border-radius: 10px;
  border: 2px solid #b99935;
  padding: 10px 15px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
}
.container button:hover {
  transform: scale(1.1) translateY(-5px);
}
</style> -->
