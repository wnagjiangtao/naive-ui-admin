import type {App} from 'vue'

import {
  // create naive ui
  create,
  // component
  NButton,
  NSpace,

} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NSpace,

  ]
})



export function setupNaive(app:App<Element>){
  app.use(naive)
}