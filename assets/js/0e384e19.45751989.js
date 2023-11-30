"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[671],{7876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(5893),a=n(1151);const r={id:"intro",sidebar_position:1,slug:"/"},s="Introduction",o={id:"intro",title:"Introduction",description:"Let's start with HybridAGI in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/SynaLinks/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Basic Concepts",permalink:"/SynaLinks/category/basic-concepts"}},l={},c=[{value:"What is HybridAGI?",id:"what-is-hybridagi",level:3},{value:"What you need to start",id:"what-you-need-to-start",level:3},{value:"Try the demo using Docker",id:"try-the-demo-using-docker",level:2},{value:"Set Up Your OpenAI API Key or Text Generation Endpoint",id:"set-up-your-openai-api-key-or-text-generation-endpoint",level:3},{value:"Start the App",id:"start-the-app",level:3},{value:"Access the App",id:"access-the-app",level:3},{value:"Inspect the Database",id:"inspect-the-database",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Let's start with HybridAGI in less than 5 minutes."}),"\n",(0,i.jsx)(t.h3,{id:"what-is-hybridagi",children:"What is HybridAGI?"}),"\n",(0,i.jsx)(t.p,{children:"HybridAGI is the first Programmable LLM-based Autonomous Agent that lets you program its behavior using a graph-based prompt programming approach. This state-of-the-art feature allows the AGI to efficiently use any tool while controlling the long-term behavior of the agent."}),"\n",(0,i.jsx)(t.p,{children:"HybridAGI represents the future of hybrid architectures that combine the strengths of both machine learning models and explicit programming. This approach aims to bridge the gap between the impressive language generation abilities of Large Language Models (LLM) and the need for logical reasoning and decision-making capabilities. By integrating advanced machine learning models with explicit programming, HybridAGI systems excel in language generation, logical reasoning, and decision-making tasks."}),"\n",(0,i.jsx)(t.h3,{id:"what-you-need-to-start",children:"What you need to start"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"An OpenAI API key or a working text generation endpoint"}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://git-scm.com/",children:"Git"})," and ",(0,i.jsx)(t.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"try-the-demo-using-docker",children:"Try the demo using Docker"}),"\n",(0,i.jsx)(t.p,{children:"First, clone this repository to your local machine using the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/SynaLinks/HybridAGI-app.git\n"})}),"\n",(0,i.jsx)(t.h3,{id:"set-up-your-openai-api-key-or-text-generation-endpoint",children:"Set Up Your OpenAI API Key or Text Generation Endpoint"}),"\n",(0,i.jsx)(t.p,{children:"Before running the app, you need to set up your OpenAI API key."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Rename the ",(0,i.jsx)(t.code,{children:".env.template"})," file to ",(0,i.jsx)(t.code,{children:".env."})]}),"\n",(0,i.jsxs)(t.li,{children:["Open the ",(0,i.jsx)(t.code,{children:".env"})," file in a text editor."]}),"\n",(0,i.jsxs)(t.li,{children:["Replace ",(0,i.jsx)(t.code,{children:"my-openai-api-key"})," with your actual OpenAI API key."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If you want to use the private mode instead, set ",(0,i.jsx)(t.code,{children:"PRIVATE_MODE"})," to ",(0,i.jsx)(t.code,{children:"True"})," and setup your end-point url with ",(0,i.jsx)(t.code,{children:"LOCAL_MODEL_URL"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"start-the-app",children:"Start the App"}),"\n",(0,i.jsx)(t.p,{children:"Navigate to the cloned repository:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"cd HybridAGI-app\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now, you can start the app using Docker Compose:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"docker-compose up\n"})}),"\n",(0,i.jsx)(t.p,{children:"The app will build and run within a Docker container, and you'll see the Streamlit app URL in your terminal."}),"\n",(0,i.jsx)(t.h3,{id:"access-the-app",children:"Access the App"}),"\n",(0,i.jsxs)(t.p,{children:["Open a web browser and enter the Streamlit app URL. By default, it should be ",(0,i.jsx)(t.a,{href:"https://localhost:8501",children:"https://localhost:8501"}),". You'll be able to interact with HybridAGI via this web interface."]}),"\n",(0,i.jsx)(t.p,{children:"This demo show you an experimental program with self-programming capabilities."}),"\n",(0,i.jsx)(t.h3,{id:"inspect-the-database",children:"Inspect the Database"}),"\n",(0,i.jsxs)(t.p,{children:["Open a new tab at ",(0,i.jsx)(t.a,{href:"https://localhost:8001",children:"https://localhost:8001"})," and connect to an existing database with the hostname ",(0,i.jsx)(t.code,{children:"falkordb"})," and port ",(0,i.jsx)(t.code,{children:"6379"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(7294);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);