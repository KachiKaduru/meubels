import styled from "styled-components";

const StyledItem = styled.div``;

export default function AddressItem() {
  return (
    <StyledItem>
      <p>
        <input type="checkbox" name="" id="" />
        use as the shipping address
      </p>

      <div className="addressCard">
        <header>
          <h4>Bruno Fernandes</h4>
          <img src="" alt="edit" />
        </header>

        <p>25 rue Robert Latouche, Nice, 06200, Côte D’azur, France</p>
      </div>
    </StyledItem>
  );
}
