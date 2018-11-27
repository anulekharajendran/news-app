<template>
    <transition name="fade" mode="out-in">
      <div class="home">
        <div
          class="home--category"
          v-for="selectedSource in selectedSources"
          :key="selectedSource.id"
          >
          <div
            class="home--category-header">
            <h1
              class="home--category-header-title">
              {{ selectedSource.name }}
            </h1>
            <span
              class="home--category-header-option"
              @click="sourceChanged(source.id)">
              read more
            </span>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	name: 'Home',

	data() {
		return {
			sources: [],
			source: ''
		};
	},

	methods: {
		sourceChanged() {
      this.$store.dispatch('getSelectedSources');
		}
	},

	computed: {
		...mapGetters({
			selectedSources:'selectedSources',
			selectedSource: 'selectedSource'
		})
  },

	created: function(){
		this.$store.dispatch('getNews')
	}
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
