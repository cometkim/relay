(self.webpackChunk=self.webpackChunk||[]).push([[10906],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70800:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>p});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r=["components"],l={id:"converting-mutations",title:"Converting Mutations",original_id:"converting-mutations"},s=void 0,d={unversionedId:"converting-mutations",id:"version-v10.1.2/converting-mutations",isDocsHomePage:!1,title:"Converting Mutations",description:"We made some changes to how mutations work in the new version of Relay in order to makes them more straight forward to use and more customizable. Mutations are currently not covered by an automatic conversion and require a manual upgrade. However, limited number of changes is needed to make your existing mutations work with both the old and new environment.",source:"@site/versioned_docs/version-v10.1.2/Modern-ConvertingMutations.md",sourceDirName:".",slug:"/converting-mutations",permalink:"/docs/v10.1.2/converting-mutations",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.1.2/Modern-ConvertingMutations.md",version:"v10.1.2",lastUpdatedBy:"Mofei Zhang",lastUpdatedAt:1638992784,formattedLastUpdatedAt:"12/8/2021",frontMatter:{id:"converting-mutations",title:"Converting Mutations",original_id:"converting-mutations"}},u=[{value:"Simplifying FatQueries to Standard GraphQL Queries",id:"simplifying-fatqueries-to-standard-graphql-queries",children:[]},{value:"Migrating Configs",id:"migrating-configs",children:[{value:"FIELDS_CHANGE",id:"fields_change",children:[]},{value:"REQUIRED_CHILDREN",id:"required_children",children:[]},{value:"RANGE_ADD",id:"range_add",children:[]},{value:"RANGE_DELETE",id:"range_delete",children:[]},{value:"NODE_DELETE",id:"node_delete",children:[]}]},{value:"Converting a Simple Mutation",id:"converting-a-simple-mutation",children:[{value:"Converting <code>getMutation()</code> and <code>getFatQuery()</code>",id:"converting-getmutation-and-getfatquery",children:[]},{value:"Converting <code>getConfigs()</code>",id:"converting-getconfigs",children:[]},{value:"Converting <code>getVariables()</code>",id:"converting-getvariables",children:[]},{value:"Final Result",id:"final-result",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We made some changes to how mutations work in the new version of Relay in order to makes them more straight forward to use and more customizable. Mutations are currently not covered by an automatic conversion and require a manual upgrade. However, limited number of changes is needed to make your existing mutations work with both the old and new environment."),(0,o.kt)("h2",{id:"simplifying-fatqueries-to-standard-graphql-queries"},"Simplifying FatQueries to Standard GraphQL Queries"),(0,o.kt)("p",null,"FatQueries in Relay Classic mutations was a concept that was confusing for a number of people. It required Relay to keep track of a significant amount of metadata regarding each record and automatically figure out the query to send to the server for the mutation. The logic to deduce the queries to send to the server was both complicated to maintain and slow to run. On top of that, we often had questions about why a particular field is included or skipped. We decided to allow people to have more control by allowing them write out exactly what data they want to update as the result of a mutation. Both individual fields and fragments can be included in these queries. Similar to container fragments, this is subjected to masking. That means only fields listed out directly will be accessible in the callbacks and the updater functions. The data fetched by in referenced fragments will still be updated in the store."),(0,o.kt)("p",null,"Example of existing fat query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"  RelayClassic.QL`\n    fragment on MarkReadNotificationResponsePayload @relay(pattern: true) {\n      notification\n    }\n  `;\n")),(0,o.kt)("p",null,"Example of converted mutation query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  mutation MarkReadNotificationMutation(\n    $input: MarkReadNotificationData!\n  ) {\n    markReadNotification(data: $input) {\n      notification {\n        seenState # include fields to be updated\n        ... MyNotificationComponent_notification # reuse fragments from components to be updated\n      }\n    }\n  }\n`;\n")),(0,o.kt)("h2",{id:"migrating-configs"},"Migrating Configs"),(0,o.kt)("h3",{id:"fields_change"},"FIELDS_CHANGE"),(0,o.kt)("p",null,"This is no longer needed in Compatibility Mode for neither environments. Relay will normalized the data using the mutation query and id to update the store automatically. You can remove it completely."),(0,o.kt)("h3",{id:"required_children"},"REQUIRED_CHILDREN"),(0,o.kt)("p",null,"This is no longer needed in Compatibility Mode for neither environments. Simply include any fields that you need as part of the mutation query without specifying the config."),(0,o.kt)("h3",{id:"range_add"},"RANGE_ADD"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RANGE_ADD")," needs one additional property in the config named ",(0,o.kt)("inlineCode",{parentName:"p"},"connectionInfo")," to work with the new environment. Learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"connectionInfo")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.1.2/mutations#range-add"},"Mutation/RANGE_ADD")),(0,o.kt)("h3",{id:"range_delete"},"RANGE_DELETE"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RANGE_DELETE")," needs one additional property in the config named ",(0,o.kt)("inlineCode",{parentName:"p"},"connectionKeys")," to work with the new environment. Learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"connectionKeys")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.1.2/mutations#range-delete"},"Mutation/RANGE_DELETE")),(0,o.kt)("h3",{id:"node_delete"},"NODE_DELETE"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NODE_DELETE")," config will work as-is with the new environment. No change is needed."),(0,o.kt)("h2",{id:"converting-a-simple-mutation"},"Converting a Simple Mutation"),(0,o.kt)("p",null,"Take this example of a simple mutation in Relay Classic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class LikeStoryMutation extends RelayClassic.Mutation {\n  getMutation() {\n    return RelayClassic.QL`mutation {likeStory}`;\n  }\n\n  getVariables() {\n    return {storyID: this.props.story.id};\n  }\n\n  getFatQuery() {\n    return RelayClassic.QL`\n      fragment on LikeStoryPayload @relay(pattern: true) {\n        story {\n          likers,\n          likeSentence,\n          viewerDoesLike,\n        },\n      }\n    `;\n  }\n\n  getConfigs() {\n    return [{\n      type: 'FIELDS_CHANGE',\n      fieldIDs: {\n        story: this.props.story.id,\n      },\n    }];\n  }\n\n  static fragments = {\n    story: () => Relay.QL`\n      fragment on Story {\n        id\n      }\n    `,\n  };\n}\n")),(0,o.kt)("h3",{id:"converting-getmutation-and-getfatquery"},"Converting ",(0,o.kt)("inlineCode",{parentName:"h3"},"getMutation()")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"getFatQuery()")),(0,o.kt)("p",null,"We combine these two into a regular GraphQL mutation, which list out specific fields that needs to be updated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const mutation = graphql`\n  mutation LikeStoryMutation($input: LikeStoryData!) {\n    story(data: $input) {\n      likers {\n        count\n      }\n      likeSentence\n      viewerDoesLike\n    }\n  }\n`;\n")),(0,o.kt)("h3",{id:"converting-getconfigs"},"Converting ",(0,o.kt)("inlineCode",{parentName:"h3"},"getConfigs()")),(0,o.kt)("p",null,"As specified above, ",(0,o.kt)("inlineCode",{parentName:"p"},"FIELDS_CHANGE")," configs can be omitted."),(0,o.kt)("h3",{id:"converting-getvariables"},"Converting ",(0,o.kt)("inlineCode",{parentName:"h3"},"getVariables()")),(0,o.kt)("p",null,"To convert ",(0,o.kt)("inlineCode",{parentName:"p"},"getVariables()"),", we take the return value from the original function and wrap it in an object that contains a property that matches the variable name for the mutation. In this case, the mutation has a ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," variable that is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"LikeStoryData"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const variables = {\n  input: {\n    storyID: args.storyID\n  }\n}\n")),(0,o.kt)("h3",{id:"final-result"},"Final Result"),(0,o.kt)("p",null,"As you can see, our resulting mutation is a lot simpler and more like regular GraphQL than the Relay Classic version we started out with."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const mutation = graphql`\n  mutation LikeStoryMutation($input: LikeStoryData!) {\n    story {\n      likers {\n        count\n      },\n      likeSentence,\n      viewerDoesLike\n    }\n  }\n`;\n\n// environment should be passed in from your component as this.props.relay.environment\nfunction commit(environment: CompatEnvironment, args) {\n  const variables = {\n    input: {\n      storyID: args.storyID\n    }\n  };\n\n  return commitMutation(environment, {\n    mutation,\n    variables,\n  });\n}\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.1.2/mutations"},"Mutation")," for additional options on ",(0,o.kt)("inlineCode",{parentName:"p"},"commitMutation")," for more complex mutations."))}p.isMDXComponent=!0}}]);