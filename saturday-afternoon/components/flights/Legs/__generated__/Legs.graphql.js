/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Leg_leg$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Legs$ref: FragmentReference;
export type Legs = {|
  +legs: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: Leg_leg$ref,
  |}>,
  +$refType: Legs$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Legs",
  "type": "Flight",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "Leg_leg",
          "args": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '1b2461a672309b0ab6419e992c2e6466';
module.exports = node;
