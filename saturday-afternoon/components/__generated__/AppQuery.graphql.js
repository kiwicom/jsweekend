/**
 * @flow
 * @relayHash 67244cbdb9d240f6e77e69159c767da6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {|
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
export type AppQueryResponse = {|
  +allFlights: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +departure: ?{|
          +time: ?any,
          +airport: ?{|
            +locationId: ?string,
            +city: ?{|
              +name: ?string,
            |},
          |},
        |},
        +arrival: ?{|
          +time: ?any,
          +airport: ?{|
            +locationId: ?string,
            +city: ?{|
              +name: ?string,
            |},
          |},
        |},
        +duration: ?number,
        +legs: ?$ReadOnlyArray<?{|
          +id: string,
          +airline: ?{|
            +name: ?string,
            +logoUrl: ?string,
          |},
          +arrival: ?{|
            +time: ?any,
            +localTime: ?any,
            +airport: ?{|
              +name: ?string,
              +city: ?{|
                +name: ?string,
              |},
            |},
          |},
          +departure: ?{|
            +time: ?any,
            +localTime: ?any,
            +airport: ?{|
              +name: ?string,
              +city: ?{|
                +name: ?string,
              |},
            |},
          |},
        |}>,
        +price: ?{|
          +amount: ?number,
          +currency: ?string,
        |},
      |},
    |}>,
  |},
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
query AppQuery(
  $search: FlightsSearchInput!
) {
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
      }
    }
  }
  allLocations(options: {locationType: city}) {
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
  "name": "locationId",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    v4
  ]
},
v6 = [
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
      v3,
      v5
    ]
  }
],
v7 = [
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
      v4,
      v5
    ]
  }
],
v8 = [
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
                "selections": v6
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
                      v4,
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
                    "selections": v7
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "departure",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v7
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
              }
            ]
          }
        ]
      }
    ]
  },
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
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Location",
            "plural": false,
            "selections": [
              v3,
              v4
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
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery(\n  $search: FlightsSearchInput!\n) {\n  allFlights(search: $search, first: 5) {\n    edges {\n      cursor\n      node {\n        id\n        departure {\n          time\n          airport {\n            locationId\n            city {\n              name\n            }\n          }\n        }\n        arrival {\n          time\n          airport {\n            locationId\n            city {\n              name\n            }\n          }\n        }\n        duration\n        legs {\n          id\n          airline {\n            name\n            logoUrl\n          }\n          arrival {\n            time\n            localTime\n            airport {\n              name\n              city {\n                name\n              }\n            }\n          }\n          departure {\n            time\n            localTime\n            airport {\n              name\n              city {\n                name\n              }\n            }\n          }\n        }\n        price {\n          amount\n          currency\n        }\n      }\n    }\n  }\n  allLocations(options: {locationType: city}) {\n    edges {\n      node {\n        locationId\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v8
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": v0,
    "selections": v8
  }
};
})();
(node/*: any*/).hash = 'be07614d652d1e3f9c48c6817f4c9803';
module.exports = node;
