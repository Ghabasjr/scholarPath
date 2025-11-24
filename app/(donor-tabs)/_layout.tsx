import { Tabs } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { FontAwesome5 } from '@expo/vector-icons';

const PostTabButton = ({ children, onPress }: { children?: React.ReactNode; onPress?: (e: any) => void }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: Colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#5E46F4',
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation: 5,
            }}
        >
            <FontAwesome5 name="hand-holding-usd" size={20} color="white" />
            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '600', marginTop: 2 }}>Donate</Text>
        </View>
    </TouchableOpacity>
);

export default function StudentTabLayout() {
    const colorScheme = useColorScheme();
    const activeColor = Colors.primary;
    const inactiveColor = '#8E8E93';
    const insets = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 60 + insets.bottom,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    borderTopWidth: 0,
                    paddingBottom: insets.bottom,
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    fontWeight: '500',
                },
                tabBarShowLabel: true,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <IconSymbol size={24} name="house.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="donations"
                options={{
                    title: 'Donations',
                    tabBarIcon: ({ color }) => <IconSymbol size={24} name="heart.text.square.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="post"
                options={{
                    title: 'Post',
                    tabBarButton: (props) => <PostTabButton {...props} />,
                    tabBarLabel: () => null,
                }}
            />
            <Tabs.Screen
                name="donate"
                options={{
                    title: 'Donate',
                    tabBarIcon: ({ color }) => <IconSymbol size={24} name="person.2.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <IconSymbol size={24} name="person.fill" color={color} />,
                }}
            />
        </Tabs>
    );
}
