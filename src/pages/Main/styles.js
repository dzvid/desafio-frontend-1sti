import styled from 'styled-components';

export const Container = styled.main`
  max-width: 600px;
  margin: 0 auto 40px;

  header {
    margin: ${props =>
      props.isSmallTitle ? '24px auto 26px' : '90px auto 50px'};

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: ${props => (props.isSmallTitle ? '312.5%' : '420%')};
      font-weight: 700;
      color: #fff;
    }
  }

  @media only screen and (max-width: 480px) {
    header {
      margin: ${props =>
        props.isSmallTitle ? '20px 30px 20px' : '40px 50px 40px'};

      h1 {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        font-size: ${props => (props.isSmallTitle ? '125%' : '250%')};
        font-weight: 700;
        color: #fff;
      }
    }
  }
`;

export const WhiteRow = styled.hr`
  border: 0;
  background: #fff;
  height: 1px;
  margin: 0 auto;
`;

export const Form = styled.form`
  margin: ${props =>
    props.isSmallTitle ? '20px auto 40px' : '20px auto 60px'};
  height: 64px;

  padding: 16px 16px 16px 24px;

  border: 1px solid #d86c00;

  background-color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  input {
    font-size: 112.5%;
    font-weight: 300;

    border: 0;
    background: none;

    flex: 1;
  }

  input::placeholder {
    font-weight: 300;
    font-size: 112.5%;
  }

  @media only screen and (max-width: 480px) {
    margin: ${props =>
      props.isSmallTitle ? '14px auto 24px' : '14px auto 24px'};
    height: 40px;

    width: 90%;

    padding: 10px 18px 10px 22px;

    border: 1px solid #d86c00;

    background-color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    input {
      font-size: 75%;
      font-weight: 300;

      border: 0;
      background: none;

      flex: 1;
    }

    input::placeholder {
      font-weight: 300;
      font-size: 75%;
    }
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: none;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;

    color: #555;
  }
`;

export const FormWrapper = styled.section`
  margin: 0 auto;
  width: 90%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const CapitalsWrapper = styled.section`
  margin: 0 auto;
  width: 80%;

  h2 {
    font-size: 225%;
    color: #fff;
    font-weight: bold;
    margin: 20px auto 18px;
  }
`;
