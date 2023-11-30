"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[846],{2364:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=a(5893),t=a(1151);const o={sidebar_position:1},i="Dynamic Calls",c={id:"advanced/dynamic-calls",title:"Dynamic Calls",description:"Learn how to dynamically call programs",source:"@site/docs/advanced/dynamic-calls.md",sourceDirName:"advanced",slug:"/advanced/dynamic-calls",permalink:"/SynaLinks/advanced/dynamic-calls",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Concepts",permalink:"/SynaLinks/category/advanced-concepts"},next:{title:"Protected Programs",permalink:"/SynaLinks/advanced/protected-programs"}},s={},l=[{value:"When dynamic calls are needed?",id:"when-dynamic-calls-are-needed",level:2},{value:"Searching based on similarity",id:"searching-based-on-similarity",level:3},{value:"Enhancing the program search",id:"enhancing-the-program-search",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"dynamic-calls",children:"Dynamic Calls"}),"\n",(0,r.jsx)(n.p,{children:"Learn how to dynamically call programs"}),"\n",(0,r.jsx)(n.h2,{id:"when-dynamic-calls-are-needed",children:"When dynamic calls are needed?"}),"\n",(0,r.jsx)(n.p,{children:"If you are building a system that have an immense or a growing library of programs, it may become intracable to design a program that take into account each case."}),"\n",(0,r.jsxs)(n.p,{children:["In that case, dynamic calls can be done with the use of ",(0,r.jsx)(n.code,{children:"CallProgram"}),", this tool use the name of the program as input to dynamically call a program."]}),"\n",(0,r.jsx)(n.p,{children:"In order for the system to known which program to call, you have two options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Directly use the tool's prompt by specifying each program name (which is only possible if you have a very specific taxonomy for program names that generalize well)."}),"\n",(0,r.jsxs)(n.li,{children:["Or add another steps to first perform a similarity search with ",(0,r.jsx)(n.code,{children:"ProgramSearch"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"searching-based-on-similarity",children:"Searching based on similarity"}),"\n",(0,r.jsxs)(n.p,{children:["In order to search for existing programs, you should describe what the program does using the ",(0,r.jsx)(n.code,{children:"ProgramSearch"})," tool."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="program_search_example.cypher"',children:'CREATE\n// ...\n(program_search:Action {\n    name:"Search for existing programs", \n    tool:"ProgramSearch",\n    prompt:"Please describe the program to fullfill the Objective in short sentence."}),\n(is_program_implemented:Decision {\n    name:"Check if the program to fullfil the Objective is implemented",\n    question:"Is the program already implemented?"}),\n(tell_user:Action {\n    name:"Tell the user you can\'t help him",\n    tool:"Speak",\n    prompt:"Sorry, I don\'t know how to help you",\n    disable_inference:"true"}),\n(call_program:Action {\n    name:"Call an existing program to fulfill the Objective",\n    tool:"CallProgram",\n    prompt:"The name of the program to call"}),\n// ...\n(is_program_implemented)-[:YES]->(call_program),\n(is_program_implemented)-[:NO]->(tell_user),\n// ...\n'})}),"\n",(0,r.jsx)(n.h3,{id:"enhancing-the-program-search",children:"Enhancing the program search"}),"\n",(0,r.jsxs)(n.p,{children:["By default, the program memory use the entire Cypher program to create the embedding vector used by the similarity search. To refine the embedding of the program you can use the special token ",(0,r.jsx)(n.code,{children:"// @desc:"})," at the beggining of the program to hardcode the string used to compute the embedding."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="refining_program_description.cypher"',children:"// You can add additionnal comments like a license or a docstring\n// they will be ignored to compute the embedding vector\n// @desc: The description of your program used to compute the vector\nCREATE\n// Your program goes here\n// ...\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>i});var r=a(7294);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);