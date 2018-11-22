<template>
    <transition name="fade" mode="out-in">
      <div class="sports">
        <h1>Sports</h1>
      </div>
    </transition>
</template>

<script>

export default {
  name: 'Sports',
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.sports{
  h1{
    color: $blue;
  }
}
</style>
