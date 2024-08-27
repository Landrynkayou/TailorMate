import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, SafeAreaView, TextInput, Animated, Easing } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AddClientScreen from './ClientDetailsScreen';
import tw from 'twrnc';

const TailorLandingScreen = ({ navigation }) => {
  const [clients, setClients] = useState([
    { id: '1', name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
    // Add more clients with avatar URLs
  ]);
  const [searchText, setSearchText] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuAnim] = useState(new Animated.Value(-300)); // Start off-screen
  const [showAddClientForm, setShowAddClientForm] = useState(false); // State to manage form visibility
  const searchInputRef = useRef(null);

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchToggle = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) {
      // Focus the search input when it becomes visible
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    }
  };

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(menuAnim, {
      toValue: menuVisible ? -300 : 0, // Slide in/out
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const handleOverlayPress = () => {
    if (menuVisible) {
      handleMenuToggle(); // Close the menu when the overlay is pressed
    }
  };

  const handleAddClient = (newClient) => {
    setClients([...clients, newClient]);
    setShowAddClientForm(false); // Close form after adding client
  };

  const handleClientPress = (client) => {
    navigation.navigate('ClientDetails', { client });
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <View style={tw`flex-row items-center bg-blue-600 py-4 px-5`}>
        <TouchableOpacity style={tw`p-2`} onPress={handleMenuToggle}>
          <MaterialIcons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={tw`flex-1 items-center`}>
          <Text style={tw`text-white text-xl font-bold`}>TailorMate</Text>
        </View>
        {searchVisible ? (
          <TextInput
            ref={searchInputRef}
            style={tw`bg-white rounded-lg px-3 py-2 text-base text-gray-800 ml-2 w-3/5`}
            placeholder="Search clients"
            value={searchText}
            onChangeText={setSearchText}
            onBlur={() => setSearchVisible(false)} // Hide search input when focus is lost
          />
        ) : (
          <TouchableOpacity style={tw`p-2`} onPress={handleSearchToggle}>
            <MaterialIcons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        )}
      </View>

      {showAddClientForm ? (
        <AddClientScreen addClient={handleAddClient} />
      ) : (
        <FlatList
          data={filteredClients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={tw`flex-row items-center bg-white rounded-lg mx-5 my-2 p-3 shadow-lg`}
            
            >
              <View style={tw`mr-4`}>
                <Image source={{ uri: item.avatar }} style={tw`w-12 h-12 rounded-full`} />
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-lg font-semibold text-gray-800`}>{item.name}</Text>
                <Text style={tw`text-sm text-gray-500`}>Client</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#333" />
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => (
            <Text style={tw`text-center mt-5 text-lg text-gray-600`}>No clients found</Text>
          )}
        />
      )}
    

      {!showAddClientForm && (
        <View style={tw`flex-1 justify-end items-center pb-5`}>
          <View style={tw`flex-row justify-between w-4/5 mb-5`}>
            <TouchableOpacity style={tw`bg-blue-600 p-4 rounded-full w-15 h-15 items-center justify-center`} onPress={() => alert('Upload photos')}>
              <MaterialIcons name="photo" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-blue-600 p-4 rounded-full w-15 h-15 items-center justify-center`} onPress={() => alert('View orders')}>
              <MaterialIcons name="list-alt" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={tw`absolute bottom-7 w-15 h-15 rounded-full bg-red-600 items-center justify-center shadow-lg`} onPress={() => setShowAddClientForm(true)}>
            <MaterialIcons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      )}

      {/* Menu Modal */}
      <Animated.View
        style={[tw`absolute top-0 bottom-0 left-0 w-75 bg-slate-500  border-gray-00 py-5 px-3 shadow-lg`, { transform: [{ translateX: menuAnim }] }]}
      >
        {menuVisible && (
          <TouchableOpacity style={tw`absolute top- right-2 p-2`} onPress={handleMenuToggle}>
            <MaterialIcons name="close" size={24} color="#333" />
          </TouchableOpacity>
        )}
        {menuVisible && (
          <TouchableOpacity style={tw`absolute top-0 left-0 right-0 bg-slate-700 bottom-0 bg- `} onPress={handleOverlayPress} />
        )}
        <TouchableOpacity style={tw`flex-row items-center py-2 px-5`} onPress={() => navigation.navigate('Profile')}>
          <MaterialIcons name="person" size={24} color="white" />
          <Text style={tw`ml-2 text-lg text-white`}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-row items-center py-2 px-5`} onPress={() => navigation.navigate('Notifications')}>
          <MaterialIcons name="notifications" size={24} color="white" />
          <Text style={tw`ml-2 text-lg text-white`}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-row items-center py-2 px-5`} onPress={() =>  navigation.navigate('Signup')}>
          <MaterialIcons name="exit-to-app" size={24} color="white" />
          <Text style={tw`ml-2 text-lg text-white`}>Disconnect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-row items-center py-2 px-5`} onPress={() => navigation.navigate('ClientList')}>
          <MaterialIcons name="list" size={24} color="white" />
          <Text style={tw`ml-2 text-lg text-white`}>Clients</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-row items-center py-2 px-5`} onPress={() => navigation.navigate('Orders')}>
          <MaterialIcons name="list" size={24} color="white" />
          <Text style={tw`ml-2 text-lg text-white`}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-row items-center py-2 px-5`} onPress={() => navigation.navigate('Catalog')}>
          <MaterialIcons name="library-books" size={24} color="white" />
          <Text style={tw`ml-2 text-lg text-white`}>Catalog</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default TailorLandingScreen;
