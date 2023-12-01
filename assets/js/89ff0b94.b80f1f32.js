"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66],{8298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(5893),a=t(1151);const o={sidebar_position:3},i="Turn-based Conversation",s={id:"examples/turn-based-conversation",title:"Turn-based Conversation",description:"Learn how to implement a simple turn-based conversation.",source:"@site/docs/examples/turn-based-conversation.md",sourceDirName:"examples",slug:"/examples/turn-based-conversation",permalink:"/documentation/examples/turn-based-conversation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Safety First",permalink:"/documentation/examples/safety-first"},next:{title:"Introduction",permalink:"/documentation/"}},c={},l=[{value:"Emulating a Simple Multi-agent System",id:"emulating-a-simple-multi-agent-system",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"turn-based-conversation",children:"Turn-based Conversation"}),"\n",(0,r.jsx)(n.p,{children:"Learn how to implement a simple turn-based conversation."}),"\n",(0,r.jsx)(n.h2,{id:"emulating-a-simple-multi-agent-system",children:"Emulating a Simple Multi-agent System"}),"\n",(0,r.jsx)(n.p,{children:"In this example, we are going to implement an algorithm that emulates a multi-agent system using our neuro-symbolic framework."}),"\n",(0,r.jsx)(n.p,{children:"To emulate a turn-based conversation, you need to describe a loop with an exit condition. A classic example is the actor-critic scheme where an agent tries to answer while the other critiques its work."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cypher",metastring:'title="conversation.cypher"',children:'CREATE\n// Nodes declaration\n(start:Control {name:"Start"}),\n(end:Control {name:"End"}),\n(actor:Program {\n    name:"Answer the objective",\n    program:"actor"}),\n(critic:Program {\n    name:"Critique the answer",\n    program:"critic"}),\n(is_objective_answered:Decision {\n    name:"Check if the objective is correctly answered",\n    question:"Is the objective correctly answered?"}),\n// Structure declaration\n(start)-[:NEXT]->(actor),\n(actor)-[:NEXT]->(critic),\n(critic)-[:NEXT]->(is_objective_answered),\n(is_objective_answered)-[:NO]->(actor),\n(is_objective_answered)-[:YES]->(end)\n'})}),"\n",(0,r.jsx)(n.p,{children:"To implement this app properly, we use Program Nodes to implement the behavior of our agents in a separate file. This practice allows you to reduce implementation errors and easily modify the behavior of your agents."}),"\n",(0,r.jsxs)(n.p,{children:["Let's implement our agents by creating two files: ",(0,r.jsx)(n.code,{children:"actor.cypher"})," and ",(0,r.jsx)(n.code,{children:"critic.cypher"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cypher",metastring:'title="actor.cypher"',children:'CREATE\n// Nodes declaration\n(start:Control {name:"Start"}),\n(end:Control {name:"End"}),\n(answer:Action {\n    name:"Answer the objective question",\n    tool:"Speak",\n    prompt:"Please answer the objective question, always reflect on your mistakes"}),\n// Structure declaration\n(start)-[:NEXT]->(answer),\n(answer)-[:NEXT]->(end)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cypher",metastring:'title="critic.cypher"',children:'CREATE\n// Nodes declaration\n(start:Control {name:"Start"}),\n(end:Control {name:"End"}),\n(critique:Action {\n    name:"Critique the answer",\n    tool:"Speak",\n    prompt:"Please critique the above answer"}),\n// Structure declaration\n(start)-[:NEXT]->(critique),\n(critique)-[:NEXT]->(end)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now we can implement our main file and simply call our conversation program:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cypher",metastring:'title="main.cypher"',children:'CREATE\n// Nodes declaration\n(start:Control {name:"Start"}),\n(end:Control {name:"End"}),\n(conversation:Program {\n    name:"Emulate a turn-based conversation",\n    program:"conversation"}),\n// Structure declaration\n(start)-[:NEXT]->(conversation),\n(conversation)-[:NEXT]->(end)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now you can add personality to your agents by editing the tool's prompt or add the use of an additional tool. Feel free to explore the possibilities offered by our framework!"})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);