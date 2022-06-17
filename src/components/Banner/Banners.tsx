import React from 'react';
import {
  Box, AspectRatio, Center, Image, Stack, HStack, Text,
} from 'native-base';
import { IBanner } from '../../models/interfaces/Banner';
import { AppColors } from '../../constants/Colors';

interface IBannerProductCategories {
    item: IBanner
}

export function BannerProductCategories({ item }: IBannerProductCategories) {
  return (
    <Box alignItems="center" backgroundColor={AppColors.white}>
      <Box
        maxW="40"
        rounded="lg"
        overflow="hidden"
        borderColor={AppColors.red}
        borderRadius={15}
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={25 / 10}>
            <Image
              source={{
                uri: item.uri,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg={AppColors.red}
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: AppColors.white,
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {item.name}
          </Center>
        </Box>
        <Stack p="3" space={3}>
          <Stack space={2}>
            {/* <Heading size="md" ml="-1">
              The Garden City
            </Heading> */}
            <Text
              fontSize="xs"
              color={AppColors.black}
              minHeight={50}
              _light={{
                color: '#011627',
              }}
              _dark={{
                color: '#011627',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {item.description}
            </Text>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center" />
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}

export function BannerPromotions({ item }: IBannerProductCategories) {
  return (
    <Box alignItems="center" backgroundColor={AppColors.white}>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor={AppColors.red}
        borderRadius={15}
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={2}>
            <Image
              source={{
                uri: item.uri,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg={AppColors.red}
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: AppColors.white,
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {item.name}
          </Center>
        </Box>
        <Stack p="3" space={3}>
          <Stack space={2}>
            {/* <Heading size="md" ml="-1">
              The Garden City
            </Heading> */}
            <Text
              fontSize="xs"
              color={AppColors.black}
              minHeight={50}
              _light={{
                color: '#011627',
              }}
              _dark={{
                color: '#011627',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {item.description}
            </Text>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center" />
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
