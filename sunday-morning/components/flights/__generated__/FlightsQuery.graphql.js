/**
 * @flow
 * @relayHash bba749efd6cae88e00785f90c9de431f
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
        ...FlightItem_flight
        ...FlightItemHeader_flight
        id
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment FlightItem_flight on Flight {
  id
  ...Legs
  price {
    amount
    currency
  }
  bookingUrl
}

fragment FlightItemHeader_flight on Flight {
  ...Airlines
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

fragment Airlines on Flight {
  legs {
    id
    airline {
      name
      logoUrl
    }
  }
}

fragment Legs on Flight {
  legs {
    id
    ...Leg_leg
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
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
    v2
  ]
},
v5 = [
  v3,
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
      v4
    ]
  }
],
v6 = [
  v3,
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightsQuery",
  "id": null,
  "text": "query FlightsQuery(\n  $search: FlightsSearchInput!\n) {\n  ...FlightList\n}\n\nfragment FlightList on RootQuery {\n  allFlights(search: $search, first: 5) {\n    edges {\n      cursor\n      node {\n        ...FlightItem_flight\n        ...FlightItemHeader_flight\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment FlightItem_flight on Flight {\n  id\n  ...Legs\n  price {\n    amount\n    currency\n  }\n  bookingUrl\n}\n\nfragment FlightItemHeader_flight on Flight {\n  ...Airlines\n  departure {\n    localTime\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  arrival {\n    localTime\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  duration\n  price {\n    amount\n    currency\n  }\n}\n\nfragment Airlines on Flight {\n  legs {\n    id\n    airline {\n      name\n      logoUrl\n    }\n  }\n}\n\nfragment Legs on Flight {\n  legs {\n    id\n    ...Leg_leg\n  }\n}\n\nfragment Leg_leg on Leg {\n  id\n  airline {\n    name\n    logoUrl\n  }\n  arrival {\n    localTime\n    airport {\n      name\n      city {\n        name\n      }\n    }\n  }\n  departure {\n    localTime\n    airport {\n      name\n      city {\n        name\n      }\n    }\n  }\n}\n",
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
