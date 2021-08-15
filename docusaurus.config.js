/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */
const baseUrl = process.env.BASE_URL || "/";
const npmPluginsUrl =
  "https://www.npmjs.com/search?q=keywords%3Acarla-plugin%20deskbtm%20carlajs";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Carlajs",
  tagline: "首页",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "deskbtm",
  projectName: "Carlajs",
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
    "plugin-image-zoom",
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
    zoomSelector: ".markdown img",
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
      title: "Carlajs",
      logo: {
        alt: "Docusaurus Logo",
        src: "img/carla.svg",
        srcDark: "img/carla.svg",
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
      copyright: `Copyright© ${new Date().getFullYear()} HangWang.`,
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
