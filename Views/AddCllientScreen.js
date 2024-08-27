import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

const AddClientScreen = ({route}) => {
  const [name, setName] = useState('');
  const [measurements, setMeasurements] = useState([{ label: '', value: '' }]);
  const [orders, setOrders] = useState([{ item: '', status: '' }]);
  useEffect(() => {
    if (route?.params) {
        const { clientName, clientMeasurements, clientOrders } = route.params;
        if (clientName) setName(clientName);
        if (clientMeasurements) setMeasurements(clientMeasurements);
        if (clientOrders) setOrders(clientOrders);
    }
  }, [route]);

  const addClient = () => {
    const newClient = { name, measurements, orders };
    console.log('Client Information:', newClient); // Log the client information to the console
  };

  const addMeasurementField = () => setMeasurements([...measurements, { label: '', value: '' }]);
  const addOrderField = () => setOrders([...orders, { item: '', status: '' }]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw`flex-1 bg-gray-50`}
    >
      <ScrollView contentContainerStyle={tw`p-6 pb-20`}>
        <Text style={tw`text-2xl font-bold text-gray-800 mb-6 text-center`}>Add New Client</Text>

        <TextInput
          style={tw`bg-white p-4 mb-4 rounded-lg shadow-sm text-lg`}
          placeholder="Client Name"
          value={name}
          onChangeText={setName}
        />

        <Text style={tw`text-lg font-semibold text-gray-700 mb-2`}>Measurements</Text>
        {measurements.map((measurement, index) => (
          <View key={index} style={tw`bg-white p-4 mb-4 rounded-lg shadow-sm flex-row items-center`}>
            <TextInput
              style={tw`flex-1 text-lg`}
              placeholder={`Measurement ${index + 1}`}
              value={measurement.label}
              onChangeText={(text) => {
                const updatedMeasurements = [...measurements];
                updatedMeasurements[index].label = text;
                setMeasurements(updatedMeasurements);
              }}
            />
            <TextInput
              style={tw`flex-1 text-lg`}
              placeholder="Value"
              value={measurement.value}
              onChangeText={(text) => {
                const updatedMeasurements = [...measurements];
                updatedMeasurements[index].value = text;
                setMeasurements(updatedMeasurements);
              }}
            />
          </View>
        ))}
        <TouchableOpacity onPress={addMeasurementField} style={tw`bg-blue-500 p-4 mb-4 rounded-lg shadow-sm`}>
          <Text style={tw`text-white text-center text-lg`}>Add Measurement</Text>
        </TouchableOpacity>

        <Text style={tw`text-lg font-semibold text-gray-700 mb-2`}>Orders</Text>
        {orders.map((order, index) => (
          <View key={index} style={tw`bg-white p-4 mb-4 rounded-lg shadow-sm flex-row items-center`}>
            <TextInput
              style={tw`flex-1 text-lg`}
              placeholder={`Order ${index + 1}`}
              value={order.item}
              onChangeText={(text) => {
                const updatedOrders = [...orders];
                updatedOrders[index].item = text;
                setOrders(updatedOrders);
              }}
            />
            <TextInput
              style={tw`flex-1 text-lg`}
              placeholder="Status"
              value={order.status}
              onChangeText={(text) => {
                const updatedOrders = [...orders];
                updatedOrders[index].status = text;
                setOrders(updatedOrders);
              }}
            />
          </View>
        ))}
        <TouchableOpacity onPress={addOrderField} style={tw`bg-blue-500 p-4 mb-4 rounded-lg shadow-sm`}>
          <Text style={tw`text-white text-center text-lg`}>Add Order</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={addClient} style={tw`bg-green-500 p-4 rounded-lg shadow-sm`}>
          <Text style={tw`text-white text-center text-lg`}>Add Client</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddClientScreen;
