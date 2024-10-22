<template>
    <ul>
        <li @click="selectItem('BTC') ":className="current == 'BTC' ? 'active' : '' ">Bitcoin</li> 
        <li @click="selectItem('ETH') ":className="current == 'ETH' ? 'active' : ''">ETH</li>
        <li @click="selectItem('USDT') ":className="current == 'USDT' ? 'active' : ''">USDT</li>
    </ul>
</template>

<script>
export default {
    props:{
        setCrypto:{
            type: Function,
            required: true
        }
    },
    data(){
        return {
            current: ''
        }
    },
    methods:{
        selectItem(val){
            this.setCrypto(val);
            this.current = val
        }
    }
}
</script>

<style scoped>
    ul{
        margin: 15px;
        list-style: none;
        width: 200px;
        padding: 0;
        border-radius: 3px;
        border: 0 solid #000;
    }
    li{
        display: block;
        background-color: #1a032d;
        color: #fff;
        padding: 20px 0;
    }
    li:hover, li.active{
        background-color: #24043e;
        cursor: pointer;
    }
</style>