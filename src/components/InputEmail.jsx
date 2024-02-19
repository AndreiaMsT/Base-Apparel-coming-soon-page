import ButtonArrow from "../images/icon-arrow.svg";
import { useState } from "react";

const InputEmail = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-6 mb-6 flex w-96 relative max-w-md px-5 items-center justify-center">
        <input
          value={email}
          id="email-address"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          autoComplete="email"
          required
          className="rounded-full mx-5 px-5 py-2.5 shadow-sm ring-1  ring-red-desaturated focus:ring-2 focus:ring-inset sm:text-sm bg-pink-200 placeholder-red-desaturated pr-16"
          placeholder="Email Address"
        />
        <button
          type="submit"
          className="mr-5  absolute top-0 right-5 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 px-5 py-2.5 text-sm font-semibold  hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <img src={ButtonArrow} alt="Submit Arrow" />
        </button>
      </div>
    </form>
  );
};

export default InputEmail;
