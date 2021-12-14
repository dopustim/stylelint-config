const stylelint = require("stylelint")
const config = require("../")

describe("With rule \"color-named\"", () => {

    const validFiles = [ "./spec/fixtures/color-named/valid.css" ]
    const invalidFiles = [ "./spec/fixtures/color-named/invalid.css" ]

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
        it("has errors", () => {
            expect(res.errored).toBeTruthy()
        })
        it("has error for rule \"color-named\"", () => {
            expect(res.warnings[0].rule).toBe("color-named")
            expect(res.warnings[0].severity).toBe("error")
        })
    })
})

describe("With rule \"length-zero-no-unit\"", () => {

    const validFiles = [ "./spec/fixtures/length-zero-no-unit/valid.css" ]
    const invalidFiles = [ "./spec/fixtures/length-zero-no-unit/invalid.css" ]

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
        it("has warnings", () => {
            expect(res.warnings.length).toBeTruthy()
        })
        it("has warning for rule \"length-zero-no-unit\"", () => {
            expect(res.warnings[0].rule).toBe("length-zero-no-unit")
            expect(res.warnings[0].severity).toBe("warning")
        })
    })
})
