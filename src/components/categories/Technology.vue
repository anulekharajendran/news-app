<template>
    <transition name="fade" mode="out-in">
      <div class="technology">
        <h1>Technology</h1>
      </div>
    </transition>
</template>

<script>

export default {
  name: 'Technology',
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.technology{
  h1{
    color: $cyan;
  }
}
</style>
