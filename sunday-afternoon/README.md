# Sunday Afternoon

See the deployment: https://sunday-afternoon-ovufdkoqav.now.sh

This part is the shortest one as it is the last one. :( In this part we will deploy our app to [Now](https://zeit.co/now). We will also show you how to deploy our Storybook as a static app.

All the commands from our previous blocks still work. We're not going to be adding much this time round. For written down [how to](#how-to-deploy) see [this section](#how-to-deploy).

## Run app

* create `.env` file with the `GRAPHQL_ENDPOINT_URL` variable:

```
GRAPHQL_ENDPOINT_URL=https://graphql.kiwi.com/
```

Run the app:

```
yarn dev
```

* You might need to install dependencies as well, if you haven't done so before. From the root dir of this repository, run these commands instead:

```
yarn install
cd sunday-morning
yarn dev
```

## Storybook

* Run this command:

```
yarn storybook
```

See Storybook in action [http://localhost:9001](http://localhost:9001)

## Cypress

* Start with executing the following command in this directory:

```
yarn cypress:open
```

Cypress app should open with the information about newly created files in `cypress` subdirectory. Go through the examples and try to implement your own test verifying that correct results are returned for specified flight, e.g. "Madrid" => "Amsterdam"

* _Tip_: Create `cypress.json` with settings as below to avoid repeating url in the code:

```
{
  "baseUrl": "http://localhost:3000"
}
```

## How to deploy

We're going to be using [Now](https://zeit.co/now). Now is a great way to easily host an app without having to worry about the underlying devops. It's also free for OSS projects.

For this project we needed to create a whitelist file (see [now.json](./now.json)). This is because Now has a 1MB limit on free deployments. We fit in this limit as long as we exclude some files.

Deployment is simple:

1.  Go to https://zeit.co/now and register if you have not already
2.  `yarn global add now-cli`
3.  Run: `now`
4.  Wait
5.  Now will output a link to your new deployment
