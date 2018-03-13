// @flow

import * as React from "react";
import idx from "idx";
import { type RelayPaginationProp } from "react-relay";

import type { FlightList as FlightListType } from "./__generated__/FlightList.graphql";

type Props = {
  data: FlightListType,
  relay: RelayPaginationProp
};

const FlightEmptyList = (Component: React.ComponentType<Props>) => (
  props: Props
) => {
  const length = idx(props, _ => _.data.allFlights.edges.length);

  if (length) {
    return <Component {...props} />;
  }

  return (
    <div className="root">
      <div className="mainMessage">No flights were found :(</div>
      <div>Try selecting different dates or nearby places.</div>
      <style jsx>{`
        .root {
          text-align: center;
        }
        .mainMessage {
          font-size: 1.4em;
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default FlightEmptyList;
