// @flow

import * as React from "react";
import { graphql, QueryRenderer } from "react-relay";

import environment from "../../lib/environment";
import SearchForm from "./SearchForm";

type Props = {
  from: string,
  to: string,
  date: string,
  onSubmit: ({| from: string, to: string, date: string |}) => void
};

const query = graphql`
  query SearchQuery {
    allLocations(options: { locationType: city }) {
      edges {
        cursor
        node {
          locationId
          name
          slug
          timezone
          type
        }
      }
    }
  }
`;

const Search = (ownProps: Props) => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      render={({ error, props }: Object) => {
        if (!error && !props) return <SearchForm {...ownProps} />;
        if (error) return <div>Error happened: {error.message}</div>;

        return <SearchForm {...ownProps} locations={props.allLocations} />;
      }}
    />
  );
};

export default Search;
