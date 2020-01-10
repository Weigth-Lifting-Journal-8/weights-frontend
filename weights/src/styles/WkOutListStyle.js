import styled from "styled-components";
export const NavLinkDivStyle = styled.div`
  color: white;
  border: 2px solid #fc9538;
  margin: 0 auto;
  width: 5%;
  margin: 0 auto;
  border-radius: 25px;
  padding: 0.4%;
  background: #fffc00; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #785cb4,
    #e0960b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #785cb4,
    #e0960b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const TitleList = styled.h1`
  color: white;
  text-shadow: 2px 2px #e09106;
`;

export const SearchBar = styled.form`
  margin: 0 auto;
  }
`;

export const SearchBarInput = styled.input`
  outline: none;
  width: 30%;
  border-radius: 10px;
  height: 35px;
  font-size: 20px;
  background-color: white;
  background-size: 20px;
  border: none;
  padding-left: 30px;
`;
