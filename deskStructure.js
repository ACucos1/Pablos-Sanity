export default (S, context) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem({
        id: 'mainpage',
        title: 'Main Page',
        child: S.document().title('Main page').schemaType('mainPage'),
      }),
      S.listItem({
        id: 'menu',
        title: 'Menu',
        child: S.documentTypeList('menuCategory'),
      }),
      ...S.documentTypeListItems().filter(
        (listItem) => !['mainPage', 'menuItem', 'menuCategory'].includes(listItem.getId())
      ),
    ])
