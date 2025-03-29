import { defineConfig, type DefaultTheme } from 'vitepress'

// 英文版-专属配置
export const en = defineConfig({
  lang: 'en',
  description: 'Kami Doctrine, based on Vitepress document templates, solidifies tedious configurations, quickly builds a multilingual document, and focuses more on writing!',

  themeConfig: {
    siteTitle: 'Kami Doctrine',

    nav: nav(),

    sidebar: {
      '/en/help/': { base: '/en/help/', items: sidebarHelp() },
      '/en/blog/': { base: '/en/blog/', items: sidebarBlog() }
    },

    // editLink: {
    //   pattern: 'https://github.com/jogjo/kami-doc/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-${new Date().getFullYear()} JogJo/Kami`
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Help',
      link: '/en/help/index',
      activeMatch: '/en/help/'
    },
    {
      text: 'Blog',
      link: '/en/blog/index',
      activeMatch: '/en/blog/'
    }
  ]
}

function sidebarHelp(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Intro',
      collapsed: false,
      items: [
        { text: 'Kami Doctrine', link: 'index' }
      ]
    },
    {
      text: 'Dev',
      collapsed: false,
      items: [
        { text: '目录结构', link: 'markdown' },
        { text: '启动', link: 'asset-handling' },
        { text: '部署', link: 'frontmatter' }
      ]
    },
    {
      text: 'Writing',
      collapsed: false,
      items: [
        { text: 'Markdown 扩展', link: 'markdown' },
        { text: '资源处理', link: 'asset-handling' },
        { text: 'frontmatter', link: 'frontmatter' },
        { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        { text: '国际化', link: 'i18n' }
      ]
    }
  ]
}

function sidebarBlog(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Blog',
      items: [
        {
          text: '2025',
          collapsed: false,
          items: [
            {
              text: '04',
              collapsed: false,
              items: [
                { text: '04-01', link: '2025/0401' }
              ]
            },
            {
              text: '03',
              collapsed: true,
              items: [
                { text: '03-22', link: '2025/0322' },
                { text: '03-21', link: '2025/0321' }
              ]
            },
            {
              text: '02',
              collapsed: true,
              items: [
              ]
            },
            {
              text: '01',
              collapsed: true,
              items: [
              ]
            }
          ]
        },
        {
          text: '2024',
          collapsed: true,
          items: [
            {
              text: '12',
              collapsed: true,
              items: [
                { text: '12-21', link: '2025/0321' },
                { text: '12-22', link: '2025/0322' }
              ]
            },
            {
              text: '11',
              collapsed: true,
              items: [
                { text: '11-01', link: '2025/0401' }
              ]
            }
          ]
        }
      ]
    }
  ]
}