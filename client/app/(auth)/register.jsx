import {
  Text,
  TextInput, // 👈 Import the correct component for inputs
  TouchableOpacity, // 👈 Import a correct component for buttons
  View // 👈 Use a View instead of SafeAreaProvider for general layout
} from "react-native";

  import { useNavigation } from "expo-router";
  export default function Register(){
    const navigate=useNavigation();
      return(
          <View className="flex-1 justify-center items-center p-6"> 
              <Text className="text-3xl font-semibold mb-8">Register</Text>
  
              <TextInput 
                className="w-full h-12 border border-gray-300 p-3 mb-4 rounded" 
                placeholder="Username or Email"
              />
  
              <TouchableOpacity 
                className="w-full h-12 bg-blue-500 justify-center items-center rounded"
                onPress={() => navigate.navigate("index")}
              >
                <Text className="text-white font-bold text-lg">Register</Text>
              </TouchableOpacity>
          </View>
      );
  }