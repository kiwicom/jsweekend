import { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";
import { Collapse } from "antd";

import environment from "../../lib/environment";
import FlightItem from "./FlightItem";
import FlightItemHeader from "./FlightItemHeader";

const query = graphql`
  query FlightListQuery {
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
            airport {
              locationId
              city {
                name
              }
            }
          }
          arrival {
            time
            airport {
              locationId
              city {
                name
              }
            }
          }
          duration
          legs {
            id
            airline {
              name
              logoUrl
            }
            arrival {
              time
              localTime
              airport {
                name
                city {
                  name
                }
              }
            }
            departure {
              time
              localTime
              airport {
                name
                city {
                  name
                }
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

class FlightList extends Component {
  generateRender = ({ error, props }) => {
    if (!error && !props) return <div>Loading</div>;
    if (error) return <div>Error happened: {error}</div>;

    return (
      <Collapse bordered={false}>
        {props.allFlights.edges.map(flight => (
          <Collapse.Panel
            key={flight.cursor}
            header={<FlightItemHeader flight={flight.node} />}
          >
            <FlightItem flight={flight.node} />
          </Collapse.Panel>
        ))}
      </Collapse>
    );
  };

  render() {
    return (
      <div>
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

export default FlightList;
