import assert from 'node:assert';
import * as eslint from 'eslint';

const testFilePath = 'test/eslint.js';

const linter = new eslint.ESLint({ useEslintrc: true });

const [report] = await linter.lintFiles([testFilePath]);

assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);
assert(report.filePath.endsWith(testFilePath));
