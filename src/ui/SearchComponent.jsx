import { useNavigate } from "react-router-dom";
import searchIcon from "../data/images/search-icon.svg";

export default function SearchComponent() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/search")}>
      <img src={searchIcon} alt="" />
    </div>
  );
}
