import React from 'react'
import './service.css'
import Nav from '../Nav/Nav'
import bg from '../assets/th.jpg'
import Foot from '../foot/Foot'

const Service = () => {
  return (
    <div>
      <Nav/>
     <div className="flexs">
             <div className="box">
               <img src={bg} alt="" />
               <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                 officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                 officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                 officiis!
               </p>
               <button>Visit to learn</button>
             </div>
             <div className="box">
               <img src={bg} alt="" />
               <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                 officiis!
               </p>
               <button>more</button>
             </div>
             <div className="box">
               <img src={bg} alt="" />
               <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                 officiis!
               </p>
               <button>more</button>
             </div>
             <div className="box">
               <img src={bg} alt="" />
               <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                 officiis!
               </p>
               <button>more</button>
             </div>
             <div className="box">
               <img src={bg} alt="" />
               <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                 officiis!
               </p>
               <button>more</button>
             </div>
             <div className="box">
               <img src={bg} alt="" />
               <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                 officiis!
               </p>
               <button>more</button>
             </div>
           </div>
           <Foot/>
    </div>
  )
}

export default Service
