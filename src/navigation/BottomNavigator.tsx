import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppColors } from '../constants/Colors';
// import HomeStack from './stacks/home/HomeStack';
import RequestsStack from './stacks/requests/RequestsStack';
import RestaurantsStack from './stacks/restaurants/RestaurantsStack';
import MenuStack from './stacks/menu/MenuStack';
import HamburgerMenu from '../components/HamburguerMenu';
import CartBadge from '../components/Cart/CartBadge';

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => { //eslint-disable-line
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          }

          if (route.name === 'Pedidos') {
            iconName = 'reader-outline';
          }

          if (route.name === 'Cardápio') {
            iconName = 'book-outline';
          }

          if (route.name === 'Restaurantes') {
            iconName = 'restaurant-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: AppColors.red,
        tabBarInactiveTintColor: AppColors.black,
      })}
    >

      {/* <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: true,
          title: 'Inicío',
        }}
      /> */}

      <BottomTab.Screen
        name="Cardápio"
        component={MenuStack}
        options={({ navigation }) => ({
          title: 'Cardápio',
          headerLeft: () => <HamburgerMenu navigation={navigation} />,
          headerRight: () => <CartBadge />,

        })}
      />
      <BottomTab.Screen
        name="Pedidos"
        component={RequestsStack}
        options={({ navigation }) => ({
          title: 'Pedidos',
          headerLeft: () => <HamburgerMenu navigation={navigation} />,
          headerRight: () => <CartBadge />,

        })}
      />
      <BottomTab.Screen
        name="Restaurantes"
        component={RestaurantsStack}
        options={{
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}
