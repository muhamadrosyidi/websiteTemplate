'use client'

// Styled Component
import styled from "styled-components";

import {Container, Basket, Tuxt, ImageContainer, Image,
    Tixt, Judul, Isi, Tombol,
    Flow, Step, Model, ImageFlow,
    Caption, FlowCheck, Check, GambarContainer, Upper, Satu, GambarSatu,
    Dua, GambarDua, Tiga, GambarTiga, CaptionUpper, Lower, Empat, Paint,
    Lima, GambarLima, CaptionLower,
    FlowBiaya, StepBiaya, JudulBiaya, CaptionBiaya, ModelMobil, ImageMobil,
    Pesan
} from '../style/HomeStyle.js'

import {
  whatsapp,
  ImageHeadLine,
  FlowOrderOne,
  FlowOrderTwo,
  FlowOrderThree,
  FlowOrderFour,
  TermsOne,
  TermsTwo,
  TermsThree,
  TermsFour,
  TermsFive,
  Program1,
  Program2,
  Program3,
} from '../../Data/data.js'



const Home = () => {
  return (
    <Container>
      {/* ***************************HEADLINE*************************** */}
      <Basket>
            <Tuxt>
                <ImageContainer>
                    <Image src={ImageHeadLine} />
                    {/* <Image src='/Logo Web - Freepik.svg' /> */}
                </ImageContainer>
            </Tuxt>
            <Tixt>
                <Judul>
                    <h1>INSPECTION CAR SERVICES</h1>
                </Judul>

                <Isi>
                    <p>YOUR ONE STOP SOLUTION TO CHECK EX CAR, WHETHER IT IS STILL OK OR NOT</p>
                </Isi>
                <Tombol>
                    BOOKING
                </Tombol>
            </Tixt>
        </Basket>

        {/* ***************************FLOW ORDER*************************** */}
        <Flow>
            <Judul>
                <h1>FLOW ORDER</h1>
            </Judul>
            <Step>
                <Model>
                    <ImageFlow src={FlowOrderOne} />
                    <Caption>
                        01.
                        <br />
                        CLICK 'BOOKING' OPTION, for ordering our service.
                        Pay a down payment (10% of the total fee) and confirm your payment with our Customer Service.
                    </Caption>
                </Model>
                <Model>
                    <ImageFlow src={FlowOrderTwo} />
                    <Caption>
                        02.
                        <br />
                        Share your vehicle details and required inspection type with our CS team
                    </Caption>
                </Model>
                <Model>
                    <ImageFlow src={FlowOrderThree} />
                    <Caption>
                        03.
                        <br />
                        Our team is scheduled to inspect your vehicle at the agreed location and time
                    </Caption>
                </Model>
                <Model>
                    <ImageFlow src={FlowOrderFour} />
                    <Caption>
                        04.
                        <br />
                        You will receive your inspection report no later than 6 hours after the inspection is completed.
                    </Caption>
                </Model>
            </Step>
        </Flow>

        {/* ***************************TERMS AND CONDT********************* */}
        <FlowCheck>
            <Judul>
                <h1>CHECKING AREA</h1>
            </Judul>
            <Check>
                <Upper>
                    <Satu>
                        <GambarContainer>
                            <GambarSatu src={TermsOne} />
                        </GambarContainer>

                        <CaptionUpper>
                            01. EKSTERIOR
                            <br />
                            In this section, we inspect the vehicle’s exterior, including paint condition and other visual details
                        </CaptionUpper>
                    </Satu>
                    <Dua>
                        <GambarContainer>
                            <GambarDua src={TermsTwo} />
                        </GambarContainer>

                        <CaptionUpper>
                            02. INTERIOR
                            <br />
                            In this section, we conduct a thorough internal inspection, covering areas like car seats, flooring, and other essential details.
                        </CaptionUpper>
                    </Dua>
                    <Tiga>
                        <GambarContainer>
                            <GambarTiga src={TermsThree} />
                        </GambarContainer>

                        <CaptionUpper>
                            03. FRAME
                            <br />
                            In this section, we inspect the vehicle's suspension system and related components to ensure optimal performance and safety.
                        </CaptionUpper>
                    </Tiga>
                </Upper>
                <Lower>
                    <Empat>
                        <GambarContainer>
                            <Paint src={TermsFour} />
                        </GambarContainer>

                        <CaptionLower>
                            04. MESIN
                            <br />
                            In this section, we inspect the engine health, electrical system, and other essential components..
                        </CaptionLower>
                    </Empat>
                    <Lima>
                        <GambarContainer>
                            <GambarLima src={TermsFive} />
                        </GambarContainer>

                        <CaptionLower>
                            05. DOKUMEN
                            <br />
                            In this section, we verify the completeness and validity of the vehicle's documents
                        </CaptionLower>
                    </Lima>
                </Lower>
            </Check>
        </FlowCheck>


        {/* *********************************PRICING************************ */}
        <FlowBiaya>
            <JudulBiaya>
                <h1>Price</h1>
                <CaptionBiaya>
                    *The Basic Package includes inspections of the exterior, interior, chassis, engine, and transmission
                    <br />
                    **The Full Package includes everything in the Basic Package, plus OBD Diagnostics and a Repair Cost Estimate
                </CaptionBiaya>
            </JudulBiaya>
            <StepBiaya>
                <ModelMobil>
                    <ImageMobil src={Program1} />
                    <CaptionBiaya>
                        The Basic Package* : Rp 275.000,-
                        <br />
                        The Full Package** : Rp 325.000,-
                    </CaptionBiaya>
                    <Pesan onClick={(e)=>{
                        e.preventDefault();
                        window.location.href = {whatsapp}}}
                        >
                        BOOKING
                    </Pesan>
                </ModelMobil>
                <ModelMobil>
                    <ImageMobil src={Program2} />
                    <CaptionBiaya>
                        The Basic Package* : Rp 325.000,-
                        <br />
                        The Full Package** : Rp 375.000,-
                    </CaptionBiaya>
                    <Pesan onClick={(e)=>{
                        e.preventDefault();
                        window.location.href = {whatsapp}}}
                        >
                        BOOKING
                    </Pesan>
                </ModelMobil>
                <ModelMobil>
                    <ImageMobil src={Program3} />
                    <CaptionBiaya>
                        The Basic Package* : Rp 375.000,-
                        <br />
                        The Full Package** : Rp 425.000,-
                    </CaptionBiaya>
                    <Pesan onClick={(e)=>{
                        e.preventDefault();
                        window.location.href = {whatsapp}}}
                        >
                        BOOKING
                    </Pesan>
                </ModelMobil>
            </StepBiaya>
        </FlowBiaya>
    </Container>
  )
}

export default Home
