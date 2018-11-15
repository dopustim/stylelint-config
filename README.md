
# @dopustim/stylelint-config

Configuration file for StyleLint

[![NPM](https://img.shields.io/npm/dt/@dopustim/stylelint-config.svg?style=flat-square)](https://www.npmjs.com/package/@dopustim/stylelint-config)

[![GitHub tag](https://img.shields.io/github/tag/dopustim/stylelint-config.svg?style=flat-square)](https://github.com/dopustim/stylelint-config/tags)
[![GitHub stars](https://img.shields.io/github/stars/dopustim/stylelint-config.svg?style=flat-square)](https://github.com/dopustim/stylelint-config/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/dopustim/stylelint-config.svg?style=flat-square)](https://github.com/dopustim/stylelint-config/issues)

[![License](https://img.shields.io/badge/license-ISC-green.svg?style=flat-square)](/LICENSE.md)

## Features

- Provide Errors and Warnings
- 2 spaces for indentation (warning)
- 100 symbols per line (warning)
- Unix linebreaks (warning)

## Usage

Install `@dopustim/stylelint-config` package via [NPM](https://www.npmjs.com/package/@dopustim/stylelint-config):

```sh
$ npm i -D stylelint @dopustim/stylelint-config
```

Extend this config in your `.stylelintrc.json`:

```json
{
    "extends": "@dopustim/stylelint-config"
}
```

You can also reassign any rule for your needs:

```json
{
    "extends": "@dopustim/stylelint-config",
    "rules": {
        "indentation": [4, {"ignore": "value", "severity": "warning"}]
    }
}
```

## Rules

You can find all rules on [official site](https://stylelint.io/user-guide/rules/).

## License

[ISC License](./LICENSE.md) © 2018 Dopustim Vladimir
