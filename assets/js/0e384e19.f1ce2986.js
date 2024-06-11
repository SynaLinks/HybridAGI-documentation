"use strict";(self.webpackChunksynalinks_website=self.webpackChunksynalinks_website||[]).push([[976],{1512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(4848),o=t(8453);const a={sidebar_position:1},s="Introduction to HybridAGI",r={id:"intro",title:"Introduction to HybridAGI",description:"The Programmable Neuro-Symbolic AGI",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/documentation/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Install HybridAGI",permalink:"/documentation/docs/install"}},c={},l=[{value:"The Programmable Neuro-Symbolic AGI",id:"the-programmable-neuro-symbolic-agi",level:2},{value:"For people who want AI to behave as expected",id:"for-people-who-want-ai-to-behave-as-expected",level:3},{value:"What is HybridAGI?",id:"what-is-hybridagi",level:2},{value:"Why HybridAGI?",id:"why-hybridagi",level:2},{value:"Deterministic approach &amp; infinite number of tools",id:"deterministic-approach--infinite-number-of-tools",level:3},{value:"Automatic optimization &amp; hybrid vector/graph long-term memory",id:"automatic-optimization--hybrid-vectorgraph-long-term-memory",level:3},{value:"Graph-based prompt programming",id:"graph-based-prompt-programming",level:2},{value:"Memory-centric system",id:"memory-centric-system",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction-to-hybridagi",children:"Introduction to HybridAGI"}),"\n",(0,i.jsx)(n.h2,{id:"the-programmable-neuro-symbolic-agi",children:"The Programmable Neuro-Symbolic AGI"}),"\n",(0,i.jsx)(n.h3,{id:"for-people-who-want-ai-to-behave-as-expected",children:"For people who want AI to behave as expected"}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("p",{align:"center",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"HybridAGI fact memory",src:t(2706).A+""}),"\n",(0,i.jsx)("figcaption",{align:"center",children:(0,i.jsx)("b",{children:"Fig.1 - HybridAGI's AgentOS architecture. The Graph Program Interpreter orchestrate every other component using tools as Action. It can also interact with the user during the execution of a program."})})]})})}),"\n",(0,i.jsx)(n.h2,{id:"what-is-hybridagi",children:"What is HybridAGI?"}),"\n",(0,i.jsx)(n.p,{children:"HybridAGI is an AgentOS framework designed for creating explainable and deterministic agent systems suitable for real-world applications."}),"\n",(0,i.jsxs)(n.p,{children:["It is the first programmable LLM-based agent that enables you to define its behavior using a ",(0,i.jsx)(n.strong,{children:"graph-based prompt programming"})," approach. Unlike other frameworks that view agents as advanced chatbots, we have adopted a methodology that is rooted in computer science, cognitive sciences, and symbolic AI."]}),"\n",(0,i.jsx)(n.h2,{id:"why-hybridagi",children:"Why HybridAGI?"}),"\n",(0,i.jsx)(n.p,{children:"We are not satisfied with the current trajectory of Agent-based systems that lack control and efficiency. Today's approach is to build reactive/MKRL agents that do what they want without any human control, resulting in infinite loops of nonsense because they tend to stay in their data distribution. Multi-agent systems try to solve that, but instead result in more nonsense and prohibitive costs due to the agents chitchatting with each other. Moreover, today's agents require fine-tuning to enhance/correct the behavior of the agent system. In contrast, with HybridAGI, the only thing you need to do is to modify the behavior graph."}),"\n",(0,i.jsx)(n.p,{children:"We advocate that fine-tuning should be done only as a last resort when in-context learning fails to give you the expected result. Any person who has already fine-tuned a LLM knows that gathering data is hard, but having the right variability in your dataset is even harder, thus prohibiting most companies from leveraging this technology if they don't have many AI scientists. By rooting cognitive sciences into computer science concepts, without obfuscating them, we empower programmers to build the Agent system of their dreams by controlling the sequence of action and decision."}),"\n",(0,i.jsx)(n.p,{children:"Our goal is to build an agent system that solves real-world problems by using an intermediary language interpretable by both humans and machines. If we want to keep humans in the loop in the coming years, we need to design Agent systems for that purpose."}),"\n",(0,i.jsx)(n.h3,{id:"deterministic-approach--infinite-number-of-tools",children:"Deterministic approach & infinite number of tools"}),"\n",(0,i.jsxs)(n.p,{children:["To us, an agent system is an intelligent/cognitive software that can process natural language and execute the tasks it has been programmed to perform. Just like with traditional software, the developer specifies the behavior of the application, and the system is not truly autonomous unless it has been programmed to be so. Programming the system not only helps the agent to carry out its tasks but also allows for the ",(0,i.jsx)(n.em,{children:"formalization of the developer's intent"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Our approach reduces the need for fine-tuning, as we can control the behavior of the system in a deterministic way from end to end. You will ",(0,i.jsx)(n.strong,{children:"not"})," find any React/MKRL agents in our implementation, unlike in traditional agent frameworks such as LangChain/LangGraph or Llama-Index. Furthermore, our approach enables the system to handle an unlimited number of tools, as we do not allow the system to decide which one to use at each step."]}),"\n",(0,i.jsx)(n.h3,{id:"automatic-optimization--hybrid-vectorgraph-long-term-memory",children:"Automatic optimization & hybrid vector/graph long-term memory"}),"\n",(0,i.jsxs)(n.p,{children:["HybridAGI is also a machine learning framework that emphasizes the importance of evaluating and optimizing LLM-based systems thanks to the integration of DSPy. You can automatically optimize/fine-tune the prompts sent to the LLM based on the dataset/examples provided to the system*. For more information, please refer to our ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"dspy",children:"DSPy dedicated section"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"We also emphasize the importance of centralizing knowledge into a hybrid vector/graph database powered by FalkorDB. This low-latency graph database allows the system to efficiently memorize and scale knowledge."}),"\n",(0,i.jsxs)(n.p,{children:["*Note: Our approach only optimizes/fine-tunes the atomic steps of the system, the sequence of actions and decisions is ",(0,i.jsx)(n.em,{children:"always"})," controlled by the graph programs."]}),"\n",(0,i.jsx)(n.h2,{id:"graph-based-prompt-programming",children:"Graph-based prompt programming"}),"\n",(0,i.jsxs)(n.p,{children:["Graph-based Prompt Programming is one of the key features of HybridAGI, in its essence it is a programming language for LLM Agents that allow probabilistic conditional loops and multi-output decisions. This language is based on ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cypher_(query_language)",children:"Cypher"})})," a well known language for graph databases. Like any programming language, it always start with a main program:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title='main.cypher'",children:'// Nodes declaration\nCREATE\n(start:Control {name:"Start"}),\n(end:Control {name:"End"}),\n(answer:Action {\n    name:"Answer the objective\'s question",\n    tool:"Speak",\n    prompt:"Answer the objective\'s question"\n}),\n// Structure declaration\n(start)-[:NEXT]->(answer),\n(answer)-[:NEXT]->(end)\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can also describe conditional loops or multi-output choices using decision nodes like in this program:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title='clarify_objective.cypher.cypher'",children:'// @desc: Clarify the objective if needed\nCREATE\n// Nodes declaration\n(start:Control {name:"Start"}),\n(end:Control {name:"End"}),\n(is_anything_unclear:Decision {\n    name:"Check if the objective is unclear", \n    question:"Is the objective still unclear?"\n}),\n(ask_question:Action {\n    name:"Ask question to clarify the objective",\n    tool:"AskUser",\n    prompt:"Pick one question to clarify the Objective"\n}),\n(refine_objective:Action {\n    name:"Clarify the given objective",\n    tool:"UpdateObjective", \n    prompt:"The refined Objective"\n}),\n// Structure declaration\n(start)-[:NEXT]->(is_anything_unclear),\n(ask_question)-[:NEXT]->(refine_objective),\n(refine_objective)-[:NEXT]->(is_anything_unclear),\n// The outgoing edges of decision nodes give\n// the possible answers to the system\n(is_anything_unclear)-[:YES]->(ask_question),\n// Decisions can have multiple arbitrary outcomes\n(is_anything_unclear)-[:MAYBE]->(ask_question),\n(is_anything_unclear)-[:NO]->(end)\n'})}),"\n",(0,i.jsx)(n.p,{children:"And you can obviously also call other programs, here is an updated version of our main program:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title='main.cypher'",children:'// Nodes declaration\nCREATE\n(start:Control {name:"Start"}),\n(end:Control {name:"End"}),\n// This node will call the `clarify_objective`\n(clarify_objective:Program {\n    name:"Clarify the objective if needed",\n    program:"clarify_objective"\n}),\n(answer:Action {\n    name:"Answer the objective\'s question",\n    tool:"Speak",\n    prompt:"Answer the objective\'s question"\n}),\n// Structure declaration\n(start)-[:NEXT]->(clarify_objective),\n(clarify_objective)-[:NEXT]->(answer),\n(answer)-[:NEXT]->(end)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Here is the trace of the above example, note that the system can simulate user inputs to optimize/finetune itself without human intervention."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:' --- Step 0 ---\nCall Program: main\nProgram Purpose: What\'s the meaning of life?\n --- Step 1 ---\nCall Program: clarify_objective\nProgram Purpose: Clarify the objective if needed\n --- Step 2 ---\nDecision Purpose: Check if the objective is unclear\nDecision Question: Is the objective still unclear?\nDecision: MAYBE\n --- Step 3 ---\nAction Purpose: Ask question to clarify the objective\nAction: {\n  "question": "Do you mean to ask about the philosophical or personal significance of life in general, or are you asking for guidance on finding personal fulfillment and satisfaction?",\n  "answer": "I believe in seeking personal growth and happiness. For me, the meaning of life could be finding joy in relationships, pursuing passions, and making a positive impact on the world. However, this question is deeply philosophical and can have many interpretations."\n}\n --- Step 4 ---\nAction Purpose: Clarify the given objective\nAction: {\n  "new_objective": "Which aspects of personal growth, relationships, passions, and making a positive impact on the world should I focus on to find meaning and satisfaction in my life?",\n  "observation": "Successfully updated"\n}\n --- Step 5 ---\nDecision Purpose: Check if the objective is unclear\nDecision Question: Is the objective still unclear?\nDecision: NO\n --- Step 6 ---\nEnd Program: clarify_objective\n --- Step 7 ---\nAction Purpose: Answer the objective\'s question\nAction: {\n  "message": "To find meaning and satisfaction in your life, consider focusing on various aspects of personal growth, relationships, passions, and making a positive impact on the world. Here are some suggestions for each area:\\n\\n1. Personal Growth: Continuously learn new skills, read books, travel, practice mindfulness, set goals, and engage in activities that challenge you and help you grow as an individual.\\n2. Relationships: Nurture your existing relationships by actively listening, expressing gratitude, and showing empathy. Build new connections through networking, joining clubs or groups, and volunteering.\\n3. Passions: Pursue hobbies or activities that bring you joy and fulfillment. Dedicate time to these passions regularly, and consider sharing them with others to expand your network and learn from their experiences.\\n4. Making a Positive Impact on the World: Identify causes or issues that resonate with you and find ways to contribute to them. Volunteer, donate, spread awareness, or engage in activism. Remember that even small actions can make a significant difference.\\n\\nFeel free to ask any questions or clarifications regarding this response."\n}\n --- Step 8 ---\nEnd Program: main\n'})}),"\n",(0,i.jsx)(n.p,{children:"HybridAGI output the chat history, along with the final answer and trace allowing DSPy to optimize every aspect of a conversational agent: the result, the intermediary steps but also the interaction with the user."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "role": "User",\n    "message": "What\'s the meaning of life?"\n  },\n  {\n    "role": "AI",\n    "message": "Do you mean to ask about the philosophical or personal significance of life in general, or are you asking for guidance on finding personal fulfillment and satisfaction?"\n  },\n  {\n    "role": "User",\n    "message": "I believe in seeking personal growth and happiness. For me, the meaning of life could be finding joy in relationships, pursuing passions, and making a positive impact on the world. However, this question is deeply philosophical and can have many interpretations."\n  },\n  {\n    "role": "AI",\n    "message": "To find meaning and satisfaction in your life, consider focusing on various aspects of personal growth, relationships, passions, and making a positive impact on the world. Here are some suggestions for each area:\\n\\n1. Personal Growth: Continuously learn new skills, read books, travel, practice mindfulness, set goals, and engage in activities that challenge you and help you grow as an individual.\\n2. Relationships: Nurture your existing relationships by actively listening, expressing gratitude, and showing empathy. Build new connections through networking, joining clubs or groups, and volunteering.\\n3. Passions: Pursue hobbies or activities that bring you joy and fulfillment. Dedicate time to these passions regularly, and consider sharing them with others to expand your network and learn from their experiences.\\n4. Making a Positive Impact on the World: Identify causes or issues that resonate with you and find ways to contribute to them. Volunteer, donate, spread awareness, or engage in activism. Remember that even small actions can make a significant difference.\\n\\nFeel free to ask any questions or clarifications regarding this response."\n  }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Learn more about Graph-based Prompt Programming, by following ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/documentation/docs/tutorials/basics/graph-prompt-programming",children:"this guide"})})]}),"\n",(0,i.jsxs)(n.p,{children:["You can also explore this Python notebook and ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.com/SynaLinks/HybridAGI/blob/main/notebooks/first_steps.ipynb",children:"make your first steps"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"memory-centric-system",children:"Memory-centric system"}),"\n",(0,i.jsx)(n.p,{children:"The memory is another aspect where HybridAGI is unique. First we centralize knowledge, documents, programs and traces into an hybrid vector/graph database. But we also provide for the system tools to interact with it, thanks to the behavior graph we can use an unlimited number of tools making possible to combine every memory into a unique Agent. Unlike other frameworks that view agents as chatbots we see them as software, as such the memory implemented are very different from others frameworks."}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("p",{align:"center",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"HybridAGI fact memory",src:t(5782).A+""}),"\n",(0,i.jsx)("figcaption",{align:"center",children:(0,i.jsx)("b",{children:"Fig.2 - HybridAGI's memories. Each memory system can be used in combinaiton with each other providing the best of vectors and graph retrieval."})})]})})}),"\n",(0,i.jsxs)(n.p,{children:["You can find more information about our memory system in the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/documentation/docs/tutorials/basics/knowledge-graph",children:"dedicated section"})})]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2706:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/architecture-f333a46c0f0d50f7e743d2be7bfc218d.svg"},5782:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/memories-1e75e4cf2923f80801572ed5bee7788e.svg"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);