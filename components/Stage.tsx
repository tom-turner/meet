import React from "react";
import { Center, Heading, Spinner } from "@chakra-ui/react";

import { useSpace } from "hooks/useSpace";

import Controls from "./Controls";
import Meeting from "./Meeting";
import Notifications from "./Notifications";

const LoadingSpinner = () => {
  return (
    <>
      <Spinner color="#FA50B5" size="xl" />
      <Heading color="white" ml={5}>
        Joining...
      </Heading>
    </>
  );
};

export default function Stage(): JSX.Element {
  const { isJoined } = useSpace();

  return (
    <>
      <Notifications />
      <Center height="calc(100% - 80px)" zIndex={1}>
        {!isJoined ? <LoadingSpinner /> : <Meeting />}
      </Center>
      <Controls />
    </>
  );
}
