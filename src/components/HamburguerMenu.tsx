import React from 'react';
import { Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function HamburgerMenu({ navigation }) {
  return (
    <Pressable style={{ marginRight: 10 }} onPress={() => navigation.openDrawer()}>
      <Ionicons name="menu-outline" size={25} style={{ marginLeft: 10 }} />
    </Pressable>
  );
}
