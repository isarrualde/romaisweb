<template>
  <div>
    <navbar />
    <homeherodiversity />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/Navbar.vue'
import Homeherodiversity from '../components/homeherodiversity.vue'


export default Vue.extend({
  components: { Navbar,  Homeherodiversity },})
</script>