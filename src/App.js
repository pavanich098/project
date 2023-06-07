import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './container/Login'
import Logout from './container/Logout'
import Registration from './container/Registration'
import Products from './container/Products'
import Signup from './container/Signup'
import Navigation from './container/Navigation'
import NotFound from './container/NotFound'
import './App.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}
























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
