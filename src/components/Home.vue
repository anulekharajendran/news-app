<template>
    <transition name="fade" mode="out-in">
      <div class="home">
        <h1>Page Content</h1>
      </div>
    </transition>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.home{
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  h1{
    font-size: 20px;
    font-weight: normal;

    color: $purple;
    text-align: center;
  }
}
</style>
