import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';





const Signin = () => {
     const {signInUser} = use(AuthContext)


  const handleSigIn=(e)=>{
        e.preventDefault();
        
        const form = e.target;
           const formData =new FormData(form)
        //   const email = formData.get("email")
        //   const password = formData.get("password")
        const {email,password} = Object.fromEntries(formData.entries());
        // console.log(email,password)
        // login user
        signInUser(email,password)
        .then(res=>{
            // console.log(res)
            const signInInfo={
                email,
                lastSignInTime: res.user?.metadata?.lastSignInTime
                    
            }
             // this sign in info push in backend 
             fetch("https://coffee-shop-server-fawn-one.vercel.app/users" , {
                  method:"PATCH",
                  headers:{
                    "content-type" : "application/json"

                  },
                  body : JSON.stringify(signInInfo)
             })
             .then(res=>
               res.json()
             )
             .then(data =>{
                // console.log("after updated patch" , data)
             })
        })
        .catch(error =>{
            console.log(error)
        })


  }


    return (
              <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="text-5xl font-bold">Login Now!</h1>
      <div className="card-body">
        <form onSubmit={handleSigIn} className="fieldset">

            
        
          
          {/* firebase data */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Signin;