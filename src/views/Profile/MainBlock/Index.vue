<template>
    <div class="grid-container">
        <div class="grid-item item-left">
            <TopHeroes v-if="hasHeroes" :heroes="topHeroes" />
            <HeroesList v-if="hasHeroesList" :heroes="heroesList" />
        </div>
        <div class="grid-item item-right">Derecha</div>
    </div>
</template>
<script>
import TopHeroes from './TopHeroes/Index';
import HeroesList from './HeroesList/Index';

export default {
    name: 'MainBlock',
    components: {
        TopHeroes,
        HeroesList
    },
    props: {
        profileData: {
            type: Object,
            required: true
        }
    },
    computed: {
        /**
         * Check if there are heroes
         */
        hasHeroes() {
            return this.profileData.heroes.length > 0;
        },
        /**
         * Return the first 3 heroes
         */
        topHeroes() {
            return this.profileData.heroes.slice(0, 3);
        },
        /**
         * Check if there are a heroes list more than 3 items
         */
        hasHeroesList() {
            return this.profileData.heroes.length > 3;
        },
        /**
         * Get heroes list
         */
        heroesList() {
            return this.profileData.heroes.slice(
                3,
                this.profileData.heroes.length
            );
        }
    }
};
</script>

<style lang="stylus" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr;

  .grid-item {
    &.item-left {
      grid-column: span 1;
    }

    &.item-right {
      grid-column: span 1;
    }
  }
}

@media (min-width: 992px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    .grid-item {
      &.item-left {
        grid-column: span 4;
      }

      &.item-right {
        grid-column: span 2;
      }
    }
  }
}
</style>
