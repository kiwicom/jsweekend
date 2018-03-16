/**
 * @flow
 * @relayHash be522644fd2b491014899b9bb41d1ad9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FlightItemHeader_flight$ref = any;
type FlightItem_flight$ref = any;
export type FlightQueryVariables = {|
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
export type FlightQueryResponse = {|
  +allFlights: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +$fragmentRefs: (FlightItem_flight$ref & FlightItemHeader_flight$ref),
      |},
    |}>,
  |},
|};
*/


/*
query FlightQuery(
  $search: FlightsSearchInput!
) {
  allFlights(search: $search) {
    edges {
      cursor
      node {
        ...FlightItem_flight
        ...FlightItemHeader_flight
        id
      }
    }
  }
}

fragment FlightItem_flight on Flight {
  id
  legs {
    id
    ...Leg_leg
  }
  price {
    amount
    currency
  }
  bookingUrl
}

fragment FlightItemHeader_flight on Flight {
  legs {
    id
    airline {
      name
      logoUrl
    }
  }
  departure {
    localTime
    airport {
      locationId
      city {
        name
      }
    }
  }
  arrival {
    localTime
    airport {
      locationId
      city {
        name
      }
    }
  }
  duration
  price {
    amount
    currency
  }
}

fragment Leg_leg on Leg {
  id
  airline {
    name
    logoUrl
  }
  arrival {
    localTime
    airport {
      name
      city {
        name
      }
    }
  }
  departure {
    localTime
    airport {
      name
      city {
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
v1 = [
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search",
    "type": "FlightsSearchInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
  "args": null,
  "storageKey": null
},
v6 = {
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
v7 = [
  v5,
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
      v6
    ]
  }
],
v8 = [
  v5,
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
      v6
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightQuery",
  "id": null,
  "text": "query FlightQuery(\n  $search: FlightsSearchInput!\n) {\n  allFlights(search: $search) {\n    edges {\n      cursor\n      node {\n        ...FlightItem_flight\n        ...FlightItemHeader_flight\n        id\n      }\n    }\n  }\n}\n\nfragment FlightItem_flight on Flight {\n  id\n  legs {\n    id\n    ...Leg_leg\n  }\n  price {\n    amount\n    currency\n  }\n  bookingUrl\n}\n\nfragment FlightItemHeader_flight on Flight {\n  legs {\n    id\n    airline {\n      name\n      logoUrl\n    }\n  }\n  departure {\n    localTime\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  arrival {\n    localTime\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  duration\n  price {\n    amount\n    currency\n  }\n}\n\nfragment Leg_leg on Leg {\n  id\n  airline {\n    name\n    logoUrl\n  }\n  arrival {\n    localTime\n    airport {\n      name\n      city {\n        name\n      }\n    }\n  }\n  departure {\n    localTime\n    airport {\n      name\n      city {\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFlights",
        "storageKey": null,
        "args": v1,
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
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Flight",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "FlightItem_flight",
                    "args": null
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": "FlightItemHeader_flight",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FlightQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFlights",
        "storageKey": null,
        "args": v1,
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
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Flight",
                "plural": false,
                "selections": [
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "legs",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Leg",
                    "plural": true,
                    "selections": [
                      v3,
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "bookingUrl",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "departure",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v8
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v8
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "duration",
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
};
})();
(node/*: any*/).hash = '36281fecbf0f017f65dba383d427d8b7';
module.exports = node;
