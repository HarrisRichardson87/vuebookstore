<template>

  <div >
          <Nav  v-on:filterToFather="test($event)"></Nav>
          <Book v-bind:searchData = 'search'></Book>
          <Footer></Footer>        
  </div>   

</template>

<script>

import Nav from "./components/Nav.vue";
import Book from './components/Book.vue';
import Footer from "./components/Footer.vue";

import VueResource from 'vue-resource'

export default{
  components:{
    
    'Book': Book,
    'Nav': Nav,
    'Footer':Footer

  },
    data: function(){
     return{
         search:''
     }
    }, 

  methods:{
    test(datosFiltro){
      console.log("Filtrando")
      console.log(datosFiltro)
      this.search = datosFiltro;
    }
  }
}


</script>

<style>
*{
    font-family: 'Russo One', sans-serif;

}

#book{
    /* border: 1px solid black; */
    
}

#row{
    padding: 10px;
}

input{
  text-align: center;
}

.container{
    padding-top: 70px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
#flip-card {
    background-color: transparent;
    width: 400px;
    height: 300px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }
  
  /* This container is needed to position the front and back side */
  #flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  /* Do an horizontal#flip when you move the mouse over the#flip box container */
  #flip-card:hover #flip-card-inner {
    transform: rotateY(180deg);
  }
  
  /* Position the front and back side */
  #flip-card-front, #flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  
  /* Style the front side (fallback if image is missing) */
  #flip-card-front {
    background-color: #bbb;
    color: black;
  }
  
  /* Style the back side */
  #flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  }

  /* footer */
  footer{
   background-color: lightgray;
  }
  a{
    color:white;
  }
  
  </style>
