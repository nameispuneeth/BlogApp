import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Eye, EyeOff } from "lucide-react-native";
import { useNavigation } from "expo-router";

export default function Login() {
  const [showpwd, setshowpwd] = useState(false);
  const [showrepwd, setshowrepwd] = useState(false);
  const navigation=useNavigation();

  return (
    <SafeAreaView className="flex-1 justify-center items-center space-y-10 bg-gray-200">
      <View className="text-center">
        <Text className="text-6xl font-semibold text-left">Let's</Text>
        <Text className="text-6xl font-semibold text-left">Get Started</Text>
        <Text className="text-lg font-extralight text-left ml-3 mt-3">We're Eager To Join You</Text>
      </View>
      <View className="w-[80%]">
        <TextInput className={`border-b-2 border-black py-3 text-lg text-gray-950 mb-3 focus:outline-none`} placeholder="Username" />
        <TextInput className={`border-b-2 border-black py-3 text-lg text-gray-950 mb-3 focus:outline-none`} placeholder="Email" />
        <View className="flex-row border-b-2 border-black py-3 items-center justify-between mb-3">
          <TextInput className={`w-[90%] text-lg focus:outline-none`} secureTextEntry={showpwd} autoCapitalize="none" autoCorrect={false} textContentType="password" placeholder="Password" />
          <TouchableOpacity onPress={() => setshowpwd(!showpwd)}>
            {showpwd ? <Eye color="black" /> : <EyeOff color="black" />}
          </TouchableOpacity>
        </View>
        <View className="flex-row border-b-2 border-black py-3 items-center justify-between mb-10">
          <TextInput className={`w-[90%] text-lg focus:outline-none`} secureTextEntry={showrepwd} autoCapitalize="none" autoCorrect={false} textContentType="password" placeholder="Re-Enter Password" />
          <TouchableOpacity onPress={() => setshowrepwd(!showrepwd)}>
            {showrepwd ? <Eye color="black" /> : <EyeOff color="black" />}
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity className=" text-center border-2 border-black bg-black text-white p-3 ">
          <Text className="text-white text-center text-xl font-semibold">Register</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-center">
      <Text className="text-base text-gray-700 font-extralight">Already Have An Account ? </Text>
      <Text className="text-lg font-bold cursor-pointer" onPress={()=>navigation.navigate("login")}> Login</Text>  
      </View>      
    </SafeAreaView>
  )
}