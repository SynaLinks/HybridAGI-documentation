"use strict";(self.webpackChunksynalinks_website=self.webpackChunksynalinks_website||[]).push([[80],{8141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const r={sidebar_position:2},o="Representing Knowledge",a={id:"tutorials/basics/knowledge-graph",title:"Representing Knowledge",description:"Explore the realm of knowledge representation.",source:"@site/docs/tutorials/basics/knowledge-graph.md",sourceDirName:"tutorials/basics",slug:"/tutorials/basics/knowledge-graph",permalink:"/documentation/docs/tutorials/basics/knowledge-graph",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Neuro-Symbolic AI Systems",permalink:"/documentation/docs/tutorials/basics/neuro-symbolic"},next:{title:"Graph Prompt Programming",permalink:"/documentation/docs/tutorials/basics/graph-prompt-programming"}},l={},d=[{value:"The Traditional Way to Represent Knowledge",id:"the-traditional-way-to-represent-knowledge",level:2},{value:"Representing Knowledge with Vectors",id:"representing-knowledge-with-vectors",level:2},{value:"Combining Vector and Graph Representations",id:"combining-vector-and-graph-representations",level:2}];function c(e){const n={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"representing-knowledge",children:"Representing Knowledge"}),"\n",(0,s.jsx)(n.p,{children:"Explore the realm of knowledge representation."}),"\n",(0,s.jsx)(n.h2,{id:"the-traditional-way-to-represent-knowledge",children:"The Traditional Way to Represent Knowledge"}),"\n",(0,s.jsx)(n.p,{children:"Knowledge representation is pivotal in any AI application. Traditionally, knowledge was encoded into graphs using ontologies or property graph systems."}),"\n",(0,s.jsx)(n.p,{children:"Due to the challenges in modeling a knowledge domain and the labor-intensive process of creating graph data, only specific domains with strict taxonomies still employ graph-based knowledge systems. Examples include biology or domains with highly interconnected data, such as social media and financial applications."}),"\n",(0,s.jsx)(n.h2,{id:"representing-knowledge-with-vectors",children:"Representing Knowledge with Vectors"}),"\n",(0,s.jsx)(n.p,{children:"With the advent of deep learning, unstructured knowledge (texts, posts, books, etc.) has become accessible to AI systems. However, neural networks represent data in a completely different way, using vectors."}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("p",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"The embedding vectors represented in 3D",src:t(4250).A+"",width:"476",height:"440"}),"\n",(0,s.jsx)("figcaption",{align:"center",children:(0,s.jsx)("b",{children:"Fig.1 - Vectors of words represented in 3 dimensions, illustrating this concept; similar words are close together."})})]})})}),"\n",(0,s.jsx)(n.p,{children:"This novel approach to represent and work with unstructured knowledge has given rise to new applications such as vector databases and similarity-augmented generation."}),"\n",(0,s.jsx)(n.h2,{id:"combining-vector-and-graph-representations",children:"Combining Vector and Graph Representations"}),"\n",(0,s.jsx)(n.p,{children:"The fusion of these two types of representation is fundamental to our vision of the future and the neuro-symbolic approach. This hybrid representation allows for similarity-based data retrieval strategies combined with precise and efficient strategies provided by graphs."}),"\n",(0,s.jsx)(n.p,{children:"Our framework currently supports 4 types of knowledge store:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Filesystem:"})," Stores documents along with their folders, enabling the system to navigate its long-term memory using a shell. This hybrid approach allows the Agent to search for relevant chunks and read the entire file if needed, or even re-organise its memory."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Program Memory:"})," Stores the graph prompt programs and provides the dependency tree of HybridAGI's graph programs. The dependency tree allow the system to protect the main prompting mechanism and its dependencies from being modified by the Agent. Providing a safe enviroment for studying AGI with self-learning capabilities (application that program itself)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Trace Memory:"})," Stores the program traces and index each past action. Allowing the system to recall past actions between sessions."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Fact Memory:"})," Stores the knowledge triplets (also called predicates) with each entity being indexed allowing the system to search for factual knowledge. The memory allows for graph-based retrieval augmented generation (GraphRAG) combined with the determinism of our graph programs."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Each structure contains content indexed by the embedding vectors at their leaves, enabling the system to perform similarity-based searches like in a nowadays classic vector databases."}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("p",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"HybridAGI&#39;s long-term memory",src:t(5782).A+""}),"\n",(0,s.jsx)("figcaption",{align:"center",children:(0,s.jsx)("b",{children:"Fig.1 - HybridAGI's memories. Each memory system can be used in combinaiton with each other providing the best of vectors and graph retrieval."})})]})})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4250:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/embeddings-4af6227061072e9961581b730a423349.png"},5782:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/memories-1e75e4cf2923f80801572ed5bee7788e.svg"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);