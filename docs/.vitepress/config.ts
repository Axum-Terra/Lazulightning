import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Lazuli\'s Page',
  description: 'Character profile for @lazulighting-rp on Tumblr',
  base: '/Lazulightning/',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },
      { text: 'Bio', link: '/bio'},
      {
        text: 'Fandoms',
        items: [
          { text: 'RWBY', link: '/RWBY'},
        ],
      },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          { text: 'Bio', link: '/bio' },
          {
            text: 'Fandoms',
            items: [
              { text: 'RWBY', link: '/RWBY'},
            ],
          },
          // ...
        ],
      },
    ],
  },
});
