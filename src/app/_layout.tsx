import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function LAYOUT() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle="light-content"/>
      {fontsLoaded && <Slot/>}
    </GestureHandlerRootView>
  );
}
