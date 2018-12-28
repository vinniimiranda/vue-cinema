<template>
  <div id="app">
    <div class="row container">
      <div
        v-for="(movie, i) in movies"
        :key="i"
        class="card col s12 m9 l5 offset-l3 movie"
        style="padding: 10px; margin: 10px;"
      >
        <div class="card-image waves-effect waves-block waves-light">
          <img
            class="activator hoverable"
            :alt="movie.title"
            :src="'http://image.tmdb.org/t/p/w500'+movie.backdrop_path"
            style="cursor:pointer"
            @click="detalhes(movie.id)"
          >
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">{{ movie.title }}</span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            <b>Sinopse:</b>
            <i class="material-icons right">close</i>
          </span>
          <p>{{ movie.overview }}.</p>
          <p>
            <b>Lançamento:</b>
            {{ movie.release_date }}
          </p>
          <p>
            <b>Nota:</b>
            {{ movie.vote_average }}
          </p>
        </div>
        <br>
      </div>
    </div>
    <div class="row container center">
      <ul class="pagination card" style="padding: 10px; margin: 10px; width: 85%">
        <li class="disabled">
          <a href="#!">
            <i class="material-icons">chevron_left</i>
          </a>
        </li>
        <li class="waves-effect" v-for="(page, i) in pages" :key="i" :id="'pagina'+page">
          <a @click="carregaRecentes(page)">{{page}}</a>
        </li>
        <li class="waves-effect">
          <a href="#!">
            <i class="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Lista",
  components: {},
  data() {
    return {
      lang: "pt-BR",
      apiKey: "7b8e1e239f830512fd3d0ada5105a8e7",
      list: 1,
      movies: [],
      pages: []
    };
  },
  created() {
    for (let i = 1; this.pages.length < 10; i++) this.pages.push(i);

    this.carregaRecentes(1);
  },
  methods: {
    detalhes(id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=7b8e1e239f830512fd3d0ada5105a8e7&language=pt-BR`
        )
        .then(resposta => console.log(resposta.data));
    },
    carregaLista() {
      axios
        .get(
          `https://api.themoviedb.org/3/list/${this.list}?api_key=${
            this.apiKey
          }&language=${this.lang}`
        )
        .then(resposta => {
          this.movies = resposta.data.item;
          this.traduzTitulo();
        });
    },
    carregaRecentes(pagina) {
      $("li").removeClass("active");
      $("#pagina" + pagina).addClass("active");
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            this.apiKey
          }&language=${
            this.lang
          }&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagina}`
        )
        .then(resposta => {
          console.log(resposta.data);

          this.movies = resposta.data.results;
          
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  /*background-image: url("https://vignette.wikia.nocookie.net/vsdebating/images/3/3e/Marvel_logo.png/revision/latest?cb=20170724145358") ;*/

  /*-webkit-transform: rotate(30deg);
  transform: rotate(40deg);*/
  background-color: #052b57;
}
.active {
  background-color: #052b57 !important;
}
@media (max-width: 768px) {
  .movie {
    height: 400px;
    position: relative;
    margin-left: 10% !important;
  }
}
@media (min-width: 1025px) {
  .movie {
    height: 400px;
  }
}
@media (max-width: 1024px) {
  .movie {
    height: 330px;
  }
}
@media (max-width: 425px) {
  .movie {
    height: 330px;
    position: relative;
    margin-left: 0px !important;
  }
}
</style>
