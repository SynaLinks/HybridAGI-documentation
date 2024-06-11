"use strict";(self.webpackChunksynalinks_website=self.webpackChunksynalinks_website||[]).push([[252],{7448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const r={},i="Custom Tools",a={id:"api/tools/custom-tools",title:"Custom Tools",description:"In HybridAGI, each tool is a DSPy module that is optimized in the background when the interpreter call it during optimization.",source:"@site/docs/api/tools/custom-tools.md",sourceDirName:"api/tools",slug:"/api/tools/custom-tools",permalink:"/documentation/docs/api/tools/custom-tools",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Available Tools",permalink:"/documentation/docs/api/tools/available-tools"}},p={},c=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"custom-tools",children:"Custom Tools"}),"\n",(0,o.jsxs)(n.p,{children:["In HybridAGI, each tool is a DSPy module that is optimized in the background when the interpreter call it during optimization.\nTo add a new tool to HybridAGI, you have to create an object that inherit from ",(0,o.jsx)(n.code,{children:"BaseTool"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import abc\nimport dspy\nfrom typing import Optional\n\nclass BaseTool(dspy.Module):\n\n    def __init__(self, name: str):\n        self.name = name\n\n    @abc.abstractmethod\n    def forward(\n            self,\n            trace: str,\n            objective: str,\n            purpose: str,\n            prompt: str,\n            disable_inference: bool = False,\n            llm: Optional[dspy.LM] = None\n        ) -> dspy.Prediction:\n        pass\n"})}),"\n",(0,o.jsx)(n.p,{children:"To implement your own tool, here is a toy example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'\nimport dspy\nfrom hybridagi.tools.base import BaseTool\nfrom hybridagi.output_parsers.prediction import PredictionOutputParser\n\ndef greet(name):\n    """\n    This function greets the person passed in as a parameter\n    """\n    message = f"Hello, {name}. Nice to meet you!"\n    print(message)\n    return message\n\nclass GreetSignature(dspy.Signature):\n    """You will be given an objective, purpose and context\n    Using the prompt to help you, you will infer the correct name"""\n    objective = dspy.InputField(desc = "The long-term objective (what you are doing)")\n    context = dspy.InputField(desc = "The previous actions (what you have done)")\n    purpose = dspy.InputField(desc = "The purpose of the action (what you have to do now)")\n    prompt = dspy.InputField(desc = "The action specific instructions (How to do it)")\n    name = dspy.OutputField(desc = "The name of the person to greet")\n\nclass GreetTool(BaseTool):\n\n    def __init__(self):\n        super().__init__(name = "Greet")\n        self.predict = dspy.Predict(GreetSignature)\n        self.prediction_parser = PredictionOutputParser()\n    \n    def forward(\n            self,\n            context: str,\n            objective: str,\n            purpose: str,\n            prompt: str,\n            disable_inference: bool = False,\n        ) -> dspy.Prediction:\n        """Method to perform DSPy forward prediction"""\n        if not disable_inference:\n            # Perform a DSPy prediction\n            pred = self.predict(\n                objective = objective,\n                context = context,\n                purpose = purpose,\n                prompt = prompt,\n            )\n            # Some parsing to clean up the prediction\n            pred.name = self.prediction_parser.parse(pred.name, prefix = "Name:", stop = ["\\n"])\n            # Then we can call our python function\n            message = self.greet(pred.name)\n            # The tool always returns a dspy.Prediction with the tools\'s input and output to give to the system the \n            # possibility to enhance its reasoning by calling a tool multiple times.\n            return dspy.Prediction(\n                name = pred.answer\n                message = message\n            )\n        else:\n            # When disabling inference, we use the prompt given in the graph program as input\n            message = self.greet(prompt)\n            return dspy.Prediction(\n                answer = prompt\n                message = message\n            )\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);