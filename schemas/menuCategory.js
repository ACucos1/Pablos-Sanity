export default {
  title: 'Menu Category',
  name: 'menuCategory',
  type: 'document',
  fields: [
    {title: 'Title', name: 'title', type: 'string'},
    {title: 'Description', name: 'desc', type: 'string'},
    {
      title: 'Menu Items',
      name: 'menuItems',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'menuItem'}]}],
    },
  ],
}
