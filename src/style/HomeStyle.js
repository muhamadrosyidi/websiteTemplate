import styled from "styled-components";


export const Container = styled.div`
`

// Style untuk Headline ****************************************************************
export const Basket = styled.div`
    background-color: white;
    display: flex;

    @media (min-width: 275px) {
        height: 180vw;
    }
    @media (min-width: 360px) {
        height: 150vw;
        flex-direction: row;
    }
    @media (min-width: 576px) {
        height: 60vw
    }
    @media (min-width: 768px) {
        height: 50vw;
    }
    @media (min-width: 992px) {
        height: 58vw;
    }
    @media (min-width: 1200px) {
        height: 48vw;
    }
`
export const Tuxt = styled.div`
    @media (min-width: 275px) {
        diplay: none;
    }
    @media (min-width: 360px) {
        display: none;
    }
    @media (min-width: 576px) {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5vw;
    }
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vw;
    width: 50vw;

    @media (min-width: 275px) {
        display: none;
    }
    @media (min-width: 360px) {
        display: none;
    }
    @media (min-width: 576px) {
        display: flex;
        justify-content: center;
        height: 30px;
    }
`
export const Image = styled.img`

    @media (min-width: 360px) {
        width: 100%;
    }
    @media (min-width: 576px) {
        width: 100%;
    }
    @media (min-width: 768px) {
        width: 100%;
    }
    @media (min-width: 992px) {
       width: 100%;
    }
`
export const Tixt = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const Judul = styled.div`
    padding-top: 10px;
    padding-bottom: 5px;
    align-item: center;
    justify-content: center;
    display: flex;
    color: #FC0000;
    flex-direction: column;
    text-align: center;

    @media (min-width: 275px) {
        font-size: 10px;
    }
    @media (min-width: 360px) {
        font-size: 10px;
    }
    @media (min-width: 768px) {
        font-size: 20px;
        font-weight: bold;
    }
    @media (min-width: 992px) {
        gap: 5px;
    }
`
export const Isi = styled.div`
    text-align: center;
    color: #FC0000;
    padding-top: 5px;
    padding-bottom: 10px;


    @media (min-width: 275px) {
        width: 80vw;
        font-size: 10px;
    }
    @media (min-width: 360px){
        width: 70vw;
        font-size: 15px;
    }
    @media (min-width: 576px){
        width: 45vw;
        font-size: 15px;
    }
    @media (min-width: 768px) {
        width: 48vw;
        font-size: 15px;
    }
    @media (min-width: 992px) {
        width: 45vw;
    }
`
export const Tombol = styled.button`
    border-radius : 20px;
    background-color: #FC0000;
    color: white;
    padding: 8px;
    pointer: cursor;

    &:hover{
        background-color: rgba(245, 64, 64);
    }
    @media (min-width: 360px) {
        font-size: 4vw;
        width: 40vw;
    }
    @media (min-width: 576px) {
        font-size: 13px;
        width:18vw;
    }
    @media (min-width: 768px) {
        font-size: 20px;
        width:20vw;
    }
    @media (min-width: 992px) {
        font-size: 20px;
        width: 20vw;
    }
`

// Style untuk Alur Pemesanan *********************************************************
export const Flow = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 275px) {
        flex-direction: column;
    }
    @media (min-width: 360px) {
        height: 400vw;
        flex-direction: column;
    }
    @media (min-width: 512px) {
        height: 330vw;
    }
    @media (min-width: 576px) {
        height: 50vw;
        flex-direction: column;
        gap: 10px;
    }
    @media (min-width: 768px) {
        height: 50vw;
        flex-direction: column;
    }
    @media (min-width: 992px) {
        height: 40vw;
        flex-direction: column;
    }
    @media (min-width: 1200px) {
        height: 35vw;
        flex-direction: column;
    }
`
export const Step = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px 25px;
    justify-content: space-around;

    @media (min-width: 275px) {
        flex-direction: column;
    }
    @media (min-width: 360px) {
        flex-direction: column;
        gap: 15px;
    }
    @media (min-width: 576px) {
        flex-direction: row;
        gap: 5px;
    }
    @media (min-width: 768px) {
        flex-direction: row;
    }
`
export const Model = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`
export const ImageFlow = styled.img`
    @media (min-width: 275px) {
        width: 80%;
    }
    @media (min-width: 360px) {
        width: 80%;
    }
    @media (min-width: 576px) {
        width: 80%;
    }
    @media (min-width: 768px) {
        width: 80%;
    }
    @media (min-width: 992px) {
       width: 80%;
    }
`
export const Caption = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    color: #FC0000;

    @media (min-width: 275px) {
        font-size: 10px;
    }
    @media (min-width: 360px) {
        font-size: 18px;
    }
    @media (min-width: 576px) {
        font-size: 10px;
    }
    @media (min-width: 992px) {
        font-size: 13px;
    }
`

// Style untuk Area Check **************************************************************
export const FlowCheck = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 275px) {
        height: 500vw;
        gap: 30px;
        padding: 0px;
    }
    @media (min-width: 360px) {
        height: 410vw;
        gap: 70px;
        padding: 0px;
    }
    @media (min-width: 512px) {
        height: 310vw;
        padding: 10px 50px;
    }
    @media (min-width: 576px) {
        height: 80vw;
        padding: 10px 50px;
        gap: 45px;
    }
    @media (min-width: 768px) {
        height: 78vw;
        padding: 10px 40px;
    }
    @media (min-width: 992px) {
        height: 55vw;
        padding: 10px 40px;
    }
