function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,i,u,f,a,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(T,t),l?y(e):u}function S(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=i}function T(){var e=g();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-a);return d?m(n,i-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?y(e):(r=o=void 0,u)}function w(){var e=g(),n=S(e);if(r=arguments,o=this,a=e,n){if(void 0===f)return j(a);if(d)return f=setTimeout(T,t),y(a)}return void 0===f&&(f=setTimeout(T,t)),u}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=a=o=f=void 0},w.flush=function(){return void 0===f?u:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y={},j=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form textarea"),T=document.querySelector(".feedback-form input");j.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-msg"),console.log(y)})),j.addEventListener("input",e(t)((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-msg",JSON.stringify(y))}),500)),function(){const e=localStorage.getItem("feedback-msg"),t=JSON.parse(e);t&&(T.value=t.email,S.value=t.message)}();
//# sourceMappingURL=03-feedback.5e3001c9.js.map
