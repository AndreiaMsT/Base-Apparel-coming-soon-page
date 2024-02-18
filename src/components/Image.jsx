import MobilePicture from "../images/hero-mobile.jpg";
import DesktopPicture from "../images/hero-desktop.jpg";

const Image = () => {
    return (
        <div className="w-full">
          <img
            src={MobilePicture}
            className="block w-full md:hidden" // This displays for small devices only
            alt="Mobile Picture"
          />
          <img
            src={DesktopPicture}
            className="hidden w-full md:block" // This displays for larger devices
            alt="Desktop Picture"
          />
        </div>
      );
    };
    

export default Image;
