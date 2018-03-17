import { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";
import { Collapse } from "antd";
import moment from "moment";

import environment from "../../lib/environment";
import FlightItemHeader from "./FlightItemHeader";
import FlightItem from "./FlightItem";


const query = graphql`
  query FlightListQuery($search: FlightsSearchInput!) {
    allFlights(search: $search, first: 5) {
      edges {
        cursor
        node {
          id
          departure {
            localTime
            airport {
              locationId
              city {
                name
              }
            }
          }
          arrival {
            localTime
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
              localTime
              airport {
                name
                city {
                  name
                }
              }
            }
            departure {
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
          bookingUrl
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
    const { from, to, date } = this.props;

    return (
      <div style={{ marginTop: "50px" }}>
        <h2>
          List of flights from <em>{from}</em> to <em>{to}</em> on{" "}
          <em>{moment(date).format("LL")}</em>
        </h2>
        <QueryRenderer
          environment={environment}
          query={query}
          variables={{
            search: {
              from: [{ location: from }],
              to: [{ location: to }],
              date: { exact: date }
            }
          }}
          render={this.generateRender}
        />
      </div>
    );
  }
}

export default FlightList;
