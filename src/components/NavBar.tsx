import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Dark Abstract Black Panther Gaming Logo (1).png";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="80px" />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
