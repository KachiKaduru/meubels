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
import store from "../store";
import { getProfileName } from "../services/apiProfiles";
import { useLoaderData } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export async function loader() {
  const user_id = store.getState().user.user_id;

  if (!user_id) return null;

  const username = await getProfileName(user_id);
  return { username };
}

export default function Profile() {
  const { username } = useLoaderData();

  return (
    <section>
      <Layout>
        <BarHeader>
          <BackButton />
          <h4>Profile</h4>
          <SearchComponent />
        </BarHeader>

        <Display>
          <UserDisplay username={username} />

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
