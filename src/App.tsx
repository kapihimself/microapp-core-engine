import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <button
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  )
}

export default App
