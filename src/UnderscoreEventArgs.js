/**
 * Copyright 2018 Eco Inc Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @fileoverview Require that events arguments not prefixed by _
 * @author Kirill Moizik <kirill@eco.com>
 */
const ruleId = 'no-underscore-events-args';
const meta = {
  type: 'naming',

  docs: {
    description: 'Event argument itentifiers must not start with _',
    category: 'Eco Style Guide Rules',
  },

  isDefault: true,
  recommended: true,
  defaultSetup: ['warn', 45],

  schema: [],
};

class UnderscoreEventArgs {
  constructor(reporter, config) {
    this.reporter = reporter;
    this.ruleId = ruleId;
    this.meta = meta;
    this.config = config;
  }

  enterEventDefinition(ctx) {
    const params = ctx.eventParameterList().eventParameter();
    params.forEach((param) => {
      const identifier = param.identifier().getText();
      if (identifier.startsWith('_')) {
        this.reporter.error(
          ctx,
          this.ruleId,
          "event arguments can't start with _",
        );
      }
    });
  }
}

module.exports = UnderscoreEventArgs;
