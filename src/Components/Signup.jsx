import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2'

const Signup = () => {
      const {createUser} = useContext(AuthContext)
      //  console.log(createUser)

       const handleSignUp = (e) =>{
          e.preventDefault();

          const form = e.target;
          const formData =new FormData(form)
        //   const email = formData.get("email")
        //   const password = formData.get("password")
        const {email,password,...rest} = Object.fromEntries(formData.entries());
      


          


    // create user in the firebase 
          createUser(email,password) 
          .then(res => {
            // console.log(res)
              const userProfile = {                  // rest api 
                     email,
                     ...rest,
                     creationTime: res.user?.metadata?.creationTime,
                     lastSignInTime: res.user?.metadata?.lastSignInTime
        }


            // save profile info  in the database
            fetch("https://coffee-shop-server-fawn-one.vercel.app/users" , {
                method:"POST",
                headers:{
                    "content-type" : "application/json"                   
                },
                body:JSON.stringify(userProfile)
        })
            .then(res => res.json())
            .then(data =>{
                 if(data.insertedId){
                    Swal.fire({
                         title: "user register Successful!",
                         icon: "success",
                         draggable: true
                       });
                       form.reset(); 
                 }
              })


          } )
          .catch(error =>{
            console.log(error)
          })

       } 



    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="text-5xl font-bold">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">

            {/* backend data */}
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Address</label>
          <input type="text" name='address' className="input" placeholder="address" />
          <label className="label">Phone</label>
          <input type="text" name='phone' className="input" placeholder="phone number" />
          <label className="label">photo</label>
          <input type="text" name='photo' className="input" placeholder="photo_URL" />
          
          {/* firebase data */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Signup;