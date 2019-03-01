# Solhint Plugin for the Beam Network Style Guide _(solhint-plugin-beam)_
[![Build Status](https://travis-ci.com/BeamNetwork/solhint-plugin-beam.svg?branch=master)](https://travis-ci.com/BeamNetwork/solhint-plugin-beam)
> A solhint plugin to enforce Beam's style rules

Provides solhint rules to enforce the extra Solidity style rules used at Beam
Network.

## Table of Contents
 - [Install](#install)
 - [Usage](#usage)
 - [Contributing](#contributing)
 - [License](#license)

## Install
Install via NPM:
```bash
npm install --save-dev solhint-plugin-beam
```

Add to your solhint configuration and enable some rules:
```json
{
  "plugins": [
    "beam"
  ],
  "rules": {
    "beam/underscore-function-args": "error"
  }
}
```

## Usage
Provides the following rules:
 - `beam/underscore-function-args`
   Function arguments must start with `_` to help distinguish them from storage
   variables.

## License
[MIT (c) Beam Network](./LICENSE)
