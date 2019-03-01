/* This mock is used (by jest) to fool solhint into thinking that the plugin
 * module exists and can be loaded by `require`.
 */
const original = require('../../../index.js');

module.exports = original;
