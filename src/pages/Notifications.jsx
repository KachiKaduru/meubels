import BackButton from "../ui/BackButton";
import SearchComponent from "../ui/SearchComponent";
import BarHeader from "../ui/BarHeader";
import Navbar from "../ui/Navbar";
import Layout from "../ui/Layout";
import Display from "../ui/Display";

export default function Notifications() {
  return (
    <section>
      <Layout>
        <BarHeader>
          <BackButton />
          <span>Notifications</span>
          <SearchComponent />
        </BarHeader>

        <Display></Display>
        <Navbar />
      </Layout>
    </section>
  );
}
