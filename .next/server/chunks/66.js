exports.id=66,exports.ids=[66],exports.modules={4004:(e,t,a)=>{Promise.resolve().then(a.bind(a,6361))},1612:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2994,23)),Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23))},6361:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var s=a(326),i=a(434),r=a(7577);let n=[{href:"/",label:"Home"},{href:"/schedule",label:"Schedule"},{href:"/resources",label:"Resources"},{href:"/assignments",label:"Assignments"},{href:"/projects",label:"Projects"},{href:"/about",label:"About"}];function o(){let[e,t]=(0,r.useState)(!1);return(0,s.jsxs)("header",{className:"sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl",children:[(0,s.jsxs)("div",{className:"container mx-auto flex items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10",children:[s.jsx(i.default,{href:"/",className:"text-lg font-semibold text-white",children:"Python Automation Workshop"}),s.jsx("nav",{className:"hidden items-center gap-6 md:flex",children:n.map(e=>s.jsx(i.default,{href:e.href,className:"text-sm text-slate-300 transition hover:text-white",children:e.label},e.href))}),s.jsx("div",{className:"flex items-center gap-3 md:hidden",children:s.jsx("button",{type:"button",onClick:()=>t(!e),className:"inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-white transition hover:bg-slate-800",children:e?"✕":"☰"})})]}),e?s.jsx("div",{className:"border-t border-white/10 bg-slate-950/95 px-6 py-5 md:hidden",children:s.jsx("div",{className:"flex flex-col gap-3",children:n.map(e=>s.jsx(i.default,{href:e.href,className:"rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900",onClick:()=>t(!1),children:e.label},e.href))})}):null]})}},5889:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var s=a(326),i=a(7577),r=a(9622);let n=`import json

sample = '{"student": "Ayesha", "score": 88, "task": "automation project"}'
data = json.loads(sample)
print(f"Student: {data['student']}")
print(f"Task: {data['task']}
Score: {data['score']}")
`;function o(){let[e,t]=(0,i.useState)(n),[a,o]=(0,i.useState)("Ready to run Python code."),[l,d]=(0,i.useState)(!1),[c,m]=(0,i.useState)(!1),[p,u]=(0,i.useState)(null),h=async()=>{if(!l){o("Loading Python runtime...");return}m(!0),o("Running…");try{let t=[];window.pyodide.setStdout({batched:e=>t.push(e)}),window.pyodide.setStderr({batched:e=>t.push(e)}),await window.pyodide.runPythonAsync(e),o(t.join("")||"Code executed successfully.")}catch(e){o(e?.message??"An error occurred while running code.")}finally{m(!1)}},f=async()=>{await navigator.clipboard.writeText(e),u("Code copied!"),window.setTimeout(()=>u(null),2e3)},g=(0,i.useMemo)(()=>Math.min(85,20+e.length/3),[e]);return(0,s.jsxs)("div",{className:"card-glass p-6",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",children:[(0,s.jsxs)("div",{children:[s.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-cyan-300",children:"Python Playground"}),s.jsx("h2",{className:"mt-2 text-3xl font-semibold text-white",children:"Run examples instantly"}),s.jsx("p",{className:"mt-3 max-w-2xl text-sm leading-6 text-slate-300",children:"Edit the code, press run, and inspect output immediately. Great for testing automation ideas without installing anything."})]}),(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[s.jsx("button",{onClick:h,className:"btn-primary",disabled:c,children:c?"Running…":"Run Code"}),s.jsx("button",{onClick:f,className:"btn-secondary",children:"Copy"})]})]}),(0,s.jsxs)("div",{className:"mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]",children:[s.jsx("textarea",{value:e,onChange:e=>t(e.target.value),className:"min-h-[340px] w-full rounded-[1.5rem] border border-slate-700/80 bg-slate-950/95 px-5 py-4 text-sm leading-6 text-slate-100 outline-none transition focus:border-cyan-400/70"}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"rounded-[1.5rem] border border-slate-700/80 bg-slate-900/90 p-5",children:[s.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.3em] text-slate-400",children:"Output console"}),s.jsx("pre",{className:"mt-4 max-h-[330px] overflow-y-auto whitespace-pre-wrap break-words text-sm leading-6 text-slate-100",children:a})]}),(0,s.jsxs)("div",{className:"rounded-[1.5rem] border border-slate-700/80 bg-slate-950/90 p-5",children:[s.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Progress"}),s.jsx("div",{className:"mt-4 h-3 overflow-hidden rounded-full bg-slate-800",children:s.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500",style:{width:`${g}%`}})}),(0,s.jsxs)("p",{className:"mt-3 text-sm text-slate-300",children:["Browser Python runtime loaded: ",l?"Yes":"Loading"]})]})]})]}),p?s.jsx(r.E.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},className:"mt-5 inline-flex rounded-2xl bg-cyan-500/15 px-4 py-3 text-sm text-cyan-200",children:p}):null]})}},3964:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(326);function i({title:e,subtitle:t}){return(0,s.jsxs)("div",{className:"mb-10 max-w-3xl",children:[s.jsx("p",{className:"text-sm uppercase tracking-[0.35em] text-cyan-300/80",children:e}),s.jsx("h2",{className:"mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl",children:t})]})}},9435:(e,t,a)=>{"use strict";a.d(t,{g:()=>s});let s={features:[{title:"Hands-on lessons",description:"Short, practical modules with real automation examples and exercises.",icon:"\uD83E\uDDE0"},{title:"Beginner-friendly flow",description:"No assumptions. Each day builds on what you just practiced.",icon:"\uD83D\uDE80"},{title:"Browser-based Python",description:"Run code live in the browser with a ready-to-use playground.",icon:"\uD83D\uDCBB"},{title:"Project-ready output",description:"Download guides, access assignments, and share your GitHub work.",icon:"\uD83D\uDCC1"}],days:[{day:1,title:"Python Basics for Automation",highlight:"Variables, loops, functions, file handling, and a file organizer project.",overview:"Begin with the essential building blocks for automation scripts and learn how Python manages data and files.",objectives:["Understand variables and data types","Write loops and functions","Read and write files","Build a file organizer"],assignment:{title:"Create a folder sorter",difficulty:"Beginner",estimate:"30 min",instructions:"Write a script that moves files into type-based folders in a target directory."},resources:["Python file I/O docs","Pathlib reference","Mini project starter template"],codeExample:`import os

source_dir = 'workspace/files'
for file_name in os.listdir(source_dir):
    if file_name.endswith('.pdf'):
        target_folder = os.path.join(source_dir, 'PDFs')
        os.makedirs(target_folder, exist_ok=True)
        os.rename(os.path.join(source_dir, file_name), os.path.join(target_folder, file_name))
`,playgroundCode:`import os

sample_files = ['report.pdf', 'notes.txt', 'photo.jpg']
organized = {'.pdf': [], '.txt': [], '.jpg': []}
for item in sample_files:
    ext = os.path.splitext(item)[1]
    organized.setdefault(ext, []).append(item)
print('Organized groups:')
for key, items in organized.items():
    print(key, items)
`},{day:2,title:"CSV & Excel Automation",highlight:"Automate spreadsheets using pandas and openpyxl for attendance and marks.",overview:"Learn how to read, update, and save tabular data so automation works with real-world spreadsheets.",objectives:["Load CSV files","Edit Excel sheets","Use pandas for data cleanup","Build attendance automation"],assignment:{title:"Attendance sheet updater",difficulty:"Beginner",estimate:"40 min",instructions:"Use pandas to add a status column and save the result to a new CSV file."},resources:["pandas cheat sheet","openpyxl quickstart","CSV best practices"],codeExample:`import pandas as pd

attendance = pd.read_csv('attendance.csv')
attendance['Status'] = attendance['Hours'].apply(lambda hours: 'Present' if hours >= 3 else 'Absent')
attendance.to_excel('attendance_report.xlsx', index=False)
`,playgroundCode:`import pandas as pd

rows = [
    {'Name': 'Aisha', 'Hours': 4},
    {'Name': 'Ravi', 'Hours': 2},
    {'Name': 'Mina', 'Hours': 5},
]
df = pd.DataFrame(rows)
df['Status'] = df['Hours'].apply(lambda h: 'Present' if h >= 3 else 'Absent')
print(df)
`},{day:3,title:"Web Scraping & APIs",highlight:"Collect data from web pages and API responses with requests and JSON parsing.",overview:"Build scripts that fetch web content, parse HTML, and consume API endpoints for automation workflows.",objectives:["Fetch web pages","Parse HTML content","Read JSON APIs","Build weather/news automation"],assignment:{title:"API weather summary",difficulty:"Beginner",estimate:"35 min",instructions:"Write a script that turns JSON weather data into a simple summary message."},resources:["requests guide","BeautifulSoup tips","JSON parsing examples"],codeExample:`import requests

response = requests.get('https://api.example.com/weather')
if response.ok:
    data = response.json()
    print(f"Temperature: {data['temp']}\xb0C")
`,playgroundCode:`import json

sample = '{"city": "Mumbai", "temp": 28, "conditions": "Sunny"}'
data = json.loads(sample)
print(f"Weather for {data['city']}: {data['temp']}\xb0C, {data['conditions']}")
`},{day:4,title:"Email & Notification Automation",highlight:"Automate emails, schedule tasks, and prepare a bot notification workflow.",overview:"Explore how scripts can send alerts and work with scheduling for repeatable automations.",objectives:["Send emails with smtplib","Build scheduled jobs","Create simple Telegram bot logic","Trigger notifications"],assignment:{title:"Build a reminder sender",difficulty:"Beginner",estimate:"45 min",instructions:"Write a script that formats a reminder message and logs the notification payload."},resources:["smtplib example","cron and schedule tips","Telegram bot starter guide"],codeExample:`from datetime import datetime

reminder = 'Submit the project report'
print(f"[{datetime.now()}] Reminder: {reminder}")
`,playgroundCode:`from datetime import datetime

message = 'Practice your automation script today!'
print('Reminder sent at', datetime.now().strftime('%H:%M'))
print('Message:', message)
`},{day:5,title:"Mini Projects & Deployment",highlight:"Bring everything together with a final tool and learn GitHub basics for sharing code.",overview:"Build a polished automation tool, prepare a GitHub repo, and explore simple deployment steps.",objectives:["Design a final automation workflow","Prepare GitHub projects","Share code professionally","Deploy Python scripts"],assignment:{title:"Final automation tool plan",difficulty:"Beginner",estimate:"50 min",instructions:"Write a project summary and identify the files, libraries, and steps needed to build your tool."},resources:["GitHub repo checklist","deployment notes","project submission guide"],codeExample:`def send_report(summary):
    print('Final automation report:')
    print(summary)

send_report('File organizer and attendance tracker ready.')
`,playgroundCode:`def summarize(project_name, features):
    print(f'Project: {project_name}')
    for item in features:
        print('-', item)

summarize('File Organizer', ['scan files', 'move by type', 'save log'])
`}],projects:[{title:"Auto File Organizer",description:"Sort documents, images, and downloads automatically into folders.",difficulty:"Easy",tech:"os, pathlib"},{title:"Attendance System",description:"Track student attendance and generate reports from classroom data.",difficulty:"Easy",tech:"pandas, openpyxl"},{title:"News Scraper",description:"Collect headlines from web pages and build a quick daily digest.",difficulty:"Easy",tech:"requests, BeautifulSoup"},{title:"Email Bot",description:"Send scheduled email notifications and status updates automatically.",difficulty:"Easy",tech:"smtplib, schedule"},{title:"Certificate Generator",description:"Create certificates from templates and student data automatically.",difficulty:"Easy",tech:"Pillow, reportlab"}],resources:[{title:"Python installation guide",summary:"Install Python, set up PATH, and confirm your environment quickly.",link:"https://www.python.org/downloads/"},{title:"VS Code setup",summary:"Configure VS Code with Python extensions, code runner, and syntax helpers.",link:"https://code.visualstudio.com/"},{title:"Key automation libraries",summary:"pandas, requests, BeautifulSoup, openpyxl, smtplib, schedule.",link:"https://pypi.org/"},{title:"GitHub basics",summary:"Learn how to commit, push, and share your project repository.",link:"https://docs.github.com/en/get-started/quickstart"},{title:"Cheat sheets",summary:"Reference quick syntax guides for Python, file handling, and data parsing.",link:"https://www.pythoncheatsheet.org/"},{title:"Project submission tips",summary:"Use README, issue tracker, and GitHub links to present your work effectively.",link:"https://docs.github.com/en/repositories"}]}},6724:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c,metadata:()=>d});var s=a(9510);a(7272);var i=a(8570);let r=(0,i.createProxy)(String.raw`/home/abypiousvinoy/projects/Python training/components/Navbar.tsx`),{__esModule:n,$$typeof:o}=r;r.default;let l=(0,i.createProxy)(String.raw`/home/abypiousvinoy/projects/Python training/components/Navbar.tsx#default`),d={title:"Python Automation Workshop",description:"5-Day practical workshop for beginners to learn Python automation with projects, examples, and an interactive playground."};function c({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{children:(0,s.jsxs)("div",{className:"min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_28%),linear-gradient(180deg,_#020617,_#020617_60%,_#0f172a)]",children:[s.jsx(l,{}),e]})})})}},7272:()=>{}};