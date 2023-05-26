import menuItem from './menuItem'

export default {
  name: 'mainPage',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      title: 'Site Name',
      name: 'siteName',
      type: 'string',
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
    },
    {
      title: 'About Text',
      name: 'aboutText',
      type: 'text',
    },
    {
      title: 'Grid Images',
      name: 'gridImages',
      type: 'array',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.max(5),
    },
    {
      title: 'Menu Heading',
      name: 'menuHeading',
      type: 'string',
    },
    {
      title: 'Menu Sub Heading',
      name: 'menuSubHeading',
      type: 'string',
    },
  ],
}
