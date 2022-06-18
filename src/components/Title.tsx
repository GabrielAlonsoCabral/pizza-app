import React from 'react';
import { View, Heading } from 'native-base';

interface ITitleProps{
    padding:number;
    fontSize:number;
    color:string;
    label:string;
}

export default function Title({padding, fontSize, color, label}:ITitleProps){ //eslint-disable-line
  return (
    <View p={padding}>
      <Heading fontSize={fontSize} color={color}>{label}</Heading>
    </View>
  );
}
