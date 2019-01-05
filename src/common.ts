import * as ESTree from './estree';
import * as Errors from './errors';
import { Token } from './token';
/**
 * The core context, passed around everywhere as a simple immutable bit set.
 */
export const enum Context {
  Empty = 0,

  OptionsNext = 1 << 0,
  OptionsRanges = 1 << 1,
  OptionsJSX = 1 << 2,
  OptionsRaw = 1 << 3,
  OptionsDisableWebCompat = 1 << 4,
  OptionsLoc = 1 << 5,
  OptionsGlobalReturn = 1 << 6,
  OptionsExperimental = 1 << 7,
  OptionsNative = 1 << 8,
  OptionsTokenize = 1 << 9,

  Strict = 1 << 12,
  Module = 1 << 14,

  ExpressionStart = 1 << 15,
  TaggedTemplate = 1 << 16
}

/**
 * The mutable parser flags, in case any flags need passed by reference.
 */
export const enum Flags {
  Empty = 0,
  NewLine = 1 << 0,
  SameLine = 1 << 1,
  LastIsCR = 1 << 2,
  Scientific = 1 << 4,
  Octal = 1 << 5,
  HexSpecifier = 1 << 6,
  BinarySpecifier = 1 << 7,
  OctalSpecifier = 1 << 8,
  ContainsSeparator = 1 << 9
}

/**
 * The type of the `onComment` option.
 */
export type OnComment = void | ESTree.Comment[] | ((type: string, value: string, start: number, end: number) => any);

/**
 * The parser interface.
 */
export interface ParserState {
  source: string;
  onComment: OnComment;

  flags: Flags;
  index: number;
  line: number;
  startIndex: number;
  column: number;
  token: Token;
  tokenValue: any;
  tokenRaw: string;
  length: number;
  lastRegExpError: any;
  capturingParens: number;
  largestBackReference: number;
  lastRegexUnicodeEscapeOrd: number;
  tokenRegExp: void | {
    pattern: string;
    flags: string;
  };

  // For the scanner to work around lack of multiple return.
  lastChar: number;
}

/**
 * A simple `unimplemented` helper.
 */
export function unimplemented(): never {
  throw new Error('unimplemented');
}

// Note: this is intentionally ambient, since it should never be called. (It should be a guaranteed
// runtime error.)
export declare function unreachable(...values: never[]): never;

export function finishNode<T extends ESTree.Node>(context: Context, start: number, end: number, node: T): T {
  if (context & Context.OptionsRanges) {
    node.start = start;
    node.end = end;
  }

  return node;
}

export function report(parser: ParserState, message: string): never {
  return Errors.report(parser.index, parser.line, parser.column, message);
}
