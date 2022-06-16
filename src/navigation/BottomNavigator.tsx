import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppColors } from "../constants/Colors";
import HomeStack from "./stacks/home/HomeStack";
import RequestsStack from "./stacks/requests/RequestsStack";
import RestaurantsStack from "./stacks/restaurants/RestaurantsStack";
import MenuStack from "./stacks/menu/MenuStack";


const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
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
                tabBarInactiveTintColor: "gray",
            })}
        >

            <BottomTab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "Inicío"
                }}
            />

            <BottomTab.Screen
                name="Pedidos"
                component={RequestsStack}
                options={{
                    headerShown: false
                }}
            />

            <BottomTab.Screen
                name="Cardápio"
                component={MenuStack}
                options={{
                    headerShown: false
                }}
            />

            <BottomTab.Screen
                name="Restaurantes"
                component={RestaurantsStack}
                options={{
                    headerShown: false
                }}
            />
        </BottomTab.Navigator>
    );
};
