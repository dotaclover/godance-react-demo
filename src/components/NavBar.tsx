import React, { useEffect, useState } from "react";
import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import MobileMenuIcon from "../components/MobileMenuIcon";
import MobileMenu from "../components/MobileMenu";

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  // 监听窗口大小变化的副作用
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="contain" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
      {isMobile && (
        <>
          <MobileMenuIcon openMenu={openMenu} />
          <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
        </>
      )}
    </HStack>
  );
};

export default NavBar;
