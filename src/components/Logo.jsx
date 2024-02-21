import logoApparel from "../images/logo.svg";

const Logo = () => {
  return (
    <div className="p-10 md:absolute md:left-56 md:top-16 md:p-0">
      <img src={logoApparel} alt="Logo" />
    </div>
  );
};

export default Logo;
