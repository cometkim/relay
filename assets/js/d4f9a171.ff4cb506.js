"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[46241],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){return function(t){var a=u(t.components);return n.createElement(e,o({},t,{components:a}))}},u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(a),m=r,h=s["".concat(i,".").concat(m)]||s[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68629:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(39960),r=a(86341),o=a(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var c=function(){var e=o.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return o.createElement(l,null,o.createElement(d,null),o.createElement(c,null),o.createElement(s,null))},m=function(){return o.createElement(l,null,o.createElement(c,null),o.createElement(s,null))};const p=function(){return(0,r.fbContent)({internal:o.createElement(u,null),external:o.createElement(m,null)})}},57005:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=a(68629),l=(a(86341),["components"]),c={id:"fetch-policies",title:"Fetch Policies",slug:"/guided-tour/reusing-cached-data/fetch-policies/",description:"Relay guide to fetch policies",keywords:["fetch policy","network-only","store-only","store-and-network","store-or-network"]},d=void 0,s={unversionedId:"guided-tour/reusing-cached-data/fetch-policies",id:"version-v14.0.0/guided-tour/reusing-cached-data/fetch-policies",title:"Fetch Policies",description:"Relay guide to fetch policies",source:"@site/versioned_docs/version-v14.0.0/guided-tour/reusing-cached-data/fetch-policies.md",sourceDirName:"guided-tour/reusing-cached-data",slug:"/guided-tour/reusing-cached-data/fetch-policies/",permalink:"/docs/guided-tour/reusing-cached-data/fetch-policies/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guided-tour/reusing-cached-data/fetch-policies.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Bhuwan Khattar",lastUpdatedAt:1689601738,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{id:"fetch-policies",title:"Fetch Policies",slug:"/guided-tour/reusing-cached-data/fetch-policies/",description:"Relay guide to fetch policies",keywords:["fetch policy","network-only","store-only","store-and-network","store-or-network"]},sidebar:"docs",previous:{title:"Reusing Cached Data",permalink:"/docs/guided-tour/reusing-cached-data/"},next:{title:"Presence of Data",permalink:"/docs/guided-tour/reusing-cached-data/presence-of-data/"}},u={},m=[],p={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The first step to reusing locally cached data is to pass a ",(0,o.mdx)("inlineCode",{parentName:"p"},"fetchPolicy")," to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadQuery")," function, which can be provided by ",(0,o.mdx)("inlineCode",{parentName:"p"},"useQueryLoader")," (see the ",(0,o.mdx)("a",{parentName:"p",href:"../../rendering/queries/"},"Fetching Queries section"),"):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const React = require('React');\nconst {graphql} = require('react-relay');\n\nfunction AppTabs() {\n  const [\n    queryRef,\n    loadQuery,\n  ] = useQueryLoader<HomeTabQueryType>(HomeTabQuery);\n\n  const onSelectHomeTab = () => {\n    loadQuery({id: '4'}, {fetchPolicy: 'store-or-network'});\n  }\n\n  // ...\n}\n")),(0,o.mdx)("p",null,"The provided ",(0,o.mdx)("inlineCode",{parentName:"p"},"fetchPolicy")," will determine:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("em",{parentName:"li"},"whether")," the query should be fulfilled from the local cache, and"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("em",{parentName:"li"},"whether")," a network request should be made to fetch the query from the server, depending on the ",(0,o.mdx)("a",{parentName:"li",href:"../availability-of-data/"},"availability of the data for that query in the store"),".")),(0,o.mdx)("p",null,"By default, Relay will try to read the query from the local cache; if any piece of data for that query is ",(0,o.mdx)("a",{parentName:"p",href:"../presence-of-data/"},"missing")," or ",(0,o.mdx)("a",{parentName:"p",href:"../staleness-of-data/"},"stale"),", it will fetch the entire query from the network. This default ",(0,o.mdx)("inlineCode",{parentName:"p"},"fetchPolicy"),' is called "',(0,o.mdx)("em",{parentName:"p"},'store-or-network".')),(0,o.mdx)("p",null,"Specifically, ",(0,o.mdx)("inlineCode",{parentName:"p"},"fetchPolicy")," can be any of the following options: **"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},'"store-or-network": ',(0,o.mdx)("em",{parentName:"li"},"(default)")," ",(0,o.mdx)("em",{parentName:"li"},"will")," reuse locally cached data, and will ",(0,o.mdx)("em",{parentName:"li"},"only")," send a network request if any data for the query is ",(0,o.mdx)("a",{parentName:"li",href:"../presence-of-data/"},"missing")," or ",(0,o.mdx)("a",{parentName:"li",href:"../staleness-of-data/"},"stale"),". If the query is fully cached, a network request will ",(0,o.mdx)("em",{parentName:"li"},"not")," be made."),(0,o.mdx)("li",{parentName:"ul"},'"store-and-network": ',(0,o.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,o.mdx)("em",{parentName:"li"},"always")," send a network request, regardless of whether any data was ",(0,o.mdx)("a",{parentName:"li",href:"../presence-of-data/"},"missing")," or ",(0,o.mdx)("a",{parentName:"li",href:"../staleness-of-data/"},"stale")," in the store."),(0,o.mdx)("li",{parentName:"ul"},'"network-only": ',(0,o.mdx)("em",{parentName:"li"},"will")," ",(0,o.mdx)("em",{parentName:"li"},"not")," reuse locally cached data, and will ",(0,o.mdx)("em",{parentName:"li"},"always")," send a network request to fetch the query, ignoring any data that might be locally cached and whether it's ",(0,o.mdx)("a",{parentName:"li",href:"../presence-of-data/"},"missing")," or ",(0,o.mdx)("a",{parentName:"li",href:"../staleness-of-data/"},"stale"),"."),(0,o.mdx)("li",{parentName:"ul"},'"store-only": ',(0,o.mdx)("em",{parentName:"li"},"will")," ",(0,o.mdx)("em",{parentName:"li"},"only")," reuse locally cached data, and will ",(0,o.mdx)("em",{parentName:"li"},"never")," send a network request to fetch the query. In this case, the responsibility of fetching the query falls to the caller, but this policy could also be used to read and operate on data that is entirely ",(0,o.mdx)("a",{parentName:"li",href:"../../updating-data/local-data-updates/"},"local"),".")),(0,o.mdx)("p",null,"Note that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"refetch")," function discussed in the ",(0,o.mdx)("a",{parentName:"p",href:"../../refetching/"},"Fetching and Rendering Different Data")," section also takes a ",(0,o.mdx)("inlineCode",{parentName:"p"},"fetchPolicy"),"."),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);