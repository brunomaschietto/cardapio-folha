import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { MenuItemCard } from "../components/MenuItemCard";

import logo from "../assets/logoBranco.jpeg";

const mockItems = [
  {
    id: 1,
    image: "https://picsum.photos/400/300?random=1",
    price: "R$ 29,90",
  },
  {
    id: 2,
    image: "https://picsum.photos/400/300?random=2",
    price: "R$ 19,90",
  },
  {
    id: 3,
    image: "https://picsum.photos/400/300?random=3",
    price: "R$ 39,90",
  },
];

export function MenuPage() {
  return (
    <Box minH="100vh" bg="pink.50">
      <Box
        bg="white"
        py={6}
        mb={10}
        shadow="sm"
      >
        <VStack spacing={3}>
          <Image
            src={logo}
            alt="Sweet Treat logo"
            maxH="70px"
          />
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color="pink.500"
          >
            Cardápio Sweet Treat
          </Text>
        </VStack>
      </Box>

      <Container maxW="6xl" pb={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
        >
          {mockItems.map((item) => (
            <MenuItemCard
              key={item.id}
              image={item.image}
              price={item.price}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
