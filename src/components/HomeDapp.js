import { useState, useContext } from "react";
import {Link} from 'react-router-dom'
import { ethers } from "ethers";
import { Web3Context } from "web3-hooks";

import {
    Box,
    Text,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
    FormHelperText,
  } from "@chakra-ui/react";


const HomeDapp = () => {
const [web3State] = useContext(Web3Context);
const [ethBalance, setEthBalance] = useState(0);
const [address, setAddress] = useState(ethers.constants.AddressZero);
const [eth2Send, setEth2Send] = useState(0);
const [eth2Donate, setEth2Donate] = useState(0)

const donationWallet = '0x36003f6f1374Cd42cB4a910CCE0B9B4216d79fE0'

const handleClickGetBalance = async () => {
  try {
    const balance = await web3State.provider.getBalance(address);
    setEthBalance(ethers.utils.formatEther(balance));
  } catch (e) {
    console.log(e);
  }
};

const handleClickSend = async () => {
  const weiAmount = ethers.utils.parseEther(eth2Send);
  try {
    const tx = await web3State.signer.sendTransaction({
      to: address,
      value: weiAmount,
    });
    await tx.wait();
    console.log("TX MINED");
  } catch (e) {
    console.log(e);
  }
};

const handleClickDonate = async () => {
  const weiAmount = ethers.utils.parseEther(eth2Send);
  try {
    const tx = await web3State.signer.sendTransaction({
      to: donationWallet,
      value: weiAmount,
    });
    await tx.wait();
    console.log("TX MINED");
  } catch (e) {
    console.log(e);
  }
};

return (
    <>
     <Box w="50%" mx="auto">
      <Box marginTop="5" marginBottom="5">
        <FormControl id="balanceOf">
          <FormLabel htmlFor="balanceOf">Check the balance of :</FormLabel>
          <Input
            size="lg"
            id="balanceOf"
            type="text"
            value={address}
            placeholder="ethereum address"
            onChange={(event) => setAddress(event.target.value)}
          />
          <FormHelperText>
            Check the balance you want to send eth to
          </FormHelperText>
        </FormControl>
        <Button
          marginTop="5"
          colorScheme="blue"
          onClick={handleClickGetBalance}
        >
          get balance
        </Button>
      </Box>

      <Text>
        Balance of {address}: {ethBalance} ETHER
      </Text>

      <Box marginTop="5" marginBottom="5">
        <FormControl id="eth2send">
          <FormLabel htmlFor="eth2send">Send to {address} :</FormLabel>
          <Input
            size="lg"
            placeholder="Ammount In Eth"
            id="eth2send"
            type="text"
            value={eth2Send}
            onChange={(event) => setEth2Send(event.target.value)}
          />
          <FormHelperText>
            Enter the amount you want to send in eth
          </FormHelperText>
        </FormControl>
        <Button marginTop="5" colorScheme="blue" onClick={handleClickSend}>
          Send Eth
        </Button>
      </Box>

    <Box marginTop="5" marginBottom="5">
      <FormControl id="donate">
        <FormLabel>Donate</FormLabel>
        <NumberInput 
          defaultValue={eth2Donate}
          max={3} 
          min={1}
          >
          <NumberInputField 
          onChange={(event) => setEth2Donate(event.target.value.toString)}/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button marginTop="5" colorScheme="blue" onClick={handleClickDonate}>
          Donate
        </Button>
      </FormControl>
      </Box>
      <Link to={'/dapp/'}>Go to our Dapp</Link>
      </Box>
    </>
  )
}

export default HomeDapp