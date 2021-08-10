export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'my-project',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" },
            { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css" },
            { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" }
        ],
        script: [{
                src: "https://code.jquery.com/jquery-3.3.1.min.js"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            },
            {
                src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js"
            },
            {
                src: "/js/stisla.js"
            },
            {
                src: "/js/scripts.js"
            },
            {
                src: "/js/custom.js"
            }
        ]
    },


    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["../assets/CSS/style.css", "../assets/CSS/components.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~plugins/vue-js-modal.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/auth-next',
        'nuxt-sweetalert2'
    ],
    auth: {
        strategies: {
            local: {
                token: {
                    property: "data.token",
                    type: "",
                    name: "Auth-token"
                },
                user: {
                    property: "data"
                },
                endpoints: {
                    login: {
                        url: "http://localhost:4000/auth",
                        method: "POST",
                        propertyName: "data.token"
                    },
                    user: {
                        url: "http://localhost:4000/users",
                        method: "GET"
                    },
                    logout: false
                }
            }
        }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseUrl: "http://localhost:4000/",
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}