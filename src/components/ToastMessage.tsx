import React from 'react';
import { useToast, Box, Heading } from 'native-base';
import { AppColors } from '../constants/Colors';

interface IToastMessageProps{
    message:string;
    placement:string;
    // @ts-ignore
    toast:useToast;
    duration?:number;
}
export default function ToastMessage({message, placement, toast, duration}:IToastMessageProps) {//eslint-disable-line
  return toast.show({
    // @ts-ignore
    placement,
    render: () => (
      <Box bg={AppColors.red} p={2} borderRadius={5} mb={5}>
        <Heading fontSize={14} color={AppColors.white}>{message}</Heading>
      </Box>
    ),
    duration: duration || 1000,
  });
}
