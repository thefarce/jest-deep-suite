/**
 * A recursive function for flattening nested describe() statements in jest.
 *
 * @name suite
 * @param {Array} nodes
 * @param {Function} inner
 * @returns {undefined} No return value.
 * @example The following two snippets are equivalent.  The first uses the
 * suite() function defined here.  The second uses Jest's default describe()
 * function.
 *
 * // Using this module
 * suite(describe, ['Version 1.0.0', 'Program', 'Options'], () => {
 *   test(...);
 * });
 *
 * //  The same in default Jest.
 * describe('Version 1.0.0', () => {
 *   describe('Program', () => {
 *     describe('Options', () => {
 *       test(...);
 *     });
 *   });
 * });
 */
export default function suite(nodes, inner) {
  if (nodes.length === 1) {
    describe(nodes.shift(), inner);
  } else if (nodes.length > 1) {
    describe(nodes.shift(), () => {
      suite(nodes, inner);
    });
  }
}