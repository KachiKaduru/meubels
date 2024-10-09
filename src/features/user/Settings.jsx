import styled from "styled-components";
import BarHeader from "../../ui/BarHeader";
import BackButton from "../../ui/BackButton";

const StyledSettings = styled.div``;

export default function Settings() {
  return (
    <StyledSettings>
      <BarHeader>
        <BackButton />
        <span>Settings</span>
      </BarHeader>
    </StyledSettings>
  );
}
