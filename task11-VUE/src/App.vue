<script setup>
import SearcherBarVue from './components/SearcherBar.vue';
import TheNavVue from './components/TheNav.vue';
import FooterVue from './components/Footer.vue';
</script>

<template>
  <div id="app" class="body">
    <the-nav-vue/>
    <searcher-bar-vue />
    <router-view/>
    <footer-vue/>
  </div>
</template>

<style>
.body {
  font-family: Arial;
  margin: 0px;
}
</style>


