# newswire
[![Build Status](https://travis-ci.com/meltwater/newswire.svg?token=gcMjNsEdN3MQzPdTpG8C)](https://travis-ci.com/meltwater/newswire)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)
## Project Overview
This project is responsible to expose an API to manage the release a wire to various news agencies.

After a PR professional writes a press release, they need a way to distribute it. This is where a newswire service like Marketwired becomes handy.

Marketwired will take a press release and put it on the wire, an electronically transmitted service providing up-to-the-minute news stories to news desks and journalists. With Marketwired’s newslines, a user can gain targeted, guaranteed coverage in a particular geo or beat.

For example, when Meltwater announced their partnership with Marketwired, we put our press release on the wire. The release was sent to three newslines. It was placed in 163 publications and had 2,750 views. For our public relations specialist, the release was smooth: “Marketwired was able to get this uploaded and sent across the wire on a Sunday night. I’m sure you hear from your PR clients that they’re always putting out fires. It’s great that we can offer them a service that works in ‘real-time’ like they do.”

## Project Ownership
  Team [Spartans](mailto:all.spartans@meltwater.com) is the owner of this repository. If you need to make changes to or have any ideas for improvement at this, please coordinate with team spartans.

## Getting started

### Prerequisites
```
* node v0.10.x
* npm v2.15.x
```

### Application setup
```shell
1. Clone repository
$ git@github.com:meltwater/newswire.git
```

```shell
2. Start newswire process
$ cd newswire
$ npm install
$ npm run start-local
```

### Running tests
```
$ cd newswire
$ npm test
```

## Repository structure
This repository follows the hexagonal directory structure of Apps node services.
```
|-- bin                 --> contains strart script
|-- source
|   |-- api
|   |   `-- http        --> server & routes
|   |-- application
|   |   |-- command     --> entry point for requests to release a wire
|   |   |-- domain      --> Domain objects
|   |   |-- handler     --> contains handler methods
|   |   `-- query       --> Methods to form queries
|   |-- port
|   |   |-- http        --> entry point to make http requests
|   |   |-- mongo       --> entry point for mongo methods
|   |   `-- static
|   |-- resources
|   |-- service         --> contains service classes
|   |-- specs           --> contains IT tests
|   `-- utils           --> contains utility methods
`-- spec

```
## HTTP API Documentation
The HTTP API is documented using Swagger. It is visible at your host and port in the subdirectory '/documentation' (for default local environment it would be http://localhost:8000/documentation). The Swagger documentation for the Newswire will be located at http://localhost:3023/documentation. You will need to run Newswire in order to view it.

# Committing to the Project
Versions and releases of this project are controlled using [semantic-release](https://www.npmjs.com/package/semantic-release).  Because of this, all commits must follow a very specific commit message format.
## Semantic Release Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject** ([full explanation](https://github.com/stevemao/conventional-changelog-angular/blob/master/convention.md)):
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
Using this convention has been made easier by using [commitizen](https://github.com/commitizen/cz-cli) and [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg). To use commitizen for your commit:
```
$ npm run commit
```

## Patch Release
```
fix(pencil): stop graphite breaking when too much pressure applied
```

## ~~Minor~~ Feature Release
```
feat(pencil): add 'graphiteWidth' option
```

## ~~Major~~ Breaking Release
```
perf(pencil): remove graphiteWidth option
BREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason.
```
# Copyright
---------
Copyright © 2016 Meltwater Group, all rights reserved.
