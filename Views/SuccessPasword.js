import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';

const PasswordRecoverySuccessScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1 mb-20 justify-center items-center p-5`}>
        <MaterialIcons name="search" size={84} color="green" />
      <Text style={tw`text-2xl font-bold mb-5 text-center`}>Password Recovery Successful</Text>
      <TouchableOpacity
        style={tw`bg-blue-500 py-3 px-8 rounded-md`}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={tw`text-white font-bold text-base`}>Return to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordRecoverySuccessScreen;