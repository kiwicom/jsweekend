/**
 * @flow
 * @relayHash 65f583b816bbebaade2237787b427baa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SearchFormLocationsQueryVariables = {|
  search?: ?string,
|};
export type SearchFormLocationsQueryResponse = {|
  +allLocations: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +locationId: ?string,
        +name: ?string,
      |},
    |}>,
  |},
|};
*/


/*
query SearchFormLocationsQuery(
  $search: String
) {
  allLocations(search: $search, first: 20) {
    edges {
      node {
        locationId
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "search",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allLocations",
    "storageKey": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 20,
        "type": "Int"
      },
      {
        "kind": "Variable",
        "name": "search",
        "variableName": "search",
        "type": "String"
      }
    ],
    "concreteType": "LocationConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Location",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "locationId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SearchFormLocationsQuery",
  "id": null,
  "text": "query SearchFormLocationsQuery(\n  $search: String\n) {\n  allLocations(search: $search, first: 20) {\n    edges {\n      node {\n        locationId\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SearchFormLocationsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchFormLocationsQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'ad1cf1a9ed6ed28ee3ac7f6aadd2788e';
module.exports = node;
