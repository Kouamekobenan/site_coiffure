
import Banniere from "../components/banniere/Banniere";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import { Service } from "../components/service/Service";

export default function LoaderPage() {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Banniere />
      </div>
      <div className=""><Service/></div>
      <div className=""><Footer/></div>
    </div>
  );
}
