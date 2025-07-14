import { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex justify-center gap-8 p-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="h-24 w-24 transition-all hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-24 w-24 animate-[spin_20s_linear_infinite] transition-all hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-center text-4xl font-bold text-slate-800">Vite + React</h1>
      <div className="mx-auto mt-8 max-w-md rounded-xl border border-slate-200 p-6 shadow-sm">
        <button
          type="button"
          className="mb-4 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-slate-600">
          Edit{' '}
          <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-sm">src/App.tsx</code>{' '}
          and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-center text-sm text-slate-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
