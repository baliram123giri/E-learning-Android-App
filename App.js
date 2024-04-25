import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screen/Login/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './App/Navigations/TabNavigation';

export default function App() {
  const [] = useFonts({
    'outfit-regular': require('./assets/Outfit/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/Outfit/Outfit-Medium.ttf'),
    'outfit-light': require('./assets/Outfit/Outfit-Light.ttf'),
    'outfit-bold': require('./assets/Outfit/Outfit-Bold.ttf'),
  });
  return (
    <ClerkProvider publishableKey={"pk_test_bWFpbi10ZXJyYXBpbi0xMy5jbGVyay5hY2NvdW50cy5kZXYk"}>
      <SafeAreaView >
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}
