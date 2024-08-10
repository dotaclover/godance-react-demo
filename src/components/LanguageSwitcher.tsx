// src/components/LanguageSwitcher.tsx
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FaGlobe, FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<FaGlobe />}
        aria-label="Language Menu"
        variant="outline"
      />
      <MenuList>
        <MenuItem onClick={() => changeLanguage("en")}>
          <HStack>
            <Text>English</Text>
            {currentLanguage === "en" && <FaCheck />}
          </HStack>
        </MenuItem>
        <MenuItem onClick={() => changeLanguage("cn")}>
          <HStack>
            <Text>中文</Text>
            {currentLanguage === "cn" && <FaCheck />}
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
