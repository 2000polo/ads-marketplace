import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@radix-ui/themes'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Side bar */}
      {/* Nav bar */}
      <Outlet />
      {/* Footer */}
    </>
  )
}

export default App
