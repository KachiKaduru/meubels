import { useNavigate } from "react-router-dom";
import { HiOutlineBookmark } from "react-icons/hi2";

export default function FavoritesComponent() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/favorites")}>
      {/* <img src={cartIcon} alt="" /> */}
      <HiOutlineBookmark />
    </div>
  );
}
