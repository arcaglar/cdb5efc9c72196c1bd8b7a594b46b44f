<template>
  <ul class="pagination">
    <li class="pagination__item" v-for="(item, key) in Math.ceil(searchedProducts.length / 10)" :key="key" @click="$emit('paginate', key + 1)" :class="{ 'pagination__item--active' : activeItem === key + 1 }" >{{ key + 1 }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    searchedProducts: Array,
    activeItem: Number
  }
}
</script>
