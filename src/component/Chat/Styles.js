import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  align-items: center;
  background-color: white;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid #919191;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

export const MessageDiv = styled.input`
  width: 78%;
  height: 30px;
  border-radius: 10px;
  padding: 5px;
  padding-left: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid #919191;
  outline: none;
  color: black;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: gray;
  }
`;

export const Button = styled.button`
  background-color: #0066FF;
  width: 17%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 17px;
`;

export const Form = styled.form`
  width: 400px;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const MyMessage = styled.div`
  width: fit-content;
  background-color: #43655A;
  color: white;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-radius: 10px;
`;

export const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

export const PartnerMessage = styled.div`
  width: fit-content;
  background-color: #7B7485;
  color: white;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-radius: 10px;
`;