const settings = {
  name: "f1",
  state: {
    frontity: {
      url: "https://tarainstruments.com",
      title: "AWSM F1 - Frontity theme",
      description: "A simple theme for Frontity WordPress development",
    },
  },
  packages: [
    {
      name: "@awsmin/f1",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["About", "/about/"],
            ["Principals", "/principals/"],
            ["Products", "/products/"],
            ["Solutions", "/solutions/"],
            ["Support", "/services/"],
            ["News", "/news/"],
            ["Jobs", "/jobs"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover",
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://tarainstruments.com",
          homepage: "/home",
          postsPage: "/products",
          params: {
            per_page: 50,
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
    "@awsmin/frontity-wp-job-openings",
  ],
};

export default settings;
