// css 를 import
import './assets/main.css'

// createApp을 import
import { createApp } from 'vue'

// App component 를 import
//import App from './App.vue'
import App from './App2.vue'

// 전역컴포넌트를 등록
// 지역 컴포넌트로 변경하여 등록
//import CheckBoxItem from './components/CheckBoxItem.vue'

// Vue App instance 를 생성 후 #app 위치에 mount
// id 가 app 인 element 는 index.html 에 존재
createApp(App)
//.component('CheckBoxItem', CheckBoxItem)
.mount('#app')
