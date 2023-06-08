export default {
  title: 'Nav Links',
  name: 'navLinks',
  type: 'document',
  fields: [
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'navLink',
        },
      ],
    },
    {
      title: 'Socials',
      name: 'socialLnks',
      type: 'array',
      of: [
        {
          type: 'navLink',
        },
      ],
    },
  ],
}
