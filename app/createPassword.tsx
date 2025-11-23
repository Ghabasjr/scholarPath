import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput/CustomInput';
import GradientButton from '../components/GradientButton/GradientButton';

export default function CreatePasswordScreen() {
    const router = useRouter();
    const [password, setPassword] = useState('');

    const handleContinue = () => {
        if (password) {
            router.push('/login');
        }
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >

                {/* Header */}
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>Forgot Password</Text>

                    <View style={{ width: 40 }} />
                </View>

                <View style={styles.iconWrap}>
                    <View style={styles.iconCircle}>
                        <Image
                            source={require('@/assets/images/document-validation.png')}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                <View style={styles.titlesWrap}>
                    <Text style={styles.mainTitle}>Create New Password</Text>
                    <Text style={styles.subTitle}>Good, now you can create new password</Text>
                </View>

                <View style={{ marginBottom: 32 }}>
                    <CustomInput
                        placeholder="Create a new password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        showPasswordToggle
                    />
                </View>

                {/* Continue Button */}
                <View style={{ marginBottom: 16 }}>
                    <GradientButton
                        text="Continue"
                        onPress={handleContinue}
                    />
                </View>

                <TouchableOpacity onPress={handleBack} style={styles.backLinkWrap}>
                    <Text style={styles.backLink}>Back</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingVertical: 32,
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#f3f4f6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    backArrow: {
        fontSize: 22,
        color: '#5E46F4',
    },
    headerTitle: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#5E46F4',
    },

    iconWrap: {
        alignItems: 'center',
        marginBottom: 32,
    },
    iconCircle: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 3,
        borderColor: '#5E46F4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconEmoji: {
        fontSize: 48,
    },

    titlesWrap: {
        alignItems: 'center',
        marginBottom: 32,
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5E46F4',
        marginBottom: 6,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 14,
        color: '#6b7280',
        textAlign: 'center',
    },

    backLinkWrap: {
        alignItems: 'center',
    },
    backLink: {
        fontSize: 16,
        fontWeight: '400',
        color: '#0000',
    },
});
