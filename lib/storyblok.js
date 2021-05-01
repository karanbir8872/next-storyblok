import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'ueCVpHCFrzi8F4u89Lbgtwtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export default Storyblok