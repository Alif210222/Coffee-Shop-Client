import React from 'react';
import AddCoffee from './AddCoffee';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';

const Home = () => {
    const  initialCoffees= useLoaderData()
    const [coffees,setCoffees] = useState(initialCoffees)
    // console.log(coffees)


    return (
        <div>
             <div className='grid grid-cols-1 grid-cols-2 gap-3'>
               {
                coffees.map(coffee  => <CoffeeCard key="coffee.id" coffees={coffees} setCoffees={setCoffees}  coffee={coffee}></CoffeeCard>)
               }
             </div>
             
        </div>
    );
};

export default Home;