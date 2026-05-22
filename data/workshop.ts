export const workshopData = {
  features: [
    {
      title: 'Hands-on lessons',
      description: 'Short, practical modules with real automation examples and exercises.',
      icon: '🧠',
    },
    {
      title: 'Beginner-friendly flow',
      description: 'No assumptions. Each day builds on what you just practiced.',
      icon: '🚀',
    },
    {
      title: 'Browser-based Python',
      description: 'Run code live in the browser with a ready-to-use playground.',
      icon: '💻',
    },
    {
      title: 'Project-ready output',
      description: 'Download guides, access assignments, and share your GitHub work.',
      icon: '📁',
    },
  ],
  days: [
    {
      day: 1,
      title: 'Python Basics for Automation',
      highlight: 'Variables, loops, functions, file handling, and a file organizer project.',
      overview: 'Begin with the essential building blocks for automation scripts and learn how Python manages data and files.',
      objectives: ['Understand variables and data types', 'Write loops and functions', 'Read and write files', 'Build a file organizer'],
      assignment: {
        title: 'Create a folder sorter',
        difficulty: 'Beginner',
        estimate: '30 min',
        instructions: 'Write a script that moves files into type-based folders in a target directory.',
      },
      resources: ['Python file I/O docs', 'Pathlib reference', 'Mini project starter template'],
      codeExample: `import os

source_dir = 'workspace/files'
for file_name in os.listdir(source_dir):
    if file_name.endswith('.pdf'):
        target_folder = os.path.join(source_dir, 'PDFs')
        os.makedirs(target_folder, exist_ok=True)
        os.rename(os.path.join(source_dir, file_name), os.path.join(target_folder, file_name))
`,
      playgroundCode: `import os

sample_files = ['report.pdf', 'notes.txt', 'photo.jpg']
organized = {'.pdf': [], '.txt': [], '.jpg': []}
for item in sample_files:
    ext = os.path.splitext(item)[1]
    organized.setdefault(ext, []).append(item)
print('Organized groups:')
for key, items in organized.items():
    print(key, items)
`,
    },
    {
      day: 2,
      title: 'CSV & Excel Automation',
      highlight: 'Automate spreadsheets using pandas and openpyxl for attendance and marks.',
      overview: 'Learn how to read, update, and save tabular data so automation works with real-world spreadsheets.',
      objectives: ['Load CSV files', 'Edit Excel sheets', 'Use pandas for data cleanup', 'Build attendance automation'],
      assignment: {
        title: 'Attendance sheet updater',
        difficulty: 'Beginner',
        estimate: '40 min',
        instructions: 'Use pandas to add a status column and save the result to a new CSV file.',
      },
      resources: ['pandas cheat sheet', 'openpyxl quickstart', 'CSV best practices'],
      codeExample: `import pandas as pd

attendance = pd.read_csv('attendance.csv')
attendance['Status'] = attendance['Hours'].apply(lambda hours: 'Present' if hours >= 3 else 'Absent')
attendance.to_excel('attendance_report.xlsx', index=False)
`,
      playgroundCode: `import pandas as pd

rows = [
    {'Name': 'Aisha', 'Hours': 4},
    {'Name': 'Ravi', 'Hours': 2},
    {'Name': 'Mina', 'Hours': 5},
]
df = pd.DataFrame(rows)
df['Status'] = df['Hours'].apply(lambda h: 'Present' if h >= 3 else 'Absent')
print(df)
`,
    },
    {
      day: 3,
      title: 'Web Scraping & APIs',
      highlight: 'Collect data from web pages and API responses with requests and JSON parsing.',
      overview: 'Build scripts that fetch web content, parse HTML, and consume API endpoints for automation workflows.',
      objectives: ['Fetch web pages', 'Parse HTML content', 'Read JSON APIs', 'Build weather/news automation'],
      assignment: {
        title: 'API weather summary',
        difficulty: 'Beginner',
        estimate: '35 min',
        instructions: 'Write a script that turns JSON weather data into a simple summary message.',
      },
      resources: ['requests guide', 'BeautifulSoup tips', 'JSON parsing examples'],
      codeExample: `import requests

response = requests.get('https://api.example.com/weather')
if response.ok:
    data = response.json()
    print(f"Temperature: {data['temp']}°C")
`,
      playgroundCode: `import json

sample = '{"city": "Mumbai", "temp": 28, "conditions": "Sunny"}'
data = json.loads(sample)
print(f"Weather for {data['city']}: {data['temp']}°C, {data['conditions']}")
`,
    },
    {
      day: 4,
      title: 'Email & Notification Automation',
      highlight: 'Automate emails, schedule tasks, and prepare a bot notification workflow.',
      overview: 'Explore how scripts can send alerts and work with scheduling for repeatable automations.',
      objectives: ['Send emails with smtplib', 'Build scheduled jobs', 'Create simple Telegram bot logic', 'Trigger notifications'],
      assignment: {
        title: 'Build a reminder sender',
        difficulty: 'Beginner',
        estimate: '45 min',
        instructions: 'Write a script that formats a reminder message and logs the notification payload.',
      },
      resources: ['smtplib example', 'cron and schedule tips', 'Telegram bot starter guide'],
      codeExample: `from datetime import datetime

reminder = 'Submit the project report'
print(f"[{datetime.now()}] Reminder: {reminder}")
`,
      playgroundCode: `from datetime import datetime

message = 'Practice your automation script today!'
print('Reminder sent at', datetime.now().strftime('%H:%M'))
print('Message:', message)
`,
    },
    {
      day: 5,
      title: 'Mini Projects & Deployment',
      highlight: 'Bring everything together with a final tool and learn GitHub basics for sharing code.',
      overview: 'Build a polished automation tool, prepare a GitHub repo, and explore simple deployment steps.',
      objectives: ['Design a final automation workflow', 'Prepare GitHub projects', 'Share code professionally', 'Deploy Python scripts'],
      assignment: {
        title: 'Final automation tool plan',
        difficulty: 'Beginner',
        estimate: '50 min',
        instructions: 'Write a project summary and identify the files, libraries, and steps needed to build your tool.',
      },
      resources: ['GitHub repo checklist', 'deployment notes', 'project submission guide'],
      codeExample: `def send_report(summary):
    print('Final automation report:')
    print(summary)

send_report('File organizer and attendance tracker ready.')
`,
      playgroundCode: `def summarize(project_name, features):
    print(f'Project: {project_name}')
    for item in features:
        print('-', item)

summarize('File Organizer', ['scan files', 'move by type', 'save log'])
`,
    },
  ],
  projects: [
    {
      title: 'Auto File Organizer',
      description: 'Sort documents, images, and downloads automatically into folders.',
      difficulty: 'Easy',
      tech: 'os, pathlib',
    },
    {
      title: 'Attendance System',
      description: 'Track student attendance and generate reports from classroom data.',
      difficulty: 'Easy',
      tech: 'pandas, openpyxl',
    },
    {
      title: 'News Scraper',
      description: 'Collect headlines from web pages and build a quick daily digest.',
      difficulty: 'Easy',
      tech: 'requests, BeautifulSoup',
    },
    {
      title: 'Email Bot',
      description: 'Send scheduled email notifications and status updates automatically.',
      difficulty: 'Easy',
      tech: 'smtplib, schedule',
    },
    {
      title: 'Certificate Generator',
      description: 'Create certificates from templates and student data automatically.',
      difficulty: 'Easy',
      tech: 'Pillow, reportlab',
    },
  ],
  resources: [
    {
      title: 'Python installation guide',
      summary: 'Install Python, set up PATH, and confirm your environment quickly.',
      link: 'https://www.python.org/downloads/',
    },
    {
      title: 'VS Code setup',
      summary: 'Configure VS Code with Python extensions, code runner, and syntax helpers.',
      link: 'https://code.visualstudio.com/',
    },
    {
      title: 'Key automation libraries',
      summary: 'pandas, requests, BeautifulSoup, openpyxl, smtplib, schedule.',
      link: 'https://pypi.org/',
    },
    {
      title: 'GitHub basics',
      summary: 'Learn how to commit, push, and share your project repository.',
      link: 'https://docs.github.com/en/get-started/quickstart',
    },
    {
      title: 'Cheat sheets',
      summary: 'Reference quick syntax guides for Python, file handling, and data parsing.',
      link: 'https://www.pythoncheatsheet.org/',
    },
    {
      title: 'Project submission tips',
      summary: 'Use README, issue tracker, and GitHub links to present your work effectively.',
      link: 'https://docs.github.com/en/repositories',
    },
  ],
};
