import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import tw from 'twrnc';

const AppointmentScreen = ({ navigation }) => {
  const [appointments, setAppointments] = React.useState([]);

  const renderAppointment = ({ item }) => (
    <TouchableOpacity style={tw`bg-white mx-4 my-2 p-4 rounded-lg shadow-lg`}>
      <Text style={tw`font-semibold text-lg text-gray-800`}>{item.date}</Text>
      <Text style={tw`text-gray-600`}>{item.details}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <FlatList
        data={appointments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderAppointment}
        contentContainerStyle={tw`p-4`}
      />
      <TouchableOpacity style={tw`bg-blue-600 p-4 rounded-full w-15 h-15 items-center justify-center absolute bottom-5 right-5 shadow-lg`}>
        <Text style={tw`text-white`}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AppointmentScreen;
