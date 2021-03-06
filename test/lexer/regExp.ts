import * as t from 'assert';
import { scanSingleToken } from '../../src/scanner';
import { create } from '../../src/state';
import { Context, pushToken } from '../../src/common';
import { Token } from '../../src/token';

describe('Lexer - RegExp', () => {
  function pass(name: string, opts: any) {
    it(name, () => {
      const state = create(opts.source, undefined, pushToken(Context.OptionsLoc, []));
      t.deepEqual(
        {
          token: scanSingleToken(state, Context.AllowPossibleRegEx),
          line: state.line,
          value: state.tokenValue,
          column: state.column,
          index: state.index
        },
        {
          token: Token.RegularExpression,
          line: opts.line,
          value: opts.value,
          column: opts.column,
          index: opts.index
        }
      );
    });
  }

  function fail(name: string, source: string, context: Context) {
    it(name, () => {
      const state = create(source, undefined, pushToken(context, []));
      t.throws(() => scanSingleToken(state, Context.AllowPossibleRegEx | Context.OptionsRaw));
    });
  }

  fail('fails on /a/gg', '/a/gg', Context.Empty);
  fail('fails on /a/gg', '/a/ii', Context.Empty);
  fail('fails on /a/gg', '/a/ss', Context.Empty);
  fail('fails on /a/gg', '/a/yy', Context.Empty);
  fail('fails on /a/gg', '/a/mm', Context.Empty);
  fail('fails on /a/gg', '/a/uu', Context.Empty);

  pass('should scan simple regular expression', {
    source: '/f/',
    value: /f/,
    line: 1,
    column: 3,
    index: 3
  });

  pass('should scan simple regular expression', {
    source: '/[/]/',
    value: /[/]/,
    line: 1,
    column: 5,
    index: 5
  });
});
