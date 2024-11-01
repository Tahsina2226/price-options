import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PriceOptions from './components/PriceOptions'
// import Daisynav from  './components/Daisynav'
import Navbar from './components/Navbar'
import link from './components/Link'
import LineChart from './components/LineChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <Daisynav></Daisynav> */}
      <Navbar></Navbar>
      <link></link>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>

     
      
    </>
  )
}

export default App
