// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-empty-like@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-reverse-dimension@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assign@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndims@esm/index.mjs";function d(d){var n,i,m;return m=t(d),n=s(d),0===m||1===m?(r([d,n]),n):(i=e(d,-2,!1),r([i,n]),n)}export{d as default};
//# sourceMappingURL=index.mjs.map
