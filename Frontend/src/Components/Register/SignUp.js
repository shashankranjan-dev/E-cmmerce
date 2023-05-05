import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(user);

    axios
      .post("http://localhost:5000/api/user/register", user)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "You have successfully signed up!",
            icon: "success",
            confirmButtonText: "ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Please try again!",
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Please try again!",
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };

  return (
    <div>
      <div className="bg-grey-lighter mt-[10%] flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form>
            <div className="bg-gray-100 px-6 py-8 rounded shadow-lg text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                name="username"
                id="username"
                placeholder="username"
                required
              />

              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                id="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                id="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />

              <div className="bg-green-600">
                <button
                  onClick={handleSignUp}
                  type="submit"
                  className="w-full text-center py-3 rounded  text-black hover:bg-green-dark focus:outline-none my-1"
                >
                  Create Account
                </button>
              </div>
              <div className="text-center text-sm text-grey-dark mt-4">
                By signing In, you agree to the
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#!"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#!"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
