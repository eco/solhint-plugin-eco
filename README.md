# Solhint Plugin for the Eco Inc Style Guide _(solhint-plugin-eco)_
[![Build Status](https://travis-ci.com/eco/solhint-plugin-eco.svg?branch=master)](https://travis-ci.com/eco/solhint-plugin-eco)
> A solhint plugin to enforce Eco's style rules

Provides solhint rules to enforce the extra Solidity style rules used at Eco
Network.

## Table of Contents
 - [Install](#install)
 - [Usage](#usage)
 - [Contributing](#contributing)
 - [License](#license)

## Install
Install via NPM:
```bash
npm install --save-dev solhint-plugin-eco
```

Add to your solhint configuration and enable some rules:
```json
{
  "plugins": [
    "eco"
  ],
  "rules": {
    "eco/underscore-function-args": "error"
  }
}
```

## Usage
Provides the following rules:
 - `eco/underscore-function-args`
   Function arguments must start with `_` to help distinguish them from storage
   variables.

## License
[MIT (c) Eco Inc](./LICENSE)
