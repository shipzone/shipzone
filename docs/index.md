# shipzone

ship stuff to production

## Availabililty

[![npm](https://shipzone.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/shipzone)
[![git](https://shipzone.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/shipzone/shipzone)
[![git](https://shipzone.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/shipzone/shipzone)
[![docs](https://shipzone.gitlab.io/assets/repo-button-docs.svg)](https://shipzone.gitlab.io/shipzone/)

## Status for master

[![build status](https://GitLab.com/shipzone/shipzone/badges/master/build.svg)](https://GitLab.com/shipzone/shipzone/commits/master)
[![coverage report](https://GitLab.com/shipzone/shipzone/badges/master/coverage.svg)](https://GitLab.com/shipzone/shipzone/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/shipzone.svg)](https://www.npmjs.com/package/shipzone)
[![Dependency Status](https://david-dm.org/shipzone/shipzone.svg)](https://david-dm.org/shipzone/shipzone)
[![bitHound Dependencies](https://www.bithound.io/github/shipzone/shipzone/badges/dependencies.svg)](https://www.bithound.io/github/shipzone/shipzone/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/shipzone/shipzone/badges/code.svg)](https://www.bithound.io/github/shipzone/shipzone)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

Use TypeScript for best in class instellisense.

shipzone is the bridge between your code and deploying as running app into production.
This the right place to run shipzone is in the release step of your CI pipeline.

To use shipzone we recommend using the `hosttoday/ht-docker-node:npmci` image

Then you simply run ...

```sh
shipzone deploy
```

... within your project directory

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://shipzone.gitlab.io/assets/repo-footer.svg)](https://ship.zone)
