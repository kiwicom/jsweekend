import { Environment, Network, RecordSource, Store } from "relay-runtime";
require("isomorphic-fetch");

async function fetchQuery(operation, variables) {
  try {
    const response = await fetch(process.env.GRAPHQL_ENDPOINT_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        query: operation.text,
        variables
      })
    });

    return response.json();
  } catch (error) {
    throw new Error(`Something bad happened: ${error}`);
  }
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});
