import React from "react";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

export default function ControlsLeft(): JSX.Element {
  return (
    <Flex
      alignItems="center"
      display={{ base: "none", md: "flex" }}
      width="290px"
    ></Flex>
  );
}
