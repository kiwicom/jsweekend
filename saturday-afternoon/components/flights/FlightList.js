// @flow

import * as React from "react";
import { graphql, createPaginationContainer } from "react-relay";
import { Collapse } from "antd";

import type { FlightList as FlightListType } from "./__generated__/FlightList.graphql";
import FlightItem from "./FlightItem";
import FlightItemHeader from "./FlightItemHeader";

type Props = {
  data: FlightListType
};

class FlightList extends React.Component<Props> {
  render() {
    return (
      <div>
        <Collapse bordered={false}>
          {this.props.data.allFlights.edges.map(flight => (
            <Collapse.Panel
              key={flight.cursor}
              header={<FlightItemHeader flight={flight.node} />}
            >
              <FlightItem flight={flight.node} />
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}

export default createPaginationContainer(
  FlightList,
  graphql`
    fragment FlightList on RootQuery
      @argumentDefinitions(
        first: { type: "Int", defaultValue: 5 }
        after: { type: "String" }
      ) {
      allFlights(search: $search, first: $first, after: $after)
        @connection(key: "FlightList_allFlights") {
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
  `,
  {
    direction: "forward"
  }
);
