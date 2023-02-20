#!/usr/bin/env node

import squareAndMultiply from 'square-and-multiply';
import meow from 'meow';

const cli = meow(`
	Usage
	  $ square-and-multiply <base> <exponent> <modulus>

	Examples
	  $ square-and-multiply 14 27 37
	  $ square-and-multiply 23 22 86
`, {importMeta: import.meta});

const basis = cli.input[0];
const exponent = cli.input[1];
const modulus = cli.input[2];

if (!(basis && exponent && modulus)) {
	console.log('You need to specify all three numbers.');
	process.exit(1);
}

console.log(squareAndMultiply(basis, exponent, modulus));
