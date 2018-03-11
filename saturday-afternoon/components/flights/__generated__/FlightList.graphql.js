/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type FlightList$ref: FragmentReference;
export type FlightList = {|
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
  +$refType: FlightList$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
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
v5 = [
  v1,
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
      v2,
      v3
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "FlightList",
  "type": "RootQuery",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "allFlights"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": 5
    },
    {
      "kind": "LocalArgument",
      "name": "after",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "RootArgument",
      "name": "search",
      "type": "FlightsSearchInput!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allFlights",
      "name": "__FlightList_allFlights_connection",
      "storageKey": null,
      "args": [
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
                      "selections": v5
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "departure",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "RouteStop",
                      "plural": false,
                      "selections": v5
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
    }
  ]
};
})();
(node/*: any*/).hash = 'ee85b58977852c65979d2c8cdfe7b90f';
module.exports = node;
