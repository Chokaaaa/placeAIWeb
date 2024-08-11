import mockup from "../img/mockup.png";
import styled from "styled-components";
import blob from "../img/blob.svg";
import googlebadge from "../img/googlebadge.svg";
import appstorebadge from "../img/appstorebadge.svg";
import { heroSection } from "../config/heroSection";
import classNames from "classnames";
import Navigation from "./Navigation";

const HeroSection = styled.section`
  min-height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.primary};
`;

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.headerText};
  font-weight: 600;
  letter-spacing: -0.5px;
  font-size: 7.2rem;
  line-height: 1.05;
  margin-bottom: 6.2rem;
  span {
    color: ${({ theme }) => theme.tertiary};
  }
`;

const HeroWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
  }
  .shapeFill {
    fill: ${({ theme }) => theme.body};
  }
`;

const HeroBox = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  margin-bottom: 15rem;
  padding: 4.8rem 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 8rem;
  @media (max-width: 71em) {
    grid-template-columns: 1fr;
    padding: 0 8rem;
    gap: 6.4rem;
    text-align: center;
  }
`;

const HeroTextBox = styled.div`
  color: ${({ theme }) => theme.headerText};
  @media (max-width: 71em) {
    margin-top: 6rem;
    text-align: center;
  }
`;

const HeroDescription = styled.p`
  color: ${({ theme }) => theme.headerText};
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
`;

const HeroImage = styled.img`
  width: 100%;
  @media (max-width: 71em) {
    width: 80%;
  }
`;

const HeroImageBox = styled.div`
  background-image: url(${blob});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: left;
  gap: 2rem;
  .halfWidth {
    text-align: left;
    width: 50%;
  }
  @media (max-width: 71em) {
    justify-content: center;
    .rightAlign {
      text-align: right;
    }
    .leftAlign {
      text-align: left;
    }
    .threeQuarterWidth {
      width: 30%;
    }
    .halfWidth {
      text-align: center;
      width: 60%;
    }
  }
  @media (max-width: 48em) {
    .threeQuarterWidth {
      width: 40%;
    }
  }
`;

const HeroButtonImg = styled.img`
  width: 100%;
  height: auto;
`;

const HeroButton = styled.a`
  width: 100%;
  &,
  &:link,
  &:visited {
    cursor: pointer;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroBox>
        <HeroTextBox>
          <HeroTitle>{heroSection.headingText}</HeroTitle>
          <HeroDescription>{heroSection.descriptionText}</HeroDescription>
          <HeroButtons>
          <HeroButton
                href={heroSection.appStoreButton.url}
                className={classNames({
                  leftAlign: true,
                  halfWidth: true,
                })}
              >
                <HeroButtonImg src={appstorebadge} />
              </HeroButton>
          </HeroButtons>
        </HeroTextBox>
        <HeroImageBox>
          <HeroImage src={mockup} alt="Mockup" />
        </HeroImageBox>
      </HeroBox>
    </HeroSection>
  );
}
