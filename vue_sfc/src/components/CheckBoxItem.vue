<template>
  <li>
    <input type="checkbox" :name="item.name" :checked="item.checked" /> {{item.name}}
  </li>
</template>

<script>
import Items from '../Items';
export default {
    // 컴포넌트 파일명과 동일한 이름으로 명명하는 것을 권장
    name: "CheckBoxItem",
    props: {
        item: Items
    }
    // props: {
    //     id: [Number, String],
    //     name: String,
    //     checked: {
    //         type: Boolean,
    //         required: false,
    //         default: false
    //     }
    // },
    // data() {
    //     return {
    //         checked: false
    //     }
    // }
}
</script>

<style lang="scss" scoped>

</style>