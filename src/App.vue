<template>
  <div id="app">
    <!-- <navbar /> -->
    <!-- <img class="logo " src="./assets/logo.png" /> -->
    <lista class=""/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Lista from './components/Lista'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Navbar,
    Lista
  }
  
    
  
}
</script>

<style>
#app {
  text-align: center;
  
  
}
body{
  background-color: #052b57;
}
@media(max-width: 425px){
  .logo{
    width: 75%;
    
    margin-bottom: 20px;
  }
}
@media(max-width: 768px) {
  .logo{
    width: 45%;
    
    margin-bottom: 20px;
  }
}
@media(max-width: 1024px) {
  .logo{
    width: 35%;
    
    margin-bottom: 20px;
  }
}
@media(min-width: 1025px) {
  .logo{
    width: 15%;
    
    margin-bottom: 20px;
  }
}
</style>
