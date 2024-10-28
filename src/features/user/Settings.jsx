import { useLoaderData } from "react-router-dom";
import { getUserId } from "../../utils/helpers";
import { getProfile } from "../../services/apiProfiles";
import styled from "styled-components";

import BarHeader from "../../ui/BarHeader";
import BackButton from "../../ui/BackButton";
import Display from "../../ui/Display";
import Modal from "../../ui/Modal";
import { useState } from "react";

const StyledSettings = styled.div`
  position: relative;

  .personal-info,
  .logout {
    display: grid;
    gap: 1.5rem;

    aside {
      padding: 0.3rem 1.2rem;
      display: grid;
      gap: 3rem;

      div {
        border-radius: 1rem;
        box-shadow: 0 0px 2rem 1px #c4c4c4;
        padding: 1rem;
      }

      p {
        font-size: 1.4rem;
      }

      h4 {
        font-weight: 600;
        font-size: 1.6rem;
      }
    }

    .logout-div {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const StyledHeading = styled.h5`
  color: var(--grey-color);
  font-size: 1.6rem;
  font-weight: 600;
`;

export async function loader() {
  const userId = getUserId();
  if (!userId) return;

  const userProfile = await getProfile(userId);

  return { userProfile };
}

export default function Settings() {
  const { userProfile } = useLoaderData();
  const { name, email } = userProfile;
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <StyledSettings>
      <BarHeader>
        <BackButton />
        <h4>Settings</h4>
      </BarHeader>

      <Display>
        <div className="personal-info">
          <Heading>Personal Information</Heading>
          <aside>
            <div>
              <p>Name</p>
              <h4>{name}</h4>
            </div>

            <div>
              <p>Email</p>
              <h4>{email}</h4>
            </div>
          </aside>
        </div>

        <div className="logout">
          <Heading>Account</Heading>
          <aside>
            <div className="logout-div" onClick={handleOpen}>
              <h4>Logout</h4>
              <span> &rarr;</span>
            </div>
          </aside>
        </div>
      </Display>
      {open && <Modal handleOpen={handleOpen} />}
    </StyledSettings>
  );
}

function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}
