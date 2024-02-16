import logoApparel from "../images/logo.svg";

const Logo = () => {
  return (
    <div className="sm:w-1/2">
      <img className="sm:p-4 md:p-10" src={logoApparel} alt="Logo" />
    </div>
  );
};

export default Logo;
