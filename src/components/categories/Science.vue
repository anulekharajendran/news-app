<template>
    <transition name="fade" mode="out-in">
      <div class="science">
        <h1>Science</h1>
      </div>
    </transition>
</template>

<script>

export default {
  name: 'Science',
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.science{
  h1{
    color: $orange;
  }
}
</style>
