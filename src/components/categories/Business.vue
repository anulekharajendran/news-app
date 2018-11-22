<template>
    <transition name="fade" mode="out-in">
      <div class="business">
        <h1>Business</h1>
      </div>
    </transition>
</template>

<script>

export default {
  name: 'Business',
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.business{
  h1{
    color: $green;
  }
}
</style>
