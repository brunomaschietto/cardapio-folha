import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useCarrinho } from "../Contexts/CarrinhoContext";

export function Carrinho({ isOpen, onClose }) {
  const {
    itens,
    removerItem,
    aumentarQuantidade,
    diminuirQuantidade,
    valorTotal,
    limparCarrinho,
  } = useCarrinho();

  const enviarPedidoWhatsApp = () => {
    const numeroWhatsApp = "5519981285064"; 
    
    let mensagem = "🍰 *Novo Pedido - Sweet Treat*\n\n";
    
    itens.forEach((item) => {
      const subtotal = (item.preco * item.quantidade).toFixed(2).replace(".", ",");
      mensagem += `*${item.quantidade}x* ${item.nome}\n`;
      mensagem += `R$ ${subtotal}\n\n`;
    });
    
    mensagem += `━━━━━━━━━━━━━━━━\n`;
    mensagem += `*TOTAL: R$ ${valorTotal.toFixed(2).replace(".", ",")}*`;
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
    
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px" fontSize="xl" color="pink.600">
          🛒 Meu Carrinho
        </DrawerHeader>

        <DrawerBody>
          {itens.length === 0 ? (
            <Box textAlign="center" py={10}>
              <Text fontSize="4xl" mb={4}>🍰</Text>
              <Text color="gray.500" fontSize="lg">
                Seu carrinho está vazio
              </Text>
              <Text color="gray.400" fontSize="sm" mt={2}>
                Adicione produtos deliciosos!
              </Text>
            </Box>
          ) : (
            <VStack spacing={4} align="stretch">
              {itens.map((item) => (
                <Box key={item.id} borderWidth="1px" rounded="lg" p={3} shadow="sm">
                  <HStack spacing={3}>
                    <Image
                      src={item.image}
                      alt={item.nome}
                      boxSize="60px"
                      objectFit="cover"
                      rounded="md"
                    />

                    <VStack flex={1} align="start" spacing={1}>
                      <Text fontWeight="bold" fontSize="sm">
                        {item.nome}
                      </Text>
                      <Text color="gray.600" fontSize="sm">
                        R$ {item.preco.toFixed(2).replace(".", ",")}
                      </Text>
                    </VStack>

                    <HStack>
                      <IconButton
                        size="sm"
                        icon={<span>−</span>}
                        onClick={() => diminuirQuantidade(item.id)}
                        colorScheme="pink"
                        variant="outline"
                        isDisabled={item.quantidade === 1}
                      />
                      <Text fontWeight="bold" minW="30px" textAlign="center">
                        {item.quantidade}
                      </Text>
                      <IconButton
                        size="sm"
                        icon={<span>+</span>}
                        onClick={() => aumentarQuantidade(item.id)}
                        colorScheme="pink"
                        variant="outline"
                      />
                    </HStack>

                    <IconButton
                      size="sm"
                      icon={<span>🗑️</span>}
                      onClick={() => removerItem(item.id)}
                      colorScheme="red"
                      variant="ghost"
                    />
                  </HStack>

                  <Text fontSize="sm" color="gray.600" mt={2} textAlign="right">
                    Subtotal: R${" "}
                    {(item.preco * item.quantidade).toFixed(2).replace(".", ",")}
                  </Text>
                </Box>
              ))}
            </VStack>
          )}
        </DrawerBody>

        {itens.length > 0 && (
          <DrawerFooter borderTopWidth="1px" flexDirection="column" gap={3}>
            <HStack w="100%" justify="space-between">
              <Text fontSize="lg" fontWeight="bold">
                Total:
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="pink.500">
                R$ {valorTotal.toFixed(2).replace(".", ",")}
              </Text>
            </HStack>

            <Button
              colorScheme="green"
              w="100%"
              size="lg"
              onClick={enviarPedidoWhatsApp}
              leftIcon={<span>📱</span>}
            >
              Enviar Pedido pelo WhatsApp
            </Button>

            <Button
              variant="ghost"
              w="100%"
              size="sm"
              onClick={limparCarrinho}
              colorScheme="red"
            >
              Limpar Carrinho
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}