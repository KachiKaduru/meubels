import styled from "styled-components";
import product1 from "../../data/images/product-1.png";
import BarHeader from "../../pages/BarHeader";
import BackButton from "../../ui/BackButton";

const StyledProduct = styled.div`
  padding: 2rem;
`;

export default function Product() {
  return (
    <StyledProduct>
      <BarHeader>
        <BackButton />
      </BarHeader>

      <div className="img-container">
        <img src={product1} alt="" />
      </div>
    </StyledProduct>
  );
}
