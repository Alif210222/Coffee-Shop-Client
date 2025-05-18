import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

     const handleAddCoffee = e =>{
        e.preventDefault()
        const form = e.target;

        // if form will bw larger then we will use this mathode
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee)


        // Now send data to database 
        fetch("https://coffee-shop-server-fawn-one.vercel.app/coffees" ,{
            method:"POST",
            headers:{
                    'content-type' : "application/json"
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log("after adding coffee",data)
            Swal.fire({
                  title: "Coffee Add Successful!",
                  icon: "success",
                  draggable: true
                });
                form.reset();
        })

     }


    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold'>Add New Coffee</h1>
                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aperiam tenetur obcaecati, atque eum similique soluta delectus cum beatae laudantium ipsam deserunt laboriosam quos, illo molestiae, autem error harum neque.</p>

                <form  onSubmit={handleAddCoffee}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-10'> 
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Name</label>
                              <input type="text" name='name' className="input w-full" placeholder="Enter coffee name" />
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Quantity</label>
                              <input type="text" name='quantity' className="input w-full" placeholder="Enter Quantitye" />
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Supplier</label>
                              <input type="text" name='tupplier' className="input w-full" placeholder="Enter Supplier name" />
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Test</label>
                              <input type="text" name='test' className="input w-full" placeholder="Test" />
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Price</label>
                              <input type="text" name='price' className="input w-full" placeholder="Price" />
                                     
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                             
                              <label className="label">Details</label>
                              <input type="text" name='details' className="input w-full" placeholder="Details" />
                                     
                        </fieldset>
                    </div>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 my-6">
                             
                              <label className="label">Photo</label>
                              <input type="text" name='photo' className="input w-full" placeholder="photo URL" />
                                     
                        </fieldset>

                        <input type='submit' className='btn w-full ' value="Add Coffee"></input>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;