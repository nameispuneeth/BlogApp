// app/(auth)/Register.jsx (Corrected)
import {
  Text,
  TextInput, // 👈 Import the correct component for inputs
  TouchableOpacity, // 👈 Import a correct component for buttons
  View // 👈 Use a View instead of SafeAreaProvider for general layout
} from "react-native";
  // If you are using expo-router, you usually don't need SafeAreaProvider inside page components.
  
  // Using View for the main container is more idiomatic than SafeAreaProvider here
  import { useNavigation } from "expo-router";
  export default function Register(){
    const navigate=useNavigation();
      return(
          // Use View as the main container
          <View className="flex-1 justify-center items-center p-6"> 
              <Text className="text-3xl font-semibold mb-8">Register</Text>
  
              {/* ✅ Corrected Input Field */}
              <TextInput 
                className="w-full h-12 border border-gray-300 p-3 mb-4 rounded" 
                placeholder="Username or Email"
              />
  
              {/* ✅ Corrected Button/Pressable */}
              <TouchableOpacity 
                className="w-full h-12 bg-blue-500 justify-center items-center rounded"
                onPress={() => navigate.navigate("index")}
              >
                {/* Buttons need a Text child to display content */}
                <Text className="text-white font-bold text-lg">Register</Text>
              </TouchableOpacity>
          </View>
      );
  }