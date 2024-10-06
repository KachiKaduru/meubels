import BarHeader from "../../pages/BarHeader";
import BackButton from "../../ui/BackButton";

export default function Orders() {
  return (
    <div>
      <BarHeader>
        <BackButton />
        <span>my order</span>
      </BarHeader>

      <div>
        <p>Delivered</p>
        <p>Processing</p>
        <p>Cancelled</p>
      </div>
    </div>
  );
}
