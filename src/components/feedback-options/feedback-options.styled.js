import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
`;
export const OptionList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const Option = styled.button`
    :hover{
        background-color: navy;
        color: white;
    }
`
export const Header = styled.p`
  font-size: 32px;
  text-align: center;
`;