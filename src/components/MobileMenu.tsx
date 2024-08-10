import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import GenreList from "./GenreList";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu }) => (
  <Drawer isOpen={isOpen} placement="right" onClose={closeMenu}>
    {" "}
    {/* 右边弹出 */}
    <DrawerOverlay />
    <DrawerContent maxW="200px">
      <DrawerCloseButton />
      {/* <DrawerHeader>Genres</DrawerHeader> */}
      <DrawerBody>
        <GenreList onClose={closeMenu} />
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default MobileMenu;
