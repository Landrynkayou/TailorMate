import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Implement API call to send reset password email
    navigation.navigate('OTPVerification');
  };

  return (
    <View style={tw`flex-1 justify-center bg-white items-center p-5`}>
      <Text style={tw`text-2xl font-bold mb-5`}>Forgot Password</Text>
      <Text style={tw`text-center mb-5`}>Enter the email address associated with your account to receive password reset code.</Text>
      <TextInput
        style={tw`w-full h-12 border border-gray-300 rounded-xl px-3 mb-15`}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={tw`bg-blue-500 py-3 px-8 rounded-md`}
        onPress={handleSubmit}
      >
        <Text style={tw`text-white font-bold text-base`}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;