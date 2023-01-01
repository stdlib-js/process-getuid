<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# getuid

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the numeric user identity of the calling process.



<section class="usage">

## Usage

```javascript
import getuid from 'https://cdn.jsdelivr.net/gh/stdlib-js/process-getuid@deno/mod.js';
```

#### getuid()

Returns the numeric user identity of the calling process.

```javascript
var id = getuid();
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function **only** returns an `integer` user identity on POSIX platforms. For all other platforms (e.g., Windows, browsers, and Android), the function returns `null`. 
-   See [getuid(2)][getuid].

</section>

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import getuid from 'https://cdn.jsdelivr.net/gh/stdlib-js/process-getuid@deno/mod.js';

var uid = getuid();
if ( uid === 0 ) {
    console.log( 'Likely running as root.' );
} else {
    console.log( 'uid: %d', uid );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/process/getegid`][@stdlib/process/getegid]</span><span class="delimiter">: </span><span class="description">return the effective numeric group identity of a calling process.</span>
-   <span class="package-name">[`@stdlib/process/geteuid`][@stdlib/process/geteuid]</span><span class="delimiter">: </span><span class="description">return the effective numeric user identity of a calling process.</span>
-   <span class="package-name">[`@stdlib/process/getgid`][@stdlib/process/getgid]</span><span class="delimiter">: </span><span class="description">return the numeric group identity of a calling process.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/process-getuid.svg
[npm-url]: https://npmjs.org/package/@stdlib/process-getuid

[test-image]: https://github.com/stdlib-js/process-getuid/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/process-getuid/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/process-getuid/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/process-getuid?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/process-getuid.svg
[dependencies-url]: https://david-dm.org/stdlib-js/process-getuid/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/process-getuid/tree/deno
[umd-url]: https://github.com/stdlib-js/process-getuid/tree/umd
[esm-url]: https://github.com/stdlib-js/process-getuid/tree/esm
[branches-url]: https://github.com/stdlib-js/process-getuid/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/process-getuid/main/LICENSE

[getuid]: http://man7.org/linux/man-pages/man2/getuid.2.html

<!-- <related-links> -->

[@stdlib/process/getegid]: https://github.com/stdlib-js/process-getegid/tree/deno

[@stdlib/process/geteuid]: https://github.com/stdlib-js/process-geteuid/tree/deno

[@stdlib/process/getgid]: https://github.com/stdlib-js/process-getgid/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
