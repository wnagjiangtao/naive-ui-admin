<template>
  <n-button @click="handleButtonClick">
    test dialog
  </n-button>
</template>


<script  lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: "Test",
  setup() {

    const $dialog = window['$dialog']
    const $message = window['$message']

    return {
      handleButtonClick() {
        $dialog.success({
          // title: '关闭',
          // positiveText: '确定',
          // negativeText: '不确定',
          // maskClosable: false,
        })

        
        // $message.info("asdfa")
      }
    }

  }
})





</script>