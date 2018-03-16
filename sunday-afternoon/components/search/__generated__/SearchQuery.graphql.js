/**
 * @flow
 * @relayHash 5c0637e384c8ed233ba6f083160112ab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SearchQueryVariables = {| |};
export type SearchQueryResponse = {|
  +allLocations: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +locationId: ?string,
        +name: ?string,
        +slug: ?string,
        +timezone: ?string,
        +type: ?string,
      |},
    |}>,
  |},
|};
*/


/*
query SearchQuery {
  allLocations(options: {locationType: city}) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allLocations",
    "storageKey": "allLocations(options:{\"locationType\":\"city\"})",
    "args": [
      {
        "kind": "Literal",
        "name": "options",
        "value": {
          "locationType": "city"
        },
        "type": "LocationsOptionsInput"
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
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          },
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "slug",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "timezone",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "type",
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
  "name": "SearchQuery",
  "id": null,
  "text": "query SearchQuery {\n  allLocations(options: {locationType: city}) {\n    edges {\n      cursor\n      node {\n        locationId\n        name\n        slug\n        timezone\n        type\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SearchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'bd0dffd5c5c24c9aae2049cb039a0b51';
module.exports = node;
