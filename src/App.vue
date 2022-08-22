<template>
  <n-config-provider 
  :locale="zhCN"
  :date-locale = "dateZhCN"
  :theme="getDarkTheme"
  :theme-overrides="getThemeOverrides"
  >
      <!-- <router-view/> -->

  <AppProvider>
    
  </AppProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import { zhCN,dateZhCN, darkTheme} from 'naive-ui'
import {useDesignSettingWithOut} from './store/modules/designSetting'

import {AppProvider} from './components/Application/index'




const designStore = useDesignSettingWithOut()

const getDarkTheme = computed(()=>{
  designStore.getDarkTheme?  darkTheme: null
})

const getThemeOverrides = computed(()=>{
  const appTheme = designStore.appTheme

  // const lightenStr = 
  return {
      common: {
        primaryColor: 'appTheme'
    }
  }

})







</script>


<style scoped>

</style>
