import styled from "styled-components";
import { profileSections } from "../data/profileArray";
import UserDisplay from "../features/user/UserDisplay";
import UserSection from "../features/user/UserSection";
import BackButton from "../ui/BackButton";
import SearchComponent from "../ui/SearchComponent";
import BarHeader from "../ui/BarHeader";
import Layout from "../ui/Layout";
import Navbar from "../ui/Navbar";
import Display from "../ui/Display";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export default function Profile() {
  return (
    <section>
      <Layout>
        <BarHeader>
          <BackButton />
          <h4>Profile</h4>
          <SearchComponent />
        </BarHeader>

        <Display>
          <UserDisplay />

          <Section>
            {profileSections.map((section) => (
              <UserSection route={section.route} title={section.title} key={section.id} />
            ))}
          </Section>
        </Display>

        <Navbar />
      </Layout>
    </section>
  );
}
