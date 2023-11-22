"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[61931],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){return function(t){var n=c(t.components);return r.createElement(e,i({},t,{components:n}))}},c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(o,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],s={id:"compiler-architecture",title:"Compiler Architecture",original_id:"compiler-architecture"},l=void 0,m={unversionedId:"compiler-architecture",id:"version-v9.0.0/compiler-architecture",title:"Compiler Architecture",description:"The compiler is a set of modules designed to extract GraphQL documents from across a codebase, transform/optimize them, and generate build artifacts. Examples of common types of artifacts include optimized GraphQL to persist to your server, runtime representations of the queries for use with GraphQL clients such as the Relay runtime, or generated source code for use with GraphQL frameworks for compiled languages (Java/Swift/etc).",source:"@site/versioned_docs/version-v9.0.0/PrinciplesAndArchitecture-Compiler.md",sourceDirName:".",slug:"/compiler-architecture",permalink:"/docs/v9.0.0/compiler-architecture",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v9.0.0/PrinciplesAndArchitecture-Compiler.md",tags:[],version:"v9.0.0",lastUpdatedBy:"Facebook Community Bot",lastUpdatedAt:1700670039,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{id:"compiler-architecture",title:"Compiler Architecture",original_id:"compiler-architecture"},sidebar:"version-v9.0.0/docs",previous:{title:"Architecture Overview",permalink:"/docs/v9.0.0/architecture-overview"},next:{title:"Runtime Architecture",permalink:"/docs/v9.0.0/runtime-architecture"}},d={},c=[{value:"Data Flow",id:"data-flow",level:2},{value:"Data Types &amp; Modules",id:"data-types--modules",level:2},{value:"Transforms",id:"transforms",level:2}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The compiler is a set of modules designed to extract GraphQL documents from across a codebase, transform/optimize them, and generate build artifacts. Examples of common types of artifacts include optimized GraphQL to persist to your server, runtime representations of the queries for use with GraphQL clients such as the Relay runtime, or generated source code for use with GraphQL frameworks for compiled languages (Java/Swift/etc)."),(0,i.mdx)("h2",{id:"data-flow"},"Data Flow"),(0,i.mdx)("p",null,"The high-level flow of data through the compiler is represented in the following diagram:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\n                   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                   \u2502   GraphQL   \u2502\u2502   Schema    \u2502\n                   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                          \u2502              \u2502              parse\n                          \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                  \u25bc\n                   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                   \u2502      CompilerContext       \u2502\n                   \u2502                            \u2502\n                   \u2502   \u250c\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\u2500\u2500\u2510\n                   \u2502   \u2502 IR  \u2502 \u2502 IR  \u2502 \u2502 ... \u2502  \u2502  \u2502\n                   \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2518  \u2502  \u2502\n                   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502  transform/\n                          \u2502    \u2502      \u25b2            \u2502   optimize\n                          \u2502    \u2502      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                          \u2502    \u2502\n                          \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                          \u2502  print        \u2502  codegen\n                          \u25bc               \u25bc\n                   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                   \u2502   GraphQL   \u2502 \u2502  Artifacts  \u2502\n                   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},'GraphQL text is extracted from source files and "parsed" into an intermediate representation (IR) using information from the schema.'),(0,i.mdx)("li",{parentName:"ol"},"The set of IR documents forms a CompilerContext, which is then transformed and optimized."),(0,i.mdx)("li",{parentName:"ol"},"Finally, GraphQL is printed (e.g. to files, saved to a database, etc) and any artifacts are generated.")),(0,i.mdx)("h2",{id:"data-types--modules"},"Data Types & Modules"),(0,i.mdx)("p",null,"The compiler module is composed of a set of core building blocks as well as a helper that packages them together in an easy to use API. Some of the main data types and modules in the compiler are as follows:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"IR")," (Intermediate Representation): an (effectively immutable) representation of a GraphQL document (query, fragment, field, etc) as a tree structure, including type information from a schema. Compared to the standard GraphQL AST (produced by e.g. ",(0,i.mdx)("inlineCode",{parentName:"li"},"graphql-js"),") the main difference is that it encodes more of the semantics of GraphQL. For example, conditional branches (",(0,i.mdx)("inlineCode",{parentName:"li"},"@include")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"@skip"),") are represented directly, making it easier to target optimizations for these directives (One such optimization is to merge sibling fields with the same condition, potentially reducing the number of conditionals that must be evaluated at runtime)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"CompilerContext"),": an immutable representation of a corpus of GraphQL documents. It contains the schema and a mapping of document names to document representations (as IR, see above)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Transform"),': a "map"-like function that accepts a ',(0,i.mdx)("inlineCode",{parentName:"li"},"CompilerContext")," as input and returns a new, modified context as output. Examples below."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Parser"),": Converts a GraphQL schema and raw GraphQL text into typed IR objects."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Printer"),": a function that accepts IR and converts it to a GraphQL string.")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"RelayCompiler")," module is a helper class that demonstrates one way of combining these primitives. It takes IR transforms, and given IR definitions, constructs a CompilerContext from them, transforming them, and generating output artifacts intended for use with Relay runtime."),(0,i.mdx)("h2",{id:"transforms"},"Transforms"),(0,i.mdx)("p",null,"One of the main goals of the compiler is to provide a consistent platform for writing tools that transform or optimize GraphQL. This includes the ability to experiment with new directives by transforming them away at compile time. Transform functions should typically perform a single type of modification - it's expected that an app will have multiple transforms configured in the compiler instance."),(0,i.mdx)("p",null,"Here are a few examples of some of the included transforms:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"FlattenTransform"),": Reduces extraneous levels of indirection in a query, inlining fields from anonymous fragments wherever they match the parent type. This can be beneficial when generating code to read the results of a query or process query results, as it reduces duplicate field processing. For example:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\n# before: `id` is processed twice\nfoo { # type FooType\n   id\n   ... on FooType { # matches the parent type, so this is extraneous\n     id\n   }\n }\n\n # after: `id` is processed once\n foo {\n   id\n }\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"SkipRedundantNodeTransform"),": A more advanced version of flattening, this eliminates more complex cases of field duplication such as when a field is fetched both unconditionally and conditionally, or is fetched by two different sub-fragments. For example:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\n# before: `id` processed up to 2x\nfoo {\n  bar {\n    id\n  }\n  ... on FooType @include(if: $cond) { # can't be flattened due to conditional\n    id # but this field is guaranteed to be fetched regardless\n  }\n}\n\n# after: `id` processed at most once\nfoo {\n  bar {\n    id\n  }\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"GenerateRequisiteFieldTransform"),": This optional, Relay-specific transform inserts ",(0,i.mdx)("inlineCode",{parentName:"li"},"id")," fields for globally identifiable objects and ",(0,i.mdx)("inlineCode",{parentName:"li"},"__typename")," fields wherever the type cannot be statically determined (e.g. for unions).")))}u.isMDXComponent=!0}}]);