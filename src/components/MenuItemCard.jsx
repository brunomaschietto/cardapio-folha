import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useCarrinho } from "../Contexts/CarrinhoContext";

export function MenuItemCard({ id, nome, image, preco, descricao }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { adicionarItem } = useCarrinho();

  const precoNumerico = typeof preco === "string" 
    ? parseFloat(preco.replace("R$", "").replace(",", ".").trim())
    : preco;

  const precoFormatado = precoNumerico 
    ? `R$ ${precoNumerico.toFixed(2).replace(".", ",")}` 
    : "Preço não disponível";

  const handleAdicionarCarrinho = (e) => {
    e.stopPropagation();
    adicionarItem({ 
      id, 
      nome, 
      preco: precoNumerico,
      image 
    });
  };

  return (
    <Box
      w="100%"
      h="260px"
      perspective="1200px"
      cursor="pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <Box
        position="relative"
        w="100%"
        h="100%"
        sx={{ transformStyle: "preserve-3d" }}
        transition="transform 0.7s ease"
        transform={isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
      >
        <Box
          position="absolute"
          inset={0}
          rounded="xl"
          overflow="hidden"
          shadow="md"
          sx={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Image
            src={image}
            alt={nome}
            w="100%"
            h="100%"
            objectFit="cover"
          />

          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            bg="blackAlpha.600"
            py={2}
            textAlign="center"
          >
            <Text color="white" fontSize="sm" fontWeight="medium">
              Toque para detalhes
            </Text>
          </Box>
        </Box>

        <Box
          position="absolute"
          inset={0}
          rounded="xl"
          shadow="md"
          bg="pink.400"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          p={4}
          sx={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <VStack spacing={3}>
            <Text fontSize="lg" fontWeight="bold">
              {nome || "Produto"}
            </Text>

            <Text fontSize="sm" opacity={0.9}>
              {descricao || "Delicioso produto artesanal"}
            </Text>

            <Text fontSize="xl" fontWeight="bold">
              {precoFormatado}
            </Text>

            <Button
              colorScheme="whiteAlpha"
              size="sm"
              onClick={handleAdicionarCarrinho}
              _hover={{ bg: "whiteAlpha.300" }}
              isDisabled={!precoNumerico}
            >
              Adicionar ao Carrinho
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}