import styled from "styled-components";
import logo from "../img/logo.png";
import whiteLogo from "../img/logoWhite.png"
import { ModeUISwitch } from "../styles/base";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { sections } from "../config/sections";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9.6rem;
  padding: 0 4.8rem;
  position: relative;
`;

const LogoImage = styled.img`
  height: 5rem;
`;

const MainNav = styled.nav`
  z-index: 20;
  @media (max-width: 59em) {
    background-color: ${({ theme }) => theme.body};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.menuOpen ? 1 : 0)};
    visibility: ${(props) => (props.menuOpen ? "visible" : "none")};
    transform: translateX(${(props) => (props.menuOpen ? "0" : "100%")});
    pointer-events: ${(props) => (props.menuOpen ? "auto" : "none")};
    transition: all 0.5s ease-out;
  }
`;

const MainNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  .navCta:link,
  .navCta:visited {
    padding: 1.2rem 2.4rem;
    border-radius: 9px;
    color: ${({ theme }) => theme.textSecondary};
    background-color: ${({ theme }) => theme.background};
  }
  .navCta:hover,
  .navCta:active {
    background-color: ${({ theme }) => theme.background};
  }
  @media (max-width: 59em) {
    flex-direction: column;
    gap: 4.8rem;
  }
  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      color: ${(props) => (props.isBlack ? "black" : "white")};
      font-weight: 600;
      font-size: 1.8rem;
      transition: all 0.3s;
    }
    &:hover,
    &:active {
      color: ${({ theme }) => theme.background};
      
    }
    @media (max-width: 59em) {
      &:link,
      &:visited {
        color: black;
      }
      &:hover,
      &:active {
        color: black;
      }
    }
  }
`;

const MainNavLink = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.headerText};
    font-weight: 600;
    font-size: 1.8rem;
    transition: all 0.3s;
  }
  &:hover,
  &:active {
    color: ${({ theme }) => theme.background};
  }
  @media (max-width: 59em) {
    &:link,
    &:visited {
      color: ${({ theme }) => theme.text};
    }
    &:hover,
    &:active {
      color: ${({ theme }) => theme.text};
    }
  }
`;

const MobileNavButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: none;
  @media (max-width: 59em) {
    display: block;
    z-index: 9999;
  }
`;

export default function Navigation({ isBlack }) {
  const [isNavOpen, setNavOpen] = useState(false);
  
  return (
    <>
      <Header>
        <LogoImage alt="logo" src={isBlack ? logo : whiteLogo} />
        <MainNav menuOpen={isNavOpen} className={classNames({ navOpen: false })}>
          <MainNavList isBlack={isBlack}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/privacy">Privacy</NavLink>
            </li>
            <li>
              <NavLink to="/support">Contact</NavLink>
            </li>
          </MainNavList>
        </MainNav>
        <MobileNavButton>
          <FontAwesomeIcon
            name="closedMenu"
            icon={faXmarkCircle}
            size="2x"
            className={classNames(
              { iconNoDisplay: !isNavOpen },
              "closeNavMenuIcon"
            )}
            onClick={() => {
              setNavOpen(false);
            }}
          />
          <FontAwesomeIcon
            name="openMenu"
            icon={faBars}
            className={classNames(
              { iconNoDisplay: isNavOpen, navMenuWhiteIcon: !isBlack, navMenuBlackIcon: isBlack },
              
            )}
            size="2x"
            onClick={() => {
              setNavOpen(true);
            }}
          ></FontAwesomeIcon>
        </MobileNavButton>
      </Header>
    </>
  );
}
