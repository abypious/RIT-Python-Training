'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const initialCode = `import json

sample = '{"student": "Ayesha", "score": 88, "task": "automation project"}'
data = json.loads(sample)
print(f"Student: {data['student']}")
print(f"Task: {data['task']}\nScore: {data['score']}")
`;

declare global {
  interface Window {
    loadPyodide: any;
    pyodide: any;
  }
}

export default function Playground() {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('Ready to run Python code.');
  const [pyodideLoaded, setPyodideLoaded] = useState(false);
  const [running, setRunning] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
    script.async = true;
    script.onload = async () => {
      window.pyodide = await window.loadPyodide({ stdout: () => {}, stderr: () => {} });
      await window.pyodide.loadPackage(['micropip']);
      setPyodideLoaded(true);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleRun = async () => {
    if (!pyodideLoaded) {
      setOutput('Loading Python runtime...');
      return;
    }

    setRunning(true);
    setOutput('Running…');

    try {
      const captured: string[] = [];
      window.pyodide.setStdout({ batched: (text: string) => captured.push(text) });
      window.pyodide.setStderr({ batched: (text: string) => captured.push(text) });
      await window.pyodide.runPythonAsync(code);
      setOutput(captured.join('') || 'Code executed successfully.');
    } catch (error: any) {
      setOutput(error?.message ?? 'An error occurred while running code.');
    } finally {
      setRunning(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setToast('Code copied!');
    window.setTimeout(() => setToast(null), 2000);
  };

  const progress = useMemo(() => Math.min(85, 20 + code.length / 3), [code]);

  return (
    <div className="card-glass p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Python Playground</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Run examples instantly</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Edit the code, press run, and inspect output immediately. Great for testing automation ideas without installing anything.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handleRun} className="btn-primary" disabled={running}>
            {running ? 'Running…' : 'Run Code'}
          </button>
          <button onClick={handleCopy} className="btn-secondary">
            Copy
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <textarea
          value={code}
          onChange={(event) => setCode(event.target.value)}
          className="min-h-[340px] w-full rounded-[1.5rem] border border-slate-700/80 bg-slate-950/95 px-5 py-4 text-sm leading-6 text-slate-100 outline-none transition focus:border-cyan-400/70"
        />
        <div className="space-y-4">
          <div className="rounded-[1.5rem] border border-slate-700/80 bg-slate-900/90 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Output console</p>
            <pre className="mt-4 max-h-[330px] overflow-y-auto whitespace-pre-wrap break-words text-sm leading-6 text-slate-100">{output}</pre>
          </div>
          <div className="rounded-[1.5rem] border border-slate-700/80 bg-slate-950/90 p-5">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Progress</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-3 text-sm text-slate-300">Browser Python runtime loaded: {pyodideLoaded ? 'Yes' : 'Loading'}</p>
          </div>
        </div>
      </div>

      {toast ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 inline-flex rounded-2xl bg-cyan-500/15 px-4 py-3 text-sm text-cyan-200"
        >
          {toast}
        </motion.div>
      ) : null}
    </div>
  );
}
