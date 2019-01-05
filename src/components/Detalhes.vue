<template>
  <div id class="container">
    <div class="row">
      <div class="col s12 l5 m5 offset-l7">
        <router-link :to="{name: 'Lista'}"><i class="material-icons large white-text" style="cursor:pointer"> undo</i></router-link>
      </div>
    </div>
    <div class="row ">
      
      <div class=" col s12 m8 l8 movie offset-l2 offset-m2 card" style="padding:10px">
        <!-- <img
          v-if="movie.poster_path"
          onselectstart="return false;"
          ondrag="return false"
          draggable="false"
          class
          :alt="movie.title"
          :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path"
        > -->
        <iframe class="video" :src="'https://www.youtube.com/embed/'+youtubeVideoID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  autoplay />
        <p>Título: {{movie.title}}</p>
        <p>Orçamento: {{formataValor(movie.budget)}}</p>
        <p>Rendimento: {{formataValor(movie.revenue)}}</p>
        <p>Data de Lançamento: {{converteData(movie.release_date)}}</p>
        
      </div>
    </div>
  </div>
</template>
<script>
import { resolve, reject, async, Promise } from "q";

       
</script>

<script>
import axios from "axios";
import * as moment from "moment";
import "moment/locale/pt-br";

export default {
  name: "Detalhes",

  data() {
    return {
      pesquisa: "",
      lang: "pt-BR",
      apiKey: "7b8e1e239f830512fd3d0ada5105a8e7",
      region: "US",
      idMovie: this.$route.params.id,
      movie: {},
      youtubeVideoID: ''
    };
  },

  created() {
    this.detalhes();
  },

  methods: {
    converteData(data) {
      return moment(data).format("ll");
    },
    formataValor(valor){
      let valorDecimal = parseInt(valor).toFixed(2).split('.')
      return valorDecimal[0] = "U$ " + valorDecimal[0].split(/(?=(?:...)*$)/).join('.');

    },
    async pesquisaVideo(){ 
        let config = new Promise((resolve, reject) => {
          gapi.client.setApiKey("AIzaSyCBvW6bnbdyR07s3JmjIA32UeGMwbRjwgI");
          gapi.client.load("youtube", "v3", function() {
            resolve('Api setada')
          })
        })
        config.then(resultado => {
          gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            regionCode: "US",
            q:  this.movie.title + " Trailer Legendado",
            maxResults: 1,
            order: "relevance"
            
          })
          .execute(response => this.youtubeVideoID = response.items[0].id.videoId)
        })
    },
    detalhes() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.idMovie}?api_key=${
            this.apiKey
          }&language=${this.lang}`
        )
        .then(resposta => {
          console.log(resposta.data);
          this.movie = resposta.data;
          this.pesquisaVideo()
        });
    },
    
  }
}
</script>

<style scoped>
.card{
  
  height: 100%;
}
@media only screen and (min-width: 993px) {
  .row .col.l6 {
    width: 41%;
    margin-left: 30%;

  }
}

</style>
