#!/usr/bin/env node

'use strict';

const squareAndMultiply = require('square-and-multiply');
const meow = require('meow');

const cli = meow(`
        Usage
        $ square-and-multiply <base> <exponent> <modulus>
        
        Examples
        $ square-and-multiply 14 27 37
        $ square-and-multiply 23 22 86
`);

const basis = cli.input[0];
const exponent = cli.input[1];
const modulus = cli.input[2];

if (!(basis && exponent && modulus)) {
    console.log('You need to specify all three numbers.');
    process.exit(1);
}

console.log(squareAndMultiply(basis, exponent, modulus));
