import ButtonArrow from "../images/icon-arrow.svg";
import Error from "../images/icon-error.svg";
import { useState } from "react";

const InputEmail = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const validateEmail = () => {
    if (input.includes("@")) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form className="relative sm:max-w-md sm:mx-auto m-5 pb-10">
      <div
        className={
          "w-full flex justify-between items-center border  rounded-3xl p-10" +
          (error ? "border-pink-200" : "border-pink-500")
        }
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          id="email-address"
          name="email"
          type="email"
          className=" w-0 flex-1 pl-6 py-3 bg-transparent ring-pink-500 placeholder:text-red-desaturated placeholder:opacity-50"
          placeholder="Email Address"
        />
        {error && (
          <div className="pr-2  bg-pink-50">
            <img src={Error} alt="" />
          </div>
        )}
        <button
          type="submit"
          onClick={validateEmail}
          className="bg-gradient-to-br from-pink-300 to-pink-500 hover:from-[#fad8d7] hover:to-[#f3baba] rounded-3xl px-7 flex justify-center items-center self-stretch text-2xl text-white shadow-lg shadow-pink-500"
        >
          <img src={ButtonArrow} alt="Submit Arrow" />
        </button>
      </div>
      <div
        className={
          (error ? "block" : "hidden") +
          " absolute -bottom-10 text-red-desaturated px-5 py-2 bg-pink-200 w-96 "
        }
      >
        {" "}
        Please provide a valid email
      </div>
    </form>
  );
};

export default InputEmail;
