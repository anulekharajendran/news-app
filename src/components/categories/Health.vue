<template>
    <transition name="fade" mode="out-in">
      <div class="health">
        <h1>Health</h1>
      </div>
    </transition>
</template>

<script>

export default {
  name: 'Health',
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.health{
  h1{
    color: $purple;
  }
}
</style>
