import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput/CustomInput';
import GradientButton from '../components/GradientButton/GradientButton';

export default function ForgotPasswordScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');

    const handleContinue = () => {
        if (email) {
            router.push('/otp');
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
                    <Text style={styles.mainTitle}>Retrieve your password.</Text>
                    <Text style={styles.subTitle}>Let help you retrieve your password.</Text>
                </View>

                <View style={{ marginBottom: 32 }}>
                    <CustomInput
                        placeholder="Enter Email/Phone"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>

                <View style={{ marginBottom: 16 }}>
                    <GradientButton text="Continue" onPress={handleContinue} />
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
        backgroundColor: '#ffffff',
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
        backgroundColor: '#f2f2f2',
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
        color: '#111827',
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
        color: '#111827',
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
        marginTop: 8,
    },
    backLink: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
    },
});
