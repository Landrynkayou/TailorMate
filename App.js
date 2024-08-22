import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc';

// Import your screens
import SignupScreen from './Views/SignupScreen';
import LoginScreen from './Views/login';
import RolePickerScreen from './Views/CustomPicker';
import WelcomeScreen from './Views/WelcomeScreen';
import TailorLandingPage from './Views/Tailor/TailorLanding';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={tw`flex-1 bg-gray-100`}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="RolePicker"
            component={RolePickerScreen}
            options={{ title: 'Select Role' }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ title: 'Create Account' }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="TailorLandingPage"
            component={TailorLandingPage}
            options={{ title: 'Tailor Dashboard' }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
