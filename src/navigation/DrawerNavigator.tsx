import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {
  Text, StyleSheet, View, Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import BottomNavigator from './BottomNavigator';
import { AppColors } from '../constants/Colors';

const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{
          headerShown: false,
        }}
      />
      </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const [tab, setTab] = useState('private');
  const { navigation } = props;

  const logout = () => navigation.push('SignIn');

  return (
    <SafeAreaView {...props} style={{ flex: 1 }}>
      <Text style={styles.title}>Pizzaria Morumbi</Text>

      <Text style={{color:AppColors.black, justifyContent:"center", textAlign:"center",top:"90%"}} onPress={logout}>
        Logout
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: AppColors.black,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16,
    margin: 10,
  },
  groupTitle: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  logout: {
    color: 'white',
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

export default DrawerNavigator;
