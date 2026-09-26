import Link from "next/link"
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 80px;
  align-items: center;
  background-color: white;
  top: 0px;
  right: 0px;
  left: 0px;
`;
export const Wrapper = styled.div`
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;

  @media (min-width: 275px) {
    margin-top: 15px;
  }
  @media (min-width: 360px) {
    padding-left: 20px;
  }
  @media (min-width: 768px) {
    margin-top: 8px;
  }
`;
export const Logo = styled.h4`
  font-weight: bold;
  cursor: pointer;
  color: #FC0000;

  @media (min-width: 275px) {
    font-size: 10px;
    width: 100px;
  }
  @media (min-width: 360px) {
    font-size: 15px;
    width: 150px;
  }
  @media (min-width: 768px) {
      width: 200px;
      font-size: 17px;
  }
  @media (min-width: 992px) {
      width: 200px;
      font-size: 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: #FC0000;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: 275px) {
    font-size: 12px;
  }
  @media (min-width: 360px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 17px;
  }
  @media (min-width: 992px) {
    font-size: 20px;
  }
`

export const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 360px) {
    padding-right: 0px;
  }
`;

export const Bar = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  color: #FC0000;
  text-align: center;

  &:hover{
    color: rgba(245, 64, 64);
  }

  @media (min-width: 275px) {
    font-size: 12px;
    width: 10vw;
  }
  @media (min-width: 360px) {
    font-size: 16px;
    width: 11vw;
    padding-right: 5px;
  }
  @media (min-width: 768px) {
    font-size: 17px;
    width: 10vw;
  }
  @media (min-width: 992px) {
    font-size: 20px;
  }
`
export const Bur = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  color: #FC0000;
  text-align: center;
  text-decoration: none;

  &:hover{
    color: rgba(245, 64, 64);
  }

  @media (min-width: 275px) {
    font-size: 12px;
    width: 10vw;
  }
  @media (min-width: 360px) {
    font-size: 16px;
    width: 11vw;
    padding-right: 5px;
  }
  @media (min-width: 768px) {
    font-size: 17px;
    width: 10vw;
  }
  @media (min-width: 992px) {
    font-size: 20px;
  }
`
