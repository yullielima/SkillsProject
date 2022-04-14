import styled from "styled-components";
import Background from "./BannerImg.png";
import { ReactComponent as Img } from "./chevronDown.svg";

export const BannerContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
`;

export const BannerOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.63);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerContent = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  padding: 0 75px 0 75px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 62px 0 62px;
  }

  @media (max-width: 414px) {
    padding: 0 21px 0 21px;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 72px;
  font-weight: 700px;
  color: white;
  margin: 274px 0 28px 0;

  @media (max-width: 768px) {
    font-size: 66px;
    margin-top: 186px;
  }

  @media (max-width: 414px) {
    font-size: 42px;
    margin: 191px 0 10px 0;
  }
`;

export const BannerSubtitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  color: white;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 414px) {
    font-size: 24px;
  }
`;

export const BannerSubText = styled.p`
  font-weight: 300;
  font-size: 22px;
  color: white;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 414px) {
    font-size: 15px;
  }
`;

export const BannerButton = styled.button`
  background-color: #534946;
  border-radius: 50%;
  bottom: 49px;
  width: 51px;
  height: 51px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover {
    background-color: #2d2928;

    & svg {
      color: #59adb2;
    }
  }

  @media (max-width: 768px) {
    bottom: 23px;
  }

  @media (max-width: 414px) {
    bottom: 12px;
    width: 35px;
    height: 35px;
  }
`;

export const BannerButtonChevronDown = styled(Img)`
  width: 24px;
  height: 28px;
  color: #f2f1f1;

  @media (max-width: 414px) {
    width: 16.47px;
    height: 19.22px;
  }
`;
