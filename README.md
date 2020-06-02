#### `assertion-types`

`assertion-types` is a tiny, fast, and, easy-to-learn type-testing library that
requires no extra build/test setup.

## Introduction

The `assertion-types` library provides four simple tests for inspecting types:
`Equals`, `Extends`, `NotEquals`, and `NotExtends`. Along with the included
`Assert` type, these utilities allow you to test that the results of your types
are what you expect them to be. Because this method requires no other tools
besides the TypeScript compiler, errors will show up right in your editor and
you won't be able to build your project if your tests fail.

Usage is simple:

```ts
import {Assert, Equals, Extends, NotEquals, NotExtends} from "assertion-types";

// Using `export` to avoid unused type errors

// Equals:
export type EqualsExample = Assert<Equals<123, 123>>;

// NotEquals:
export type NotEqualsExample = Assert<NotEquals<123, 456>>;

// Extends:
export type ExtendsExample = Assert<Extends<123, number>>;

// NotExtends:
export type NotExtendsExample = Assert<NotExtends<number, 123>>;
```

## Getting Started

Install via NPM:

```sh
npm install --save-dev assertion-types
```

After that, just import into your test files:

```ts
import * as assertionTypes from "assertion-types";
// OR
import {Assert, Equals, Extends, NotEquals, NotExtends} from "assertion-types";
```

No need to run any commands to run the tests - if they error, they will error
when the TypeScript compiler runs.

## Purpose

Any sufficiently complex TypeScript project will eventually require the
development of utility types, which are often left untested because unit tests
cannot be written for types. However, testing these types ensures that your type
system is sound and therefore you can rely on type errors to prevent the cases
that you assume cannot happen based on your understanding of your types.

## Comparison With Alternatives

### `dtslint`

The standard alternative for this is
[`dtslint`](https://github.com/microsoft/dtslint), which uses `$ExpectType`
comments to test types with an external tool. This tool is in wide usage and
works well, however it comes with some disadvantages that led me to create this
library:

- It adds an extra step: you always have to run `dtslint` to test your types.
- It doesn't take advantage of the compiler's inherent ability to test types.
- It is very strict about what a type is. The following should pass, but instead
  it errors:
  ```ts
  // $ExpectType X<string | number>
  type Example = X<number | string>;
  ```

### `tsd`

Linked on the `dtslint` page is an alternative library just for testing types:
[`tsd`](https://github.com/SamVerschueren/tsd). `tsd` appears to solve many
problems and is a great contendor for testing types, however:

- It still doesn't take advantage of the compiler's abilities.
- It has a not-insignificant learning curve and doesn't always have the outcomes
  you'd expect (https://github.com/SamVerschueren/tsd/issues/65).
- Setup requires some extra steps, whereas this library is drop-in.
- It's not actively maintained (pull requests are open from September 2019).
