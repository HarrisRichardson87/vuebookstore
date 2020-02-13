<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light"  v-bind:class=" { 'navbarOpen': show }">
   <a class="navbar-brand" href="#">
    <img src="../assets/book.png" width="30" height="30" class="d-inline-block align-top" alt="">
        bookApp
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
   v-on:click="toggleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ in: show }">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        </ul>
        <div class="form-inline my-2 my-lg-0">
           <input id='input' class="form-control mr-sm-3" type="text" v-model="search" placeholder="Search"> 
        </div>
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
    }
  },
}
</script>