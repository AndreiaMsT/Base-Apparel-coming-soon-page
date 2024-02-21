import MobilePicture from "../images/hero-mobile.jpg";
import DesktopPicture from "../images/hero-desktop.jpg";

const Image = () => {
    return (
        <div className="w-full">
          <img
            src={MobilePicture}
            className="order-1 h-max w-full md:hidden" 
            alt="Mobile Picture"
          />
          <img
            src={DesktopPicture}
            className="order-2 hidden h-screen w-max md:block" 
            alt="Desktop Picture"
          />
        </div>
      );
    };
    

export default Image;
