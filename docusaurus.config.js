/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */
const baseUrl = process.env.BASE_URL || "/";
const npmPluginsUrl =
  "https://www.npmjs.com/search?q=keywords%3Acarla-plugin%20deskbtm%20carlajs";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Nawb",
  tagline: "首页",
  url: "https://nawb.deskbtm.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "deskbtm",
  projectName: "Nawb",
  baseUrl,
  baseUrlIssueBanner: true,
  customFields: {
    npmPluginsUrl,
  },
  i18n: {
    defaultLocale: "zh-cn",
    locales: ["zh-cn"],
    localeConfigs: {
      // en: {
      //   label: "English",
      // },
      "zh-cn": {
        label: "简体中文",
      },
    },
  },
  plugins: [
    "docusaurus-plugin-sass",
    "docusaurus-plugin-image-zoom",
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "more",
        path: "more",
        routeBasePath: "more",
        editUrl: ({ locale, versionDocsDirPath, docPath }) => {
          // return `https://github.com/facebook/docusaurus/edit/master/website/${versionDocsDirPath}/${docPath}`;
          return `https://github.com/NawbExplorer`;
        },
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/carla.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
        ],
      },
    ],
    // [
    //   "@docusaurus/plugin-sitemap",
    //   {
    //     changefreq: "weekly",
    //     priority: 0.5,
    //     trailingSlash: false,
    //   },
    // ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
      },
    ],
  ],
  themeConfig: {
    googleAnalytics: {
      trackingID: "UA-196075244-1",
      anonymizeIP: true,
    },
    zoom: {
      selector: ".markdown > img",
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
      },
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/nightOwlLight"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      hideOnScroll: true,
      title: "Nawb",
      logo: {
        alt: "Nawb Logo",
        src: "img/nawb-light.svg",
        srcDark: "img/nawb-dark.svg",
        width: 44,
        height: 44,
      },
      items: [
        {
          position: "right",
          to: "/docs",
          label: "Docs",
        },
        // {
        //   position: "right",
        //   label: "Blog",
        //   to: "/blog",
        // },
        {
          position: "right",
          label: "Purchase",
          to: "https://www.zhihu.com/people/mrno-64",
        },
        {
          position: "right",
          label: "letscollab",
          to: "https://letscollab.deskbtm.com",
        },
        {
          position: "right",
          label: "More",
          activeBaseRegex: `/more/`,
          items: [
            {
              label: "UpdateLog",
              to: "/more/lonely-mgmt/start",
            },
            {
              label: "join-me",
              to: "/more/join-me",
            },
          ],
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/NawbExplorer",
          position: "left",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    // footer: {
    //   style: "dark",
    //   copyright: `Copyright© ${new Date().getFullYear()} Wang Han.`,
    //   links: [
    //     {
    //       title: "Learn",
    //       items: [
    //         {
    //           label: "Tutorial",
    //           to: "/docs",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         // {
    //         //   label: "feedback",
    //         //   to: "/feedback",
    //         // },
    //         // {
    //         //   label: "help",
    //         //   to: "/help",
    //         // },
    //         {
    //           label: "plugins",
    //           href: npmPluginsUrl,
    //         },
    //       ],
    //     },
    //     {
    //       title: "Other",
    //       items: [
    //         {
    //           label: "zhihu",
    //           href: "https://www.zhihu.com/people/mrno-64",
    //         },
    //         {
    //           label: "Blog",
    //           to: "/blog",
    //         },
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/NawbExplorer",
    //         },
    //       ],
    //     },
    //   ],
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        docs: {
          path: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            return `https://github.com/NawbExplorer`;
          },
          lastVersion: "current",
          versions: {
            current: {
              label: "1.0.0",
            },
          },
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
        },
        pages: {
          remarkPlugins: [
            require("@docusaurus/remark-plugin-npm2yarn"),
            { sync: true },
          ],
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.scss"),
            require.resolve("./src/css/navbar.scss"),
          ],
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
};
