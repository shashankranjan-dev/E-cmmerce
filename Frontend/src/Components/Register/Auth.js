import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div>
      {isSignUp ? <SignUp /> : <SignIn />}

      <div class="text-grey-dark justify-center mt-6 flex">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}

        <p
          class="ml-2 no-underline border-b border-blue text-blue hover:cursor-pointer"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Log in" : "Sign up"}
        </p>
      </div>
    </div>
  );
}

export default Auth;
