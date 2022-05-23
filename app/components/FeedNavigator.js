import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MenuScreen from "../screens/MenuScreen";
import EverydayValueScreen from "../screens/EverydayValueScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = (props) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MENU" component={MenuScreen} />
      <Stack.Screen
        name="EVERYDAY VALUE"
        component={EverydayValueScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default FeedNavigator;
