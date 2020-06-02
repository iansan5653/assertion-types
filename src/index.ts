/**
 * @file **assertion-types** | Simple utilities for testing types.
 * @author Ian Sanders
 * @copyright 2020 Ian Sanders
 * @license MIT
 */

/**
 * The core assertion utility. Asserts that `X` is `true`.
 * @example
 * export type AreSameTest = Assert<Equals<123, 123>>;
 */
// Note: We have to seperately export the assertion and test utilities because
// otherwise the type error would occur in this file, not where the utilities
// are used. This is why we don't export AssertEquals, etc.
export type Assert<Test extends true> = Test;

/**
 * Converts type `boolean` to `false`. `boolean` results from a test when the
 * tested types are unions where one type passes and one fails, so TS doesn't
 * know the result.
 */
type DefaultFalse<T extends boolean> = boolean extends T ? false : T;

/** Inverts a boolean result. */
type Invert<T extends boolean> = T extends true ? false : true;

/** Tests that `A` and `B` are both `true`. */
type And<A extends boolean, B extends boolean> = A extends true ? B : false;

/** Tests that `A` extends `B` (`A` is assignable to `B`). */
export type Extends<A, B> = DefaultFalse<A extends B ? true : false>;

/** Tests that `A` and `B` are equal (`A` extends `B` and vice versa). */
export type Equals<A, B> = And<Extends<A, B>, Extends<B, A>>;

/** Tests that `A` does not extend `B`. */
export type NotExtends<A, B> = Invert<Extends<A, B>>;

/** Tests that `A` is not equal to `B`. */
export type NotEquals<A, B> = Invert<Equals<A, B>>;
