const stylelint = require("stylelint")
const config = require("../")
const fs = require("fs")

for (const ruleName in config.rules) {

    if (!fs.existsSync(`./spec/fixtures/${ruleName}`) ||
        !fs.lstatSync(`./spec/fixtures/${ruleName}`).isDirectory())
        continue

    describe(`With rule "${ruleName}"`, () => {

        const validFiles = [ `./spec/fixtures/${ruleName}/valid.css` ]
        const invalidFiles = [ `./spec/fixtures/${ruleName}/invalid.css` ]

        let res

        describe("valid file", () => {

            beforeAll(async () => {
                res = await stylelint.lint({ config: config, files: validFiles })
                res = res.results[0]
            })
            it("has no errors", () => {
                expect(res.errored).toBeFalsy()
            })
            it("has no warnings", () => {
                expect(res.warnings.length).toBeFalsy()
            })
        })

        describe("invalid file", () => {

            beforeAll(async () => {
                res = await stylelint.lint({ config: config, files: invalidFiles })
                res = res.results[0]
            })
            if (config.rules[ruleName].length === 2 &&
                "severity" in config.rules[ruleName][1] &&
                config.rules[ruleName][1].severity === "error") {
                // Errors
                it("has errors", () => {
                    expect(res.errored).toBeTruthy()
                })
                it(`has error for rule "${ruleName}"`, () => {
                    expect(res.warnings[0].rule).toBe(ruleName)
                    expect(res.warnings[0].severity).toBe("error")
                })
            } else {
                // Warnings
                it("has warnings", () => {
                    expect(res.warnings.length).toBeTruthy()
                })
                it(`has warning for rule "${ruleName}"`, () => {
                    expect(res.warnings[0].rule).toBe(ruleName)
                    expect(res.warnings[0].severity).toBe("warning")
                })
            }
        })
    })
}
