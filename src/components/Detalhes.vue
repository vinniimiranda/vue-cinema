<template>
  <div id class="container">
    <div class="row">
      <div class="col s12 l5 m5">
        <router-link :to="{name: 'Lista'}">
          <i class="material-icons large white-text back" style="cursor:pointer">undo</i>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m8 l8 movie offset-l2 offset-m2 card" style="padding:10px">
        <iframe
          class="video"
          :src="'https://www.youtube.com/embed/'+youtubeVideoID"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          autoplay
        />
        <p>Título: {{movie.title}}</p>
        <p>Orçamento: {{formataValor(movie.budget)}}</p>
        <p>Rendimento: {{formataValor(movie.revenue)}}</p>
        <p>Data de Lançamento: {{converteData(movie.release_date)}}</p>
        <div v-if="torrents != ''">
          <div class="divider"></div>
          <div class="row">
            <h5>Downloads</h5>

            <div class="col s3 offset-s3">
              <h5>1080p</h5>
              <h6>{{ torrents.en["1080p"].filesize}}</h6>
              <a :href="torrents.en['1080p'].url" target="blank">
                <i class="material-icons download">file_download</i>
              </a>
            </div>
            <div class="col s3">
              <h5>720p</h5>
              <h6>{{ torrents.en["720p"].filesize}}</h6>
              <a style="cursor:pointer;" :href="torrents.en['720p'].url" target="blank">
                <i class="material-icons download" >file_download</i>
              </a>
            </div>
          </div>
          
          <div class="row">
            <a
              class="btn white-text "
              target="blank"
              :href="'http://www.ysubs.com/movie-imdb/'+movie.imdb_id"
            >Legenda</a>
          </div>
        </div>
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
      apiKey: "7b8e1e239f830512fd3d0ada5105a8e7",
      region: "US",
      torrents: "",
      idMovie: this.$route.params.id,
      movie: {},
      youtubeVideoID: ""
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
    formataValor(valor) {
      let valorDecimal = parseInt(valor)
        .toFixed(2)
        .split(".");
      return (valorDecimal[0] =
        "U$ " + valorDecimal[0].split(/(?=(?:...)*$)/).join("."));
    },
    // Função que busca o videoID na API da
    pesquisaVideo() {
      let config = new Promise((resolve, reject) => {
        gapi.client.setApiKey("AIzaSyCBvW6bnbdyR07s3JmjIA32UeGMwbRjwgI");
        gapi.client.load("youtube", "v3", function() {
          resolve("Api setada");
        });
      });
      config.then(resultado => {
        gapi.client.youtube.search
          .list({
            part: "snippet",
            type: "video",
            regionCode: "US",
            q: this.movie.title + " Trailer Legendado",
            maxResults: 1,
            order: "relevance"
          })
          .execute(response => {
            this.youtubeVideoID = response.items[0].id.videoId;
            this.buscaTorrent();
          });
      });
    },
    buscaTorrent() {
      axios
        .get(`https://tv-v2.api-fetch.website/movie/${this.movie.imdb_id}`)
        .then(res => (this.torrents = res.data.torrents))
        .catch(err => console.error(err))
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
          
          this.movie = resposta.data;
          this.pesquisaVideo();
        });
    }
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
@media only screen and (min-width: 993px) {
  .row .col.l6 {
    width: 41%;
    margin-left: 30%;
  }
}
.playing {
  transform: scale(2);
}
.back{
      filter: drop-shadow(2px 7px 0px rgba(0,0,0,0.3));
}
.back:hover{
  transition-timing-function: ease-in-out;
  transition: all;
  transition-duration: 3s;
  transform: rotate(30deg)
}
.download:hover{
    transition-duration: .4s;
    transition-timing-function: ease-out;
    transform: scale(1.3);
  }
</style>
