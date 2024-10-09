import styled from "styled-components";
import BarHeader from "../../ui/BarHeader";
import BackButton from "../../ui/BackButton";
import SearchComponent from "../../ui/SearchComponent";

const StyledPayments = styled.section``;

export default function Payments() {
  return (
    <StyledPayments>
      <BarHeader>
        <BackButton />
        <span>Payment Method</span>
        <SearchComponent />
      </BarHeader>
    </StyledPayments>
  );
}
