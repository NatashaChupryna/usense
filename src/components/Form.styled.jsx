import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20%;
`;
export const InputForm = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
`;

export const Input = styled.input`
  width: 280px;
  border-radius: 10px;
  height: 18px;
  padding: 4px 10px;
`;

export const Wrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  gap: 5px;
  justify-content: center;
  padding: 5px;
`;
export const StatusCard = styled.div`
  width: 33%;
  height: 20px;
  padding: 12px;
  color: black;
  text-align: center;
  font-size: 14px;
`;

export const EyeIcon = styled.button`
  position: absolute;
  border: none;
  top: 90px;
  right: 0;
  width: 30px;
  height: 30px;
  background: transparent;
  outline: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
`;
