import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2'

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const {_id,name,photo,quantity,tupplier,test,price,details} = coffee


      const handleUpdateCoffee = e =>{
            e.preventDefault()
            const form = e.target
            const formData = new FormData(form)
            const updatedCoffee = Object.fromEntries(formData.entries())
            console.log(updatedCoffee)

        // sent updated coffee to the db
           fetch(`http://localhost:4000/coffees/${_id}`, {
                method:"PUT",
                headers:{
                    "content-type" : "application/json"
                },
                 body:JSON.stringify(updatedCoffee)
           })
           .then(res => res.json())
           .then(data => {
               if(data.modifiedCount){ 
                   Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Your Coffee has been update",
                          showConfirmButton: false,
                          timer: 1500
                        });
                   }

           })

      }


    return (
         <div>
            <div>
                <h1 className='text-3xl font-bold'>Update Coffee</h1>
               

                <form  onSubmit={handleUpdateCoffee}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-10'> 
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Name</label>
                              <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter coffee name" />
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Quantity</label>
                              <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Enter Quantitye" />
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Supplier</label>
                              <input type="text" name='tupplier' defaultValue={tupplier} className="input w-full" placeholder="Enter Supplier name" />
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Test</label>
                              <input type="text" name='test' defaultValue={test} className="input w-full" placeholder="Test" />
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Price</label>
                              <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Price" />
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Details</label>
                              <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Details" />
                                     
                        </fieldset>
                    </div>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 my-6">
                             
                              <label className="label">Photo</label>
                              <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="photo URL" />
                                     
                        </fieldset>

                        <input type='submit' className='btn w-full ' value="Update Coffee"></input>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;