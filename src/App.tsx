import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { TableComponent } from './components/TableComponent'

const TableComponent = React.lazy(() => import('./components/TableComponent'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <TableComponent/> */}
      <Suspense fallback={<div>Loading...</div>}>
      <TableComponent/>
      </Suspense>
    </div>
  )
}

export default App
