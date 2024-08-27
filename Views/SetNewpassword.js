import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const SetNewPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      // TODO: Implement API call to set new password
      navigation.navigate('PasswordRecoverySuccess');
    } else {
      // Show error message
      alert("Passwords don't match");
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center p-5`}>
      <Text style={tw`text-2xl font-bold mb-5`}>Set New Password</Text>
      <TextInput
        style={tw`w-full h-12 border border-gray-300 rounded-md px-3 mb-5`}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <TextInput
        style={tw`w-full h-12 border border-gray-300 rounded-md px-3 mb-5`}
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
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

export default SetNewPasswordScreen;