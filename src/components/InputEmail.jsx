import ButtonArrow from "../images/icon-arrow.svg"

const InputEmail = () => {
  return (
    <div className="mt-6 mb-6 flex-1 absolute max-w-md gap-x-4 px-10 font-josefin-sans aspect-1 bg-pink-200">
   
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className=" flex-auto rounded-full px-5 py-2.5 shadow-sm ring-1  ring-red-desaturated focus:ring-2 focus:ring-inset sm:text-sm bg-pink-200 placeholder-red-desaturated"
        placeholder="Email Address"
      />
      <button
        type="submit"
        className="relative right-0 flex-none rounded-full bg-gradient-to-br from-pink-300 to-pink-500 px-5 py-2.5 text-sm font-semibold  hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
       <img src={ButtonArrow}/>
      </button>
    </div>
  );
};

export default InputEmail;
