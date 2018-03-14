/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Legs$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type FlightItem_flight$ref: FragmentReference;
export type FlightItem_flight = {|
  +id: string,
  +price: ?{|
    +amount: ?number,
    +currency: ?string,
  |},
  +bookingUrl: ?string,
  +$fragmentRefs: Legs$ref,
  +$refType: FlightItem_flight$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FlightItem_flight",
  "type": "Flight",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Legs",
      "args": null
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
    }
  ]
};
(node/*: any*/).hash = '67276553ef1ed85ba557f2aea09b44fa';
module.exports = node;
