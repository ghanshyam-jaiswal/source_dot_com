import React from 'react'
import Login from './Login'
import { Router } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <Router>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
          </Routes>
        </Router> */}

        <Login/>
        
    </div>
  )
}

export default App
