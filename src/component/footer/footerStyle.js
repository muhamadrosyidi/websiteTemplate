import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #FC0000;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;

    @media (min-width: 275px){
        width : 100%;
    };
    @media (min-width: 360px){
        width : 100%;
    }
`;

export const Logo = styled.h1`
    color: white;
`;

export const Desc = styled.p`
    margin: 10px 0px;
    color: white;
    text-align: center;
`;

export const SocialContainer = styled.div`
    display: flex;
`;

export const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;