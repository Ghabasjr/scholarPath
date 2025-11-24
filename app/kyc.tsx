import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function KYCVerificationScreen() {
    const router = useRouter();

    const VerificationItem = ({ label, value, status, actionText }: { label: string, value?: string, status: 'verified' | 'pending' | 'update', actionText?: string }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardLabel}>{label}</Text>
                {status === 'verified' && (
                    <View style={styles.statusContainer}>
                        <IconSymbol name="check.circle.fill" size={20} color="#4CAF50" />
                        <Text style={styles.verifiedText}>verified</Text>
                    </View>
                )}
                {status === 'update' && (
                    <TouchableOpacity>
                        <Text style={styles.updateText}>{actionText || 'Update Now'}</Text>
                    </TouchableOpacity>
                )}
            </View>
            {value && <Text style={styles.cardValue}>{value}</Text>}
            {label === 'Screenshorts' && (
                <View style={styles.screenshotContainer}>
                    <View style={styles.screenshotPlaceholder} />
                    <View style={styles.screenshotPlaceholder} />
                    <View style={styles.screenshotPlaceholder} />
                </View>
            )}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>KYC Verifications</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.progressHeader}>
                    <Text style={styles.progressLabel}>KYC Verification</Text>
                    <Text style={styles.progressValue}>80% Completed</Text>
                </View>
                <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: '80%' }]} />
                </View>

                <VerificationItem label="NIN" value="1234*******292" status="verified" />
                <VerificationItem label="Screenshorts" status="verified" />
                <VerificationItem label="School ID" status="verified" />
                <VerificationItem label="Admission Letter" status="update" actionText="Update Now" />
                <VerificationItem label="School Profile Screenshot" status="verified" />

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardLabel}>KYC Status</Text>
                        <View style={styles.statusContainer}>
                            <IconSymbol name="check.circle.fill" size={20} color="#4CAF50" />
                            <Text style={styles.verifiedText}>verified</Text>
                        </View>
                    </View>
                    <Text style={styles.kycStatusDesc}>You can now seek donations</Text>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.updateButton} onPress={() => router.back()}>
                    <Text style={styles.updateButtonText}>Update KYC</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderRadius: 12,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    scrollContent: {
        padding: 20,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    progressLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    progressValue: {
        fontSize: 14,
        color: '#5E46F4',
        fontWeight: 'bold',
    },
    progressBarBg: {
        height: 8,
        backgroundColor: '#F0F0F0',
        borderRadius: 4,
        marginBottom: 30,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#5E46F4',
        borderRadius: 4,
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderRadius: 16,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.02,
        shadowRadius: 5,
        elevation: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    cardValue: {
        fontSize: 14,
        color: '#8E8E93',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    verifiedText: {
        color: '#4CAF50',
        fontSize: 14,
        fontWeight: '500',
    },
    updateText: {
        color: '#5E46F4',
        fontSize: 14,
        fontWeight: '500',
    },
    screenshotContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    screenshotPlaceholder: {
        width: 60,
        height: 60,
        backgroundColor: '#F9F9F9',
        borderRadius: 8,
    },
    kycStatusDesc: {
        fontSize: 14,
        color: '#8E8E93',
        marginTop: 5,
    },
    footer: {
        padding: 20,
        paddingBottom: 40,
    },
    updateButton: {
        backgroundColor: '#5E46F4',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
    },
    updateButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
