import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;
    color: #10375c;
  }

  div {
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 250px;
      margin-top: 20px;
      align-items: center;
      padding: 20px;
      border-radius: 4px;
      background: #fff;

      input {
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        margin: 0 0 10px;
      }

      button {
        padding: 10px;
        height: 44px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 13px;
      }
    }
  }

  > h2 {
    text-align: center;
    color: #10375c;
    margin-top: 20px;
  }

  hr {
    margin-top: 20px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Servicos = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  strong {
    display: block;
    color: #303960;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #666;
  }
`;
