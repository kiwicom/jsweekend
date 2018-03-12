/**
 * @flow
<<<<<<< HEAD:saturday-morning/components/flights/__generated__/FlightListQuery.graphql.js
 * @relayHash f94c41d15dcbb0118e2f58574a1b20f1
=======
 * @relayHash f062693d7f563020b0cb896d02d3f048
>>>>>>> fragments:saturday-afternoon/components/flights/__generated__/FlightListQuery.graphql.js
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FlightItemHeader_flight$ref = any;
type FlightItem_flight$ref = any;
export type FlightListQueryVariables = {|
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
export type FlightListQueryResponse = {|
  +allFlights: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
<<<<<<< HEAD:saturday-morning/components/flights/__generated__/FlightListQuery.graphql.js
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
=======
        +$fragmentRefs: (FlightItem_flight$ref & FlightItemHeader_flight$ref),
>>>>>>> fragments:saturday-afternoon/components/flights/__generated__/FlightListQuery.graphql.js
      |},
    |}>,
  |},
|};
*/


/*
query FlightListQuery(
  $search: FlightsSearchInput!
) {
  allFlights(search: $search, first: 5) {
    edges {
      cursor
      node {
        ...FlightItem_flight
        ...FlightItemHeader_flight
        id
<<<<<<< HEAD:saturday-morning/components/flights/__generated__/FlightListQuery.graphql.js
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
=======
      }
    }
  }
}

fragment FlightItem_flight on Flight {
  id
  legs {
    ...Leg_leg
    id
  }
  price {
    amount
    currency
  }
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
>>>>>>> fragments:saturday-afternoon/components/flights/__generated__/FlightListQuery.graphql.js
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
  "name": "time",
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
<<<<<<< HEAD:saturday-morning/components/flights/__generated__/FlightListQuery.graphql.js
v5 = [
  v2,
=======
v7 = [
  v5,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "localTime",
    "args": null,
    "storageKey": null
  },
>>>>>>> fragments:saturday-afternoon/components/flights/__generated__/FlightListQuery.graphql.js
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
<<<<<<< HEAD:saturday-morning/components/flights/__generated__/FlightListQuery.graphql.js
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
v6 = {
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
},
v7 = [
=======
      v4,
      v6
    ]
  }
],
v8 = [
  v5,
>>>>>>> fragments:saturday-afternoon/components/flights/__generated__/FlightListQuery.graphql.js
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
  "name": "FlightListQuery",
  "id": null,
  "text": "query FlightListQuery(\n  $search: FlightsSearchInput!\n) {\n  allFlights(search: $search, first: 5) {\n    edges {\n      cursor\n      node {\n        ...FlightItem_flight\n        ...FlightItemHeader_flight\n        id\n      }\n    }\n  }\n}\n\nfragment FlightItem_flight on Flight {\n  id\n  legs {\n    ...Leg_leg\n    id\n  }\n  price {\n    amount\n    currency\n  }\n}\n\nfragment FlightItemHeader_flight on Flight {\n  legs {\n    id\n    airline {\n      name\n      logoUrl\n    }\n  }\n  departure {\n    time\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  arrival {\n    time\n    airport {\n      locationId\n      city {\n        name\n      }\n    }\n  }\n  duration\n  price {\n    amount\n    currency\n  }\n}\n\nfragment Leg_leg on Leg {\n  id\n  airline {\n    name\n    logoUrl\n  }\n  arrival {\n    time\n    localTime\n    airport {\n      name\n      city {\n        name\n      }\n    }\n  }\n  departure {\n    time\n    localTime\n    airport {\n      name\n      city {\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightListQuery",
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
    "name": "FlightListQuery",
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
<<<<<<< HEAD:saturday-morning/components/flights/__generated__/FlightListQuery.graphql.js
                      v6
=======
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
>>>>>>> fragments:saturday-afternoon/components/flights/__generated__/FlightListQuery.graphql.js
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
<<<<<<< HEAD:saturday-morning/components/flights/__generated__/FlightListQuery.graphql.js
                    "selections": [
                      v2,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "localTime",
                        "args": null,
                        "storageKey": null
                      },
                      v6
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
=======
                    "selections": v8
                  },
>>>>>>> fragments:saturday-afternoon/components/flights/__generated__/FlightListQuery.graphql.js
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
<<<<<<< HEAD:saturday-morning/components/flights/__generated__/FlightListQuery.graphql.js
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightListQuery",
  "id": null,
  "text": "query FlightListQuery(\n  $search: FlightsSearchInput!\n) {\n  allFlights(search: $search, first: 5) {\n    edges {\n      cursor\n      node {\n        id\n        departure {\n          time\n          airport {\n            locationId\n            city {\n              name\n            }\n          }\n        }\n        arrival {\n          time\n          airport {\n            locationId\n            city {\n              name\n            }\n          }\n        }\n        duration\n        legs {\n          id\n          airline {\n            name\n            logoUrl\n          }\n          arrival {\n            airport {\n              name\n              city {\n                name\n              }\n            }\n          }\n          departure {\n            time\n            localTime\n            airport {\n              name\n              city {\n                name\n              }\n            }\n          }\n        }\n        price {\n          amount\n          currency\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightListQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v7
  },
  "operation": {
    "kind": "Operation",
    "name": "FlightListQuery",
    "argumentDefinitions": v0,
    "selections": v7
  }
};
})();
(node/*: any*/).hash = 'e022e1a062f36ae04755dd6e5e1d623a';
=======
};
})();
(node/*: any*/).hash = '4ac97290a3a034021ac3fc98aace2bcb';
>>>>>>> fragments:saturday-afternoon/components/flights/__generated__/FlightListQuery.graphql.js
module.exports = node;
