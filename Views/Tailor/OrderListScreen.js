import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';

const OrderListScreen = () => {
  const [orders, setOrders] = useState([
    { id: '1', item: 'Kurta', status: 'Completed', date: '2023-05-15' },
    { id: '2', item: 'Salwar', status: 'Upcoming', date: '2023-06-01' },
    { id: '3', item: 'Blouse', status: 'Completed', date: '2023-04-20' },
    { id: '4', item: 'Burka', status: 'Upcoming', date: '2023-07-01' },
  ]);
  const [searchText, setSearchText] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredOrders = orders.filter((order) => {
    if (selectedStatus === 'all') return true;
    return order.status.toLowerCase() === selectedStatus;
  }).filter((order) =>
    order.item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <View style={tw`bg-white p-4 shadow-md`}>
        <TextInput
          style={tw`bg-gray-200 rounded-lg px-3 py-2 text-gray-800 text-base`}
          placeholder="Search orders"
          value={searchText}
          onChangeText={setSearchText}
        />
        <View style={tw`flex-row mt-2`}>
          <TouchableOpacity
            style={[
              tw`bg-gray-200 rounded-lg px-3 py-2 mr-2`,
              selectedStatus === 'all' && tw`bg-blue-500`
            ]}
            onPress={() => setSelectedStatus('all')}
          >
            <Text style={[
              tw`text-base`,
              selectedStatus === 'all' && tw`text-white`
            ]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`bg-gray-200 rounded-lg px-3 py-2 mr-2`,
              selectedStatus === 'completed' && tw`bg-blue-500`
            ]}
            onPress={() => setSelectedStatus('completed')}
          >
            <Text style={[
              tw`text-base`,
              selectedStatus === 'completed' && tw`text-white`
            ]}>
              Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`bg-gray-200 rounded-lg px-3 py-2`,
              selectedStatus === 'upcoming' && tw`bg-blue-500`
            ]}
            onPress={() => setSelectedStatus('upcoming')}
          >
            <Text style={[
              tw`text-base`,
              selectedStatus === 'upcoming' && tw`text-white`
            ]}>
              Upcoming
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[
            tw`bg-white rounded-lg p-4 my-2 shadow-md`,
            item.status.toLowerCase() === 'completed' ? tw`border-l-4 border-green-500` : 
            item.status.toLowerCase() === 'upcoming' ? tw`border-l-4 border-blue-500` : null
          ]}>
            <Text style={tw`text-base text-gray-800`}>{item.item}</Text>
            <Text style={tw`text-base text-gray-800`}>{item.status}</Text>
            <Text style={tw`text-sm text-gray-600 mt-1`}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OrderListScreen;
