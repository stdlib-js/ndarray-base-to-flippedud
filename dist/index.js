"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=n(function(d,u){
var v=require('@stdlib/ndarray-base-empty-like/dist'),o=require('@stdlib/ndarray-base-reverse-dimension/dist'),t=require('@stdlib/ndarray-base-assign/dist'),p=require('@stdlib/ndarray-base-ndims/dist');function q(e){var r,s,i;return i=p(e),r=v(e),i===0||i===1?(t([e,r]),r):(s=o(e,-2,!1),t([s,r]),r)}u.exports=q
});var m=a();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
