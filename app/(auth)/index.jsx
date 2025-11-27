import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
  const HandleSubmit = async () => {
    console.log(email,Password)
    const response = await fetch(`http://192.168.10.20:8000/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "email":email, "password":Password }),
    });

    const data = await response.json();
    console.log(data);
    if (data.status == "ok") {
      Alert.alert('User Exists', 'My Alert Msg', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      router.replace("/(home)")
    } else {
      Alert.alert('User Doesnt Exist', 'Please Register', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      navigate.navigate("register");
    }
  }
  const router = useRouter();
  const navigate = useNavigation();
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <View className="flex-1 justify-center items-center p-6">
      <Text className="text-3xl font-semibold mb-8">Login</Text>

      <TextInput
        className="w-full h-12 border border-gray-300 p-3 mb-4 rounded"
        placeholder="Username or Email"
        value={email}
        onChangeText={(text)=>setemail(text)}
      />
      <TextInput
        secureTextEntry={true}
        className="w-full h-12 border border-gray-300 p-3 mb-4 rounded"
        placeholder="Password"
        value={Password}
        onChangeText={(text)=>setPassword(text)}

      />


      <TouchableOpacity
        className="w-full h-12 bg-blue-500 justify-center items-center rounded"
        onPress={() => {
          HandleSubmit()
        }}
      >
        <Text className="text-white font-bold text-lg">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mt-10 p-4 bg-blue-400" onPress={() => router.replace("/(home)/explore")}>
        <Text className="text-white font-extrabold">Move To Home Page ... </Text>
      </TouchableOpacity>
    </View>
  );
}