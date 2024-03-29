/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Assert, Equals, Extends, NotEquals, NotExtends} from "./index";

// NOTE: Types are exported to avoid unused variable warnings.

// --- Shared Values ---
interface Example {
  a: number;
}
interface ExtendsExample {
  a: 123;
}
type True = true;

// --- Assert ---
export type Assert_True = Assert<true>;
// @ts-expect-error
export type Assert_False = Assert<false>;
// @ts-expect-error
export type Assert_Boolean = Assert<boolean>;
// @ts-expect-error
export type Assert_Unknown = Assert<unknown>;
export type Assert_AcceptsType = Assert<True>;

// --- Extends ---
export type Extends_Boolean = Assert<Extends<true, boolean>>;
export type Extends_Numeric = Assert<Extends<123, number>>;
export type Extends_String = Assert<Extends<"abc", string>>;
export type Extends_Equal = Assert<Extends<42, 42>>;
export type Extends_Interface = Assert<Extends<ExtendsExample, Example>>;
// @ts-expect-error
export type Extends_Unrelated = Assert<Extends<123, "abc">>;
// @ts-expect-error
export type Extends_Inverted = Assert<Extends<number, 123>>;
// @ts-expect-error
export type Extends_InvInterface = Assert<Extends<Example, ExtendsExample>>;

// --- NotExtends --- (just invert all Extends tests)
// @ts-expect-error
export type NotExtends_Boolean = Assert<NotExtends<true, boolean>>;
// @ts-expect-error
export type NotExtends_Numeric = Assert<NotExtends<123, number>>;
// @ts-expect-error
export type NotExtends_String = Assert<NotExtends<"abc", string>>;
// @ts-expect-error
export type NotExtends_Equal = Assert<NotExtends<42, 42>>;
// @ts-expect-error
export type NotExtends_Interface = Assert<NotExtends<ExtendsExample, Example>>;
export type NotExtends_Unrelated = Assert<NotExtends<123, "abc">>;
export type NotExtends_Inverted = Assert<NotExtends<number, 123>>;
export type NotExtends_InvInterface = Assert<
  NotExtends<Example, ExtendsExample>
>;

// --- Equals ---
export type Equals_Boolean = Assert<Equals<true, true>>;
export type Equals_Numeric = Assert<Equals<123, 123>>;
export type Equals_String = Assert<Equals<string, string>>;
export type Equals_Interface = Assert<Equals<Example, Example>>;
// @ts-expect-error
export type Equals_Extends = Assert<Equals<ExtendsExample, Example>>;
// @ts-expect-error
export type Equals_InvertedExtends = Assert<Equals<Example, ExtendsExample>>;
// @ts-expect-error
export type Equals_Unrelated = Assert<Equals<123, "abc">>;

// --- NotEquals --- (just invert all Equals tests)
// @ts-expect-error
export type NotEquals_Boolean = Assert<NotEquals<true, true>>;
// @ts-expect-error
export type NotEquals_Numeric = Assert<NotEquals<123, 123>>;
// @ts-expect-error
export type NotEquals_String = Assert<NotEquals<string, string>>;
// @ts-expect-error
export type NotEquals_Interface = Assert<NotEquals<Example, Example>>;
export type NotEquals_Extends = Assert<NotEquals<ExtendsExample, Example>>;
export type NotEquals_InvertedExtends = Assert<
  NotEquals<Example, ExtendsExample>
>;
export type NotEquals_Unrelated = Assert<NotEquals<123, "abc">>;
