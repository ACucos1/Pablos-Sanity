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
        id: 'aboutPage',
        title: 'About Page',
        child: S.document().title('About Page').schemaType('aboutPage'),
      }),
      S.listItem({
        id: 'contactPage',
        title: 'Contact Page',
        child: S.document().title('Contact Page').schemaType('contactPage'),
      }),
      S.listItem({
        id: 'NavLinks',
        title: 'Navigation Links',
        child: S.document().title('Navigation Links').schemaType('navLinks'),
      }),
      S.listItem({
        id: 'menu',
        title: 'Menu',
        child: S.documentTypeList('menuCategory'),
      }),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'mainPage',
            'menuItem',
            'menuCategory',
            'navLink',
            'navLinks',
            'aboutPage',
            'contactPage',
          ].includes(listItem.getId())
      ),
    ])
