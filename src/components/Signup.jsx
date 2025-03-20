import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("new user", user);
        const createdAt = result.user.metadata.creationTime;
        const newUser ={name, email, createdAt}
      // save new user to database
      fetch(`https://coffee-store-server-pi-woad.vercel.app/users`, {
            method: 'POST',
            headers:{
                  'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(data => {
            console.log(data)
            if(data.insertedId){
                  alert('User Created successfully')
            }
      })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="name"
                />
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
                  Sign Up!
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
