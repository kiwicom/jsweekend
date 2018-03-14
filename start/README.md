# The beginning of JS Weekend

## Introduction

> This is the initial state of the JS Weekend project. Simple GraphQL fetch of
> flights, hardcoded destinations, lame CSS usage and component composition.
> Lot of things to improve during the weekend.

## Installation

* See the [Main Readme](../README.md#Installation) on how to install dependencies if you have not installed them yet

## How to run

Development server can be started by using:

```bash
yarn dev
```

Go to [http://localhost:3000](http://localhost:3000)

## About

The goal of JS Weekend project is to show best practices when building a web
application in React. We think the good way to do that is to start with a bad
example and during two days rebuild it into much more better one. To be honest
this is not a that bad example at all. It's using React, Next.js framework,
data are being fetched from GraphQL endpoint etc. There is still a lot of place
for improvement:

* Add Flow so we can use types
* Use Relay so we don't need to fetch data manually
* Create tests so are always sure application works
* Add CSS-in-JS so components are really re-usable
* Setup Continuous Deployment for fast iteration

## Usage

To make sure this app works well on your local environment, run the app
(see [Installation](#installation)) and try to change searched destinations
in `pages/index.js` or remove `className` from some elements in
`components/Flight.js` and see an immediate change in the browser.

## Next steps

Once we are sure this app works well on your computer, we can start to teach
you how to improve it. We'll start with a usage of GraphQL framework Relay,
ensure coding standards with ESLint and write our first unit test. The desired
result can be seen in `../saturday-morning` folder.
