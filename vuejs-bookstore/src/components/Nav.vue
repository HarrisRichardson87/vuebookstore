<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
   <a class="navbar-brand" href="#">
    <img src="../assets/book.png" width="30" height="30" class="d-inline-block align-top" alt="">
        bookApp
    </a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
   v-on:click="toggleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
        <div class="my-2 my-lg-0">
           <input type="text" textAlign="center" placeholder="Search" @keyup="prueba"> 
        </div>
    </div>
</nav>

</template>

<script>
export default {
  
  props: {
    msg: String,

  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    },
    prueba(e){
      console.log(e.target.value); 
      this.$emit('filterToFather', e.target.value); 
    }
  },
}
</script>