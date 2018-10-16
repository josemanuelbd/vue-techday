<template>
  <my-counter :initialCount="initialCount" @onCounterValueIsTen="myEvent"></my-counter>
</template>

<script>
import MyCounter from '@/components/MyCounter.vue'

export default {
  name: 'counter',
  data: function () {
    return {
      initialCount: 6
    }
  },
  components: {
    MyCounter
  },
  methods: {
    myEvent () {
      console.log('Soy el componente padre, el contador de mi componente hijo es 10')
      this.initialCount = 0
    }
  }
}
</script>
