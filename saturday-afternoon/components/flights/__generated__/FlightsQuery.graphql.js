/**
 * @flow
 * @relayHash 6b98a705379bd4d216e42d07ef41d4fe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FlightList$ref = any;
export type FlightsQueryVariables = {|
  search: {
    from: $ReadOnlyArray<{
      location?: ?string,
      radius?: ?{
        lat: number,
        lng: number,
        radius: number,
      },
    }>,
    to: $ReadOnlyArray<{
      location?: ?string,
      radius?: ?{
        lat: number,
        lng: number,
        radius: number,
      },
    }>,
    date: {
      exact?: ?any,
      from?: ?any,
      to?: ?any,
    },
    returnDate?: ?{
      exact?: ?any,
      from?: ?any,
      to?: ?any,
    },
    passengers?: ?{
      adults: number,
    },
  },
|};
export type FlightsQueryResponse = {|
  +$fragmentRefs: FlightList$ref,
|};
*/


/*
query FlightsQuery(
  $search: FlightsSearchInput!
) {
  ...FlightList
}

fragment FlightList on RootQuery {
  allFlights(search: $search, first: 5) {
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
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "search",
    "type": "FlightsSearchInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    v3
  ]
},
v5 = [
  v2,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
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
      v4
    ]
  }
],
v6 = [
  v2,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "localTime",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v3,
      v4
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightsQuery",
  "id": null,
  "text": "query FlightsQuery(\n  $search: FlightsSearchInput!\n) {\n  ...FlightList\n}\n\nfragment FlightList on RootQuery {\n  allFlights(search: $search, first: 5) {\n    edges {\n      cursor\n      node {\n        id\n        departure {\n          time\n          airport {\n            locationId\n            city {\n              name\n            }\n          }\n        }\n        arrival {\n          time\n          airport {\n            locationId\n            city {\n              name\n            }\n          }\n        }\n        duration\n        legs {\n          id\n          airline {\n            name\n            logoUrl\n          }\n          arrival {\n            time\n            localTime\n            airport {\n              name\n              city {\n                name\n              }\n            }\n          }\n          departure {\n            time\n            localTime\n            airport {\n              name\n              city {\n                name\n              }\n            }\n          }\n        }\n        price {\n          amount\n          currency\n        }\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "FlightList",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FlightsQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFlights",
        "storageKey": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 5,
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "FlightsSearchInput!"
          }
        ],
        "concreteType": "FlightConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "FlightEdge",
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
                "concreteType": "Flight",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "departure",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v5
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v5
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "duration",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "legs",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Leg",
                    "plural": true,
                    "selections": [
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "airline",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Airline",
                        "plural": false,
                        "selections": [
                          v3,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "logoUrl",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "arrival",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v6
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "departure",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v6
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "price",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Price",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "amount",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "currency",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "allFlights",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 5,
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "FlightsSearchInput!"
          }
        ],
        "handle": "connection",
        "key": "FlightList_allFlights",
        "filters": [
          "search"
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'c88b0a95afb43c4dccfd09d444210707';
module.exports = node;
