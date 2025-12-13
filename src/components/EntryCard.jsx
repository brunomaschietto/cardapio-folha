import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Image
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logoBranco.jpeg";

export function EntryCard({ companyName }) {
  const navigate = useNavigate();

  function handleAccess() {
    navigate("/menu");
  }

  return (
    <Box
      bg="white"
      p={10}
      rounded="2xl"
      shadow="2xl"
      maxW="sm"
      w="full"
      textAlign="center"
      _hover={{ transform: "translateY(-4px)" }}
      transition="all 0.2s"
    >
      <VStack spacing={6}>
        {/* LOGO */}
        <Image
          src={logo}
          alt={`${companyName} logo`}
          maxH="120px"
          mx="auto"
        />

        <Text
          fontSize="sm"
          color="pink.400"
          fontWeight="semibold"
          letterSpacing="wide"
        >
          CARDÁPIO DIGITAL
        </Text>

        <Heading size="lg" color="pink.500">
          Seja bem-vindo à<br />
          {companyName}
        </Heading>

        <Button
          bg="pink.400"
          color="white"
          size="lg"
          w="full"
          h="52px"
          _hover={{ bg: "pink.500" }}
          _active={{ bg: "pink.600" }}
          onClick={handleAccess}
        >
          Acessar cardápio
        </Button>
      </VStack>
    </Box>
  );
}
