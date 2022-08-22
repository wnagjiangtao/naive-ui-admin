import { defineStore } from 'pinia'
import { store } from '../index'
import setting from '@/settings/designSetting'

const {darkTheme,appTheme,appThemeList}  = setting

interface DesignSettingState{
    //深色主题
    darkTheme: boolean;
    //系统主题色
    appTheme: string;
    //系统内置主题色列表
    appThemeList: string[];
}

const useDesignSettingStore = defineStore({
  id:"app-design-setting",
  state:():DesignSettingState =>({
    darkTheme,
    appTheme,
    appThemeList,
  }),
  getters:{
    getDarkTheme():boolean{
      return this.darkTheme
    },
    getAppTheme():string{
      return this.appTheme
    },
    getAppthemeList():string[]{
      return this.appThemeList
    }
  },
  actions:{
    
  }
})




// Need to be used outside the setup
export function useDesignSettingWithOut() {
  return useDesignSettingStore(store);
}