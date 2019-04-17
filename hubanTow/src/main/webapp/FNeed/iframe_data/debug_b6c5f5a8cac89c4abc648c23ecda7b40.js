!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.debug=e()}}(function(){return function e(n,r,t){function o(i,c){if(!r[i]){if(!n[i]){var a="function"==typeof require&&require;if(!c&&a)return a(i,!0);if(s)return s(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var f=r[i]={exports:{}};n[i][0].call(f.exports,function(e){var r=n[i][1][e];return o(r?r:e)},f,f.exports,e,n,r,t)}return r[i].exports}for(var s="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(e,n,r){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function c(){g&&m&&(g=!1,m.length?h=m.concat(h):y=-1,h.length&&a())}function a(){if(!g){var e=s(c);g=!0;for(var n=h.length;n;){for(m=h,h=[];++y<n;)m&&m[y].run();y=-1,n=h.length}m=null,g=!1,i(e)}}function u(e,n){this.fun=e,this.array=n}function f(){}var l,d,p=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var m,h=[],g=!1,y=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];h.push(new u(e,n)),1!==h.length||g||s(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},{}],2:[function(e,n,r){function t(e){if(e=String(e),!(e.length>100)){var n=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(n){var r=parseFloat(n[1]),t=(n[2]||"ms").toLowerCase();switch(t){case"years":case"year":case"yrs":case"yr":case"y":return r*l;case"days":case"day":case"d":return r*f;case"hours":case"hour":case"hrs":case"hr":case"h":return r*u;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*c;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function o(e){return e>=f?Math.round(e/f)+"d":e>=u?Math.round(e/u)+"h":e>=a?Math.round(e/a)+"m":e>=c?Math.round(e/c)+"s":e+"ms"}function s(e){return i(e,f,"day")||i(e,u,"hour")||i(e,a,"minute")||i(e,c,"second")||e+" ms"}function i(e,n,r){if(!(e<n))return e<1.5*n?Math.floor(e/n)+" "+r:Math.ceil(e/n)+" "+r+"s"}var c=1e3,a=60*c,u=60*a,f=24*u,l=365.25*f;n.exports=function(e,n){n=n||{};var r=typeof e;if("string"===r&&e.length>0)return t(e);if("number"===r&&isNaN(e)===!1)return n.long?s(e):o(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],3:[function(e,n,r){function t(e){var n,t=0;for(n in e)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function o(e){function n(){if(n.enabled){var e=n,t=+new Date,o=t-(u||t);e.diff=o,e.prev=u,e.curr=t,u=t;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=r.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,t){if("%%"===n)return n;c++;var o=r.formatters[t];if("function"==typeof o){var i=s[c];n=o.call(e,i),s.splice(c,1),c--}return n}),r.formatArgs.call(e,s);var a=n.log||r.log||console.log.bind(console);a.apply(e,s)}}return n.namespace=e,n.enabled=r.enabled(e),n.useColors=r.useColors(),n.color=t(e),"function"==typeof r.init&&r.init(n),n}function s(e){r.save(e),r.names=[],r.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),t=n.length,o=0;o<t;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")))}function i(){r.enable("")}function c(e){var n,t;for(n=0,t=r.skips.length;n<t;n++)if(r.skips[n].test(e))return!1;for(n=0,t=r.names.length;n<t;n++)if(r.names[n].test(e))return!0;return!1}function a(e){return e instanceof Error?e.stack||e.message:e}r=n.exports=o.debug=o.default=o,r.coerce=a,r.disable=i,r.enable=s,r.enabled=c,r.humanize=e("ms"),r.names=[],r.skips=[],r.formatters={};var u},{ms:2}],4:[function(e,n,r){(function(t){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function s(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+r.humanize(this.diff),n){var t="color: "+this.color;e.splice(1,0,t,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))}),e.splice(s,0,t)}}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function c(e){try{null==e?r.storage.removeItem("debug"):r.storage.debug=e}catch(e){}}function a(){var e;try{e=r.storage.debug}catch(e){}return!e&&"undefined"!=typeof t&&"env"in t&&(e=t.env.DEBUG),e}function u(){try{return window.localStorage}catch(e){}}r=n.exports=e("./debug"),r.log=i,r.formatArgs=s,r.save=c,r.load=a,r.useColors=o,r.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],r.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},r.enable(a())}).call(this,e("_process"))},{"./debug":3,_process:1}]},{},[4])(4)});