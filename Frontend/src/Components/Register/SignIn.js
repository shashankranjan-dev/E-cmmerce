import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/api/user/login", user)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", response.data.user.username);
          localStorage.setItem("email", response.data.user.email);
          navigate("/");
          window.location.reload();
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
          confirmButtonText: "Cool",
        });
      });
  };
  return (
    <div>
      <div>
        <div class="bg-grey-lighter mt-[10%] flex flex-col">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-gray-100 px-6 py-8 rounded shadow-lg text-black w-full">
              <h1 class="mb-8 text-3xl text-center">Welcome Sign In !</h1>

              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                class="block border border-grey-light w-full p-3 rounded mb-4"
                id="email"
                placeholder="Email"
              />

              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                id="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />

              <div className="bg-green-600">
                <button
                  onClick={handleLogin}
                  type="submit"
                  class="w-full text-center py-3 rounded  text-black hover:bg-green-dark focus:outline-none my-1"
                >
                  Log In
                </button>
              </div>
              <div class="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  class="no-underline border-b border-grey-dark text-grey-dark"
                  href="#!"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  class="no-underline border-b border-grey-dark text-grey-dark"
                  href="#!"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
