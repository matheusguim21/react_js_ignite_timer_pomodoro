import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  background-color: ${props => props.theme["gray-800"]};
  height: calc(100vh - 10rem) ;
  margin: 5rem auto;
  padding: 2.5rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

`
