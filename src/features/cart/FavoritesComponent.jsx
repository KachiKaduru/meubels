import { useNavigate } from "react-router-dom";
import cartIcon from "../../data/images/cartIcon.svg";
import { HiOutlineBookmark } from "react-icons/hi2";

export default function FavoritesComponent() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/favorite")}>
      {/* <img src={cartIcon} alt="" /> */}
      <HiOutlineBookmark />
    </div>
  );
}
