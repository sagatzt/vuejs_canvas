<template>
  <div class="about">
    <HelloWorld2 msg="Trabajar con canvas"/>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld2 from '@/components/HelloWorld2.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld2
  }
}
</script>