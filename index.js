const possibleErrors = require("./rules/possible-errors.json")
const limitLanguageFeatures = require("./rules/limit-language-features.json")
const stylisticIssues = require("./rules/stylistic-issues.json")

module.exports = {
    defaultSeverity: "warning",
    rules: {
        ...possibleErrors,
        ...limitLanguageFeatures,
        ...stylisticIssues
    }
}
