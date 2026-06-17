"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var a=n(function(d,u){
var v=require('@stdlib/ndarray-base-empty-like/dist'),o=require('@stdlib/ndarray-base-reverse-dimension/dist'),t=require('@stdlib/ndarray-base-assign/dist'),p=require('@stdlib/ndarray-base-ndims/dist');function q(e){var r,i,s;return s=p(e),r=v(e),s===0||s===1?(t([e,r]),r):(i=o(e,-2,!1),t([i,r]),r)}u.exports=q
});var m=a();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
