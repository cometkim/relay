"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[49088],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>s,withMDXComponents:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){return function(t){var n=s(t.components);return r.createElement(e,o({},t,{components:n}))}},s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={},p=void 0,c={unversionedId:"api-reference/types/CacheConfig",id:"api-reference/types/CacheConfig",title:"CacheConfig",description:"Type CacheConfig",source:"@site/docs/api-reference/types/CacheConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/CacheConfig",permalink:"/docs/next/api-reference/types/CacheConfig",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/types/CacheConfig.md",tags:[],version:"current",lastUpdatedBy:"Facebook Community Bot",lastUpdatedAt:1700670039,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{}},m={},s=[{value:"Type <code>CacheConfig</code>",id:"type-cacheconfig",level:4}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h4",{id:"type-cacheconfig"},"Type ",(0,o.mdx)("inlineCode",{parentName:"h4"},"CacheConfig")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"force"),": ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"))," A boolean. If true, causes a query to be issued unconditionally, regardless of the state of any configured response cache."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"poll"),": ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"))," A number. Causes a query to live-update by polling at the specified interval, in milliseconds. (This value will be passed to ",(0,o.mdx)("inlineCode",{parentName:"li"},"setTimeout"),")."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"liveConfigId"),": ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"))," A string. Causes a query to live-update by calling GraphQLLiveQuery; it represents a configuration of gateway when doing live query."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"metadata"),": ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"))," An object. User-supplied metadata."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"transactionId"),": ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"))," A string. A user-supplied value, intended for use as a unique id for a given instance of executing an operation.")))))}d.isMDXComponent=!0}}]);