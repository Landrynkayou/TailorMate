import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import tw from 'twrnc';

const CatalogScreen = () => {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.uri]);
    }
  };

  return (
    <View style={tw`flex-1 items-center justify-center p-4`}>
      <Text style={tw`text-2xl font-bold mb-5`}>Catalog</Text>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={tw`w-48 h-48 mb-2`} />
        )}
      />
      <TouchableOpacity style={tw`bg-blue-500 p-3 rounded-lg mt-5`} onPress={pickImage}>
        <Text style={tw`text-white text-base`}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CatalogScreen;
