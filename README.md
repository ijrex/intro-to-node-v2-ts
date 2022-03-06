# Introduction to Node.js v2 to Node + Typescript

This repository is a Typescript version of Scott Moss's brilliant Introduction to Node.js v2 course from Frontend Masters .

[https://frontendmasters.com/courses/node-js-v2](https://frontendmasters.com/courses/node-js-v2)\
[https://github.com/Hendrixer](https://github.com/Hendrixer)

Syntatically - the TypeScript code doesn't differ much from the JS in the course. Some benefit comes from typechecking imported functions; but also in just seeing how Typescript might be applied.

Besides some minor differences, the folder structure follows the same format as Scott's course.

# :building_construction: Installation

Install root and sub directories:

`npm install && npm run install-subdirs`

# :twisted_rightwards_arrows: Differences from the course

[ts-node](https://www.npmjs.com/package/ts-node) doesn't support `.mts` and `.cts` files yet, so ES6 modules are enabled from the package.json files `{"type":"module"}`.

Instead of a clunky solution to get ts-node working for the tests, `assert` and Jest tests have been split into separate folders.

# :space_invader: Executing code

Some experimental flags are used to make the compiled output match up with the JS in the course; it's handy for this example use case but not ideal for production environments.

> :warning: To make module handling more simpler, the below solutions don't work inside the `/jest` directory.

## **Option 1: With `ts-node`**

https://www.npmjs.com/package/ts-node

Each package.json file has an `exec` script to directly execute Typescript files with ts-node.

**Navigate to directory**

`cd ./PATH`

**Run Typescript file:**

`npm run exec ./PATH/TO/FILE.ts`

All the `exec` script does is run the native [ESM loader in ts-node](https://github.com/TypeStrong/ts-node#commonjs-vs-native-ecmascript-modules) to enable ES6 modules:

`NODE_NO_WARNINGS=1 node --loader ts-node/esm ./PATH/TO/FILE.ts`

## **Option 2: Compile TS to JS**

**Navigate to directory**

`cd ./PATH`

**Output TypeScript files to JS:**

`npx tsc`

**Use Node to execute JS files:**

`node ./PATH/TO/FILE.js`

# :memo: Further Notes

## `/reddit-cli`

Also has the compiled JS file required by package.json.

## `/jest`

Isn't compatible with the `npm exec` script, it has `{"noEmit": true}` in the tsconfig.json`.

The user should use the nested `npm test` script instead.
