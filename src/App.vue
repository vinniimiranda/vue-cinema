<template>
  <div id="app">
    <!-- <navbar /> -->
    <img class="logo " src="./assets/logo.png" unselectable="on" onselectstart="return false;" ondrag="return false" draggable="false"/>
    <router-view></router-view>
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

body {
  /*052b57*/
   background-color: #7c4dff; 
  background-image: url("./assets/bg1.png");
  background-attachment:fixed;
}
@media(max-width: 425px){
  .logo{
    width: 75%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
@media(max-width: 768px) {
  .logo{
    width: 45%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
@media(max-width: 1024px) {
  .logo{
    width: 35%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
@media(min-width: 1025px) {
  .logo{
    width: 15%;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .video{
  width: 100%;
  height: 50vh;
}
.logo{
      transition-duration: 3s;
      filter: drop-shadow(2px 7px 0px rgba(0,0,0,0.3));
      
  }
  .logo:hover{
    transform: rotate(3deg)
  }
  
}
</style>
