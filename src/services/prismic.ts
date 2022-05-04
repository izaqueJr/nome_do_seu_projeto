import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
    const prismic = Prismic.client(
        process.env.PRISMIC__ENDPOINT,
        {
            req,
            accessToken: process.env.PRISMIC__ACCESS_TOKEN,
        }
    )

    return prismic
}