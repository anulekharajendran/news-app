<template>
  <div class="pageheader">
    <router-link
      :to="{ name: 'Home' }"
    >
      HEADER
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.pageheader {
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  a{
    color: $white;
    text-transform: capitalize;
    text-decoration: none;

    font-weight: normal;
    font-size: 1.25rem;
  }
}

</style>
