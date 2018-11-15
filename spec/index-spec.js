const stylelint = require('stylelint');
const config = require('../');

describe('Lint result for valid CSS file', () => {

    let res;

    beforeAll(async () => {
        res = await stylelint.lint({
            config: config,
            files: './spec/valid.css'
        });
        res = res.results[0];
    });
    it('has no errors', () => {
        expect(res.errored).toBeFalsy();
    });
});

describe('Lint result for invalid CSS file', () => {

    let res;

    beforeAll(async () => {
        res = await stylelint.lint({
            config: config,
            files: './spec/invalid.css'
        });
        res = res.results[0];
    });
    it('has errors', () => {
        expect(res.errored).toBeTruthy();
    });
    it('has warning for rule "length-zero-no-unit"', () => {
        expect(res.warnings[0].rule).toBe('length-zero-no-unit');
        expect(res.warnings[0].severity).toBe('warning');
    });
    it('has warning for rule "color-named"', () => {
        expect(res.warnings[1].rule).toBe('color-named');
        expect(res.warnings[1].severity).toBe('error');
    });
});
