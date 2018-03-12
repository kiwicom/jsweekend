import fetch from "isomorphic-unfetch";

export async function fetchFlights(from, to, date) {
  const query = `query allFlights($from: String, $to: String, $date: Date) {
    allFlights(search: {
      from: {location: $from}
      to: {location: $to}
      date: {exact: $date}
    }
    first: 10
    ) {
      edges {
        node {
          id
          airlines {
            name
          }
          price {
            amount
            currency
          }
          duration
          departure {
            time
            localTime
          }
          arrival {
            time
            localTime
          }
        }
      }
    }
  }`;
  const variables = {
    from,
    to,
    date
  };

  const resp = await fetch("https://graphql.kiwi.com", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({ query, variables })
  });
  const data = await resp.json();

  if (data && data.data && data.data.allFlights && data.data.allFlights) {
    return data.data.allFlights.edges;
  } else {
    return [];
  }
}
