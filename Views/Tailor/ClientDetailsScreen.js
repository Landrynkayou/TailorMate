import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

const AddClientScreen = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [measurements, setMeasurements] = useState([{ label: '', value: '' }]);
  const [orders, setOrders] = useState([{ item: '', status: '' }]);

  // Function to handle adding a new client
  const addClient = () => {
    const newClient = { name, measurements, orders };

    // If addClient callback is provided, call it
    if (route.params?.addClient) {
      route.params.addClient(newClient);
    }

    // Navigate to ClientDetailsScreen with the new client data
    navigation.navigate('ClientDetails', { client: newClient });
  };

  // Function to handle adding more measurements or orders fields
  const addMeasurementField = () => setMeasurements([...measurements, { label: '', value: '' }]);
  const addOrderField = () => setOrders([...orders, { item: '', status: '' }]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw`flex-1 bg-gray-50`}
    >
      <ScrollView contentContainerStyle={tw`p-6 pb-20`}>
        <Text style={tw`text-2xl font-bold text-gray-800 mb-6 text-center`}>Add New Client</Text>

        {/* Client Name Input */}
        <TextInput
          style={tw`bg-white p-4 mb-4 rounded-lg shadow-sm text-lg`}
          placeholder="Client Name"
          value={name}
          onChangeText={setName}
        />

        {/* Measurements Section */}
        <Text style={tw`text-lg font-semibold text-gray-700 mb-3`}>Measurements</Text>
        {measurements.map((measurement, index) => (
          <View key={index} style={tw`flex-row mb-4`}>
            <TextInput
              style={tw`bg-white p-4 flex-1 mr-2 rounded-lg shadow-sm text-base`}
              placeholder="Label (e.g., Waist)"
              value={measurement.label}
              onChangeText={(text) => {
                const updated = [...measurements];
                updated[index].label = text;
                setMeasurements(updated);
              }}
            />
            <TextInput
              style={tw`bg-white p-4 flex-1 rounded-lg shadow-sm text-base`}
              placeholder="Value (e.g., 32)"
              value={measurement.value}
              onChangeText={(text) => {
                const updated = [...measurements];
                updated[index].value = text;
                setMeasurements(updated);
              }}
            />
          </View>
        ))}
        <TouchableOpacity
          onPress={addMeasurementField}
          style={tw`bg-blue-600 p-4 rounded-lg shadow-lg mt-2 mb-6`}
        >
          <Text style={tw`text-white text-center text-lg font-semibold`}>Add Measurement</Text>
        </TouchableOpacity>

        {/* Orders Section */}
        <Text style={tw`text-lg font-semibold text-gray-700 mb-3`}>Orders</Text>
        {orders.map((order, index) => (
          <View key={index} style={tw`flex-row mb-4`}>
            <TextInput
              style={tw`bg-white p-4 flex-1 mr-2 rounded-lg shadow-sm text-base`}
              placeholder="Order Item (e.g., Suit)"
              value={order.item}
              onChangeText={(text) => {
                const updated = [...orders];
                updated[index].item = text;
                setOrders(updated);
              }}
            />
            <TextInput
              style={tw`bg-white p-4 flex-1 rounded-lg shadow-sm text-base`}
              placeholder="Status (e.g., Completed)"
              value={order.status}
              onChangeText={(text) => {
                const updated = [...orders];
                updated[index].status = text;
                setOrders(updated);
              }}
            />
          </View>
        ))}
        <TouchableOpacity
          onPress={addOrderField}
          style={tw`bg-blue-600 p-4 rounded-lg shadow-lg mt-2 mb-6`}
        >
          <Text style={tw`text-white text-center text-lg font-semibold`}>Add Order</Text>
        </TouchableOpacity>

        {/* Add Client Button */}
        <TouchableOpacity
          onPress={addClient}
          style={tw`bg-green-600 p-5 rounded-full shadow-lg mt-8 mb-12`}
        >
          <Text style={tw`text-white text-center text-lg font-bold`}>Add Client</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddClientScreen;
