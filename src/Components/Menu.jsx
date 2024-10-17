import {} from 'react'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpeg'
import food4 from '../assets/food4.jpeg'
import food5 from '../assets/food5.jpeg'
import food6 from '../assets/food6.jpeg'
import food7 from '../assets/food7.jpeg'
import food8 from '../assets/food8.jpeg'
import food9 from '../assets/food9.avif'
import food10 from '../assets/food10.jpeg'
function Menu() {
  return (
    <div>
         <div className='container py-5'>
    <div className='text-center'>
        <h1>Our Products</h1>
        <hr/>
    </div>
      <div className='products py-3 d-flex gap-3 justify-content-around'>
      <div className=''>
          <div className='card-body'>
             <img src={food1} className='img-fluid'/>
          </div>
       </div>
       <div className=''>
          <div className='card-body'>
             <img src={food2} className='img-fluid'/>
          </div>
       </div>
       <div className=''>
          <div className='card-body'>
             <img src={food3} className='img-fluid'/>
          </div>
       </div>
      </div>
      <div className='products py-3 d-flex gap-3 justify-content-around'>
      <div className=''>
          <div className='card-body'>
             <img src={food4} className='img-fluid'/>
          </div>
       </div>
       <div className=''>
          <div className='card-body'>
             <img src={food5} className='img-fluid'/>
          </div>
       </div>
       <div className=''>
          <div className='card-body'>
             <img src={food6} className='img-fluid'/>
          </div>
       </div>
      </div>
      <div className='products py-3 d-flex gap-3 justify-content-around'>
      <div className=''>
          <div className='card-body'>
             <img src={food7} className='img-fluid'/>
          </div>
       </div>
       <div className=''>
          <div className='card-body'>
             <img src={food8} className='img-fluid'/>
          </div>
       </div>
       <div className=''>
          <div className='card-body'>
             <img src={food9} className='img-fluid'/>
          </div>
       </div>
      </div>
      <div className='products py-3 d-flex gap-3 justify-content-around'>
      <div className=''>
          <div className='card-body'>
             <img src={food10} className='img-fluid'/>
          </div>
       </div>
      
      
      </div>
    </div>
    </div>
  )
}

export default Menu