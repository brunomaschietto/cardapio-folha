import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export function MenuItemCard({ image, price }) {
  const [isFlipped, setIsFlipped] = useState(false);

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
            alt="Item do cardápio"
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
              Doce Especial
            </Text>

            <Text fontSize="sm" opacity={0.9}>
              Massa fofinha, recheio cremoso e cobertura artesanal.
            </Text>

            <Text fontSize="xl" fontWeight="bold">
              {price}
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}