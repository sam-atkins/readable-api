# Readable API

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Description

This is an improved API for the [Readable app](https://github.com/cubiio/readable). In other words, version 2.0.

### Progress aka TODO list

Development is in progress:

* [x] Add endpoints for managing categories
* [x] Add endpoints for managing posts
* [x] Add endpoints for managing comments
* [ ] Add endpoints for managing users
* [x] Add API endpoint documentation
* [x] Add Docker
* [ ] Unit tests
* [ ] Set-up CI
* [ ] Add graphQL?

## Table of Contents

* [Getting started](#getting-started)
  * [Installation](#installation)
* [Develop](#develop)
  * [How to run](#how-to-run)
  * [Using the API Server](#using-the-api-server)
    * [Include An Authorization Header](#include-an-authorization-header)
    * [API Endpoints](#api-endpoints)
  * [Tests](#tests)
  * [Continuous Integration](#continuous-integration)
  * [Style Guide](#style-guide)
* [Release](#release)

## Getting started

### Prerequisites

* Docker
* MongoDb database - one good option is [mLab](https://mlab.com/welcome/).

### Installation

Git clone the repo.

Convert the file `.env.sample` to `.env` and update `DATABASE=mongodb://user:pass@host.com:port/database` with your MongoDb credentials.

Add an Authorization header username and password in the `.env` file e.g. `AUTH_HEADERS=admin:TOPSECRET`.

From the project folder, run Docker to build the container:

```
docker-compose build
```

## Develop

### How to run

To run the local server:

```sh
docker-compose up
```

### Using the API Server

##### Include An Authorization Header

All requests should use an Authorization header:

```js
fetch(url, {
  headers: { Authorization: "user:password" }
});
```

##### API Endpoints

API endpoint documentation is available [here](https://documenter.getpostman.com/view/3266599/readable-api-v20/RVnZfHXN) via Postman Documentation.

### Tests

_Placeholder_

### Continuous Integration

_Placeholder_

### Style Guide

This repo uses [ESLint](https://eslint.org/) with [Prettier](https://github.com/prettier/prettier) formatting.

The ESLint config extends from AirBnB, with a few changes. Refer to the `.eslintrc.yml` file in the root of the repo for info on the changes.

## Release
