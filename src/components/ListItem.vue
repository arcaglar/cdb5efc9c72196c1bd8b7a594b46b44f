<template>
  <div class="list-item" :class="{ 'list-item--active' : openedItem }" @click="$emit('clickItem', data.id)">
    <span class="list-item__value">{{ data.title }}</span>
    <span class="list-item__value">{{ data.variants[0].price }}</span>
    <span class="list-item__value list-item__value--right">
      <img src="../assets/icons/arrow-down.svg" height="18" class="arrow" :class="{ 'arrow--active' : openedItem }">
    </span>
    <Accordion :data="data" :openedItem="openedItem" />
  </div>
</template>

<script>
import Accordion from './Accordion'

export default {
  name: 'ListItem',
  props: {
    data: Object,
    openedItem: Boolean
  },
  components: {
    Accordion
  }
}
</script>
