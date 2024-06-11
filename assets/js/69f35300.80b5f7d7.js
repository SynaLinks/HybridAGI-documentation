"use strict";(self.webpackChunksynalinks_website=self.webpackChunksynalinks_website||[]).push([[81],{5809:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=t(4848),o=t(8453);const a={sidebar_position:3},s="Protected Programs",i={id:"tutorials/advanced/protected-programs",title:"Protected Programs",description:"Learn about protected programs.",source:"@site/docs/tutorials/advanced/protected-programs.md",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/protected-programs",permalink:"/documentation/docs/tutorials/advanced/protected-programs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dynamic Calls",permalink:"/documentation/docs/tutorials/advanced/dynamic-calls"}},c={},d=[{value:"Why Do We Need Protected Programs?",id:"why-do-we-need-protected-programs",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"protected-programs",children:"Protected Programs"}),"\n",(0,n.jsx)(r.p,{children:"Learn about protected programs."}),"\n",(0,n.jsx)(r.h2,{id:"why-do-we-need-protected-programs",children:"Why Do We Need Protected Programs?"}),"\n",(0,n.jsx)(r.p,{children:"When constructing an AI system with learning capabilities, you will need a way to prevent the system from modifying its own main prompting mechanism."}),"\n",(0,n.jsx)(r.p,{children:"This feature is particularly crucial for safety reasons, as the main program is typically where safety procedures are implemented."}),"\n",(0,n.jsx)(r.p,{children:"For this reason, we protect each program that depends on the main program. This check is performed through the dependency graph implemented in the program memory."}),"\n",(0,n.jsxs)(r.p,{children:["In our context, this means that a protected program cannot be called by ",(0,n.jsx)(r.code,{children:"CallProgram"}),", modified by ",(0,n.jsx)(r.code,{children:"WriteProgram"}),", and is not retrievable by ",(0,n.jsx)(r.code,{children:"ProgramSearch"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"This constraint ensures that HybridAGI can only dynamically call programs disjoint from the main program. Feel free to check the dependency graph of your app!"})]})}function l(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>i});var n=t(6540);const o={},a=n.createContext(o);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);