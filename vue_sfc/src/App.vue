<template>
  <div>
    <h2>App 컴포넌트</h2>
    <hr>
    <ul>
      <CheckBoxItem v-for="item in items" :item="item" :key="item.id" />
    </ul>
  </div>
</template>

<script>
import CheckBoxItem from './components/CheckBoxItem.vue'
import Items from './Items'

export default {
  name: "App",
  data() {
    return {
      items: [
        new Items(1, 'BTS', true),
        new Items(2, 'BlackPink', false),
        new Items(3, 'IU', false),
        new Items(4, 'EXO', false),
      ]
      // items: [
      //   {id:1, name:"BTS", checked:true},
      //   {id:2, name:"BlackPink", checked:false},
      //   {id:3, name:"IU", checked:false},
      //   {id:4, name:"EXO", checked:false},
      // ]

    }
  },
  // components 옵션으로 등록할 때 사용할 태그명이 컴포넌트 이름과 동일하면, 간결하게 표현 가능
  // components: {
  //   CheckBoxItem
  // }
  components: {
    "CheckBoxItem": CheckBoxItem
  },
}
</script>

<style scoped>

</style>