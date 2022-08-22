import { createApp } from 'vue'
import '@/style/index.css';
import App from './App.vue'

import {setupNaive} from './plugins/navie'

import { store } from './store';

const app = createApp(App)

setupNaive(app) // 按需加载navie UI component
app.use(store) // 模块加载pinia

app.mount('#app')
