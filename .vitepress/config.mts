import { defineConfig } from 'vitepress'
import { baseConfig } from './config/base'
import { en } from './config/en'
import { zh } from './config/zh'

// 配置入口
export default defineConfig({
  ...baseConfig,
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en }
  }
})
