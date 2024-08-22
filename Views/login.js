import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import AppButton from './Appbutton';
import AppInputText from './AppInputText';
import  tw  from 'twrnc';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);
    // Add login logic here
    // For demonstration purposes, navigate to TailorLandingPage or CustomerLandingPage based on a dummy role
    const role = 'Tailor'; // Replace this with actual role from login response
    if (role === 'Tailor') {
      navigation.navigate('TailorLandingPage');
    } else {
      navigation.navigate('CustomerLandingPage'); // Adjust according to your app's role handling
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1 p-5`}
      >
        <ScrollView contentContainerStyle={tw`flex-grow justify-center`}>
          <View style={tw`mb-10 items-center`}>
            <Text style={tw`text-4xl font-bold text-gray-800`}>Login</Text>
          </View>

          <AppInputText
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
            style={tw`mb-5`}
          />

          <AppInputText
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            onChangeText={text => setPassword(text)}
            secureTextEntry
            placeholder="Password"
            textContentType="password"
            style={tw`mb-5`}
          />

          <AppButton
            title="Login"
            onPress={handleLogin}
            style={tw`bg-blue-600 rounded-lg my-4 mx-14`}
          />

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={tw`text-blue-600 text-center text-sm`}>Forgot your password?</Text>
          </TouchableOpacity>

          <View style={tw`mt-8 items-center`}>
            <Text style={tw`text-gray-600 text-lg`}>Don't have an account?</Text>
            <AppButton
              title="Sign Up"
              onPress={() => navigation.navigate('Signup')}
              style={tw`bg-green-600 rounded-lg mt-2`}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;
