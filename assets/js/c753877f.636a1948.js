"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[811],{6694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(5893),r=t(1151);const s={sidebar_position:5},o="Representing Knowledge",a={id:"basics/knowledge-graph",title:"Representing Knowledge",description:"Learn about knowledge representation",source:"@site/docs/basics/knowledge-graph.md",sourceDirName:"basics",slug:"/basics/knowledge-graph",permalink:"/basics/knowledge-graph",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Actions as Tool",permalink:"/basics/actions-as-tool"},next:{title:"Advanced Concepts",permalink:"/category/advanced-concepts"}},d={},l=[{value:"The traditionnal way to represent knowledge",id:"the-traditionnal-way-to-represent-knowledge",level:3},{value:"Representing knowledge with vectors",id:"representing-knowledge-with-vectors",level:3},{value:"Combining Vector and Graph representations",id:"combining-vector-and-graph-representations",level:3}];function c(e){const n={h1:"h1",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"representing-knowledge",children:"Representing Knowledge"}),"\n",(0,i.jsx)(n.p,{children:"Learn about knowledge representation"}),"\n",(0,i.jsx)(n.h3,{id:"the-traditionnal-way-to-represent-knowledge",children:"The traditionnal way to represent knowledge"}),"\n",(0,i.jsx)(n.p,{children:"Representing knowledge is key to any AI application, traditionally knowledge was encoded into graphs using ontologies or property graph systems."}),"\n",(0,i.jsx)(n.p,{children:"Due to the difficulty to model a knowledge domain and the burden in creating the graph data only some specific domains with strict taxonomy still use graph based knowledge systems, like biology, or domains with highly connected data, like social medias and finantial applications."}),"\n",(0,i.jsx)(n.h3,{id:"representing-knowledge-with-vectors",children:"Representing knowledge with vectors"}),"\n",(0,i.jsx)(n.p,{children:"Recently with the rise of deep Learning, unstructured knowledge (texts, posts, books etc.) became available to AI systems. However neural networks have a completely different way to represent data, with the use of vectors."}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("p",{align:"center",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"The embedding vectors represented in 3D",src:t(2978).Z+"",width:"476",height:"440"}),"\n",(0,i.jsx)("figcaption",{align:"center",children:(0,i.jsx)("b",{children:"Fig.1 - Vector of words represented in 3 dimension illustrating this concept, similar words are close together"})})]})})}),"\n",(0,i.jsx)(n.p,{children:"This new way of representing and working with unstructured knowledge created new kind of applications like vector databases and similarity augmented generation."}),"\n",(0,i.jsx)(n.h3,{id:"combining-vector-and-graph-representations",children:"Combining Vector and Graph representations"}),"\n",(0,i.jsx)(n.p,{children:"Combining these two kind of representation is key to our vision of the future and neuro-symbolic approach. This hybrid representation allow for similarity based data retrevial strategies combined with precise and efficient strategies provided by the graph."}),"\n",(0,i.jsx)(n.p,{children:"Our framework support at that time two types of storage for knowledge:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The filesystem that store the documents along with their folders, allowing the system to navigate inside its long-term memory using a shell."}),"\n",(0,i.jsx)(n.li,{children:"The program memory that store the graph prompt programs and provide the dependency graph of HybridAGI's programs"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These two structures contains on their leaves the content that is beeing indexed by the embedding vectors, allowing the system to also perform similarity based search."}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("p",{align:"center",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"HybridAGI filesystem",src:t(3282).Z+"",width:"532",height:"518"}),"\n",(0,i.jsx)("figcaption",{align:"center",children:(0,i.jsx)("b",{children:"Fig.2 - HybridAGI long-term memory implementing a file system like structure of folders and files"})})]})})}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("p",{align:"center",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"HybridAGI program memory",src:t(4806).Z+"",width:"1156",height:"1074"}),"\n",(0,i.jsx)("figcaption",{align:"center",children:(0,i.jsx)("b",{children:"Fig.3 - HybridAGI program memory implementing the dependency graph of its prompt programs"})})]})})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2978:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/embeddings-4af6227061072e9961581b730a423349.png"},3282:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/filesystem-bb0103a7d456281392d31e75932c9135.png"},4806:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/program_memory-0ff5baf5583f72e517fe45f3f71beb6f.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);