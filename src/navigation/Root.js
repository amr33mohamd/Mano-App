

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ItemsScreen from '../screens/ItemsScreen';
import SingleItemScreen from '../screens/SingleItemScreen';
const Stack = createNativeStackNavigator();
import { extendTheme, NativeBaseProvider } from "native-base";
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
    brand: {
        900: "#8287af",
        800: "#7c83db",
        700: "#b3bef6",
    },
};
const theme = extendTheme({ colors: newColorTheme });



const RootNavigation = () => {
    return (
        <NativeBaseProvider theme={theme}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Items"
                    component={ItemsScreen}
                    options={{headerShown:false}}
                />
                <Stack.Screen name="SingleItem" component={SingleItemScreen} />


            </Stack.Navigator>
        </NavigationContainer>
        </NativeBaseProvider>
    );
};
export default RootNavigation;
