import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientButton from '../components/GradientButton/GradientButton';

export default function OTPScreen() {
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [resendTimer, setResendTimer] = useState(50);
    const inputRefs = useRef<(TextInput | null)[]>([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setResendTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleOtpChange = (text: string, index: number) => {
        if (text.length > 1) {
            const pastedOtp = text.slice(0, 6).split('');
            const newOtp = [...otp];
            pastedOtp.forEach((char, i) => {
                if (index + i < 6) {
                    newOtp[index + i] = char;
                }
            });
            setOtp(newOtp);
            const nextIndex = Math.min(index + pastedOtp.length, 5);
            inputRefs.current[nextIndex]?.focus();
            return;
        }

        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (key: string, index: number) => {
        if (key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleContinue = () => {
        const otpString = otp.join('');
        if (otpString.length === 6) {
            // router.push('/login');
            // router.push('/createPassword');
            router.push('/welcome');
        }
    };

    const handleResend = () => {
        if (resendTimer === 0) {
            setResendTimer(50);
        }
    };

    const handleChangeEmail = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                <View style={styles.iconWrap}>
                    <View style={styles.iconCircle}>
                        <Image
                            source={require('@/assets/images/document-validation.png')}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                <View style={styles.titleWrap}>
                    <Text style={styles.title}>
                        Enter <Text style={styles.titlePurple}>OTP</Text>
                    </Text>
                </View>

                <View style={styles.instructionWrap}>
                    <Text style={styles.instructionText}>
                        Enter the OTP sent to{' '}
                        <Text style={styles.emailBold}>email </Text>
                        for secure verification
                    </Text>

                    <TouchableOpacity onPress={handleChangeEmail}>
                        <Text style={styles.changeEmail}>Change Email</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            style={[
                                styles.otpInput,
                                digit ? styles.otpActive : styles.otpInactive,
                            ]}
                            value={digit}
                            onChangeText={(text) => handleOtpChange(text, index)}
                            onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            selectTextOnFocus
                        />
                    ))}
                </View>

                <GradientButton
                    text="Continue"
                    onPress={handleContinue}
                    style={styles.continueButton}
                />

                <View style={styles.resendWrap}>
                    <Text style={styles.resendText}>
                        Didn't get OTP? Resend OTP in{' '}
                        <Text style={styles.resendPurple}>
                            {resendTimer > 0 ? `${resendTimer}s` : ''}
                        </Text>
                    </Text>

                    {resendTimer === 0 && (
                        <TouchableOpacity onPress={handleResend}>
                            <Text style={styles.resendPurple}>Resend OTP</Text>
                        </TouchableOpacity>
                    )}
                </View>

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
        paddingHorizontal: 24,
        paddingVertical: 32,
        flexGrow: 1,
    },

    iconWrap: {
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 16,
    },
    iconCircle: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 3,
        borderColor: '#5E46F4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconEmoji: {
        fontSize: 48,
        color: '#5E46F4',
    },

    titleWrap: {
        alignItems: 'center',
        marginBottom: 12,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
    },
    titlePurple: {
        color: '#5E46F4',
    },

    /* INSTRUCTIONS */
    instructionWrap: {
        marginBottom: 40,
        paddingHorizontal: 4,
    },
    instructionText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#6b7280',
        lineHeight: 22,
        marginBottom: 12,
    },
    emailBold: {
        fontWeight: 'bold',
        color: '#000',
    },
    changeEmail: {
        textAlign: 'center',
        fontSize: 18,
        color: '#5E46F4',
        fontWeight: '600',
    },

    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    otpInput: {
        width: 65,
        height: 85,
        borderRadius: 16,
        borderWidth: 2.5,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    otpActive: {
        borderColor: '#5E46F4',
        backgroundColor: '#ffffff',
    },
    otpInactive: {
        borderColor: '#d1d5db',
        backgroundColor: '#f5f6f7',
    },

    continueButton: {
        marginBottom: 32,
    },

    resendWrap: {
        alignItems: 'center',
    },
    resendText: {
        fontSize: 16,
        color: '#111827',
    },
    resendPurple: {
        color: '#5E46F4',
        fontWeight: 'bold',
    },
});


