import { createApp } from 'vue'
import '@/style/index.css';
import App from './App.vue'

import {setupNaive} from './plugins/navie'

const app = createApp(App)

setupNaive(app)

app.mount('#app')
