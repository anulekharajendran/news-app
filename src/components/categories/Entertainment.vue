<template>
    <transition name="fade" mode="out-in">
      <div class="entertainment">
        <div
          :key="source.name"
          v-for="source in sources"
          class="entertainment--category">
          <div
            class="entertainment--category-header">
            <h1
              class="entertainment--category-header-title">
              {{  source.name }}
            </h1>
            <span
              class="entertainment--category-header-option">
              read more
            </span>
          </div>
          <div
            class="entertainment--category-content">
            <div
              class="entertainment--category-content-details"
              :key="data.id"
              v-for="data in data">
                <div class="entertainment--category-content-details-image">
                  <img v-if="data.urlToImage === null" src="../../assets/abcnews.png"/>
                  <img v-else v-bind:src="data.urlToImage"/>
                </div>
                <div class="entertainment--category-content-details-title">
                  {{ data.title }}
                </div>
                <div class="entertainment--category-content-details-description">
                  {{ data.description }}
                </div>
            </div>
          </div>

        </div>
      </div>
    </transition>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Entertainment',

  data() {
    return {
      sources: null,
      data: [],
    };
  },

  mounted() {
    axios
      .get('https://newsapi.org/v2/sources?category=entertainment&apiKey=fb76179167f6474ca2a274542c4e8c98')
      .then(response => (this.sources = response.data.sources));
    axios
      .get('https://newsapi.org/v2/everything?sources=ign&apiKey=fb76179167f6474ca2a274542c4e8c98')
      .then(response => (this.data = response.data.articles));
  },
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

.entertainment{
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
    padding: 20px 30px;
    border-bottom: 1px solid $dusker-grey;

    &-header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &-title{
        font-size: 1.25rem;
        font-weight: 500;
        text-transform: capitalize;
      }
      &-option{
        font-size: 1rem;
        font-weight: normal;
        color: $grey;
        font-style: italic;
        cursor: pointer;
        text-transform: capitalize;
      }
    }

    &-content{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      &-details{
        margin: 20px 0;
        display: flex;
        flex: 0 0 24%;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        font-size: 1rem;
        @include mq('tablet-small') {
          flex: 0 0 31%;
        }
        @include mq('desktop-wide') {
          flex: 0 0 19%;
        }
        &-image{
          width: 100%;
          display: block;
          height: 0;
          padding-bottom: 56.25%;
          overflow: hidden;
          img{
            width: 100%;
          }
        }

        &-title{
          font-weight: 500;

          margin: 5px 0;
        }

        &-description{
          font-weight: normal;
          color: $darkest-grey;
        }
      }
    }
  }
}
</style>
