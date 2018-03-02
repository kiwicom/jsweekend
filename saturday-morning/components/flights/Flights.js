import { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";

import environment from "../../lib/environment";
import FlightItem from "./FlightItem";

const query = graphql`
  query FlightsQuery {
    allFlights(
      search: {
        from: [{ location: "Prague" }]
        to: [{ location: "Barcelona" }]
        date: { exact: "2018-11-05" }
      }
      first: 5
    ) {
      edges {
        cursor
        node {
          id
          departure {
            time
          }
          arrival {
            time
          }
          duration
          legs {
            id
            airline {
              name
              logoUrl
            }
            arrival {
              airport {
                name
              }
            }
            departure {
              time
              localTime
              airport {
                name
              }
            }
          }
          price {
            amount
            currency
          }
        }
      }
    }
  }
`;

class Flights extends Component {
  generateRender = ({ error, props }) => {
    if (error || !props) return <div>Loading</div>;
    if (error) return <div>Error happened: {error}</div>;

    return props.allFlights.edges.map(flight => (
      <FlightItem flight={flight} key={flight.cursor} />
    ));
  };

  render() {
    return (
      <div style={{ margin: "auto 500px" }}>
        <h2>
          List of flights from <em>Prague</em> to <em>Barcelona</em> on{" "}
          <em>5th November 2018</em>
        </h2>
        <QueryRenderer
          environment={environment}
          query={query}
          variables={{}}
          render={this.generateRender}
        />
      </div>
    );
  }
}

export default Flights;
