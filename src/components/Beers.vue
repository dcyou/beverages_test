<template>
  <v-app> 
    <v-container fluid>
      <v-switch
        v-model="switchStrongBeer"
        v-on:change="strongBeer"
        label="Strong Beers"
      ></v-switch>
      <v-data-table
        :headers="headers"
        :items="beers"
        :search="search"
        hide-actions
        :pagination.sync="pagination"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.tagline }}</td>
          <td class="text-xs-right">{{ props.item.first_brewed }}</td>
          <td class="text-xs-right">{{ props.item.description }}</td>
          <td class="text-xs-right">{{ props.item.abv }}</td>
          <td class="text-xs-right">{{ props.item.ibu }}</td>
          <td class="text-xs-right">
            <v-img src=`{{ props.item.image_url }}` aspect-ratio="1.7" contain></v-img>
          </td>
        </template>
      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </v-container>
  </v-app> 
</template>

<script>
  import axios from 'axios'

  const endpoint = "https://api.punkapi.com/v2/beers?malt=extra_pale";

  export default {
    data () {
      return {
        switchStrongBeer: false,
        search: '',
        pagination: {},
        selected: [],
        headers: [
          { text: 'name', value: 'name' },
          { text: 'tagline', value: 'tagline' },
          { text: 'first_brewed', value: 'first_brewed' },
          { text: 'description', value: 'description', 'sortable': false },
          { text: 'abv', value: 'abv' },
          { text: 'ibu', value: 'ibu' },
          { text: 'image_url', value: 'image_url' }
        ],
        beers: []
      }      
    },
    computed: {
      pages () {
        console.log(this.pagination)
        this.pagination.totalItems = 80;//bullshit
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    mounted() {
      console.log('mounted')
      axios.get(endpoint).then(res => (this.beers = res.data)).catch(error => console.log(error))
    },
    methods: {
        strongBeer: function (strongBeerOnly) {
            if (strongBeerOnly) {
                axios.get(endpoint+'&abv_gt=7').then(res => (this.beers = res.data))
            } else {
                axios.get(endpoint).then(res => (this.beers = res.data))
            }
        }
    }
  }
</script>

<style lang="scss" scoped>
    .title {
        h1 {
            color: red;
        }
    }
</style>