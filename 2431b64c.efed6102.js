(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var a,i=n(3),r=n(8),o=(n(0),n(323)),l=n(329),c=n(324),u={id:"use-mutation",title:"useMutation",slug:"/api-reference/use-mutation/",description:"API reference for useMutation, a React hook used to execute a GraphQL mutation",keywords:["mutation"]},s={unversionedId:"api-reference/hooks/use-mutation",id:"api-reference/hooks/use-mutation",isDocsHomePage:!1,title:"useMutation",description:"API reference for useMutation, a React hook used to execute a GraphQL mutation",source:"@site/docs/api-reference/hooks/use-mutation.md",slug:"/api-reference/use-mutation/",permalink:"/docs/next/api-reference/use-mutation/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/api-reference/hooks/use-mutation.md",version:"current",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1618369554,sidebar:"docs",previous:{title:"usePaginationFragment",permalink:"/docs/next/api-reference/use-pagination-fragment/"},next:{title:"useSubscription",permalink:"/docs/next/api-reference/use-subscription/"}},d=[{value:"<code>useMutation</code>",id:"usemutation",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[]},{value:"Return Value",id:"return-value",children:[]}]}],p=(a="FbUseMutationParameter",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={toc:d};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usemutation"},Object(o.b)("inlineCode",{parentName:"h2"},"useMutation")),Object(o.b)("p",null,"Hook used to execute a mutation in a React component."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import type {FeedbackLikeMutation} from 'FeedbackLikeMutation.graphql';\nconst React = require('React');\n\nconst {graphql, useMutation} = require('react-relay');\n\nfunction LikeButton() {\n  const [commit, isInFlight] = useMutation<FeedbackLikeMutation>(graphql`\n    mutation FeedbackLikeMutation($input: FeedbackLikeData!) {\n      feedback_like(data: $input) {\n        feedback {\n          id\n          viewer_does_like\n          like_count\n        }\n      }\n    }\n  `);\n\n  if (isInFlight) {\n    return <Spinner />;\n  }\n\n  return (\n    <button\n      onClick={() => {\n        commit({\n          variables: {\n            input: {\n              id: '123',\n              text: 'text',\n            },\n          },\n          onCompleted(data) {\n            console.log(data);\n          },\n        });\n      }}\n    />\n  );\n}\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mutation"),": GraphQL mutation specified using a ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," template literal.")),Object(o.b)(c.OssOnly,{mdxType:"OssOnly"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"commitMutationFn"),": ",Object(o.b)("inlineCode",{parentName:"li"},"<T: MutationParameters>(IEnvironment, MutationConfig<T>): Disposable"),". ",Object(o.b)("em",{parentName:"li"},Object(o.b)("em",{parentName:"em"},"[Optional]"))," A function with the same signature as ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"../commit-mutation"}),Object(o.b)("inlineCode",{parentName:"a"},"commitMutation")),", which will be called in its stead. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"commitMutation"),"."))),Object(o.b)(p,{mdxType:"FbUseMutationParameter"}),Object(o.b)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TMutation"),": Type parameter that should corresponds the Flow type for the mutation query. This type is available to import from the the auto-generated file: ",Object(o.b)("inlineCode",{parentName:"li"},"<mutationName>.graphql.js"),".")),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"Tuple containing the following values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[0]"," ",Object(o.b)("inlineCode",{parentName:"li"},"commitMutation"),": The function that will execute the mutation",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Arguments, the syntax signature is almost the same as our ",Object(o.b)("inlineCode",{parentName:"li"},"commitMutation")," API",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"variables"),": Object containing the variables needed for the mutation. For example, if the mutation defines an ",Object(o.b)("inlineCode",{parentName:"li"},"$input")," variable, this object should contain an ",Object(o.b)("inlineCode",{parentName:"li"},"input")," key, whose shape must match the shape of the data expected by the mutation as defined by the GraphQL schema."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onCompleted"),": Callback function executed when the request is completed and the in-memory Relay store is updated with the ",Object(o.b)("inlineCode",{parentName:"li"},"updater")," function. Takes a ",Object(o.b)("inlineCode",{parentName:"li"},"response"),' object, which is the "raw" server response. Internally ',Object(o.b)("inlineCode",{parentName:"li"},"errors")," are not allowed, ",Object(o.b)("inlineCode",{parentName:"li"},"CRITICAL")," error will be thrown in the ",Object(o.b)("inlineCode",{parentName:"li"},"onError")," handler."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onError"),": Callback function executed if Relay encounters an error during the request. Internally, ",Object(o.b)("inlineCode",{parentName:"li"},"CRITICAL")," error during reading the mutation result on the server"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"optimisticResponse"),": Object containing the data to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. This object must have the same shape as the mutation's response type, as defined by the GraphQL schema. If provided, Relay will use the ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticResponse")," data to update the fields on the relevant records in the local data store, ",Object(o.b)("em",{parentName:"li"},"before")," ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater")," is executed. If an error occurs during the mutation request, the optimistic update will be rolled back."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater"),": Function used to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. If an error occurs during the mutation request, the optimistic update will be rolled back. This function takes a ",Object(o.b)("inlineCode",{parentName:"li"},"store"),", which is a proxy of the in-memory ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"../store/"}),"Relay Store"),". In this function, the client defines how to update the local data via the ",Object(o.b)("inlineCode",{parentName:"li"},"store")," instance. For details on how to use the ",Object(o.b)("inlineCode",{parentName:"li"},"store"),", please refer to our ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"../store/"}),"Relay Store API Reference"),". Please note:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It is usually preferable to just pass an ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticResponse")," option instead of an ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater"),", unless you need to perform updates on the local records that are more complicated than just updating fields (e.g. deleting records or adding items to collections)."),Object(o.b)("li",{parentName:"ul"},"If you do decide to use an ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater"),", often times it can be the same function as ",Object(o.b)("inlineCode",{parentName:"li"},"updater"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"updater"),": Function used to update the local in-memory store based on the real server response from the mutation. If ",Object(o.b)("inlineCode",{parentName:"li"},"updater")," is not provided, by default, Relay will know to automatically update the fields on the records referenced in the mutation response; however, you should pass an ",Object(o.b)("inlineCode",{parentName:"li"},"updater")," if you need to make more complicated updates than just updating fields (e.g. deleting records or adding items to collections). When the server response comes back, Relay first reverts any changes introduced by ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticUpdater")," or ",Object(o.b)("inlineCode",{parentName:"li"},"optimisticResponse")," and will then execute ",Object(o.b)("inlineCode",{parentName:"li"},"updater"),". This function takes a ",Object(o.b)("inlineCode",{parentName:"li"},"store"),", which is a proxy of the in-memory ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"../store/"}),"Relay Store"),". In this function, the client defines how to update the local data based on the server response via the ",Object(o.b)("inlineCode",{parentName:"li"},"store")," instance. For details on how to use the ",Object(o.b)("inlineCode",{parentName:"li"},"store"),", please refer to our ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"../store/"}),"Relay Store API")),Object(o.b)("li",{parentName:"ul"},"No environment argument: ",Object(o.b)("inlineCode",{parentName:"li"},"useMutation")," will automatically use the current environment provided by ",Object(o.b)("inlineCode",{parentName:"li"},"RelayEnvironmentProvider")))),Object(o.b)("li",{parentName:"ul"},"Return value:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",Object(o.b)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",Object(o.b)("inlineCode",{parentName:"li"},"disposable.dispose()")," will revert the optimistic update, and Relay won't update the store or call any success/error callback, but the network request is not guaranteed to be cancelled. If the ",Object(o.b)("inlineCode",{parentName:"li"},"dispose")," is called after the mutation has succeeded, it will not rollback the update in Relay store."))))),Object(o.b)("li",{parentName:"ul"},"[1]"," ",Object(o.b)("inlineCode",{parentName:"li"},"areMutationsInFlight"),": Will be ",Object(o.b)("inlineCode",{parentName:"li"},"true")," if any mutation triggered by calling ",Object(o.b)("inlineCode",{parentName:"li"},"commitMutation")," is still in flight. If you call ",Object(o.b)("inlineCode",{parentName:"li"},"commitMutation")," multiple times, there can be multiple mutations in flight at once.")),Object(o.b)(l.a,{mdxType:"DocsRating"}))}m.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=r(n(327));const o=["internal","external"];let l;try{l=n(325).usePluginData}catch(p){l=null}function c(e){return s(e),d()?"internal"in e?u(e.internal):[]:"external"in e?u(e.external):[]}function u(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=s,t.isInternal=d,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}}).call(this,n(326))},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n.d(t,"useAllPluginInstancesData",(function(){return r})),n.d(t,"usePluginData",(function(){return o}));var a=n(22);function i(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function r(e){var t=i()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=r(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},326:function(e,t){var n,a,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var c,u=[],s=!1,d=-1;function p(){s&&c&&(s=!1,c.length?u=c.concat(u):d=-1,u.length&&b())}function b(){if(!s){var e=l(p);s=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,s=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||s||l(b)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},327:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(t){r(t)}}function l(e){try{c(a.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const i=n(328);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(t){r(t)}}function l(e){try{c(a.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let i=!1,r=0;const o={};t.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));i||(i=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=r++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,l),n}))}},329:function(e,t,n){"use strict";n(61);var a=n(324),i=n(0);function r(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var l=function(){var e=i.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:r},"Filing a task"))},u=function(){return i.createElement(o,null,i.createElement(c,null),i.createElement(l,null))},s=function(){return i.createElement(o,null,i.createElement(l,null))};t.a=function(){return Object(a.fbContent)({internal:i.createElement(u,null),external:i.createElement(s,null)})}}}]);