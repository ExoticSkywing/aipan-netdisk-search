export default defineNuxtConfig({
    devtools: { enabled: false },
    app: {
        // head
        head: {
            title: '追剧自由-浪漫宇宙系，终于找到！一款神器解决所有影视资源问题🎉',
            meta: [
                {
                    name: 'description',
                    content: '追剧自由-浪漫宇宙系，终于找到！一款神器解决所有影视资源问题🎉'
                },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'referrer',
                    content: 'no-referrer'
                },
                {
                    name: 'referrer',
                    content: 'always'
                },
                {
                    name: 'referrer',
                    content: 'strict-origin-when-cross-origin'
                }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-17SPF6S871',
                    async: true
                },
                {
                    src: '/ga.js'
                },
                {
                    src: '/qrcode.min.js'
                },
                {
                    src: 'https://challenges.cloudflare.com/turnstile/v0/api.js'
                },
                {
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8210373406341452',
                    async: true,
                    crossorigin: 'anonymous'
                }
            ]

        }
    },
    // build modules
    modules: [
        '@element-plus/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/device',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',

    ],
    colorMode: {
        preference: 'light',
        classSuffix: ''
    },
    tailwindcss: {
        configPath: 'tailwind.config.js'
    },
    googleFonts: {
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: true,
        download: false,
        base64: false,
        families: {
            'Inter': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Poetsen One': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Sedan SC': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Briem Hand': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Noto Sans Simplified Chinese': [100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
    },
    i18n: {
        defaultLocale: 'cn',
        langDir: './assets/lang/',
        locales: [
            {
                code: 'en',
                name: 'English',
                iso: 'en-US',
                file: 'en-US.json'
            },
            {
                code: 'cn',
                name: '中文',
                iso: 'zh-CN',
                file: 'zh-CN.json'
            }
        ],
    },
    plugins: [

    ],
    nitro: {
        devProxy: {
           
        }
    },
    runtimeConfig: {
        openaiApiKey: '',
        proxyUrl: ''
    }
})