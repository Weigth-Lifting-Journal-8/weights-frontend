import styled from "styled-components";

export const Navigation = styled.div`
  width: 100%;
  background: #4ac29a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #bdfff3,
    #4ac29a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #bdfff3,
    #4ac29a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin: 0 auto;
  border-top: 3px black outset;
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  position: fixed;
  bottom: 0;
`;
