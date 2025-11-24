import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(student-tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="onBoarding" options={{ headerShown: false }} />
        <Stack.Screen name="(student-tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(donor-tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="roleSelection" options={{ headerShown: false }} />
        <Stack.Screen name='login' options={{ headerShown: false }} />
        <Stack.Screen name='signUp' options={{ headerShown: false }} />
        <Stack.Screen name='otp' options={{ headerShown: false }} />
        <Stack.Screen name='forgotPassword' options={{ headerShown: false }} />
        <Stack.Screen name='createPassword' options={{ headerShown: false }} />
        <Stack.Screen name='welcome' options={{ headerShown: false }} />
        <Stack.Screen name='completeProfile' options={{ headerShown: false }} />
        <Stack.Screen name='info' options={{ headerShown: false }} />
        <Stack.Screen name='notification-settings' options={{ headerShown: false }} />
        <Stack.Screen name='kyc' options={{ headerShown: false }} />
        <Stack.Screen name='payment' options={{ headerShown: false }} />
        <Stack.Screen name="campaigns" options={{ headerShown: false }} />
        <Stack.Screen name="transactions" options={{ headerShown: false }} />
        <Stack.Screen name="notifications" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
