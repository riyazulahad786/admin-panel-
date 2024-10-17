import {} from 'react'

function Footer() {
  return (
    <div className='footer container-fluid py-5'>
   <div className='container'>
   <div className='row py-2'>
    <div className='col-lg-6 text-center mx-auto'>
    <h3>Have Doubts ? in your mind ask us</h3>
    <input type='text' className='subscribe' placeholder='Subscribe'/>
    </div>
   </div>
   <div className='row py-3'>
         <div className='col-lg-3'>
           <h1>We Deliver Best Service</h1>
         </div>
         <div className='col-lg-3'>
          <ul>
            <li>Quality</li>
            <li>share</li>
            <li>Help</li>
            <li>Carrer</li>
          </ul>
         </div>
         <div className='col-lg-3'>
          <ul>
            <li>Availability</li>
            <li>Location</li>
            <li>Branches</li>
            <li>Food court</li>
          </ul>
         </div>
         <div className='col-lg-3'>
          <ul>
            <li>Hyderbad</li>
            <li>Bangalore</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
         </div>
       </div>
   </div>
    </div>
  )
}

export default Footer