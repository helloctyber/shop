import "./style.css";
import Quicklink from "../components/Quicklink";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Quicklinks() {
  return (
    <div className="quicklinksContainer">
      <Quicklink label="Book flight" color="red"/>
      <Quicklink label="Pay Bills" />
      <Quicklink label="Fashion"/>
      <Quicklink />
      <Quicklink />
      <Quicklink color="yellow"/>
    </div>
  );
}
