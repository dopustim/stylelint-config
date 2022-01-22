
# Stylelint Configuration

Configuration for Stylelint

[![NPM](https://img.shields.io/npm/dt/@dopustim/stylelint-config?style=flat-square)](https://www.npmjs.com/package/@dopustim/stylelint-config)

## Features

- Provide Errors and Warnings
- 2 spaces for indentation (warning)
- 90 symbols per line (warning)
- Unix linebreaks (warning)

## Usage

Install `stylelint` and `@dopustim/stylelint-config` packages via [NPM](https://www.npmjs.com):

```sh
npm install -D stylelint @dopustim/stylelint-config
```

Extend this config in your `.stylelintrc.json`:

```json
{
    "extends": "@dopustim/stylelint-config"
}
```

Or use your `package.json`:

```json
"stylelint": {
    "extends": "@dopustim/stylelint-config"
}
```

You can also reassign any rule for your needs:

```json
{
    "extends": "@dopustim/stylelint-config",
    "rules": {
        "max-line-length": [ 100, { "severity": "warning" } ]
    }
}
```

## About

Visit the [Stylelint website](https://stylelint.io) to find out all rules and descriptions.
