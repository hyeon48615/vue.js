<template>
  <div style="border:1px solid gray; padding: 5px;">
    이름 : <input type="text" v-model="name" />
    <button @click="$emit('nameChanged', {name})">이벤트 발생</button>
  </div>
</template>

<script>
export default {
    name: "InputName",
    data() {
        return {
            name: ""
        };
    },
}
</script>

<style>

</style>