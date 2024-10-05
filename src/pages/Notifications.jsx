import BackButton from "../ui/BackButton";
import SearchComponent from "../ui/SearchComponent";
import BarHeader from "./BarHeader";

export default function Notifications() {
  return (
    <div>
      <BarHeader>
        <BackButton />
        <span>Notifications</span>
        <SearchComponent />
      </BarHeader>
    </div>
  );
}
