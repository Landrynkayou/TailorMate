import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const OTPVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      this[`otpInput${index + 2}`].focus();
    }
  };

  const handleSubmit = () => {
    // TODO: Implement API call to verify OTP
    navigation.navigate('SetNewPassword');
  };

  return (
    <View style={tw`flex-1 justify-center items-center p-5`}>
      <Text style={tw`text-2xl font-bold mb-5`}>OTP Verification</Text>
      <View style={tw`flex-row justify-between w-4/5 mb-5`}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={tw`w-14 h-14 border border-gray-300 rounded-md text-center text-xl`}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(input) => { this[`otpInput${index + 1}`] = input; }}
          />
        ))}
      </View>
      <Text style={tw`mb-5`}>
        Time left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
      </Text>
      <TouchableOpacity
        style={tw`bg-blue-500 py-3 px-8 rounded-md`}
        onPress={handleSubmit}
      >
        <Text style={tw`text-white font-bold text-base`}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPVerificationScreen;