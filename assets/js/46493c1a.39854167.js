"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[21293],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){return function(a){var t=m(a.components);return n.createElement(e,i({},a,{components:t}))}},m=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=m(t),p=r,c=u["".concat(o,".").concat(p)]||u[p]||h[p]||i;return t?n.createElement(c,l(l({ref:a},s),{},{components:t})):n.createElement(c,l({ref:a},s))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},68629:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(39960),r=t(86341),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var a=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),a)}var d=function(){var e=i.useState(!1),a=e[0],t=e[1],n=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return a?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},m=function(){return i.createElement(l,null,i.createElement(s,null),i.createElement(d,null),i.createElement(u,null))},p=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(u,null))};const h=function(){return(0,r.fbContent)({internal:i.createElement(m,null),external:i.createElement(p,null)})}},60332:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var n,r=t(83117),i=t(80102),o=(t(67294),t(3905)),l=t(68629),d=t(86341),s=["components"],u={id:"queries",title:"Queries",slug:"/guided-tour/rendering/queries/",description:"Relay guide to queries",keywords:["query","usePreloadedQuery","useLazyLoadQuery","useQueryLoader","loadQuery"]},m=void 0,p={unversionedId:"guided-tour/rendering/queries",id:"version-v12.0.0/guided-tour/rendering/queries",title:"Queries",description:"Relay guide to queries",source:"@site/versioned_docs/version-v12.0.0/guided-tour/rendering/queries.md",sourceDirName:"guided-tour/rendering",slug:"/guided-tour/rendering/queries/",permalink:"/docs/v12.0.0/guided-tour/rendering/queries/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/rendering/queries.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1696362982,formattedLastUpdatedAt:"Oct 3, 2023",frontMatter:{id:"queries",title:"Queries",slug:"/guided-tour/rendering/queries/",description:"Relay guide to queries",keywords:["query","usePreloadedQuery","useLazyLoadQuery","useQueryLoader","loadQuery"]},sidebar:"version-v12.0.0/docs",previous:{title:"Workflow",permalink:"/docs/v12.0.0/guided-tour/workflow/"},next:{title:"Fragments",permalink:"/docs/v12.0.0/guided-tour/rendering/fragments/"}},h={},c=[{value:"Rendering Queries",id:"rendering-queries",level:2},{value:"Fetching Queries for Render",id:"fetching-queries-for-render",level:2},{value:"Render as you Fetch",id:"render-as-you-fetch",level:3},{value:"Lazily Fetching Queries during Render",id:"lazily-fetching-queries-during-render",level:2}],y=(n="FbEntrypointsExtraInfo",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),f={toc:c};function g(e){var a=e.components,t=(0,i.Z)(e,s);return(0,o.mdx)("wrapper",(0,r.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"A ",(0,o.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/queries/"},"GraphQL Query")," is a description of data you want to query from a GraphQL server. It consists of a set of fields (and potentially ",(0,o.mdx)("a",{parentName:"p",href:"../fragments/"},"fragments"),") that we want to request from the GraphQL server. What we can query for will depend on the ",(0,o.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"GraphQL Schema")," exposed on the server, which describes the data that is available for querying."),(0,o.mdx)("p",null,"A query can be sent as a request over the network, along with an optional collection of ",(0,o.mdx)("a",{parentName:"p",href:"../variables/"},"variables")," that the query uses, in order to fetch the data. The server response will be a JSON object that matches the shape of the query we sent:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"query UserQuery($id: ID!) {\n  user(id: $id) {\n    id\n    name\n    ...UserFragment\n  }\n  viewer {\n    actor {\n      name\n    }\n  }\n}\n\nfragment UserFragment on User {\n  username\n}\n")),(0,o.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://fburl.com/graphiql/v5hs717f"},"Sample response"),":")),(0,o.mdx)(d.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("p",null,"Sample response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "user": {\n      "id": "4",\n      "name": "Mark Zuckerberg",\n      "username": "zuck"\n    },\n    "viewer": {\n      "actor": {\n        "name": "Your Name"\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"rendering-queries"},"Rendering Queries"),(0,o.mdx)("p",null,"To ",(0,o.mdx)("em",{parentName:"p"},"render")," a query in Relay, you can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery")," hook. ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery")," takes a query definition and a query reference, and returns the corresponding data for that query and reference."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {HomeTabQuery} from 'HomeTabQuery.graphql';\n\nconst React = require('React');\nconst {graphql, usePreloadedQuery} = require('react-relay');\n\ntype Props = {\n  queryRef: PreloadedQuery<HomeTabQuery>,\n};\n\nfunction HomeTab(props: Props) {\n  const data = usePreloadedQuery<HomeTabQuery>(\n    graphql`\n      query HomeTabQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    props.queryRef,\n  );\n\n  return (\n    <h1>{data.user?.name}</h1>\n  );\n}\n")),(0,o.mdx)("p",null,"Lets see what's going on here:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"  takes a ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," query and a ",(0,o.mdx)("inlineCode",{parentName:"li"},"PreloadedQuery")," reference, and returns the data that was fetched for that query.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"PreloadedQuery")," (in this case ",(0,o.mdx)("inlineCode",{parentName:"li"},"queryRef"),") is an object that describes and references an ",(0,o.mdx)("em",{parentName:"li"},"instance")," of our query that is being (or was) fetched.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"We'll cover how to actually fetch the query in the next section below, and cover how to show loading states if the query is in-flight when we try to render it in the ",(0,o.mdx)("a",{parentName:"li",href:"../loading-states/"},"Loading States with Suspense")," section."))),(0,o.mdx)("li",{parentName:"ul"},"Note that the ",(0,o.mdx)("inlineCode",{parentName:"li"},"PreloadedQuery")," type takes a Flow type parameter, which corresponds to the Flow type for the query, in this case ",(0,o.mdx)("inlineCode",{parentName:"li"},"HomeTabQuery"),"."))),(0,o.mdx)("li",{parentName:"ul"},"Similarly to ",(0,o.mdx)("a",{parentName:"li",href:"../fragments/"},"fragments"),", ",(0,o.mdx)("em",{parentName:"li"},"the component is automatically subscribed to updates to the query data"),": if the data for this query is updated anywhere in the app, the component will automatically re-render with the latest updated data."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery")," also additionally takes a Flow type parameter, which corresponds to the Flow type for the query, in this case ",(0,o.mdx)("inlineCode",{parentName:"li"},"HomeTabQuery"),".",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Remember that Relay automatically generates Flow types for any declared queries, which are available to import from the generated files with the following name format: ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"em"},"<query_name>")),(0,o.mdx)("inlineCode",{parentName:"li"},".graphql.js"),"."),(0,o.mdx)("li",{parentName:"ul"},"Note that the ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," is already properly Flow-typed without requiring an explicit annotation, and is based on the types from the GraphQL schema. For example, the type of ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," above would be: ",(0,o.mdx)("inlineCode",{parentName:"li"},"{ user: ?{ name: ?string } }"),"."))),(0,o.mdx)("li",{parentName:"ul"},"Make sure you're providing a Relay environment using a ",(0,o.mdx)("a",{parentName:"li",href:"../environment/"},"Relay Environment Provider")," at the root of your app before trying to render a query.")),(0,o.mdx)("h2",{id:"fetching-queries-for-render"},"Fetching Queries for Render"),(0,o.mdx)("p",null,"Apart from ",(0,o.mdx)("em",{parentName:"p"},"rendering")," a query, we also need to fetch it from the server. Usually we want to fetch queries somewhere at the root of our app, and only have ",(0,o.mdx)("strong",{parentName:"p"},"one or a few queries that ",(0,o.mdx)("a",{parentName:"strong",href:"../fragments/#composing-fragments-into-queries"},(0,o.mdx)("em",{parentName:"a"},"accumulate"))," all the data required to render the screen"),". Ideally, we'd fetch them as early as possible, before we even start rendering our app."),(0,o.mdx)("p",null,"In order to ",(0,o.mdx)("em",{parentName:"p"},"fetch")," a query for later rendering it, you can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useQueryLoader")," Hook:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {HomeTabQuery as HomeTabQueryType} from 'HomeTabQuery.graphql';\nimport type {PreloadedQuery} from 'react-relay';\n\nconst HomeTabQuery = require('HomeTabQuery.graphql')\nconst {useQueryLoader} = require('react-relay');\n\n\ntype Props = {\n  initialQueryRef: PreloadedQuery<HomeTabQueryType>,\n};\n\nfunction AppTabs(props) {\n  const [\n    homeTabQueryRef,\n    loadHomeTabQuery,\n  ] = useQueryLoader<HomeTabQueryType>(\n    HomeTabQuery,\n    props.initialQueryRef, /* e.g. provided by router */\n  );\n\n  const onSelectHomeTab = () => {\n    // Start loading query for HomeTab immediately in the event handler\n    // that triggers navigation to that tab, *before* we even start\n    // rendering the target tab.\n    // Calling this function will update the value of homeTabQueryRef.\n    loadHomeTabQuery({id: '4'});\n\n    // ...\n  }\n\n  // ...\n\n  return (\n    screen === 'HomeTab' && homeTabQueryRef != null ?\n      // Pass to component that uses usePreloadedQuery\n      <HomeTab queryRef={homeTabQueryRef} /> :\n      // ...\n  );\n}\n")),(0,o.mdx)("p",null,"The example above is somewhat contrived, but let's distill what is happening:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"We are calling ",(0,o.mdx)("inlineCode",{parentName:"li"},"useQueryLoader")," inside our ",(0,o.mdx)("inlineCode",{parentName:"li"},"AppTabs")," component.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"It takes a query, which in this case is our ",(0,o.mdx)("inlineCode",{parentName:"li"},"HomeTabQuery")," (the query that we declared in our previous example), and which we can obtain by requiring the auto-generated file: ",(0,o.mdx)("inlineCode",{parentName:"li"},"'HomeTabQuery.graphql'"),"."),(0,o.mdx)("li",{parentName:"ul"},"It takes an optional initial ",(0,o.mdx)("inlineCode",{parentName:"li"},"PreloadedQuery")," to be used as the initial value of the ",(0,o.mdx)("inlineCode",{parentName:"li"},"homeTabQueryRef")," that is stored in state and returned by ",(0,o.mdx)("inlineCode",{parentName:"li"},"useQueryLoader"),"."),(0,o.mdx)("li",{parentName:"ul"},"It also additionally takes a Flow type parameter, which corresponds to the Flow type for the query, in this case ",(0,o.mdx)("inlineCode",{parentName:"li"},"HomeTabQueryType"),", which you can also obtain from the auto-generated file: ",(0,o.mdx)("inlineCode",{parentName:"li"},"'HomeTabQuery.graphql'"),"."))),(0,o.mdx)("li",{parentName:"ul"},"Calling ",(0,o.mdx)("inlineCode",{parentName:"li"},"useQueryLoader")," allows us to obtain 2 things:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"homeTabQueryRef"),": A ",(0,o.mdx)("inlineCode",{parentName:"li"},"?PreloadedQuery"),", which is an object that describes and references an ",(0,o.mdx)("em",{parentName:"li"},"instance")," of our query that is being (or was) fetched. This value will be null if we haven't fetched the query, i.e. if we haven't called ",(0,o.mdx)("inlineCode",{parentName:"li"},"loadHomeTabQuery"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"loadHomeTabQuery"),": A function that will ",(0,o.mdx)("em",{parentName:"li"},"fetch")," the data for this query from the server (if it isn't already cached), and given an object with the ",(0,o.mdx)("a",{parentName:"li",href:"../variables/"},"variables")," the query expects, in this case ",(0,o.mdx)("inlineCode",{parentName:"li"},"{id: '4'}")," (we'll go into more detail about how Relay uses cached data in the ",(0,o.mdx)("a",{parentName:"li",href:"../../reusing-cached-data/"},"Reusing Cached Data For Render")," section). Calling this function will also update the value of ",(0,o.mdx)("inlineCode",{parentName:"li"},"homeTabQueryRef")," to an instance of a ",(0,o.mdx)("inlineCode",{parentName:"li"},"PreloadedQuery"),".",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Note that the ",(0,o.mdx)("inlineCode",{parentName:"li"},"variables")," we pass to this function will be checked by Flow to ensure that you are passing values that match what the GraphQL query expects."),(0,o.mdx)("li",{parentName:"ul"},"Also note that we are calling this function in the event handler that causes the ",(0,o.mdx)("inlineCode",{parentName:"li"},"HomeTab")," to be rendered. This allows us to start fetching the data for the screen as early as possible, even before the new tab starts rendering.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"In fact, note that this function can NOT be called during render; it ",(0,o.mdx)("em",{parentName:"li"},"must")," be called outside of a Component's render function, otherwise it will produce an error."))))))),(0,o.mdx)("li",{parentName:"ul"},"Note that ",(0,o.mdx)("inlineCode",{parentName:"li"},"useQueryLoader")," will automatically dispose of all queries that have been loaded when the component unmounts. Disposing of a query means that Relay will no longer hold on to the data for that particular instance of the query in its cache (we'll cover the lifetime of query data in ",(0,o.mdx)("a",{parentName:"li",href:"../../reusing-cached-data/"},"Reusing Cached Data For Render")," section). Additionally, if the request for the query is still in flight when disposal occurs, it will be canceled."),(0,o.mdx)("li",{parentName:"ul"},"Our ",(0,o.mdx)("inlineCode",{parentName:"li"},"AppTabs")," component renders the ",(0,o.mdx)("inlineCode",{parentName:"li"},"HomeTab")," component from the previous example, and passes it the corresponding query reference. Note that this parent component owns the lifetime of the data for that query, meaning that when it unmounts, it will of dispose of that query, as mentioned above."),(0,o.mdx)("li",{parentName:"ul"},"Finally, make sure you're providing a Relay environment using a ",(0,o.mdx)("a",{parentName:"li",href:"../environment/"},"Relay Environment Provider")," at the root of your app before trying to use ",(0,o.mdx)("inlineCode",{parentName:"li"},"useQueryLoader"),".")),(0,o.mdx)("p",null,"Sometimes, you want to start a fetch outside of the context of a parent component, for example to fetch the data required for the initial load of the application. For these cases, you can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadQuery")," API directly, without using ",(0,o.mdx)("inlineCode",{parentName:"p"},"useQueryLoader"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {HomeTabQuery as HomeTabQueryType} from 'HomeTabQuery.graphql';\n\nconst HomeTabQuery = require('HomeTabQuery.graphql')\nconst {loadQuery} = require('react-relay');\n\n\nconst environment = createEnvironment(...);\n\n// At some point during app initialization\nconst initialQueryRef = loadQuery<HomeTabQueryType>(\n  environment,\n  HomeTabQuery,\n  {id: '4'},\n);\n\n// ...\n\n// E.g. passing the initialQueryRef to the root component\nrender(<AppTabs initialQueryRef={initialQueryRef} initialTab={...} />)\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"In this example, we are calling the ",(0,o.mdx)("inlineCode",{parentName:"li"},"loadQuery")," function directly to obtain a ",(0,o.mdx)("inlineCode",{parentName:"li"},"PreloadedQuery")," instance that we can later pass to a component that uses ",(0,o.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),(0,o.mdx)("li",{parentName:"ul"},"In this case, we would expect the root ",(0,o.mdx)("inlineCode",{parentName:"li"},"AppTabs")," component to manage the lifetime of the query reference, and dispose of it at the appropriate time, if at all."),(0,o.mdx)("li",{parentName:"ul"},'We\'ve left the details of "app initialization" vague in this example, since that will vary from application to application. The important thing to note here is that we should obtain a query reference before we start rendering the root component. Specifically, ',(0,o.mdx)("inlineCode",{parentName:"li"},"loadQuery")," can NOT be called during render; it must be called outside of a Component's render function, otherwise it will produce an error.")),(0,o.mdx)("h3",{id:"render-as-you-fetch"},"Render as you Fetch"),(0,o.mdx)("p",null,"The examples above illustrate how to separate fetching the data from rendering it, in order to start the fetch as early as possible (as opposed to waiting until the component is rendered to start the fetch), and allow us to show content to our users a lot sooner. It also helps prevent waterfalling round trips, and gives us more control and predictability over when the fetch occurs, whereas if we fetch during render, it becomes harder to determine when the fetch will (or should) occur. This fits nicely with the ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense"},(0,o.mdx)("em",{parentName:"a"},'"render-as-you-fetch"'))," pattern with ",(0,o.mdx)("a",{parentName:"p",href:"../loading-states/"},"React Suspense"),"."),(0,o.mdx)("p",null,"This is the preferred pattern for fetching data with Relay, and it applies in several circumstances, such as the initial load of an application, during subsequent navigations, or generally when using UI elements which are initially hidden and later revealed upon an interaction (such as menus, popovers, dialogs, etc), and which also require fetching additional data."),(0,o.mdx)(y,{mdxType:"FbEntrypointsExtraInfo"}),(0,o.mdx)("h2",{id:"lazily-fetching-queries-during-render"},"Lazily Fetching Queries during Render"),(0,o.mdx)("p",null,"Another alternative for fetching a query is to lazily fetch the query when the component is rendered. However, as we've mentioned previously, the preferred pattern is to start fetching queries ahead of rendering. If lazy fetching is used without caution, it can trigger nested or waterfalling round trips, and can degrade performance."),(0,o.mdx)("p",null,"To fetch a query lazily, you can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," Hook:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {AppQuery} from 'AppQuery.graphql';\n\nconst React = require('React');\nconst {graphql, useLazyLoadQuery} = require('react-relay');\n\nfunction App() {\n  const data = useLazyLoadQuery<AppQuery>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    {id: '4'},\n  );\n\n  return (\n    <h1>{data.user?.name}</h1>\n  );\n}\n")),(0,o.mdx)("p",null,"Lets see what's going on here:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),"  takes a graphql query and some variables for that query, and returns the data that was fetched for that query. The variables are an object containing the values for the ",(0,o.mdx)("a",{parentName:"li",href:"../variables/"},"variables")," referenced inside the GraphQL query."),(0,o.mdx)("li",{parentName:"ul"},"Similarly to ",(0,o.mdx)("a",{parentName:"li",href:"../fragments/"},"fragments"),", the component is automatically subscribed to updates to the query data: if the data for this query is updated anywhere in the app, the component will automatically re-render with the latest updated data."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," additionally takes a Flow type parameter, which corresponds to the Flow type for the query, in this case AppQuery.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Remember that Relay automatically generates Flow types for any declared queries, which you can import and use with ",(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),". These types are available in the generated files with the following name format: ",(0,o.mdx)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),"."),(0,o.mdx)("li",{parentName:"ul"},"Note that the ",(0,o.mdx)("inlineCode",{parentName:"li"},"variables")," will be checked by Flow to ensure that you are passing values that match what the GraphQL query expects."),(0,o.mdx)("li",{parentName:"ul"},"Note that the data is already properly Flow-typed without requiring an explicit annotation, and is based on the types from the GraphQL schema. For example, the type of ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," above would be: ",(0,o.mdx)("inlineCode",{parentName:"li"},"{ user: ?{ name: ?string } }"),"."))),(0,o.mdx)("li",{parentName:"ul"},"By default, when the component renders, Relay will ",(0,o.mdx)("em",{parentName:"li"},"fetch")," the data for this query (if it isn't already cached), and return it as a the result of the ",(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," call. We'll go into more detail about how to show loading states in the ",(0,o.mdx)("a",{parentName:"li",href:"../loading-states/"},"Loading States with Suspense")," section, and how Relay uses cached data in the ",(0,o.mdx)("a",{parentName:"li",href:"../../reusing-cached-data/"},"Reusing Cached Data For Rendering")," section."),(0,o.mdx)("li",{parentName:"ul"},"Note that if you re-render your component and pass ",(0,o.mdx)("em",{parentName:"li"},"different query variables")," than the ones originally used, it will cause the query to be fetched again with the new variables, and potentially re-render with different data."),(0,o.mdx)("li",{parentName:"ul"},"Finally, make sure you're providing a Relay environment using a ",(0,o.mdx)("a",{parentName:"li",href:"../../../api-reference/relay-environment-provider/"},"Relay Environment Provider")," at the root of your app before trying to render a query.")),(0,o.mdx)(l.Z,{mdxType:"DocsRating"}))}g.isMDXComponent=!0}}]);