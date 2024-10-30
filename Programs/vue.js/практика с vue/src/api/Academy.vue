
<template>
    <div class="box">
      <div class="info-card" v-for="academy in data" :key="academy.id">
          <a >{{ academy.web_pages[0] }}</a> 
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      data: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
    .box{
      display: flex;
      justify-content: center;
      gap: 40px;
      align-items: center;
      text-align: center;
      flex-wrap: wrap;
    }
    .info-card{
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 400px;
      background: linear-gradient(to bottom left, rgb(0, 0, 0) 50%, rgb(255, 234, 0) 50%);
      border-radius: 20px;
      color: white;
      transition: transform 5s ease;
    }
    .info-card:hover{
      background: linear-gradient(to bottom left,  rgb(0, 0, 0) 40%, rgb(255, 234, 0) 60%);
    }
  </style>
  