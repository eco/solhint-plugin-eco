const assert = require('assert');
const linter = require('solhint/lib/index');
const { contractWith } = require('solhint/test/common/contract-builder');

jest.mock('solhint-plugin-beam');

describe('Rule: underscore-events-args', () => {
  const config = {
    plugins: [
      'beam',
    ],
    rules: {
      'beam/no-underscore-events-args': 'error',
    },
  };

  describe('with a event paramaters that start with _', () => {
    const code = contractWith('event badEvent(uint256 indexed _index, address _who);');

    it('should raise an underscore-event-args error', () => {
      const report = linter.processStr(code, config);
      expect(report.errorCount).toBe(2);
    });
  });

  describe('when all event parameters does not start with _', () => {
    const code = contractWith('event goodEvent(uint256 indexed index, address who);');

    it('should not raise an underscore-event-args error', () => {
      const report = linter.processStr(code, config);

      assert.equal(report.errorCount, 0);
    });
  });
});
