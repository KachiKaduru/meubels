import BarHeader from "../../pages/BarHeader";
import BackButton from "../../ui/BackButton";

export default function Addresses() {
  return (
    <div>
      <BarHeader>
        <BackButton />
        <span>shipping Address</span>
      </BarHeader>

      <span>
        <h1>+</h1>
      </span>
    </div>
  );
}
