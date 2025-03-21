import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Signin = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("sign in user", user);
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;

        const loginInfo = { email, lastSignInTime };

        // Using Axios
        axios.patch(`http://localhost:5000/users`, loginInfo)
        .then(data =>{
          if(data.data.modifiedCount > 0){
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Login successfully & saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
        })

        // fetch(`http://localhost:5000/users`,{
        //   method: 'PATCH',
        //   headers:{
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(loginInfo)
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     if(data.modifiedCount > 0){
        //       Swal.fire({
        //         position: "top-end",
        //         icon: "success",
        //         title: "User Login successfully & saved",
        //         showConfirmButton: false,
        //         timer: 1500
        //       });
        //     }
          // });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignin} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Sign In
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
