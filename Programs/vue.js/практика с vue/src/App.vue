<template>
    <Academy :data="apiAcademy" /> 
  </template>
  
  <script>
  import Academy from "./api/Academy.vue";
  import axios from "axios";
  
  export default {
    components: {
      Academy,
    },
    data() {
      return {
        apiAcademy: [], 
      };
    },
    mounted() {
      this.fetchAcademyData();
    },
    methods: {
      fetchAcademyData() {
        axios.get(`http://universities.hipolabs.com/search?country=Kazakhstan`)
          .then(({ data }) => {
            this.apiAcademy = data; 
          })
          .catch(error => {
            console.error("Error fetching data:", error); 
          });
      },
    },
  };
  </script>
  
  <style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  </style>
  