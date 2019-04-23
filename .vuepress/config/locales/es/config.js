const ads = require('./ads')

const translation = require('./translation')

module.exports = {
  languages: {
    label: 'Spanish',
    shortname: 'ES'
  },
  translation,
  ads,
  logo: {
    name: 'visual-intelligence-logo',
    ext: 'png',
    alt: 'Orca Fit'
  },
  share: {
    facebookCaption: 'Orca Fit',
    twitterVia: 'vuevg',
  },
  newsletter: {
    provider: 'mailchimp',
    action: ''
  },
  copy: `2018 © Orca Fit - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          HECHO CON VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'Orca Fit',
      items: [
        {
          label: 'ACERCA',
          path: '/es/sobre/'
        },
        {
          label: 'CATEGORÍAS',
          path: '/es/categories/'
        },
        {
          label: 'CONTACTO',
          path: '/es/contacto/'
        }
      ]
    },
    nav2: {
      title: 'Comunidad',
      items: []
    }
  },
  social: [
    {
      name: 'twitter',
      link: 'https://www.twitter.com/vuevg'
    },
    {
      name: 'youtube',
      link: 'https://www.youtube.com/vuevg'
    },
    {
      name: 'github',
      link: 'https://www.github.com/vuevg'
    }
  ]
}
