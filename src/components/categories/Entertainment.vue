<template>
    <transition name="fade" mode="out-in">
      <div class="entertainment">
        <h1>Entertainment</h1>
      </div>
    </transition>
</template>

<script>

export default {
  name: 'Entertainment',
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.entertainment{
  h1{
    color: $red;
  }
}
</style>
