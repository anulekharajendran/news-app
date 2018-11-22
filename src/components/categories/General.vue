<template>
    <transition name="fade" mode="out-in">
      <div class="general">
        <h1>General</h1>
      </div>
    </transition>
</template>

<script>

export default {
  name: 'General',
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.general{
  h1{
    color: $purple;
  }
}
</style>
