const assert = require('assert');
const linter = require('solhint/lib/index');
const { contractWith } = require('solhint/test/common/contract-builder');

jest.mock('solhint-plugin-eco');

describe('Rule: underscore-function-args', () => {
  const config = {
    plugins: [
      'eco',
    ],
    rules: {
      'eco/underscore-function-args': 'error',
    },
  };

  describe('with a function paramater that does not start with _', () => {
    const code = contractWith('function badFunction(uint256 foo) public {\n}');

    it('should raise an underscore-function-args error', () => {
      const report = linter.processStr(code, config);

      expect(report.errorCount).toBe(1);
    });
  });

  describe('when all function parameters start with _', () => {
    const code = contractWith('function badFunction(uint256 _foo) public {\n}');

    it('should not raise an underscore-function-args error', () => {
      const report = linter.processStr(code, config);

      assert.equal(report.errorCount, 0);
    });
  });
});
