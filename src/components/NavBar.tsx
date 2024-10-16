import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Dark Abstract Black Panther Gaming Logo (1).png";
import React from "react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="80px" />
      <Text>Nav bar</Text>
    </HStack>
  );
};

export default NavBar;
