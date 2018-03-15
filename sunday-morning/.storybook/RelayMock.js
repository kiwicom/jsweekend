// @flow

import { graphql, QueryRenderer } from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { MockList } from 'graphql-tools';
import getNetworkLayer from 'relay-mock-network-layer';

const schema: Object = require('../schema.json');

function createEnvironment(mocks) {
  const network = Network.create(
    getNetworkLayer({
      schema: { data: schema },
      mocks,
    }),
  );
  const store = new Store(new RecordSource());
  return new Environment({ network, store });
}

type Props = {|
  mocks: Object,
  query: () => void,
  variables: Object,
  render: (props: Object) => React.Component,
|};

type RenderProps = {|
  error: Error,
  props: Object,
|};

export default ({ mocks, query, variables, render }: Props) => {
  return (
    <QueryRenderer
      environment={createEnvironment(mocks)}
      query={query}
      variables={variables}
      render={({ error, props }: RenderProps) => {
        if (error) {
          console.log(
            error.errors && Array.isArray(error.errors) && error.errors[0],
          );
          return <div>{error.message}</div>;
        }
        if (props) return render(props);
        return <div>Loading</div>;
      }}
    />
  );
};
