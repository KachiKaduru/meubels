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
import { getProfileEmail, getProfileName } from "../services/apiProfiles";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getUserId } from "../utils/helpers";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-bottom: 2rem;

  @media (min-width: 767px) {
    gap: 2.5rem;
  }
`;

export async function loader() {
  const user_id = store.getState().user.user_id;

  if (!user_id) {
    return null;
  } else {
    const username = await getProfileName(user_id);
    const userEmail = await getProfileEmail(user_id);
    return { username, userEmail };
  }
}

export default function Profile() {
  const loaderData = useLoaderData();
  const username = loaderData?.username;
  const userEmail = loaderData?.userEmail;
  const userId = getUserId();
  const navigate = useNavigate();

  return (
    <section>
      <Layout>
        <BarHeader>
          <BackButton />
          <h4>Profile</h4>
          <SearchComponent />
        </BarHeader>

        <Display>
          <UserDisplay username={username} userEmail={userEmail} />

          {!userId ? (
            <div>
              <p>It seems you're not logged in yet 😢</p>
              <p>
                <Link to="/login">Log into your account here</Link>
              </p>

              <span>OR</span>

              <p>
                <Link to="/signup">Sign up if you don't have an account</Link>
              </p>
            </div>
          ) : (
            <Section>
              {profileSections.map((section) => (
                <UserSection route={section.route} title={section.title} key={section.id} />
              ))}
            </Section>
          )}
        </Display>

        <Navbar />
      </Layout>
    </section>
  );
}
