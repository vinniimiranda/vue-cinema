<template>
  <div>
    <nav class="black">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"></a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li>
          <div class="input-field">
            <input id="search" type="search">
            <i class="material-icons white-text">search</i>
            <i class="material-icons">close</i>
          </div>
        </li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    
  </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>
