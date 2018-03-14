# Sunday Morning

In this part, you're going to use application from previous day to add [Storybook](https://storybook.js.org/) stories containing examples of your components with its interfaces & write acceptance tests using [Cypress](https://www.cypress.io/).

## Run app

- create `.env` file with `GRAPHQL_ENDPOINT_URL` variable pointing to Kiwi.com GraphQL server and then run:

```
yarn dev
```

- You might need to install dependencies as well, if you haven't done so before. From the root dir of this repository, run these commands instead:

```
yarn install
cd sunday-morning
yarn dev
```

## Cypress

- Start with executing the following command in this directory:

```
yarn cypress:open
```

Cypress app should open with the information about newly created files in `cypress` subdirectory. Go through the examples and try to implement your own test verifying that correct results are returned for specified flight, e.g. "Madrid" => "Amsterdam"

- *Tip*: Create `cypress.json` with settings as below to avoid repeating url in the code:

```
{
  "baseUrl": "http://localhost:3000"
}
```
