import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'twrnc';

const ClientProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    // Save profile logic
    alert('Profile updated successfully');
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100 p-4`}>
      <Text style={tw`text-xl font-bold text-gray-800 mb-4`}>Edit Profile</Text>
      
      <TextInput
        style={tw`bg-white p-3 rounded-lg mb-3 shadow-lg`}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={tw`bg-white p-3 rounded-lg mb-3 shadow-lg`}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={tw`bg-white p-3 rounded-lg mb-3 shadow-lg`}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      
      <TouchableOpacity style={tw`bg-blue-600 p-4 rounded-lg shadow-lg`} onPress={handleSave}>
        <Text style={tw`text-white text-center text-lg`}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ClientProfileScreen;
