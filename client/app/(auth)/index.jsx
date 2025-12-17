import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";

export default function StartPage(){
  const navigation=useNavigation();
  return(
    <SafeAreaView>
      <View>
        <Text onPress={()=>navigation.navigate("login")}>Redirect To SignIn</Text>
        <Text onPress={()=>navigation.navigate("register")}>Redirect To SignUp</Text>

      </View>
    </SafeAreaView>
  )
}