"use client"
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';

export const HeaderHeadingComponent = () => {
  return (
    <VStack spacing={5} w="min-content">
      <VStack
        spacing={0}
        fontSize={['5xl', '6xl', '7xl', '8xl']}
        fontWeight={800}
        fontFamily="heading"
        lineHeight={0.9}
        opacity={useColorModeValue(0.75, 1)}
      >
        <Text>Build for</Text>
        <Text>Community</Text>
      </VStack>
      <Text
        fontSize={['xl', '2xl']}
        textAlign="center"
        px={5}
        lineHeight={1.2}
        opacity={0.75}
      >
        MarsNext is a community centric & fully #decentralized reward distribution protocol.
      </Text>
      <Link href="/registration">
        <button></button>
        <Button
          w={[250, 300, 400]}
          h={16}
          borderRadius={20}
          rightIcon={<ChevronRightIcon />}
          zIndex={1}
          borderBottomWidth="thick"
          variant="solid"
          colorScheme="twitter"
        >
          Launch App
        </Button>
      </Link>
    </VStack>
  );
};
