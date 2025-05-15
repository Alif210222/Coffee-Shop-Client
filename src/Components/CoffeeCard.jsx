import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2'

const CoffeeCard = ({coffee , coffees , setCoffees}) => {
          const {_id,name,test,photo,price,quantity} = coffee
        
    // console.log(coffee)

     // Delete method
    const handleDelete = (id)=>{
          console.log("item delete " ,id)


         Swal.fire({
                   title: "Are you sure?",
                   text: "You won't be able to revert this!",
                   icon: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#3085d6",
                   cancelButtonColor: "#d33",
                   confirmButtonText: "Yes, delete it!"
                 }).then((result) => {
                    
                   if (result.isConfirmed) {


                // start delete proccess

                fetch(`http://localhost:4000/coffees/${_id}` , {
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log("after delete " , data);
                    if(data.deletedCount){
                      Swal.fire({
                            title: "Deleted!",
                            text: "Your coffee has been deleted.",
                            icon: "success"
                     });

                     /// remove the coffee from the state
                     const remainingCoffees = coffees.filter(coff => coff._id !== _id)
                     setCoffees(remainingCoffees)
                    }
                })

                    
           }
        });
          

    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm border-2">
  <figure>
    <img
    className='md:w-60 md:h-50'
      src={photo}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price :{price}</p>
    <p> Quantity :{quantity}</p>
    <div className="card-actions justify-end">
     <div className="join join-vertical space-y-3">
             <Link to={`/coffee/${_id}`} className="btn join-item">view</Link>
             <Link to={`/updateCoffee/${_id}`} className="btn join-item">Edit</Link>
             <button onClick={() => handleDelete (_id)} className="btn join-item">X</button>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;