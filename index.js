module.exports = {

    extends: [
        './rules/recommended.json'
    ].map(require.resolve)
};
