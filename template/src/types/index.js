
/** @typedef {object} Onion
 * @property {number} code
 * @property {number} serviceCode
 * @property {string} shortName
 * @property {string?} fullName
 */

/** @typedef {Onion[]} Onions */


/** @type {Onion} */
const a = {
  code: 3,
  serviceCode: 3,
  shortName: 'short name',
};

/** @type {Onions} */
//const b = [a]

console.log(a.fullName);
