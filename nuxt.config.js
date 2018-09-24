const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/freelance-anonymous/'
    }
} : {};

module.exports = {
    ...routerBase,
    head: {
        titleTemplate: 'Freelance Anonymous | %s',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Freelance Anonymous'
            }
        ],
    },
    transition: {
        name: 'page'
    },
    css: [
        '~/styles/styles.scss'
    ],
}