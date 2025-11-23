import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientButton from '../components/GradientButton/GradientButton';

type Role = 'student' | 'donor';

export default function RoleSelectionScreen() {
    const router = useRouter();
    const [selectedRole, setSelectedRole] = useState<Role>('student');

    const handleContinue = () => {
        router.push('/signUp');
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Avatar */}
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Image
                            source={require('@/assets/images/change-screen-mode.png')}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                {/* Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        <Text style={styles.titleBlack}>Role</Text>{' '}
                        <Text style={styles.titlePurple}>Selection</Text>
                    </Text>
                    <Text style={styles.subtitle}>Who are you signing up as</Text>
                </View>

                {/* Role Cards */}
                <View style={styles.roleCardsContainer}>
                    {/* Student Card */}
                    <TouchableOpacity
                        onPress={() => setSelectedRole('student')}
                        style={[
                            styles.roleCard,
                            selectedRole === 'student' ? styles.roleCardSelected : null,
                        ]}
                    >
                        <View style={styles.roleIcon}>
                            <Image
                                source={require('@/assets/images/students.png')}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.roleTextContainer}>
                            <Text style={styles.roleTitle}>As a Student</Text>
                            <Text style={styles.roleDescription}>
                                I want to submit an idea & raise funds
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.radioOuter,
                                selectedRole === 'student'
                                    ? styles.radioOuterSelected
                                    : styles.radioOuterDefault,
                            ]}
                        >
                            {selectedRole === 'student' && (
                                <View style={styles.radioInner} />
                            )}
                        </View>
                    </TouchableOpacity>

                    {/* Donor Card */}
                    <TouchableOpacity
                        onPress={() => setSelectedRole('donor')}
                        style={[
                            styles.roleCard,
                            selectedRole === 'donor' ? styles.roleCardSelected : null,
                        ]}
                    >
                        <View style={styles.roleIcon}>
                            <Image
                                source={require('@/assets/images/gift.png')}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.roleTextContainer}>
                            <Text style={styles.roleTitle}>As a Donor</Text>
                            <Text style={styles.roleDescription}>
                                I want to discover & support programs
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.radioOuter,
                                selectedRole === 'donor'
                                    ? styles.radioOuterSelected
                                    : styles.radioOuterDefault,
                            ]}
                        >
                            {selectedRole === 'donor' && <View style={styles.radioInner} />}
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Continue Button */}
                <GradientButton text="Continue" onPress={handleContinue} />

                {/* Back Link */}
                <TouchableOpacity onPress={handleBack} style={styles.backContainer}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
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
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderWidth: 4,
        borderColor: '#5E46F4',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    avatarEmoji: {
        fontSize: 36,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    titleBlack: {
        color: 'black',
    },
    titlePurple: {
        color: '#5E46F4',
    },
    subtitle: {
        color: '#A1A1A1',
        fontSize: 16,
        marginTop: 8,
    },
    roleCardsContainer: {
        marginBottom: 32,
    },
    roleCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#F9FAFB', // gray-50
        borderWidth: 1,
        borderColor: 'transparent',
    },
    roleCardSelected: {
        backgroundColor: '#F3F4F6', // gray-100
        borderColor: '#5E46F4',
        borderWidth: 2,
    },
    roleIcon: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    roleEmoji: {
        fontSize: 24,
    },
    roleTextContainer: {
        flex: 1,
    },
    roleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827', // gray-900
    },
    roleDescription: {
        fontSize: 12,
        color: '#A1A1A1',
        marginTop: 4,
    },
    radioOuter: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioOuterSelected: {
        borderColor: '#5E46F4',
        backgroundColor: '#5E46F4',
    },
    radioOuterDefault: {
        borderColor: '#D1D5DB',
        backgroundColor: 'transparent',
    },
    radioInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'white',
    },
    continueButton: {
        width: '100%',
        marginBottom: 16,
    },
    backContainer: {
        alignItems: 'center',
    },
    backText: {
        paddingTop: 16,
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
});
