import styled from "styled-components";
import { profileSections } from "../data/profileArray";
import UserDisplay from "../features/user/UserDisplay";
import UserSection from "../features/user/UserSection";
import BackButton from "../ui/BackButton";
import SearchComponent from "../ui/SearchComponent";
import BarHeader from "./BarHeader";

const Section = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default function Profile() {
  return (
    <div>
      <BarHeader>
        <BackButton />
        <span>Profile</span>
        <SearchComponent />
      </BarHeader>

      <UserDisplay />

      <Section>
        {profileSections.map((section) => (
          <UserSection route={section.route} title={section.title} key={section.id} />
        ))}
      </Section>
    </div>
  );
}
