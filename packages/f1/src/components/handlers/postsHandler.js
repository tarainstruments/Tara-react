const postsHandler = {
  name: "customposts",
  priority: 10,
  // This pattern is the name you can later use in "actions.source.fetch"
  // to fetch the content or "state.source.get" to get the data.
  pattern: "customposts",
  // This is the function triggered when you use:
  // actions.source.fetch("customposts");
  func: async ({ state, libraries }) => {
    // Fetch endpoint.
    const response = await libraries.source.api.get({
      endpoint: "rishi/posts",
    });

    // Extract data from response object.
    const data = await response.json();

    // Assign data to be consumed later.
    // This is the data returned when you use:
    // state.source.get("customposts");
    Object.assign(state.source.data["customposts"], {
      data,
    });
  },
};

export default postsHandler;
