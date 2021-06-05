const settings = {
  name: "tara-react",
  state: {
    frontity: {
      url: "https://tarainstruments.com",
      title: "Tara Instruments",
      description: "The website for Tara Instruments.",
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
            // ["Solutions", "/solutions/"],
            ["News", "/news/"],
            ["Jobs", "/jobs/"],
            ["Contact", "/contact/"],
          ],
          socialLinks: [
            ["Facebook", "https://www.facebook.com/TaraInternational1980/"],
            [
              "LinkedIn",
              "https://www.linkedin.com/company/taragroupofbusiness/mycompany/",
            ],
            [
              "YouTube",
              "https://www.youtube.com/channel/UCqTtnisCnTNwVOO_NfFxDqQ",
            ],
            ["Twitter", "https://twitter.com/tarainstruments"],
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
            {
              type: "news", // type slug
              endpoint: "news", // REST API endpoint
              archive: "/news", // link where this custom posts are listed
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
