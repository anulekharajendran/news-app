<template>
  <div class="sidebar">
    <div class="sidebar--body">
      <div class="sidebar--body-item">
        SIDEBAR
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Sidebar',
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.sidebar {
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  &--body {
    flex: 1;
    z-index: 0;
    overflow: hidden;

    &-item{
      display: flex;
      flex-direction: column;

      a{
        color: $black;
        text-decoration: none;
        padding: .5rem 0 .5rem 1rem;

        font-size: 1rem;
        font-weight: normal;
      }
      a.active{
        background-color: $lightest-grey;
        border-right: .5rem solid $cyan;
      }
    }
  }
}

</style>
