<template>
  <div class="container">
    <h1 class="title">Product(s) 12</h1>
    <ul class="list">
        <li class="list__item">
        <ListItem/>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted } from 'vue'
import ListItem from './ListItem'

export default {
  name: 'List',
  components: {
    ListItem
  },
  setup() {
    // let products = ref([])

    onMounted(() => {
        axios.get('https://teknasyon.myshopify.com/admin/api/2022-01/products.json', {
            headers: {
                'X-Shopify-Access-Token': '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'
            }
        })
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response.data)
        })
    })
  }
}
</script>
