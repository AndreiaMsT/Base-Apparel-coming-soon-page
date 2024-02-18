import ButtonArrow from "../images/icon-arrow.svg"

const InputEmail = () => {
  return (
<div className="mt-6 mb-6 flex w-96 relative max-w-md px-5 items-center justify-center">
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="rounded-full px-5 py-2.5 shadow-sm ring-1  ring-red-desaturated focus:ring-2 focus:ring-inset sm:text-sm bg-pink-200 placeholder-red-desaturated pr-16"
        placeholder="Email Address"
      />
      <button
        type="submit"
        className="mr-5  absolute top-0 right-5 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 px-5 py-2.5 text-sm font-semibold  hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <img src={ButtonArrow} alt="Submit Arrow"/>
      </button>
    </div>
  );
};

export default InputEmail;
