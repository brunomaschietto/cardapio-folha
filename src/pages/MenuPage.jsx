import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MenuItemCard } from "../components/MenuItemCard";
import { IconeCarrinho } from "../components/IconeCarrinho";
import { Carrinho } from "../components/Carrinho";

import logo from "../assets/logoBranco.jpeg";

const mockItems = [
  {
    id: "1",
    nome: "Brigadeiro Gourmet",
    image: "https://picsum.photos/400/300?random=1",
    preco: "R$ 29,90",
    descricao: "Delicioso brigadeiro artesanal com cobertura especial",
  },
  {
    id: "2",
    nome: "Brownie Recheado",
    image: "https://picsum.photos/400/300?random=2",
    preco: "R$ 19,90",
    descricao: "Brownie de chocolate com recheio cremoso",
  },
  {
    id: "3",
    nome: "Torta de Morango",
    image: "https://picsum.photos/400/300?random=3",
    preco: "R$ 39,90",
    descricao: "Torta deliciosa com morangos frescos",
  },
];

export function MenuPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="pink.50">
      {/* Ícone do carrinho fixo */}
      <Box position="fixed" top={4} right={4} zIndex={10}>
        <IconeCarrinho onClick={onOpen} />
      </Box>

      <Box bg="white" py={6} mb={10} shadow="sm">
        <VStack spacing={3}>
          <Image src={logo} alt="Sweet Treat logo" maxH="70px" />
          <Text fontSize="lg" fontWeight="semibold" color="pink.500">
            Cardápio Sweet Treat
          </Text>
        </VStack>
      </Box>

      <Container maxW="6xl" pb={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          {mockItems.map((item) => (
            <MenuItemCard
              key={item.id}
              id={item.id}
              nome={item.nome}
              image={item.image}
              preco={item.preco}
              descricao={item.descricao}
            />
          ))}
        </SimpleGrid>
      </Container>

      <Carrinho isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}