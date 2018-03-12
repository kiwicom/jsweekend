/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Leg_leg$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type FlightItem_flight$ref: FragmentReference;
export type FlightItem_flight = {|
  +id: string,
  +legs: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Leg_leg$ref,
  |}>,
  +price: ?{|
    +amount: ?number,
    +currency: ?string,
  |},
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
      "kind": "LinkedField",
      "alias": null,
      "name": "legs",
      "storageKey": null,
      "args": null,
      "concreteType": "Leg",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Leg_leg",
          "args": null
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
};
(node/*: any*/).hash = '5a4584f9d553aeb799c233e2dfdca465';
module.exports = node;
