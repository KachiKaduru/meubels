import styled from "styled-components";
import ProductItem from "./ProductItem";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); */

  gap: 1.5rem 2.1rem;
`;

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ProductsDisplay() {
  return (
    <>
      <h2>display</h2>
      <StyledDiv>
        {arr.map((item) => (
          <ProductItem key={item} />
        ))}
      </StyledDiv>
    </>
  );
}
