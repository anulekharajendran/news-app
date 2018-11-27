<template>
    <transition name="fade" mode="out-in">
      <div class="home">
        <div
          :key="category"
          v-for="category in categories"
          class="home--category">
          <div
            class="home--category-header"
          >
            <h1
              class="home--category-header-title"
            >
              {{category}}
            </h1>
            <span
              class="home--category-header-option"
            >
              read more
            </span>
          </div>
          <div
            class="home--category-content"
          >
            <div
              class="home--category-content-details"
              :key="data.id"
              v-for="data in source"
            >
              {{ data.name}}
            </div>
          </div>

        </div>
      </div>
    </transition>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',

  data() {
    return {
      categories: ['general', 'business', 'technology', 'sports', 'entertainment', 'health', 'science'],
      source: null,
    };
  },

  mounted() {
    axios
      .get('https://newsapi.org/v2/sources?category=general&apiKey=fb76179167f6474ca2a274542c4e8c98')
      .then(response => (this.source = response.data.sources));
  },

};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.home{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  overflow: auto;
  &--category{
    width: 100%;
    box-sizing: border-box;

    color: $black;
    text-transform: capitalize;

    padding: 15px 30px;
    border-bottom: 1px solid $dusker-grey;

    &-header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &-title{
        font-size: 1.25rem;
        font-weight: 500;
      }
      &-option{
        font-size: 1rem;
        font-weight: normal;
        color: $grey;
        font-style: italic;
        cursor: pointer;
      }
    }

    &-content{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
    }
  }
}
</style>
