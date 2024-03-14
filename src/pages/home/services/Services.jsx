import { useEffect } from "react";
import { useState } from "react"
import { ServiceCard } from "../ServiceCard";


export const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
        .then((res) => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="text-center space-y-4">
        <h5 className="text-sm text-red-400 font-bold">Services</h5>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6">

            {
                services.map(service => <ServiceCard key={service._id} service = {service}></ServiceCard> )
            }

        </div>
        
    </div>
  )
}
