import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';

const ClientDetailsScreen = ({ route }) => {
  const { client } = route.params;

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <ScrollView>
        <View style={tw`bg-white p-4 shadow-md`}>
          <Text style={tw`text-2xl font-bold text-gray-800`}>{client.name}</Text>
          <View style={tw`flex-row mt-2`}>
            {client.measurements.map((measurement) => (
              <View key={measurement.label} style={tw`mr-4`}>
                <Text style={tw`text-base text-gray-600`}>{measurement.label}:</Text>
                <Text style={tw`text-base font-bold text-gray-800`}>{measurement.value}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={tw`mt-4 p-4`}>
          <Text style={tw`text-xl font-bold text-gray-800 mb-2`}>Orders</Text>
          {client.orders.map((order) => (
            <View key={order.id} style={[
              tw`bg-gray-200 rounded-lg p-3 mb-2 flex-row justify-between`,
              order.status.toLowerCase() === 'completed' && tw`bg-green-100`,
              order.status.toLowerCase() === 'upcoming' && tw`bg-blue-100`
            ]}>
              <Text style={tw`text-base text-gray-800`}>{order.item}</Text>
              <Text style={tw`text-base text-gray-800`}>{order.status}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ClientDetailsScreen;
