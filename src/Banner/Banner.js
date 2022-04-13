import {
  BannerContainer,
  BannerOverlay,
  BannerContent,
  BannerTitle,
  BannerSubtitle,
  BannerSubText,
  BannerButton,
  BannerButtonChevronDown,
} from "./BannerStyle";

export const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerOverlay>
          <BannerContent>
            <div>
              <BannerTitle> Yullie Lima.</BannerTitle>
              <BannerSubtitle>Front-end developer.</BannerSubtitle>
              <BannerSubText>Architect.</BannerSubText>
              <BannerSubText>Journalist.</BannerSubText>
              <BannerSubText>Sous Chef.</BannerSubText>
            </div>
            <BannerButton>
              <BannerButtonChevronDown />
            </BannerButton>
          </BannerContent>
        </BannerOverlay>
      </BannerContainer>
    </>
  );
};
