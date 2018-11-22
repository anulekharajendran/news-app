<template>
  <div class="sidebar">
    <div class="sidebar--body">
      <div class="sidebar--body-item">
        <!-- <router-link
          :key="category"
          v-for="category in newsCategories"
          active-class="active"
          exact-active-class="active"
          :to="category"
        >
          {{ category }}
        </router-link> -->
        <router-link
          :key="category"
          v-for="category in categories"
          active-class="active"
          exact-active-class="active"
          v-bind:to="'/news/' + category"
        >
          {{ category }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import uniq from 'lodash/uniq';

export default {
  name: 'Sidebar',

  data() {
    return {
      categories: ['general', 'business', 'technology', 'sports', 'entertainment', 'health', 'science'],
      source: null,
    };
  },

  mounted() {
    axios
      .get('https://newsapi.org/v2/sources?apiKey=fb76179167f6474ca2a274542c4e8c98')
      .then(response => (this.source = response.data.sources));
  },

  computed: {
    newsCategories() {
      return uniq(this.source.map(n => n.category));
    },
  },

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
      overflow-y: auto;
      height: 100%;

      a{
        color: $black;
        text-decoration: none;
        padding: .5rem 0 .5rem 1rem;

        font-size: 1rem;
        font-weight: normal;
        text-transform: capitalize;
      }
      a.active{
        background-color: $lightest-grey;
        border-right: .5rem solid $cyan;
      }
    }
  }
}

</style>
