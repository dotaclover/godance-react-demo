import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

interface MobileMenuIconProps {
  openMenu: () => void;
}

const MobileMenuIcon: React.FC<MobileMenuIconProps> = ({ openMenu }) => (
  <IconButton
    icon={<FaBars size="24px" />} // 调整图标大小
    variant="outline"
    aria-label="Open Menu"
    onClick={openMenu}
    fontSize="24px" // 调整图标按钮的字体大小
  />
);

export default MobileMenuIcon;
