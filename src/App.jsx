import {} from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Products from './Components/Products'
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <About/>
      <Products/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default App