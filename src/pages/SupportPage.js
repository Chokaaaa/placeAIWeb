import ContactUs from "../components/Contact";
import MinNavigation from "../components/MinNavigation";
import Navigation from "../components/Navigation";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-top: 9.6rem;
`;

export default function SupportPage({ theme }) {
  return (
    <>
     <Navigation isBlack={true} theme={theme} />
      <Wrapper>
        <ContactUs />
      </Wrapper>
    </>
  );
}
