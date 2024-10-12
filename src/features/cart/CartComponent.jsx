import { useNavigate } from "react-router-dom";
import cartIcon from "../../data/images/cartIcon.svg";

export default function CartComponent() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/cart")}>
      <img src={cartIcon} alt="" />
    </div>
  );
}
