import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import MockupCarousel from "../components/MockupCarousel";
import ContactUs from "../components/Contact";
import styled from "styled-components";
import LightenDarkenColor from "../utility/LightenDarken";
import { sections } from "../config/sections";
import { aboutSection } from "../config/aboutSection";

const HeaderWrapper = styled.div`
  background: ${({ theme }) => theme.primary};
`;

export default function HomePage({ theme, changeTheme }) {
  return (
    <>
      <HeaderWrapper>
        <Navigation isBlack={false} theme={theme} />
        <Hero />
      </HeaderWrapper>
    </>
  );
}
