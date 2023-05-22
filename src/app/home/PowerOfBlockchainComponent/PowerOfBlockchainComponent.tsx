import { HeadingComponent } from '@/util/Ui';
import {
  Container,
  Heading,
  Icon,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { BsShieldFillCheck } from 'react-icons/bs';
import { FaBoxOpen, FaLock } from 'react-icons/fa';
import { GiCubes, GiWineGlass } from 'react-icons/gi';

const TagComponent = ({
  icon,
  heading,
}: {
  icon: IconType;
  heading: string;
}) => {
  return (
    <Tag p={5} borderRadius="50px" borderBottomWidth="thick" minW={200}>
      <VStack w="full">
        <Icon as={icon} boxSize={14}></Icon>
        <Heading color="orange.500" size="md">
          {heading}
        </Heading>
      </VStack>
    </Tag>
  );
};

export const PowerOfBlockchainComponent = () => {
  return (
    <VStack
      w="full"
      minH="80vh"
      py="10vh"
      bgGradient={`linear(to-b, ${useColorModeValue(
        'white',
        'blackAlpha.900'
      )}, transparent)`}
      spacing={10}
    >
      <HeadingComponent
        heading="Build with the power of"
        gradientHeading="BLOCKCHAIN"
      ></HeadingComponent>
      <Icon as={GiCubes} boxSize={300}></Icon>
      <Container>
        <Heading textAlign="center" size="md">
          Every logic & reward distribution written on secure smart contracts.
          All smart contracts are verified on block explorers & open source.
        </Heading>
      </Container>
      <Wrap spacing={10} align="center" justify="center">
        <TagComponent icon={GiWineGlass} heading="Transparent"></TagComponent>
        <TagComponent icon={BsShieldFillCheck} heading="Secured"></TagComponent>
        <TagComponent icon={FaBoxOpen} heading="Open Source"></TagComponent>
        <TagComponent icon={FaLock} heading="Renounced"></TagComponent>
      </Wrap>
    </VStack>
  );
};
