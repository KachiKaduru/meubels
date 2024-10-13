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
          <h4>Notifications</h4>
          <SearchComponent />
        </BarHeader>

        <Display></Display>
        <Navbar />
      </Layout>
    </section>
  );
}
