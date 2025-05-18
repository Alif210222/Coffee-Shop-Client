import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2'

const Users = () => {
    const initialUsers = useLoaderData();
    const [users,setUsers] = useState(initialUsers)



const handleDelete =(id)=>{


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

      fetch(`https://coffee-shop-server-fawn-one.vercel.app/users/${id}`,{
          method:"DELETE"
      })
      .then(res => res.json())
      .then(data => {
        // console.log("After delete", data)
        if(data.deletedCount){
            const remainingUsers = users.filter(user => user._id !== id)
            setUsers(remainingUsers)


            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            })
        }
      })


  }
});
} 

    return (
       <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
          No
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

        {
          users.map((user,index) =>  <tr>
        <th>
          <label>
            {index+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{user.email}</td>
        <th className=''>
          <Link className="btn border border-white mr-2 btn-xs">D</Link>
          <Link className="btn  border border-white mr-2 btn-xs">E</Link>
          <Link onClick={()=>handleDelete(user._id)} className="btn  border border-white btn-xs">X</Link>
        </th>
      </tr> ) 
        }
      
     
  
      
    </tbody>
   
  </table>
</div>
    );
};

export default Users;