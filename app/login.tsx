import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput/CustomInput';
import GradientButton from '../components/GradientButton/GradientButton';

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleLogin = () => {
        console.log('Google login');
    };

    const handleLogin = () => {
        if (email && password) {
            router.push('/(student-tabs)');
        }
    };

    const handleForgotPassword = () => {
        router.push('/forgotPassword');
    };

    const handleSignUp = () => {
        router.push('/signUp');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <View style={styles.logo}>
                        <Image
                            source={require('@/assets/images/user.png')}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                {/* Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Welcome back!</Text>
                    <Text style={styles.subtitle}>
                        Login Your Account - Login with Google or Email for Quick Access!
                    </Text>
                </View>

                {/* Google Login Button */}
                <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                    <Image
                        source={require('@/assets/images/Google.png')}
                        resizeMode="contain"
                    />
                    <Text style={styles.googleText}>Continue with Google</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>Or</Text>
                    <View style={styles.dividerLine} />
                </View>

                <CustomInput
                    placeholder="Enter Email/Phone"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <CustomInput
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    showPasswordToggle
                />

                {/* Forgot Password */}
                <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotContainer}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Continue Button */}
                <GradientButton text="Continue" onPress={handleLogin} />

                {/* Sign Up Link */}
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={styles.signupLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    logo: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderWidth: 4,
        borderColor: '#5E46F4',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    logoEmoji: {
        fontSize: 36,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3F4F6',
        borderWidth: 1,
        borderColor: '#5E46F4',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 24,
        marginBottom: 24,
        gap: 12,
    },
    googleIcon: {
        fontSize: 20,
        marginRight: 12,
    },
    googleText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#D1D5DB',
    },
    dividerText: {
        marginHorizontal: 16,
        fontSize: 14,
        color: '#000000',
    },
    input: {
        marginBottom: 16,
    },
    forgotContainer: {
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgotText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#5E46F4',
    },
    continueButton: {
        width: '100%',
        marginBottom: 24,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    signupText: {
        fontSize: 16,
        color: '#111827',
    },
    signupLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#5E46F4',
    },
});
