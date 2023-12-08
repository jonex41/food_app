import CustomHeader from "@/Component/CustomHeader";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation()
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />,
          }}
        />
        <Stack.Screen name="(modal)/filter"  
         options={{
          title:'Filter',
          presentation:'modal',
          animation:"slide_from_bottom",
          headerShadowVisible:false,
          headerTitleAlign: 'center',
         headerLeft:()=>(
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Ionicons name="close-outline" size={30} color={Colors.primary}/>
          </TouchableOpacity>
         ),
          headerStyle:{
            backgroundColor:Colors.lightGrey,
          }
        }}/>
     
      <Stack.Screen name="(modal)/location-search"  
         options={{
          title:'Search Location',
          presentation:'fullScreenModal',
          animation:"slide_from_bottom",
         
          headerTitleAlign: 'center',
         headerLeft:()=>(
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Ionicons name="close-outline" size={30} color={Colors.primary}/>
          </TouchableOpacity>
         ),
         
        }}/>
      </Stack>
    </BottomSheetModalProvider>
  );
}
