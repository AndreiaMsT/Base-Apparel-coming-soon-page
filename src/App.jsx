import "./App.css";
import Logo from "./components/Logo";
import Image from "./components/Image";
import Text from "./components/Text";
import InputEmail from "./components/InputEmail";

export default function App() {
  return (
    <div className="bg-pink-200 ">
      <Logo />
      <Image />
      <Text/>
      <InputEmail/>
    </div>
  );
}
