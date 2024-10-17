import {useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className={`container navbar py-3 d-flex justify-content-between ${open ? "show":""}`}>
      <a className='fs-5 fw-bolder'>WeDeliver.com</a>
      
      <ul className={`menu_list d-lg-flex ${open ? 'open' : ''} justify-content-evenly`}>
      {/* close btn */}
       <a className='d-lg-none close_btn' onClick={handleOpen}><IoMdClose/></a>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/service'>Service</a></li>
        <li><a href='/products'>Products</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
      {/* menu btn */}
     <a className='d-lg-none' onClick={handleOpen}><IoIosMenu/></a>
    </div>
  )
}

export default Navbar