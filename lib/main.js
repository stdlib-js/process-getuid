/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isFunction = require( '@stdlib/assert-is-function' );
var polyfill = require( './polyfill.js' );
var builtin = require( './native.js' );


// MAIN //

/**
* Returns the numeric user identity of the calling process.
*
* @name getuid
* @type {Function}
* @returns {(integer|null)} numeric user identity or null
*
* @example
* var uid = getuid();
*/
var getuid = ( isFunction( builtin ) ) ? builtin : polyfill;


// EXPORTS //

module.exports = getuid;
