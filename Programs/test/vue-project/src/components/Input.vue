<template>
        <input min="0" type="number" @input="changeAmount($event.target.value)">
        <br>
        <button @click="convert()">Convert</button>
</template>

<script>
    export default {
        props: {
            changeAmount:{
                type: Function,
                required: true
            },
            convert:{
                type: Function,
                required: true
            }
        }
    }
</script>

<style scoped>
    input{
        outline: none;
        border-radius: 3px;
        border: none;
        padding: 10px 15px;
        background-color: #fafafa;
        color: #333;
        width: 500px;
        position: relative;
        top: -30px;
        font-size: 1.2em;
    }
    button{
        position: relative;
        top: -20px;
        padding: 15px 20px;
        text-transform: uppercase;
        color: #fafafa;
        cursor: pointer;
        background-color: #1a032d;
        border: 0; 
        border-radius: 3px;
    }
</style>