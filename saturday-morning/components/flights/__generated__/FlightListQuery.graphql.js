/**
 * @flow
 * @relayHash 5fc6843670b7555fde0cbd13547733e8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FlightListQueryVariables = {| |};
export type FlightListQueryResponse = {|
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
|};
*/


/*
query FlightListQuery {
  allFlights(search: {from: [{location: "Prague"}], to: [{location: "Barcelona"}], date: {exact: "2018-03-16"}}, first: 5) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    v2
  ]
},
v4 = [
  v1,
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
      v3
    ]
  }
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    v2,
    v3
  ]
},
v6 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allFlights",
    "storageKey": "allFlights(first:5,search:{\"date\":{\"exact\":\"2018-03-16\"},\"from\":[{\"location\":\"Prague\"}],\"to\":[{\"location\":\"Barcelona\"}]})",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 5,
        "type": "Int"
      },
      {
        "kind": "Literal",
        "name": "search",
        "value": {
          "date": {
            "exact": "2018-03-16"
          },
          "from": [
            {
              "location": "Prague"
            }
          ],
          "to": [
            {
              "location": "Barcelona"
            }
          ]
        },
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
              v0,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "departure",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v4
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "arrival",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v4
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
                  v0,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "airline",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Airline",
                    "plural": false,
                    "selections": [
                      v2,
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
                    "selections": [
                      v5
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "departure",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": [
                      v1,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "localTime",
                        "args": null,
                        "storageKey": null
                      },
                      v5
                    ]
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
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightListQuery",
  "id": null,
  "text": "query FlightListQuery {\n  allFlights(search: {from: [{location: \"Prague\"}], to: [{location: \"Barcelona\"}], date: {exact: \"2018-03-16\"}}, first: 5) {\n    edges {\n      cursor\n      node {\n        id\n        departure {\n          time\n          airport {\n            locationId\n            city {\n              name\n            }\n          }\n        }\n        arrival {\n          time\n          airport {\n            locationId\n            city {\n              name\n            }\n          }\n        }\n        duration\n        legs {\n          id\n          airline {\n            name\n            logoUrl\n          }\n          arrival {\n            airport {\n              name\n              city {\n                name\n              }\n            }\n          }\n          departure {\n            time\n            localTime\n            airport {\n              name\n              city {\n                name\n              }\n            }\n          }\n        }\n        price {\n          amount\n          currency\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightListQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v6
  },
  "operation": {
    "kind": "Operation",
    "name": "FlightListQuery",
    "argumentDefinitions": [],
    "selections": v6
  }
};
})();
(node/*: any*/).hash = 'e9fbc7952a38d81eccbfa58a968e583e';
module.exports = node;
