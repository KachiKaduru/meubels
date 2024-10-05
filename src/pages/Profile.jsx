import BackButton from "../ui/BackButton";
import SearchComponent from "../ui/SearchComponent";
import BarHeader from "./BarHeader";

export default function Profile() {
  return (
    <div>
      <BarHeader>
        <BackButton />
        <span>Profile</span>
        <SearchComponent />
      </BarHeader>
    </div>
  );
}
