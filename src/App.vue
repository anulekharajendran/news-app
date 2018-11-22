<template>
  <div id="app">
    <div class='loader'>
      <CircleLoader
        color=#30cdd1
      />
    </div>
    <transition name="fade" mode="out-in" v-clock>
      <router-view />
    </transition>
  </div>
</template>

<script>
import { CircleLoader } from '@saeris/vue-spinners';

export default {
  name: 'Newsapp',

  components: { CircleLoader },

  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  scroll-behavior: smooth;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}

.loader{
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
