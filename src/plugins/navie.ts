import type {App} from 'vue'

import {
  // create naive ui
  create,
  // component
  NButton,
  NSpace,
  NConfigProvider,
  NCard,
  NLoadingBarProvider,
  NNotificationProvider,

} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NSpace,
    NConfigProvider,
    NCard,
    NLoadingBarProvider,
    NNotificationProvider,
  ]
})



export function setupNaive(app:App<Element>){
  app.use(naive)
}