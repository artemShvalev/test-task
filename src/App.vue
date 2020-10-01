<template>
  <div id="app">
    <HeaderPage/>
    <MainPage/>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: { MainPage, HeaderPage },
};
</script>

<style lang="scss">
</style>
