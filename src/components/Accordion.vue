<template>
  <div class="accordion" :class="{ 'accordion--active' : openedItem }">
    <div v-html="data.body_html"></div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    data: Object,
    openedItem: Boolean
  }
}
</script>
