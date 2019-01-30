import { ParserState } from './common';

/*@internal*/
export const enum Errors {
  Unexpected,
  UnexpectedToken,
  NothingToRepat,
  AtEndOfPattern,
  InvalidPropertyName,
  InvalidDecimalEscape,
  InvalidBackReferenceNumber,
  InvalidNamedReference,
  InvalidRegExp,
  InvalidEscape,
  InvalidUnicodeEscape,
  InvalidRegExpNoUFlag,
  InvalidRegExpWithUFlag,
  RangeOutOfOrder,
  RangeInvalid,
  UnterminatedCharClass,
  InvalidQuantifier,
  InvalidQuantifierNoUFlagAB,
  UnclosedRegExpGroup,
  InvalidRegExpGroup,
  InvalidCaptureGroupName,
  InvalidExtendedUnicodeEscape,
  AlreadyDeclaredGroupName,
  UnterminatedGroup,
  InvalidCaptureRef,
  LoneQuantifierBrackets,
  DuplicateRegExpFlag,
  UnterminatedComment,
  HtmlCommentInModule,
  IllegalCaracter,
  UnicodeOverflow,
  InvalidHexEscapeSequence,
  InvalidEightAndNine,
  StrictOctalEscape,
  UnterminatedString,
  UnterminatedTemplate,
  MissingExponent,
  IDStartAfterNumber,
  InvalidBigInt,
  ExpectedNumberInRadix,
  LegacyOctalsInStrictMode,
  AlreadyDeclared,
  InvalidCatchVarBinding,
  SloppyFunction,
  StrictFunction,
  InvalidDuplicateBinding,
  InvalidLetInStrict,
  UndeclaredExportedBinding,
  InvalidDuplicateExportedBinding,
  MissingInitInConstDecl,
  IllegalContinue,
  IllegalBreak,
  StrictModeWith,
  LabelRedeclaration,
  NewlineAfterThrow,
  IllegalReturn,
  StrictDelete,
  InvalidLOExponentation,
  SuperNoConstructor,
  InvalidSuperProperty,
  DuplicateConstructor,
  StrictFunctionName,
  StaticPrototype,
  InvalidConstructor,
  UnterminatedRegExp,
  UnexpectedTokenRegExpFlag,
  YieldReservedKeyword,
  DisallowedInContext,
  InvalidLetClassName,
  InvalidLetConstBinding,
  InvalidStrictLet,
  AwaitOutsideAsync,
  InvalidStrictStatic,
  InvalidReservedWordStrict,
  ForbiddenAsStatement,
  AsyncFunctionInSingleStatementContext,
  PrivateFieldConstructor,
  PublicFieldConstructor,
  PrivateStaticPrototype,
  AsyncRestricedProd,
  OnlyMethodInClass,
  DeletePrivateField,
  StrictLHSPrefixPostFix,
  InvalidLHSInAssignment,
  StrictEvalArguments,
  UnexpectedStrictReserved,
  InvalidCoverInitializedName,
  InvalidArrowFuncParamList,
  InvalidLHSInForIn,
  InvalidLHSInForLoop,
  NoExperimentalOption,
  TrailingCommaAfterRest,
  StrictOctalLiteral,
  AccessorWrongArgs,
  BadSetterRestParameter,
  InvalidNestedStatement,
  RestricedLetProduction,
  AlreadyBoundAsLexical,
  MultipleLexicals,
  DoubleDeclBinding,
  BoundLexicalAsParam,
  ForInOfLoopInitializer,
  DeclarationMissingInitializer,
  ForInOfLoopMultiBindings,
  AwaitInParameter,
  YieldInParameter,
  InvalidKeywordAsAlias,
  DuplicateExportBinding,
  InvalidDefaultImport,
  InvalidExportImportSource,
  InvalidImportExportSloppy,
  InvalidDynamicUnicode,
  InvalidIdentChar,
  UnsupportedIdentEscape,
  InvalidEscapedKeyword,
  InvalidLineBreak,
  InvalidLHSOfError,
  IllegalUseStrict,
  IllegalBound,
  IllegalBoundNonSimple,
  DuplicateBinding,
  FutureReservedWordInStrictModeNotId,
  KeywordNotId,
  DeclNoName,
  InvalidEvalArgument,
  NoIdent,
  DupDefault,
  NoCatchOrFinally,
  InvalidVarForOfCatch,
  InvalidDestructExpr,
  Expected,
  InvalidAssignmentTarget
}

