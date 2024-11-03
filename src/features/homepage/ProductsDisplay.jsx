import styled from "styled-components";
import ProductItem from "./ProductItem";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1.5rem 2.1rem;

  @media (min-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  }
`;

export default function ProductsDisplay({ products }) {
  return (
    <>
      <h2>display</h2>
      <StyledDiv>
        {products?.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </StyledDiv>
    </>
  );
}
