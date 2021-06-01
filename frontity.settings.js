const settings = {
  name: "tara-react",
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
            ["Principles", "/principles/"],
            ["Products", "/products/"],
            ["Solutions", "/solutions/"],
            ["Support", "/services/"],
            ["News", "/news/"],
            ["Jobs", "/jobs/"],
          ],
          socialLinks: [
            ["Facebook", "https://facebook.com/tarainstruments"],
            ["Twitter", "https://twitter.com/tarainstruments"],
            [
              "LinkedIn",
              "https://www.linkedin.com/company/tara-international/",
            ],
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
          categoryBase: "category",
          //   postEndpoint: "products",
          postTypes: [
            {
              type: "principles", // type slug
              endpoint: "principles", // REST API endpoint
              archive: "/principles", // link where this custom posts are listed
            },
          ],
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
