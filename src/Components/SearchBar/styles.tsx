import styled from 'styled-components';

type InputProps = {
  icon: string;
};

export const Input = styled.input<InputProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  width: 35%;
  min-width: 200px;
  height: 40px;
  margin: 16px 0 16px;
  padding: 8px 14px 8px 44px;
  border-radius: 6px;
  border: none;
  background: url(${(props) => props.icon}) no-repeat scroll 16px 7px;
  background-color: #ffffff;
`;
