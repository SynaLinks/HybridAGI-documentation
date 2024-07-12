"use strict";(self.webpackChunksynalinks_website=self.webpackChunksynalinks_website||[]).push([[127],{4718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const r={sidebar_position:2},o="Using DSPy with HybridAGI",a={id:"dspy",title:"Using DSPy with HybridAGI",description:"Programming not Prompting",source:"@site/docs/dspy.md",sourceDirName:".",slug:"/dspy",permalink:"/documentation/docs/dspy",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install HybridAGI",permalink:"/documentation/docs/install"},next:{title:"Cypher Cheatsheet",permalink:"/documentation/docs/cypher"}},l={},d=[{value:"Programming not Prompting",id:"programming-not-prompting",level:2},{value:"DSPy language models",id:"dspy-language-models",level:2},{value:"Local LMs",id:"local-lms",level:3},{value:"Remote LMs",id:"remote-lms",level:3},{value:"Examples and datasets",id:"examples-and-datasets",level:2},{value:"Designing your metrics",id:"designing-your-metrics",level:2},{value:"DSPy optimizers",id:"dspy-optimizers",level:2},{value:"DSPy assertions and suggestions",id:"dspy-assertions-and-suggestions",level:2},{value:"Loading &amp; saving your DSPy model",id:"loading--saving-your-dspy-model",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"using-dspy-with-hybridagi",children:"Using DSPy with HybridAGI"}),"\n",(0,s.jsx)(n.h2,{id:"programming-not-prompting",children:"Programming not Prompting"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://dspy-docs.vercel.app/",children:"DSPy"})})," is a machine learning framework for building LLM applications with a systematic approach by abstracting prompt engineering techniques and offering ways to evaluate your pipelines. Often when tackling a difficult task you will have to provide examples to your LLM, beside being time-consuming, handcrafting these examples can lead to the brittleness of your application specially if it involve numerous calls to LMs (like HybridAGI). When you change the pipeline, you will have to re-design the examples. DSPy change that by emphazing small multi-input/multi-output prompts with automatic building of examples allowing a better control and faster iteration."]}),"\n",(0,s.jsx)(n.h2,{id:"dspy-language-models",children:"DSPy language models"}),"\n",(0,s.jsx)(n.h3,{id:"local-lms",children:"Local LMs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dspy.Ollama"}),": A easy to setup server. Perfect for a quick test of the system and starting to develop your project."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dspy.HFClientTGI"}),": A client to connect to the Text Generation Inference server from HuggingFace."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dspy.dspy.HFClientVLLM"}),": A client to connect to the VLLM server."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dspy.HFModel"}),": The way to use the optimizer for finetuning, by loading your model in ",(0,s.jsx)(n.code,{children:"huggingface"})," lib."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For an exhaustive list of the local LMs provided by DSPy, check ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://dspy-docs.vercel.app/api/category/local-language-model-clients",children:"here"})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These language models are usefull when testing and developping your application."}),"\n",(0,s.jsxs)(n.p,{children:["Note: ",(0,s.jsx)(n.em,{children:"Don't underestimate open-source models"}),", with DSPy optimizers they can compete with closed source models in some domains. Unless you are tackling a state-of-the-art problem, we advise you to ",(0,s.jsx)(n.strong,{children:"not use closed-source LMs"})," for testing and development. Due to DSPy optimization scheme involving numerous calls to LMs ",(0,s.jsx)(n.em,{children:"the price for optimizing/finetuning your model can rise unexpectedly"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"remote-lms",children:"Remote LMs"}),"\n",(0,s.jsx)(n.p,{children:"Here we present some of the best remote LMs provided by DSPy:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dspy.Mistral"}),": They provide state-of-the-art models and the best open-source models for in-context learning, thus taking advantage of our architecture. You may consider them for production settings to run at lower costs. They also have a very good model for coding."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dspy.Anthropic"}),": They provide state-of-the-art models in coding/chat and have recently made a lot of work on mechanistic interpretabily an emerging field of research that intend to understand better LLMs."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dspy.OpenAI"}),": They provide state-of-the-art models, currently best LLMs of the market."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dspy.GROQ"}),": Fast inference for various open-source models."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For an exhaustive list of the 20 LMs provided by DSPy, including LMs for AWS and Azure, check ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://dspy-docs.vercel.app/api/category/language-model-api-clients",children:"here"})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples-and-datasets",children:"Examples and datasets"}),"\n",(0,s.jsx)(n.p,{children:"Creating a small dataset for testing purposes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# the .with_input() serve as specifying that the objective field is the input to use in the intepreter forward pass\ndataset = [\n    Example(objective="What is the capital of France?").with_input("objective"),\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or import if from an external source, first import and initialize a DataLoader Object"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import dspy\nfrom dspy.datasets import DataLoader\n\ndl = DataLoader()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Loading a dataset from HuggingFace:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'code_alpaca = dl.from_huggingface(\n    "HuggingFaceH4/CodeAlpaca_20K",\n    split = ["train", "test"],\n)\n\nprint(f"Splits in dataset: {code_alpaca.keys()}")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Loading a dataset from CSV:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'dolly_100_dataset = dl.from_csv("dolly_subset_100_rows.csv")\n\ndolly_100_dataset = dl.from_csv(\n    "dolly_subset_100_rows.csv",\n    fields=("instruction", "context", "response"),\n    input_keys=("instruction", "context")\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Splitting a list of dspy.Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"splits = dl.train_test_split(dataset, train_size=0.8) # `dataset` is a List of dspy.Example\ntrain_dataset = splits['train']\ntest_dataset = splits['test']\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sampling from a list of dspy.Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"sampled_example = dl.sample(dataset, n=5) # `dataset` is a List of dspy.Example\n"})}),"\n",(0,s.jsx)(n.h2,{id:"designing-your-metrics",children:"Designing your metrics"}),"\n",(0,s.jsx)(n.p,{children:"Similar to the design of a loss function in a classic Deep Learning framework DSPy allow developers to define a metric function that will be used by the system to select the best examples to optimize/finetune your pipelines."}),"\n",(0,s.jsx)(n.p,{children:"HybridAGI output 4 distinct elements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"final_answer"}),", which contains the final answer of the program"]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"program_trace"}),", with contains the intermediate steps of the executed program"]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"chat_history"}),", which contains the chat history of the executed program"]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"finish_reason"}),', returns either "max iters" or "finish"']}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Which means that the prediction returned by the graph interpreter will gives you these 4 elements that you can include in your metrics to optimize every aspect of a conversational Agent."}),"\n",(0,s.jsx)(n.p,{children:"For example, if you use your Agent as a RAG, you might want to check if the final answer was actually based on your retrieval pipelines and not made up by the LMs."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'\nclass CheckAnswerPresentSignature(dspy.Signature):\n    """Check if the answer is present in the provided trace"""\n    context = dspy.InputField(desc="The context for the prediction")\n    question = dspy.InputField(desc="Question to be answered")\n    answer = dspy.InputField(desc="Answer for the question")\n    correct = dspy.OutputField(\n        desc="Is the answer factually correct based on the trace?",\n        prefix="Correct[Yes/No]:",\n    )\n\ndef check_answer_present(example, prediction):\n    # This line means that we discard the example if the agent reached the max iterations\n    # Meaning it was probably stuck in a loop\n    if prediction.finish_reason == "max iters":\n        return False\n    # Check if the answer is actually based on the context\n    judge = dspy.ChainOfThought(CheckAnswerPresentSignature)\n    pred = judge(\n        context=prediction.program_trace,\n        question=example.objective,\n        answer=prediction.final_answer,\n    )\n    return pred.correct.lower().strip().strip(".")=="yes"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or if you are more focus on the interaction with your agent and the user, maybe you want to evaluate its helpfulness."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class CheckHelpfullnessSignature(dspy.Signature):\n    """Check if the interaction is helpful"""\n    context = dspy.InputField(desc="The context for the prediction")\n    objective = dspy.InputField(desc="The objective")\n    chat_history = dspy.InputField(desc="The chat history")\n    helpful = dspy.OutputField(\n        desc="Is the interaction helpful for the user?",\n        prefix="Helpful[Yes/No:]",\n    )\n\ndef check_helpfulness(example, prediction, teacher_lm = Optional[dspy.LM]):\n    # This line means that we discard the example if the agent reached the max iterations\n    # Meaning it was probably stuck in a loop\n    if prediction.finish_reason == "max iters":\n        return False\n    # Check if the interaction is actually helpful\n    judge = dspy.ChainOfThought(CheckHelpfulnessSignature)\n    pred = judge(\n        context=prediction.program_trace,\n        objective=example.objective,\n        chat_history=prediction.chat_history,\n    )\n    return pred.helpful.lower().strip().strip(".")=="yes"\n'})}),"\n",(0,s.jsx)(n.p,{children:"These metrics are only examples, we encourage you to customize your metric depending on the task you want to tackle. If you already have a dataset with the final answer or anything that can help you having better metric, we encourage you to use it."}),"\n",(0,s.jsx)(n.h2,{id:"dspy-optimizers",children:"DSPy optimizers"}),"\n",(0,s.jsx)(n.p,{children:"DSPy propose different optimizers that can optimize your prompt or finetune your models. Due to the nature of HybridAGI and the fact that our system is composed of a numerous prompts/modules we encourage users to only use a subset of DSPy optimizers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dspy.BoostrapFewShot"}),": This optimizer will build automatically the examples for each modules (this process is called bootstraping) based on the input you give to the system, it stop when the number of examples specified is reached. If an assertion/suggestion error is raised during the execution of the optimizer or the metric returns ",(0,s.jsx)(n.code,{children:"0.0"})," of ",(0,s.jsx)(n.code,{children:"False"})," the example will be discarded."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dspy.BootstrapFewShotWithRandomSearch"}),": This optimizer will sample randomly bootstraped examples to find the best combinaison with respect to the provided metric. One of the best optimizers."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dspy.BoostrapFinetune"}),": This optimizer will finetune your model by tuning low rank matrices for each modules. This optimizer is usefull when you want to distillate LMs into smaller ones."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["More information can be find in DSPy documentation ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://dspy-docs.vercel.app/api/category/optimizers",children:"here"})})]}),"\n",(0,s.jsx)(n.p,{children:"Note: Keep in mind that you can use multiple optimizers one after another to optimize further your pipelines."}),"\n",(0,s.jsx)(n.p,{children:"Here is an example to known how to use them in HybridAGI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Optimizing underlying prompts...\n\nconfig = dict(max_bootstrapped_demos=4, max_labeled_demos=0)\n\noptimizer = BootstrapFewShot(\n    teacher_settings=dict({\'lm\': teacher_llm}),\n    metric = program_success,\n    **config,\n)\n\ninterpreter = GraphProgramInterpreter(\n    program_memory = program_memory,\n    tools = tools,\n)\n\ncompiled_interpreter = optimizer.compile(\n    interpreter,\n    trainset=dataset,\n    valset=testset,\n)\n\nevaluate = dspy.evaluate.Evaluate(\n    devset = testset, \n    metric = program_success,\n    num_threads = 1,\n    display_progress = True,\n    display_table = 0,\n)\n\n# Evaluate baseline model\ntry:\n    baseline_score = evaluate(interpreter)\nexcept Exception:\n    baseline_score = 0.0\n# Evaluate optimized model\ntry:\n    eval_score = evaluate(compiled_interpreter)\nexcept Exception:\n    eval_score = 0.0\n\nprint(f"Baseline: {baseline_score}")\nprint(f"Score: {eval_score}")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"dspy-assertions-and-suggestions",children:"DSPy assertions and suggestions"}),"\n",(0,s.jsx)(n.p,{children:"When optimizing HybridAGI with DSPy you will sometimes see an Assertion/Suggestion error raising, do not worry this is perfectly normal it means that the LMs didn't follow the instructions correctly and the example will be discarded."}),"\n",(0,s.jsx)(n.p,{children:"In HybridAGI, DSPy assertions are only used when making a decision ensuring that the model answer the correct label. In the near future we will use a constrain grammar to ensure that the system choose one of the possible outcome combined with DSPy optimization to ensure a correct response."}),"\n",(0,s.jsx)(n.h2,{id:"loading--saving-your-dspy-model",children:"Loading & saving your DSPy model"}),"\n",(0,s.jsx)(n.p,{children:"To load your model into from the json file containing your boostraped examples, use this code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'interpreter = GraphProgramInterpreter(\n    program_memory = program_memory,\n    tools = tools,\n)\n\n# Load your model if already existing\nif os.path.exists("my_model.json"):\n    interpreter.load("my_model.json")\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you want to save it for further use, use this code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'compiled_interpreter.save("my_compiled_model.json")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or make something more intelligent and save it only if it perform better:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'if eval_score > baseline_score:\n    compiled_interpreter.save("my_model.json")\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);