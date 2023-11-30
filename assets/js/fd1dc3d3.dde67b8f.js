"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[106],{5318:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=o(5893),i=o(1151);const s={sidebar_position:1},a="Neuro-Symbolic AI Systems",r={id:"basics/neuro-symbolic",title:"Neuro-Symbolic AI Systems",description:"Learn about neuro-symbolic AI systems",source:"@site/docs/basics/neuro-symbolic.md",sourceDirName:"basics",slug:"/basics/neuro-symbolic",permalink:"/documentation/basics/neuro-symbolic",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic Concepts",permalink:"/documentation/category/basic-concepts"},next:{title:"Graph Prompt Programming",permalink:"/documentation/basics/graph-prompt-programming"}},c={},l=[{value:"What is a neuro-symbolic AI system?",id:"what-is-a-neuro-symbolic-ai-system",level:2},{value:"An explainable and controlled approach",id:"an-explainable-and-controlled-approach",level:2}];function p(e){const n={em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"neuro-symbolic-ai-systems",children:"Neuro-Symbolic AI Systems"}),"\n",(0,t.jsx)(n.p,{children:"Learn about neuro-symbolic AI systems"}),"\n",(0,t.jsx)(n.h2,{id:"what-is-a-neuro-symbolic-ai-system",children:"What is a neuro-symbolic AI system?"}),"\n",(0,t.jsx)(n.p,{children:"Neuro-symbolic systems represent a hybrid approach to artificial intelligence (AI) that combines elements of both symbolic AI and connectionist (neural network) AI."}),"\n",(0,t.jsx)(n.p,{children:"Neuro-symbolic AI systems are characterized by two types of components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The gradient based learnable functions (the neural networks)"}),"\n",(0,t.jsx)(n.li,{children:"The functions that comes with symbolic implementation, or at least, a (possibly incomplete) symbolic specification of its functionality"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By combining symbolic reasoning with neural network learning, these systems can effectively perform both deductive reasoning (logical inference) and inductive learning (pattern recognition)."}),"\n",(0,t.jsx)(n.h2,{id:"an-explainable-and-controlled-approach",children:"An explainable and controlled approach"}),"\n",(0,t.jsx)(n.p,{children:"Our approach takes inspiration from computer science and symbolic AI to overcome the limits of Large Language Models (LLMs). Our aim is to create safe, controlled and explainable AI systems that can run locally."}),"\n",(0,t.jsx)(n.p,{children:"Our system is composed of a Domain Specific Language (DSL) for programming LLM based Agents that define the syntaxe of the graph programs. We define programs as a graph of action, involving the use of a tool, and explicit decision making steps that allow branching over the graph. The intepreter use the DSL along with the LLM to make probabilistic decisions and use tools according to the given program."}),"\n",(0,t.jsx)("figure",{children:(0,t.jsx)("p",{align:"center",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"The visual representation of the interaction between components",src:o(6211).Z+"",width:"513",height:"251"}),"\n",(0,t.jsx)("figcaption",{align:"center",children:(0,t.jsx)("b",{children:"Fig.1 - The main components of our approach, in blue are the symbolic ones."})})]})})}),"\n",(0,t.jsxs)(n.p,{children:["In a nutshell, our system follows a graph in order to behave according to the provided instructions. If we represent a program as a network, interpreting it consists of finding the correct path within the graph. Which means that HybridAGI can ",(0,t.jsx)(n.em,{children:"only"})," perform tasks that are described as a program providing a safe and controlled framework for AGI."]}),"\n",(0,t.jsx)(n.p,{children:"Thanks to our approach, developers can correct, enhance, and provide implicit knowledge to the LLM that would have been impossible to provide otherwise."})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},6211:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/components-e86447b3e317fe7f0ac5bff6f282fb1e.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var t=o(7294);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);