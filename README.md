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

export type EqualsExample = Assert<Equals<123, 123>>;
export type NotEqualsExample = Assert<NotEquals<123, 456>>;
export type ExtendsExample = Assert<Extends<123, number>>;
export type NotExtendsExample = Assert<NotExtends<number, 123>>;
```

## Purpose

Any sufficiently complex TypeScript project will eventually require the
development of utility types, which are often left untested because unit tests
cannot be written for types. However, testing these types ensures that your type
system is sound and therefore you can rely on type errors to prevent the cases
that you assume cannot happen based on your understanding of your types.

## Comparison With Alternatives

The standard alternative for this is `dtslist`, which uses `$ExpectType`
comments to test types with an external tool. However, this requires an
additional testing step rather than just taking advantage of the compiler's
abilities. A failed `$ExpectType` will only error when someone runs the
`dtslint` command, while an error with these utilities will never make it past
`tsc`.
