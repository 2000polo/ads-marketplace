import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@radix-ui/themes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>I'm a button</Button>
      <p className='font-extrabold text-red-600'>Hey it's a tailwind css text paragraph</p>
      <h1 className="text-3xl text-red-300 font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
