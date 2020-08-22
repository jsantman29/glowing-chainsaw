module.exports = {
    'env': {
        'browser': true,
        'es2020': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 11,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
	'no-await-in-loop': [ 'warn' ],
	'no-extra-parens': [ 'warn', 'all', { 'ignoreJSX': 'multi-line' } ],
	'no-loss-of-precision': [ 'error'],
	'no-promise-executor-return': [ 'warn' ],
	'no-template-curly-in-string': [ 'warn' ],
	'no-unreachable-loop': [ 'warn' ],
	'no-useless-backreference': [ 'warn' ],
	'require-atomic-updates': [ 'error' ],
	'array-callback-return': [ 'warn' ],
	'block-scoped-var': [ 'warn' ],
	'complexity': [ 'error', 8 ],
	'consistent-return': [ 'warn' ],
	'curly': [ 'warn' ],
	'default-case': [ 'warn' ],
	'default-case-last': [ 'warn' ],
	'eqeqeq': [ 'warn' ],
	'max-classes-per-file': [ 'error', 1 ],
	'no-constructor-return': [ 'error' ],
	'no-floating-decimal': [ 'warn' ],
	'no-implicit-coercion': [ 'warn' ],
	'no-invalid-this': [ 'warn' ],
	'no-loop-func': [ 'error' ],
	'no-param-reassign': [ 'error' ],
	'no-return-assign': [ 'warn' ],
	'no-self-compare': [ 'error' ],
	'no-sequences': [ 'warn' ],
	'radix': [ 'error' ],
	'require-await': [ 'warn' ],
	'require-unicode-regexp': [ 'error' ],
	'yoda': [ 'warn' ],
	'no-shadow': [ 'error' ],
	'no-use-before-define': [ 'error' ],
	'camelcase': [ 'warn' ],
	'brace-style': [ 'error' ],
	'comma-dangle': [ 'warn', 'always-multiline'],
	'comma-style': [ 'warn' ],
	'func-style': [ 'warn' ],
	'max-depth': [ 'error', 3 ],
	'max-lines-per-function': [ 'error', 80 ],
	'no-nested-ternary': [ 'error' ],
	'no-mixed-operators': [ 'warn' ],
	'no-multi-assign': [ 'warn' ],
	'no-duplicate-imports': [ 'warn' ],
	'no-var': [ 'error' ],
	'prefer-const': [ 'warn' ]
    }
};
