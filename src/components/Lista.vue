<template>
  <div id="" class="container">
    <h2 class="center">CARREGOU PRINCIPAL</h2>
  </div>
</template>

<script>
import axios from "axios"
import * as moment from 'moment'
import 'moment/locale/pt-br'
import ScrollReveal from 'scrollreveal'

export default {
  name: "Lista",
  
  // data() {
  //   return {
  //     pesquisa: '',
  //     lang: "pt-BR",
  //     apiKey: "7b8e1e239f830512fd3d0ada5105a8e7",
  //     region: 'US',
  //     categoria: 'popularity.desc',
  //     list: 1,
  //     movies: [],
  //     pages: [],
  //     selectedPage: 0
  //   }
  // },
  
  // created() {
  //   for (let i = 1; this.pages.length < 5; i++) {
  //     this.pages.push(i)
  //     //this.carregaRecentes(i)
  //   }
  //   this.carregaRecentes(1)
     
  // },
  // computed: {
  //   searchMovies: function () {
  //     return this.movies.filter(movie => {
  //       return movie.title.match(this.pesquisa)
  //     })
  //   }
  // },
  // updated(){
  //   $('select').formSelect();
  // },
  // methods: {
  //   ocultaSearch(){
  //     if(this.pesquisa == ''){
  //       $('#searchIcon').show(0)
       
  //     }
  //     else{
  //       $('#searchIcon').hide(0)
        
  //     }
  //   },
  //   converteData(data) {
  //     return moment(data).format('ll')
  //   },
    
  //   carregaLista() {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/list/${this.list}?api_key=${
  //           this.apiKey
  //         }&language=${this.lang}&region=${this.region}`
  //       )
  //       .then(resposta => {
  //         this.movies = resposta.data.item
          
  //       })
  //   },
  //   buscaFilme(){
  //     axios
  //       .get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=${this.lang}&query=${this.pesquisa}&page=1&include_adult=false`)
  //       .then(res => this.movies = res.data.results)
  //   },
  //   selecionaPagina(pagina) {
  //     this.selectedPage = pagina
  //     $("li").removeClass("active")
  //     $("#pagina" + pagina).addClass("active")
  //   },
  //   proximaPagina(){
  //     if(this.selectedPage>=this.pages.length) {
  //       this.pages.push(this.pages.length+1)
        
  //       setTimeout(()=> this.selecionaPagina(this.pages.length), 10) //FAMOSA GAMBS
  //     }
  //     this.selectedPage++
  //     this.carregaRecentes(this.selectedPage)
  //     //$('.container').animatescroll({scrollSpeed:2000,easing:'easeInOutQuint'});
  //   },
  //   voltaPagina(){
  //     if(this.selectedPage != 1) {
  //       this.selectedPage--
  //       this.carregaRecentes(this.selectedPage)
  //       //$('.container').animatescroll({scrollSpeed:2000,easing:'easeInOutQuint'});
  //     }
  //     else{
  //       return false
  //     }
      
  //   },
  //   listaFilmes(){

  //   },
  //   carregaRecentes(pagina) {
  //     this.selecionaPagina(pagina)
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/discover/movie?api_key=${
  //           this.apiKey
  //         }&language=${
  //           this.lang
  //         }&region=${this.region}&sort_by=${this.categoria}&include_adult=false&include_video=false&page=${pagina}`
  //       )
  //       .then(resposta => {
          
  //         this.movies = resposta.data.results
  //         //resposta.data.results.forEach(movie => this.movies.push(movie))
          
  //       })
  //   }
  // }
}


</script>


 <!--style lang="scss">
// $cor-principal: #7c4dff ;
// .scrollbar {
//     background-color: #F5F5F5;
//     float: left;
//     height: 300px;
//     margin-bottom: 25px;
//     margin-left: 22px;
//     margin-top: 40px;
//     width: 65px;
//     overflow-y: scroll;
// }

// .force-overflow {
//     min-height: 450px;
// }

// body::-webkit-scrollbar-track
// {
// 	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
// 	border-radius: 10px;
// 	background-color: #F5F5F5;
// }

// .select-wrapper input.select-dropdown, .dropdown-content li>a, .dropdown-content li>span{
//   border-bottom: none !important;
//   color: $cor-principal;
//   font-weight: bold;
  
// }
// .titulo{ 
//   color: $cor-principal;
//   font-weight: bold !important;
// }
// .card-content{
//   color: $cor-principal !important;
// }

// li.active {
//   background-color: $cor-principal !important;
// }


// @media (min-width: 1025px) {
//   .movie {
//     height: 400px;
//   }
// }
// @media (max-width: 1024px) {
//   .movie {
//     height: 400px;
//   }
// }
// @media (max-width: 768px) {
//   .movie {
//     height: 400px;
    
//   }
// }


// @media (max-width: 425px) {
//   .movie {
//     height: 330px;
    
//   }
// }
// @media only screen and (min-width: 993px) {
//   .row .col.l10 {
//       width: 83.70% !important;
      
//   }
// }
//   .movie{
//     margin-right: -8%;
//     margin-bottom: -1px;
//     padding: 0 !important;
//     border-radius: 30px;
//     border-bottom: none !important;
//     filter: drop-shadow(rgba(0, 0, 0, 0.3) 2px 7px 0px);
//   }

//   img{
//     border-top-left-radius: 30px !important;
//     border-top-right-radius: 30px !important;
//   } 

//   .input-field input[type=search] ~ .mdi-navigation-close, .input-field input[type=search] ~ .material-icons{
//     top: 20% !important;
//   }
//     .input-field input[type=search]:focus+.label-icon {
//     -webkit-transform: none;
//     transform: scale(0);
//     left: 1rem;
//   }
//   .input-field input[type=search]+.label-icon {
//     top: 25% !important;
//   }
// </style>