/*@internal*/
export const errorMessages: {
  [key: string]: string;
} = {
  [Errors.Unexpected]: 'Unexpected token',
  [Errors.NothingToRepat]: 'Nothing to repeat',
  [Errors.AtEndOfPattern]: '\\ at end of pattern',
  [Errors.InvalidPropertyName]: 'Invalid property name',
  [Errors.InvalidDecimalEscape]: 'Invalid decimal escape',
  [Errors.InvalidBackReferenceNumber]: 'Back references can not have more two or more consecutive numbers',
  [Errors.InvalidNamedReference]: 'Invalid named reference',
  [Errors.InvalidRegExp]: 'Invalid regular expression',
  [Errors.InvalidEscape]: 'Invalid Escape',
  [Errors.InvalidCaptureRef]: 'Invalid named capture referenced',
  [Errors.InvalidRegExpNoUFlag]: 'Invalid regular expression without u-flag',
  [Errors.InvalidRegExpWithUFlag]: 'Invalid regular expression with u-flag',
  [Errors.InvalidUnicodeEscape]: 'Invalid unicode Escape',
  [Errors.RangeOutOfOrder]: 'Range out of order in character class',
  [Errors.RangeInvalid]: 'Invalid character class',
  [Errors.UnterminatedCharClass]: 'Unterminated character class',
  [Errors.UnterminatedGroup]: 'No group to terminate',
  [Errors.InvalidQuantifier]: 'Invalid quantifier',
  [Errors.InvalidQuantifierNoUFlagAB]: 'Invalid quantifier without u-flag and web compatible mode',
  [Errors.UnclosedRegExpGroup]: 'Unclosed group',
  [Errors.InvalidRegExpGroup]: 'Invalid group',
  [Errors.InvalidCaptureGroupName]: 'Invalid capture group name',
  [Errors.InvalidExtendedUnicodeEscape]: 'Invalid extended unicode escape',
  [Errors.AlreadyDeclaredGroupName]: "Already declared group name '%0'",
  [Errors.LoneQuantifierBrackets]: 'Lone quantifier brackets',
  [Errors.DuplicateRegExpFlag]: "Duplicate regular expression flag '%0'",
  [Errors.UnterminatedComment]: 'Unterminated MultiLineComment',
  [Errors.HtmlCommentInModule]: 'HTML comments are not allowed in modules',
  [Errors.IllegalCaracter]: "Illegal character '%0'",
  [Errors.UnterminatedString]: 'Unterminated string literal',
  [Errors.UnterminatedTemplate]: 'Unterminated template literal',
  [Errors.StrictOctalEscape]: 'Octal escapes are not allowed in strict mode',
  [Errors.InvalidEightAndNine]: 'Escapes \\8 or \\9 are not syntactically valid escapes',
  [Errors.InvalidHexEscapeSequence]: 'Invalid hexadecimal escape sequence',
  [Errors.UnicodeOverflow]: 'Unicode codepoint must not be greater than 0x10FFFF',
  [Errors.MissingExponent]: 'Missing exponent',
  [Errors.InvalidBigInt]: 'Invalid BigIntLiteral',
  [Errors.IDStartAfterNumber]: 'Identifier starts immediately after numeric literal',
  [Errors.ExpectedNumberInRadix]: 'Expected number in radix %0',
  [Errors.LegacyOctalsInStrictMode]: 'Legacy octal literals are not allowed in strict mode',
  [Errors.AlreadyDeclared]: "Identifier '%0' has already been declared",
  [Errors.InvalidDuplicateBinding]: "Duplicate binding '%0'",
  [Errors.InvalidCatchVarBinding]: "The `catch` var '%0' can't be redefined",
  [Errors.StrictFunction]: 'In strict mode code, functions can only be declared at top level or inside a block',
  [Errors.SloppyFunction]:
    'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement',
  [Errors.InvalidLetInStrict]: "let can't be a variable name in strict mode",
  [Errors.UndeclaredExportedBinding]: "Exported binding '%0' is not declared",
  [Errors.InvalidDuplicateExportedBinding]: "Exported binding '%0' has already been declared",
  [Errors.MissingInitInConstDecl]: 'Const must be initialized',
  [Errors.NewlineAfterThrow]: 'Illegal newline after throw',
  [Errors.IllegalReturn]: 'Illegal return statement',
  [Errors.IllegalContinue]: 'Illegal continue statement: no surrounding iteration statement',
  [Errors.IllegalBreak]: 'Illegal break statement',
  [Errors.LabelRedeclaration]: "Label '%0' has already been declared",
  [Errors.StrictModeWith]: 'Strict mode code may not include a with statement',
  [Errors.StrictDelete]: 'Calling delete on expression not allowed in strict mode',
  [Errors.InvalidLOExponentation]:
    'Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses',
  [Errors.SuperNoConstructor]:
    'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
  [Errors.InvalidSuperProperty]: 'Member access on super must be in a method',
  [Errors.UnexpectedToken]: "Unexpected token '%0'",
  [Errors.DuplicateConstructor]: 'Duplicate constructor method in class',
  [Errors.StrictFunctionName]: 'Function name may not be eval or arguments in strict mode',
  [Errors.StaticPrototype]: "Classes may not have a static property named 'prototype'",
  [Errors.InvalidConstructor]: 'Class constructor may not be a %0',
  [Errors.UnterminatedRegExp]: 'Unterminated regular expression',
  [Errors.UnexpectedTokenRegExpFlag]: 'Unexpected regular expression flag',
  [Errors.YieldReservedKeyword]: "'yield' is a reserved keyword within generator function bodies",
  [Errors.DisallowedInContext]: "'%0' may not be used as an identifier in this context",
  [Errors.InvalidLetClassName]: "Can not use 'let' as a class name",
  [Errors.InvalidLetConstBinding]: 'Can not use `let` when binding through `let` or `const`',
  [Errors.InvalidStrictLet]: 'Can not use `let` as variable name in strict mode',
  [Errors.AwaitOutsideAsync]: 'Await is only valid in async functions',
  [Errors.InvalidStrictStatic]: '`Static` is a reserved word in strict mode',
  [Errors.InvalidReservedWordStrict]: ' Invalid use of reserved word as a variable name in strict mode',
  [Errors.ForbiddenAsStatement]: "%0 can't appear in single-statement context",
  [Errors.AsyncFunctionInSingleStatementContext]:
    'Async functions can only be declared at the top level or inside a block',
  [Errors.PrivateFieldConstructor]: "Classes may not have a private field named '#constructor'",
  [Errors.PublicFieldConstructor]: "Classes may not have a field named 'constructor'",
  [Errors.PrivateStaticPrototype]: "Classes may not have a static private property named '#prototype'",
  [Errors.AsyncRestricedProd]: 'Async methods are a restricted production and cannot have a newline following it',
  [Errors.OnlyMethodInClass]: 'Only methods are allowed in classes',
  [Errors.DeletePrivateField]: 'Private fields can not be deleted',
  [Errors.StrictLHSPrefixPostFix]: 'Private fields can not be deleted',
  [Errors.StrictLHSPrefixPostFix]: '%0 increment/decrement may not have eval or arguments operand in strict mode',
  [Errors.InvalidLHSInAssignment]: 'Invalid left-hand side in assignment',
  [Errors.StrictEvalArguments]: 'Unexpected eval or arguments in strict mode',
  [Errors.UnexpectedStrictReserved]: 'Unexpected strict mode reserved word',
  [Errors.InvalidCoverInitializedName]: 'Invalid shorthand property initializer',
  [Errors.InvalidArrowFuncParamList]: 'Illegal arrow function parameter list',
  [Errors.InvalidLHSInForIn]: 'Invalid left-hand side in for-in loop',
  [Errors.InvalidLHSInForLoop]: 'Invalid left-hand side in for-loop',
  [Errors.NoExperimentalOption]: 'Use of disabled experimental feature',
  [Errors.TrailingCommaAfterRest]: 'A trailing comma is not permitted after the rest element ',
  [Errors.StrictOctalLiteral]: 'Legacy octal literals are not allowed in strict mode',
  [Errors.AccessorWrongArgs]: '%0 functions must have exactly %1 argument%2',
  [Errors.BadSetterRestParameter]: 'Setter function argument must not be a rest parameter',
  [Errors.InvalidNestedStatement]: '%0 statement must be nested within an iteration statement',
  [Errors.RestricedLetProduction]: '`let \n [` is a restricted production at the start of a statement',
  [Errors.AlreadyBoundAsLexical]: '%0 is already bound as a lexical binding',
  [Errors.MultipleLexicals]: 'The lexical binding %0 has been bound multiple times',
  [Errors.BoundLexicalAsParam]: 'Cannot use `let` or `const` with the same name as bound to a parameter',
  [Errors.DoubleDeclBinding]: 'Double declaration of the same binding name in a `catch` var',
  [Errors.DeclarationMissingInitializer]: 'Destructuring declarations %0 must have an initializer',
  [Errors.ForInOfLoopInitializer]: "'for-%0' loop head declarations cannot have an initializer",
  [Errors.ForInOfLoopMultiBindings]: 'Invalid left-hand side in for-%0 loop: Must have a single binding.',
  [Errors.AwaitInParameter]: 'Await expression not allowed in formal parameter',
  [Errors.YieldInParameter]: 'Yield expression not allowed in formal parameter',
  [Errors.InvalidKeywordAsAlias]: 'Only a identifier can be used to indicate alias',
  [Errors.DuplicateExportBinding]: "'%0' export binding already bound",
  [Errors.DuplicateBinding]: "'%0' binding already bound",
  [Errors.InvalidDefaultImport]: "Only '*' or '{...}' can be imported after default",
  [Errors.InvalidExportImportSource]: '%0 source must be string',
  [Errors.InvalidImportExportSloppy]: 'The %0 keyword can only be used with the module goal',
  [Errors.InvalidDynamicUnicode]: 'The identifier contained dynamic unicode escape that was not closed',
  [Errors.InvalidIdentChar]: 'The identifier escape did not yield a valid identifier character',
  [Errors.UnsupportedIdentEscape]: 'Invalid codepoint value in the escape sequence',
  [Errors.InvalidEscapedKeyword]: 'Invalid escaped keyword',
  [Errors.InvalidLineBreak]: "No line break is allowed after '%0'",
  [Errors.IllegalUseStrict]: "Illegal 'use strict' directive in function with non-simple parameter list",
  [Errors.IllegalBoundNonSimple]: 'Duplicate formal parameter names not allowed with non-simnple arguments',
  [Errors.IllegalBound]: 'Duplicate formal parameter names not allowed in strict mode',
  [Errors.InvalidLHSOfError]: 'The left hand side of the arrow can only be destructed through assignment',
  [Errors.FutureReservedWordInStrictModeNotId]:
    'The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode',
  [Errors.KeywordNotId]: 'The use of a keyword for an identifier is invalid',
  [Errors.DeclNoName]: '%0 declaration must have a name in this context',
  [Errors.InvalidEvalArgument]: 'Invalid usage of %0 in strict mode',
  [Errors.NoIdent]: 'Expected identifier',
  [Errors.DupDefault]: "'default' can only appear once in a 'switch' statement",
  [Errors.NoCatchOrFinally]: 'Missing catch or finally after try',
  [Errors.InvalidVarForOfCatch]: 'Invalid usage of `var` declaration for a name used in catch binding',
  [Errors.InvalidDestructExpr]: 'Unexpected destructuring expression',
  [Errors.Expected]: 'Expected %0',
  [Errors.InvalidAssignmentTarget]: 'Invalid destructuring assignment target'
};

export function constructError(index: number, line: number, column: number, description: string): void {
  const error: any = new SyntaxError(`Line ${line}, column ${column}: ${description}`);

  error.index = index;
  error.line = line;
  error.column = column;
  error.description = description;
  return error;
}

export function report(parser: ParserState, type: Errors, ...params: string[]): never {
  const { index, line, column } = parser;
  const message = errorMessages[type].replace(/%(\d+)/g, (_: string, i: number) => params[i]);
  const error = constructError(index, line, column, message);
  throw error;
}
