import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {

      const coffee = useLoaderData();
    //   console.log(coffee)
    return (
        <div>
                <h1>Coffee Details : {coffee.details}</h1>
        </div>
    );
};

export default CoffeeDetails;