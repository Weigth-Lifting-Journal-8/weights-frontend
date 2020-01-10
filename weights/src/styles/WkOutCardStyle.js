import styled from "styled-components";

export const WkCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  color: #35373b;
  border-radius: 15px;
  box-shadow: 0px 10px 10px #85639d;
  margin: 15px 0;
  padding: 0 15px;
  background: #ffd700; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffd700,
    #e18e02,
    #deac27
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffd700,
    #e18e02,
    #deac27
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 1%;
`;
export const WorkoutHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0;

  name-date-edit {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;

    name-edit {
      display: flex;
      flex-direction: row;
      width: 70%;
    }
    icons-name {
      width: 25px;
      margin: auto 20px;
    }
  }
`;

export const WkOutExercises = styled.div`
  font-size: 1.2rem;
  padding: 20px 0;
  border-top: 1px solid rgb(255, 106, 37);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// Gold: rgb(255, 217, 0)
// Orange: rgb(255, 106, 37)
// lightgray: rgb(233, 233, 233)
// white: rgb(255, 255, 255)
// font: https://fonts.google.com/specimen/Russo+One
