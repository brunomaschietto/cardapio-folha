import { Center } from "@chakra-ui/react";
import { EntryCard } from "../components/EntryCard";

export function EntryPage() {
  return (
    <Center
      minH="100vh"
      bgGradient="linear(to-br, pink.200, pink.300)"
    >
      <EntryCard companyName="Sweet Treat" />
    </Center>
  );
}
