<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <DialogContent />
      <n-notification-provider>
        <n-message-provider>
          <MessageContent />
          <slot name="default"> defalgu</slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
  
</template>


<script lang="ts">

import { defineComponent } from 'vue'
import {
  NDialogProvider,
  NMessageProvider
} from 'naive-ui'


import { DialogContent } from '@/components/DialogContent/index'
import { MessageContent } from '@/components/MessageContent/index'
// import { Test } from '@/components/Test/index'


export default defineComponent({
  name: "Applicaion",
  components: {
    NDialogProvider,
    NMessageProvider,
    DialogContent,
    MessageContent,

  },
  setup() {
    return {}
  }
})


</script>