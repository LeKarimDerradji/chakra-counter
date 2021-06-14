import React from "react";
import { useContext} from "react";
import { Web3Context } from "web3-hooks";
import { Box, Text, } from "@chakra-ui/react";


const Header = () => {
  const [web3State, login] = useContext(Web3Context);
  return (
    <>
      <Box w="100%" mx="auto">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          bg="teal"
        >
          <Text fontSize="md">
            MetaMask installed: {web3State.isMetaMask ? "yes" : "no"}
          </Text>
          <Text fontSize="md">
            Web3: {web3State.isWeb3 ? "injected" : "no-injected"}
          </Text>
          <Text fontSize="md">logged: {web3State.isLogged ? "yes" : "no"}</Text>
          {!web3State.isLogged && (
            <>
              <button onClick={login}>login</button>
            </>
          )}
          <Text fontSize="md">Network id: {web3State.chainId}</Text>
          <Text fontSize="md">Network name: {web3State.networkName}</Text>
        </Box>
        
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          bg="teal"
          border="1px"
          borderColor="gray.200"
          fontWeight="extrabold"
        >
          <Text colorScheme="blue">account: {web3State.account}</Text>
          <Text colorScheme="blue">Balance: {web3State.balance}</Text>
        </Box>
      </Box>
    </>
  );
};

export default Header;
