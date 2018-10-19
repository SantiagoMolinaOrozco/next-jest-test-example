[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-jest)

# Example app with Jest tests

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example with-jest with-jest-app
# or
yarn create next-app --example with-jest with-jest-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-jest
cd with-jest
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## Run Jest tests

```bash
npm run test
# or
yarn test
```

## The idea behind the example

This example features:

* An app with jest tests

> A very important part of this example is the `.babelrc` file which configures the `test` environment to use `babel-preset-env` and configures it to transpile modules to `commonjs`). [Learn more](https://github.com/zeit/next.js/issues/2895).

## Run in production 
npm run build
npm run start
https://zeit.co

## Visual Code recommended extensions
code --install-extension dbaeumer.vscode-eslint
code --install-extension eamodio.gitlens
code --install-extension eg2.vscode-npm-script
code --install-extension msjsdiag.debugger-for-chrome
code --install-extension Orta.vscode-jest
code --install-extension robertohuertasm.vscode-icons
code --install-extension xabikos.JavaScriptSnippets
code --install-extension yzhang.markdown-all-in-one