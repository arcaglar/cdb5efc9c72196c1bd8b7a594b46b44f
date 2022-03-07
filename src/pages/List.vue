<template>
  <div class="container">
    <div class="header">
      <h1 class="header__title">Product(s) {{ searchedProducts.length }}</h1>
      <input class="header__search-box" v-model="searchQuery" type="text" placeholder="Search...">
    </div>
    <ul class="list">
        <ListHeader/>
        <li class="list__item" v-for="(item, key) in searchedProducts.slice(state.renderedItemRange[0], state.renderedItemRange[1])" :key="key">
          <ListItem :data="item" @clickItem="openAccordion" :openedItem="state.openedItem === item.id" />
        </li>
    </ul>
    <Pagination :searchedProducts="searchedProducts" @paginate="paginate" :activeItem="state.pagination" />
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, ref, computed } from 'vue'
import ListItem from '../components/ListItem'
import ListHeader from '../components/ListHeader'
import Pagination from '../components/Pagination'

export default {
  name: 'List',
  components: {
    ListItem,
    ListHeader,
    Pagination
  },
  setup() {
    let products = ref({})
    const state = reactive({
      searchQuery: '',
      renderedItemRange: [0, 10],
      openedItem: '',
      pagination: 1
    });
    const searchQuery = ref('');

    axios
        .get("https://shpfy-backend.herokuapp.com/products", {
        headers: {
            'X-Shopify-Access-Token': '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'
        }
        })
        .then((response) => {
        products.value = response.data
        });

    const paginate = (value) => {
        state.pagination = value
        state.renderedItemRange = [10 * value - 10, 10 * value]
    }

    const openAccordion = (value) => state.openedItem = state.openedItem === value ? '' : value

    const searchedProducts = computed(() => {
      return products.value.products.filter((product) => {
        return (
          product.title
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
});

    return { searchedProducts, searchQuery, paginate, state, openAccordion }
  }
}
</script>
