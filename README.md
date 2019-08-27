# Welcome to cordova-version-updater

<img src="https://img.shields.io/badge/version-0.1.0-blue.svg?vacheSeconds=2592000" />

Semantic version updater for cordova config.xml files

## Install

```sh
npm i cordova-version-updater -g
```

## Usage

Will update one (and only one) of either major, minor, or patch versions, and write the changes to the config file.  It defaults to `config.xml` in the current directory, however you can specify a path by `cv-update -p project/cordova/config.xml`, for example.

``` shell
> cv-update -h
Usage: cv-update [options] <file>

Semantic versioning updater for cordova config.xml files

Options:
  -M --major     Increments major version
  -m --minor     Increments minor version
  -p --patch     Increments patch version
  -z --zero      Zero out the lower versions when updating a minor
                 or major versions, e.g.: 1.2.4 to 2.0.0
  -V, --version  output the version number
  -h, --help     output usage information
```

## Run tests

```sh
npm run test
```

## Author

👤 **David Goodwin &lt;goodwid@gmail.com&gt;**

* Twitter: [@goodwid](https://twitter.com/goodwid)
* Github: [@goodwid](https://github.com/goodwid)

## Show your support

Give a ⭐️ if this project helped you !

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
