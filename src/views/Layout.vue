<template>
  <div class="layout">
    <div class="layout--header">
      <PageHeader />
    </div>

    <div class="layout--body">
      <div class="sideNav">
        <Sidebar />
      </div>
      <div class="panel">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'Layout',

  components: { PageHeader, Sidebar },

};
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.layout {
  height: 100vh;
  @include interpolate(min-height, $min-screen-em-width, $max-screen-em-width, 20em, 34em);

  background-color: $white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;

  &--header{
    height: 3.125rem;
    width: 100%;

    background-color: $cyan;
    z-index: 1;
    box-sizing: border-box;

    overflow: hidden;
    position: relative;
  }

  &--body {
    height: 100%;
    width: 100%;

    background-color: $white;
    z-index: 1;
    box-sizing: border-box;

    display: flex;
    flex: 1;

    overflow: hidden;
    position: relative;

    .sideNav {
      background-color: $white;
      text-align: left;

      position: relative;

      display: none;
      overflow: hidden;

      @include mq('tablet-small') {
        width: 100%;
        display: block;

        background-color: $dusker-grey;
        border-right: 1px solid $dusker-grey;
        @include interpolate(max-width, $min-screen-em-width, $max-screen-em-width, 14em, 16em);
      }

      @media screen and (max-width: 640px) {
        &.panel-active {
          width: 100%;
          display: block;

          animation: slide-right 0.15s cubic-bezier(1.0, 0.5, 0.8, 1.0) forwards;
        }
      }
    }

    .panel {
      display: none;
      flex: 1;

      @media screen and (max-width: 640px) {
        &.panel-active {
          display: flex;

          animation: slide-left 0.15s cubic-bezier(1.0, 0.5, 0.8, 1.0) forwards;

          @keyframes slide-left {
            from {
              transform: translate(100%, 0);
            }
            to {
              transform: translate(0, 0);
            }
          }
        }
      }

      @include mq('tablet-small') {
        display: flex;
        flex: 1;
      }
    }
  }
}

</style>
