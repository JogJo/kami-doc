import { defineConfig, type DefaultTheme } from 'vitepress'

// 中文版-专属配置
export const zh = defineConfig({
    // 语言标记
    lang: 'zh',

    // 网站描述
    description: 'Kami Doctrine 神の教义，基于Vitepress的文档模板，固化繁琐配置，快速搭建一个多语言文档，更专注的写作！',

    // 主题配置
    themeConfig: {
        // 首页标题
        siteTitle: '神の教义',

        // 导航栏
        nav: nav(),

        // 左侧-菜单栏
        sidebar: {
            '/help/': { base: '/help/', items: sidebarHelp() },
            '/blog/': { base: '/blog/', items: sidebarBlog() }
        },

        // 编辑链接
        // editLink: {
        //     pattern: 'https://github.com/jogjo/kami-doc/edit/main/docs/:path',
        //     text: '在 GitHub 上编辑此页面'
        // },

        // 页脚
        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2025-${new Date().getFullYear()} JogJo/Kami`
        },

        // 文档页脚
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        // 右侧目录
        outline: {
            label: '快捷目录'
        },

        // 最后更新
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        // 其他
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
    }
})

// 【搜索框中文配置】
export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    root: {
        placeholder: '搜索文档',
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                    recentSearchesTitle: '搜索历史',
                    noRecentSearchesText: '没有搜索历史',
                    saveRecentSearchButtonTitle: '保存至搜索历史',
                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                    favoriteSearchesTitle: '收藏',
                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                    titleText: '无法获取结果',
                    helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                    searchByText: '搜索提供者'
                },
                noResultsScreen: {
                    noResultsText: '无法找到相关结果',
                    suggestedQueryText: '你可以尝试查询',
                    reportMissingResultsText: '你认为该查询应该有结果？',
                    reportMissingResultsLinkText: '点击反馈'
                }
            }
        }
    }
}

// 【顶部导航】自定义导航栏
function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '帮助',
            link: '/help/index',
            activeMatch: '/help/'
        },
        {
            text: '博客',
            link: '/blog/index',
            activeMatch: '/blog/'
        }
    ]
}

// 【帮助文档】自定义左侧菜单
function sidebarHelp(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '简介',
            collapsed: false,
            items: [
                { text: '神の教义', link: 'index' }
            ]
        },
        {
            text: '开发',
            collapsed: false,
            items: [
                { text: '目录结构', link: '目录结构' },
                { text: '启动', link: '启动' },
                { text: '部署', link: '部署' }
            ]
        },
        {
            text: '写作',
            collapsed: false,
            items: [
                { text: '如何写作', link: '如何写作' }
            ]
        }
    ]
}

// 【博客文档】自定义左侧菜单
function sidebarBlog(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '博客',
            items: [
                {
                    text: '2025年',
                    collapsed: false,
                    items: [
                        {
                            text: '04月',
                            collapsed: false,
                            items: [
                                { text: '04月01', link: '2025/04/0401' }
                            ]
                        },
                        {
                            text: '03月',
                            collapsed: true,
                            items: [
                                { text: '03月22', link: '2025/03/0322' },
                                { text: '03月21', link: '2025/03/0321' }
                            ]
                        },
                        {
                            text: '02月',
                            collapsed: true,
                            items: [
                            ]
                        },
                        {
                            text: '01月',
                            collapsed: true,
                            items: [
                            ]
                        }
                    ]
                },
                {
                    text: '2024年',
                    collapsed: true,
                    items: [
                        {
                            text: '举个栗子噻~', collapsed: true, link: '2024/举个栗子'
                        },
                        {
                            text: '12月',
                            collapsed: true,
                            items: [
                                { text: '12月22', link: '2024/1222' },
                                { text: '12月21', link: '2024/1221' }
                            ]
                        },
                        {
                            text: '11月',
                            collapsed: true,
                            items: [
                                { text: '11月01', link: '2024/1101' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

