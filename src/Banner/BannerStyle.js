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
`;

export const BannerTitle = styled.h1`
  font-size: 72px;
  font-weight: 700px;
  color: white;
  margin: 274px 0 28px 0;
`;

export const BannerSubtitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  color: white;
`;

export const BannerSubText = styled.p`
  font-weight: 300;
  font-size: 22px;
  color: white;
  margin-bottom: 4px;
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
`;

export const BannerButtonChevronDown = styled(Img)`
  width: 24px;
  height: 28px;
  color: #f2f1f1;
`;
