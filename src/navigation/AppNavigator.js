import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import AddSeller from '../screens/seller/AddSeller';
import AddProduct from '../screens/product/AddProduct';
import ProductList from '../screens/product/ProductList';
import SearchProduct from '../screens/product/SearchProduct';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddSellerScreen">
        <Stack.Screen
          name="AddSellerScreen"
          component={AddSeller}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddProductScreen"
          component={AddProduct}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductListScreen"
          component={ProductList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchProductScreen"
          component={SearchProduct}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
