<template>
  <div id class="container">
    <div class="row">
      <div class="col s12 l5 m5 offset-l7">
        <router-link :to="{name: 'Lista'}"><i class="material-icons large white-text" style="cursor:pointer"> undo</i></router-link>
      </div>
    </div>
    <div class="row " >
      
      <div class=" col s12 m8 l8 movie offset-l2 offset-m2 card" style="padding:10px">
        
        <iframe class="video " :src="'https://www.youtube.com/embed/'+youtubeVideoID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  autoplay />
        <p>Título: {{movie.title}}</p>
        <p>Orçamento: {{formataValor(movie.budget)}}</p>
        <p>Rendimento: {{formataValor(movie.revenue)}}</p>
        <p>Data de Lançamento: {{converteData(movie.release_date)}}</p>
        <!-- <p class="range-field">
          <label for='nota'>{{nota}}</label>
          <input type="range" id="nota" min="1" max="10" v-model="nota"  style='width:20%'/>
          <br>
        </p> -->
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import * as moment from "moment";
import "moment/locale/pt-br";

export default {
  name: "Detalhes",

  data() {
    return {
      pesquisa: "",
      nota: 5,
      lang: "pt-BR",
      apiKey: process.env.apyKeyDB,
      apiKeyGoogle: process.env.apiKeyGoogle,
      region: "US",
      idMovie: this.$route.params.id,
      movie: {},
      youtubeVideoID: ''
    };
  },  

  created() {
    //Chama a função no momento que o componente é criado no DOM.
    this.detalhes();
  },
  methods: {
    //Função que converte a data para o Formato "padrão" brasileiro
    converteData(data) {
      return moment(data).format("ll");
    },
    //Função que converte o valor em decimal, e depois em moeda (Dolar)
    formataValor(valor){
      let valorDecimal = parseInt(valor).toFixed(2).split('.')
      return valorDecimal[0] = "U$ " + valorDecimal[0].split(/(?=(?:...)*$)/).join('.');

    },
    // Função que busca o videoID na API da
     pesquisaVideo(){ 
        let config = new Promise((resolve, reject) => {
          gapi.client.setApiKey(`${apiKeyGoogle}`);
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
          .execute(response => {
            this.youtubeVideoID = response.items[0].id.videoId
            
          })
        })
    },
    //Função que faz a requisição na API com os detalhes do filme
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
.playing{
  transform: scale(2)
}
</style>
