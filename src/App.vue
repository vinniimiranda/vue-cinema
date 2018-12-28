<template>
  <div id="app">
    <lista />
  </div>
</template>

<script>
import Lista from './components/Lista'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Lista
  }
  
    
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  /*background-image: url("https://vignette.wikia.nocookie.net/vsdebating/images/3/3e/Marvel_logo.png/revision/latest?cb=20170724145358") ;*/
  
  /*-webkit-transform: rotate(30deg);
  transform: rotate(40deg);*/
  background-color: #052b57;
}
.active{
  background-color: #052b57 !important;
}
@media(max-width: 768px){
  .movie{
    height: 400px;
    position: relative;
    margin-left: 10% !important;

  }
}
@media(min-width: 1025px){
  .movie{
    height: 400px;
  }
}
@media(max-width: 1024px){
  .movie{
    height: 330px;
  }
}
@media(max-width: 425px){
  .movie{
    height: 330px;
    position: relative;
    margin-left: 0px !important;
    

  }
}
</style>
