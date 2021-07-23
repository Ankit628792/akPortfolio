import React from 'react'
import Card from './Card'
function Service({services}) {
    return (
   <div className="service">
       {
           services.map((service , i) => (
               <Card key={i} i={i+1} title={service.title} desc={service.desc} />
           ))
           }
   </div>
    )
}

export default Service