`
export const Check = styled.div`
    @media (min-width: 275px) {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    @media (min-width: 360px) {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    @media (min-width: 576px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 992px) {
        display: flex;
        flex-direction: column;
    }
`;
export const GambarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Upper = styled.div`
    display: flex;
    justify-content: space-around;

    @media (min-width: 275px) {
        flex-direction: column;
        gap: 30px;
        padding: 0px;
    }
    @media (min-width: 360px) {
        flex-direction: column;
        gap: 50px;
        padding: 0px;
    }
    @media (min-width: 576px) {
        flex-direction: row;

        padding: 10px 20px;
    }
    @media (min-width: 768px) {
        flex-direction: row;
        padding: 10px 20px;
    }
    @media (min-width: 992px) {
        flex-direction: row;
        padding: 20px 50px;
        gap: 10px;
    }
`;

export const Satu = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`
export const GambarSatu = styled.img`
    height: auto;
    width: 50%;
`

export const Dua = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`
export const GambarDua = styled.img`
    width: 28%;
`

export const Tiga = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const GambarTiga = styled.img`
    width: 45%;
`
export const CaptionUpper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    color: #FC0000;

    @media (min-width: 360px) {
        font-size: 18px;
        width: 90vw;
    }
    @media (min-width: 576px) {
        font-size: 10px;
        width: 150px;
    }
    @media (min-width: 992px) {
        font-size: 13px;
        width: 250px;
    }
`

export const Lower = styled.div`
    display: flex;
    justify-content: space-around;

    @media (min-width: 275px) {
        flex-direction: column;
        gap: 30px;
        padding: 0px;
    }
    @media (min-width: 360px) {
        flex-direction: column;
        gap: 50px;
        padding: 0px 0px;
    }
    @media (min-width: 576px) {
        flex-direction: row;
        padding: 10px 100px;
    }
    @media (min-width: 768px) {
        flex-direction: row;
        padding: 10px 100px;
    }
    @media (min-width: 992px) {
        flex-direction: row;
        padding: 10px 100px;
    }
`;
export const Empat = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const Paint = styled.img`
    width: 30%;
`

export const Lima = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const GambarLima = styled.img`
    width: 50%;
`
export const CaptionLower = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    color: #FC0000;

    @media (min-width: 360px) {
        font-size: 18px;
        width: 90vw;
    }
    @media (min-width: 576px) {
        font-size: 10px;
        width: 150px;
    }
    @media (min-width: 992px) {
        font-size: 13px;
        width: 250px;
    }
`


// Style untuk Biaya *******************************************************************
export const FlowBiaya = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 275px) {
        flex-direction: column;
        height: 280vw;
        gap: 45px;
    }
    @media (min-width: 360px) {
        height: 250vw;
        flex-direction: column;
    }
    @media (min-width: 512px) {
        height: 200vw;
    }
    @media (min-width: 576px) {
        height: 50vw;
        flex-direction: column;
        gap: 10px;
    }
    @media (min-width: 768px) {
        height: 50vw;
        flex-direction: column;
    }
    @media (min-width: 992px) {
        height: 45vw;
        flex-direction: column;
        gap: 30px;
    }
    @media (min-width: 1200px) {
        height: 35vw;
        flex-direction: column;
        gap: 30px;
    }
`
export const StepBiaya = styled.div`
    display: flex;
    justify-content: space-around;

    @media (min-width: 275px) {
        flex-direction: column;
        gap: 50px;
    }
    @media (min-width: 360px) {
        flex-direction: column;
        gap: 40px;
    }
    @media (min-width: 576px) {
        flex-direction: row;
        gap: 5px;
    }
    @media (min-width: 768px) {
        flex-direction: row;
    }
`
export const JudulBiaya = styled.div`
    padding-top: 10px;
    padding-bottom: 5px;
    align-item: center;
    justify-content: center;
    display: flex;
    color: #FC0000;

    text-align: center;

    @media (min-width: 275px) {
        font-size: 10px;
        flex-direction: column;
    }
    @media (min-width: 360px) {
        font-size: 10px;
        flex-direction: column;
    }
    @media (min-width: 768px) {
        font-size: 20px;
        flex-direction: column;
        gap: 5px;
    }
    @media (min-width: 992px) {
        gap: 5px;
        flex-direction: column;
    }
`
export const CaptionBiaya = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FC0000;

    @media (min-width: 275px) {
        font-size: 10px;
    }
    @media (min-width: 360px) {
        font-size: 13px;
    }
    @media (min-width: 512px) {
        font-size: 13px;
    }
    @media (min-width: 576px) {
        font-size: 10px;
    }
    @media (min-width: 768px) {
        font-size: 13px;
    }
    @media (min-width: 992px) {
        font-size: 13px;
    }
`
export const ModelMobil = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 275px) {
        gap: 13px;
    }
    @media(min-width: 360px) {
        gap: 10px;
    }
    @media(min-width: 992px) {
        gap: 15px;
    }
`
export const ImageMobil = styled.img`

    @media (min-width: 275px) {
        width: 50%;
    }
    @media (min-width: 360px) {
        width: 50%;
    }
    @media (min-width: 576px) {
        width: 50%;
    }
    @media (min-width: 768px) {
        width: 30%;
    }
    @media (min-width: 992px) {
       width: 50%;
    }
`
export const Pesan = styled.button`
    border-radius : 20px;
    background-color: #FC0000;
    color: white;
    padding: 8px;
    pointer: cursor;

    &:hover{
        background-color: rgba(245, 64, 64);
    }

    @media (min-width: 275px) {
        font-size: 10px;
        width: 30vw;
    }
    @media (min-width: 360px) {
        font-size: 13px;
        width: 30vw;
    }
    @media (min-width: 576px) {
        font-size: 13px;
        width:18vw;
    }
    @media (min-width: 768px) {
        font-size: 15px;
        width: 18vw;
    }
    @media (min-width: 992px) {
        font-size: 13px;
        width: 10vw;
    }
`
