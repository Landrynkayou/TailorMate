import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address.");
      return;
    }

    Alert.alert(
      "Password Reset",
      `If an account with the email ${email} exists, you will receive a password reset link shortly.`,
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <LinearGradient colors={['#4a90e2', '#3498db']} style={tw`flex-1 justify-center items-center`}>
      <View style={tw`w-4/5 items-center`}>
        <Text style={tw`text-4xl font-bold text-white mb-5 text-center`}>Forgot Your Password?</Text>
        <Text style={tw`text-base text-gray-200 text-center mb-5`}>
          Enter your email address to receive a password reset link.
        </Text>
        <TextInput
          style={tw`w-full h-12 bg-white rounded-full px-5 text-base mb-5`}
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={tw`bg-white rounded-full py-4 px-8 items-center justify-center w-full`}
          onPress={handlePasswordReset}
        >
          <Text style={tw`text-blue-600 text-lg font-semibold`}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ForgotPasswordScreen;
