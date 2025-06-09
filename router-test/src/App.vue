<template>
  <div>
    <Headers />
    <router-view></router-view>
  </div>
</template>

<script>
import Headers from "@/components/Headers.vue";

export default {
  name: "App",
  components: { Headers }
}
</script>

<style>

</style>