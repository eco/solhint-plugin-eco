const assert = require('assert');
const linter = require('solhint/lib/index');
const { contractWith } = require('solhint/test/common/contract-builder');

jest.mock('solhint-plugin-beam');

describe('Rule: underscore-event-args', () => {
  const config = {
    plugins: [
      'beam',
    ],
    rules: {
      'beam/underscore-event-args': 'error',
    },
  };

  describe('with a event paramater that does not start with _', () => {
    const code = contractWith('event badEvent(uint256 indexed index, address who);');

    it('should raise an underscore-event-args error', () => {
      const report = linter.processStr(code, config);

      expect(report.errorCount).toBe(1);
    });
  });

  describe('when all event parameters start with _', () => {
    const code = contractWith('event goodEvent(uint256 indexed _index, address _who);');

    it('should not raise an underscore-event-args error', () => {
      const report = linter.processStr(code, config);

      assert.equal(report.errorCount, 0);
    });
  });
});
