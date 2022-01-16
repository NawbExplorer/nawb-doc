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
  url: "https://your-docusaurus-test-site.com",
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
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    "docusaurus-plugin-image-zoom",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "more",
        path: "more",
        routeBasePath: "more",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        include: ["**/*.md", "**/*.mdx"],
        editUrl: ({ locale, versionDocsDirPath, docPath }) => {
          // return `https://github.com/facebook/docusaurus/edit/master/website/${versionDocsDirPath}/${docPath}`;
          return `https://github.com/carla-app`;
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
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        changefreq: "weekly",
        priority: 0.5,
        trailingSlash: false,
      },
    ],
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
          position: "left",
          to: "/docs",
          label: "Docs",
        },
        {
          position: "left",
          label: "UpdateLog",
          to: "/more/update-log",
        },
        {
          position: "left",
          label: "Blog",
          to: "/blog",
        },
        {
          position: "left",
          label: "Purchase",
          to: "https://www.zhihu.com/people/mrno-64",
        },
        {
          position: "left",
          label: "More",
          activeBaseRegex: `/more/`,
          items: [
            {
              label: "Lonely - app-manager",
              to: "/more/lonely-mgmt/start",
            },
            {
              label: "加入我",
              to: "/more/join-me",
            },
          ],
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            // {
            //   to: "/versions",
            //   label: "All versions",
            // },
          ],
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/carla-app",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright© ${new Date().getFullYear()} Wang Han.`,
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Tutorial",
              to: "/docs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "feedback",
            //   to: "/feedback",
            // },
            // {
            //   label: "help",
            //   to: "/help",
            // },
            {
              label: "plugins",
              href: npmPluginsUrl,
            },
          ],
        },
        {
          title: "Other",
          items: [
            {
              label: "zhihu",
              href: "https://www.zhihu.com/people/mrno-64",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/carla-app",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
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
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
