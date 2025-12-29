import { Badge, Box, IconButton } from "@chakra-ui/react";
import { useCarrinho } from "../Contexts/CarrinhoContext";

export function IconeCarrinho({ onClick }) {
  const { totalItens } = useCarrinho();

  return (
    <Box position="relative">
      <IconButton
        aria-label="Carrinho de compras"
        icon={<span style={{ fontSize: "24px" }}>🛒</span>}
        onClick={onClick}
        variant="ghost"
        colorScheme="pink"
        size="lg"
      />
      {totalItens > 0 && (
        <Badge
          position="absolute"
          top="-1"
          right="-1"
          colorScheme="red"
          rounded="full"
          fontSize="xs"
        >
          {totalItens}
        </Badge>
      )}
    </Box>
  );
}