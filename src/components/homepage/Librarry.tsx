import { getFitlog } from '@/lib/FitlogApi';
import React from 'react'
import FitlogCard from '../shared/FitlogCard';


 const Librarry = async () => {
    const fitlogData =  await getFitlog();

   return (
    <div className="w-[94vw] m-auto">

      <div className="mb-8 mt-10 px-9">
      <h2 className="font-oswald  text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl ">
        The Library
      </h2>
      <p className="mt-1 text-sm text-[#9ca3af] sm:text-base">
        Twelve lifts covering every major muscle group.
      </p>
    </div>
    <div className=" w-[90vw] m-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
          fitlogData.map((workout) => (
           <FitlogCard  workout={workout} key={workout.id} />
          ))
        }

    </div>
    </div>
   )
 }
 
 export default Librarry
 