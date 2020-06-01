/**
 * @file **assertion-types** | Simple utilities for testing types.
 * @author Ian Sanders
 * @copyright 2019 Ian Sanders
 * @license MIT
 */

/** The core assertion utility. Asserts that `X` is valid. */
export type Assert<X extends true> = X;

/** Tests that `A` extends `B` (`A` is assignable to `B`). */
export type Extends<A, B> = A extends B ? true : false;

/** Tests that `A` and `B` are equal (`A` extends `B` and vice versa). */
export type Equals<A, B> = A extends B ? (B extends A ? true : false) : false;

/** Tests that `A` does not extend `B`. */
export type NotExtends<A, B> = A extends B ? false : true;

/** Tests that `A` is not equal to `B`. */
export type NotEquals<A, B> = A extends B ? (B extends A ? false : true) : true;
