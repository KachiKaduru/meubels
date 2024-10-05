import { useNavigate } from "react-router-dom";
import backBtn from "../data/images/backBtn.svg";

export default function BackButton() {
  const navigate = useNavigate();

  function handleReturn() {
    navigate(-1);
  }

  return (
    <div onClick={handleReturn}>
      <img src={backBtn} alt="" />
    </div>
  );
}
