import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Monolith',
  tagline: 'kakakostyle frontend common utility library',
  favicon: 'https://cf.res.s.zigzag.kr/favicons/zigzag/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com/croquiscom/monolith/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kakaostyle', // Usually your GitHub org/user name.
  projectName: 'monoluth', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        outputFileStrategy:"members",
        entryPoints: ["./src/components/*","./src/hooks/*"],
        tsconfig: "./tsconfig.json",
        plugin: ["./typedoc-plugin.mjs"],
        readme: "none",
        categorizeByGroup: false,
        indexFormat: "table",
        disableSources: true,
        groupOrder: ["Classes", "Interfaces", "Enums"],
        sort: ['source-order'], 
        sidebar: { pretty: true, fullNames: true },
        textContentMappings: {
          "title.indexPage": "공통 사용",
          "title.memberPage": "{name}",
        },
        parametersFormat: "table",
        enumMembersFormat: "table",
        useCodeBlocks: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs', // 문서 경로를 /docs로 변경
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        pages: {
          path: 'docusaurus', // 기본 pages 경로를 변경
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          // customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://cf.fe.s.zigzag.kr/common/logo/zigzag_text_logo.png',
    navbar: {
      title: 'Monolith',
      logo: {
        alt: 'kakaostyle Site Logo',
        src: 'https://cf.fe.s.zigzag.kr/common/logo/zigzag_text_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '공통 함수 문서',
        },
        {to: '/setting', label: '개발세팅', position: 'left'},
        {to: '/developer', label: '개발작성 가이드', position: 'left'},
        {to: '/convention', label: '컨벤션', position: 'left'},

        {
          href: 'https://github.com/croquiscom/monolith',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/croquiscom/monolith',
            },
          ],
        },
      ],
      copyright: 'Copyright © kakaostyle Corp. All rights reserved.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
