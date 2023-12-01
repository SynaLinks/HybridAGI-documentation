"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[980],{4936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(5893),o=t(1151);const i={sidebar_position:1},r="Chat Over Document",a={id:"examples/chat-over-document",title:"Chat Over Document",description:"Learn how to build a simple chat over document app.",source:"@site/docs/examples/chat-over-document.md",sourceDirName:"examples",slug:"/examples/chat-over-document",permalink:"/documentation/examples/chat-over-document",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/documentation/category/examples"},next:{title:"Safety First",permalink:"/documentation/examples/safety-first"}},c={},d=[{value:"Your First Application",id:"your-first-application",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"chat-over-document",children:"Chat Over Document"}),"\n",(0,s.jsx)(n.p,{children:"Learn how to build a simple chat over document app."}),"\n",(0,s.jsx)(n.h2,{id:"your-first-application",children:"Your First Application"}),"\n",(0,s.jsx)(n.p,{children:"In this initial application, you will construct a straightforward chat over document."}),"\n",(0,s.jsxs)(n.p,{children:["To begin, initiate a new project using your preferred Integrated Development Environment (IDE). Afterward, include a file named ",(0,s.jsx)(n.code,{children:"main.cypher"})," at the root of your project. Start with an empty program; you'll update it later."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cypher",metastring:'title="main.cypher"',children:'CREATE\n// Nodes declaration\n(start:Control {name:"Start"}),\n(end:Control {name:"End"}),\n// Structure declaration\n(start)-[:NEXT]->(end)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now create a new file called ",(0,s.jsx)(n.code,{children:"answer.cypher"}),". This subprogram aims to answer based on the documents loaded inside the long-term memory. This simple process can be described as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cypher",metastring:'title="answer.cypher"',children:'CREATE\n// Nodes declaration\n(start:Control {name:"Start"}),\n(end:Control {name:"End"}),\n(similarity_search:Action {\n    name:"Search for answer in the filesystem",\n    tool:"ContentSearch",\n    prompt:"Elaborate on what you want to know"}),\n(answer:Action {\n    name:"Answer based on the above search",\n    tool:"Speak",\n    prompt:"Please answer based on the above search. \\\nIf nothing is relevant, just say that you don\'t know"}),\n// Structure declaration\n(start)-[:NEXT]->(similarity_search),\n(similarity_search)-[:NEXT]->(answer),\n(answer)-[:NEXT]->(end)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now it's time to update the main prompt program. We want to call our ",(0,s.jsx)(n.code,{children:"answer"})," program but also ask the user if they want to know something else to continue the interaction. This process can be described with a conditional loop."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cypher",metastring:'title="main.cypher"',children:'CREATE\n// Nodes declaration\n(start:Control {name:"Start"}),\n(end:Control {name:"End"}),\n// You can call programs by using \n// the name of the Cypher file as an index\n(answer:Program {\n    name:"Answer the Objective",\n    program:"answer"}),\n(ask_question:Action {\n    name:"Ask what the User wants to know next",\n    tool:"AskUser",\n    prompt:"Do you want to know something else?",\n    disable_inference:"true"}),\n(is_finished:Decision {\n    name:"Check if the User needs something else",\n    question:"Does the User need anything else?"}),\n(update_objective:Action {\n    name:"Update the Objective with the new question",\n    tool:"UpdateObjective",\n    prompt:"Enter the new question to answer"})\n// Structure declaration\n(start)-[:NEXT]->(answer),\n(answer)-[:NEXT]->(ask_question),\n(ask_question)-[:NEXT]->(is_finished),\n(update_objective)-[:NEXT]->(answer),\n(is_finished)-[:NO]->(update_objective),\n(is_finished)-[:YES]->(end)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the updated ",(0,s.jsx)(n.code,{children:"main.cypher"})," program, we've introduced an additional level of interaction to enhance the user experience. Let's break down the new components:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'(answer:Program {name:"Answer the Objective", program:"answer"})'}),': This line declares a Program Node named "answer." This node is connected to a separate Cypher file named ',(0,s.jsx)(n.code,{children:"answer.cypher"}),", which contains the logic for searching and providing answers based on the loaded documents in the long-term memory."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'(ask_question:Action {name:"Ask what the User wants to know next", tool:"AskUser", prompt:"Do you want to know something else?", disable_inference:"true"})'}),': Here, we\'ve added an Action Node named "ask_question." This node uses the "AskUser" tool to prompt the user with the question "Do you want to know something else?" The ',(0,s.jsx)(n.code,{children:'disable_inference:"true"'})," makes sure to use this question by disabling the LLM inference."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'(is_finished:Decision {name:"Check if the User needs something else", question:"Does the User need anything else?"})'}),': We\'ve introduced a Decision Node named "is_finished." This node checks whether the user needs anything else, posing the question "Does the User need anything else?"']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'(update_objective:Action {name:"Update the Objective with the new question", tool:"UpdateObjective", prompt:"Enter the new question to answer"})'}),': Another Action Node named "update_objective" is added. This node uses the "UpdateObjective" tool to update the objective based on the new question entered by the user.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"(start)-[:NEXT]->(answer)"}),': The program starts by flowing from the Start Node to the "answer" Program Node. This initiates the process of searching for an answer based on the documents in the long-term memory.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"(answer)-[:NEXT]->(ask_question)"}),': After providing an answer, the program moves to the "ask_question" Action Node, prompting the user if they want to know something else.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"(ask_question)-[:NEXT]->(is_finished)"}),': The flow then moves to the "is_finished" Decision Node, where the system checks if the user needs anything else.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"(update_objective)-[:NEXT]->(answer)"}),': If the user expresses a desire to know something else, the program moves to the "update_objective" Action Node, allowing the user to enter a new question.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"(is_finished)-[:NO]->(update_objective)"}),': If the user needs something else, the program loops back to the "update_objective" Action Node to handle the new question.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"(is_finished)-[:YES]->(end)"}),": If the user doesn't need anything else, the program concludes by moving to the End Node."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This structure creates a continuous interaction loop where the system provides answers, checks if the user needs more information, and updates the objective based on the user's input. The use of decision nodes and loops enhances the program's adaptability to user queries and provides a dynamic conversational experience."})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(7294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);