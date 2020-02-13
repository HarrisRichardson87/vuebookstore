<template>
    
    <div class="container">
        <input id='input' class="form-control mr-sm-3" type="text" v-model="search" placeholder="Search">
            <div id="flip-card" v-for="item in filteredBooks">
                <a  infobar="true" class="thumbnail fancybox" :href=item.detalle data-fancybox="images" data-width="2048"
                    clickOutside='true' closeClick="true"
                    data-height="1365">
                    <div id="flip-card-inner">

                        <div id="flip-card-front">
                            <img id="img-fluid" :src=item.detalle height="100%" width="100%">
                        </div>

                        <div id="flip-card-back">
                            <h6>{{item.titulo}}</h6>
                            <p>{{ item.descripcion }}</p>
                            <p>{{ item.idioma }}</p>
                        </div>

                    </div>
                </a>

            </div>

        </div>
    </div>

</template>

<script>
export default {
    data: function(){
     return{
         data:[],
         books: [],
         search:''
     }   
    }, 

    methods: {
    //Main Fetch and Initial Array//
        loader: function () {
        this.$http.get('https://api.myjson.com/bins/1h3vb3').then(function (res) {
          if (res.ok) { 
            return res.json();
          }
        }).then(function (json) {
          console.log(json.books)
          console.log(this.books)
          
          this.books = json.books
          console.log(this.books)

        }).catch(function (error) {
          console.log("request failed:" + error.message);
        });
      }
    },

    //Initial Load//
    created (){
      this.loader()
    },
    computed:{
        filteredBooks: function(){
           return this.books.filter((books)=>{
                return books.titulo.toLowerCase().match(this.search.toLowerCase())
            })
        }
    }
  
}
</script>

