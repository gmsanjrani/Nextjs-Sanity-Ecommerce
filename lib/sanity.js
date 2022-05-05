import sanityClient from '@sanity/client'
import  ImageUrlBuilder  from '@sanity/image-url'


export const client = sanityClient({
  projectId: 'tr043idf',
  dataset: 'production',
  apiVersion: '2022-05-01', // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_AUTH_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)