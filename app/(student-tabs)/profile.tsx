import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentProfileScreen() {
    const router = useRouter();

    const SettingsItem = ({ label, onPress }: { label: string; onPress: () => void }) => (
        <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
            <Text style={styles.settingsLabel}>{label}</Text>
            <IconSymbol name="chevron.right" size={20} color="#8E8E93" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                <View style={styles.headerBackground}>
                    <SafeAreaView edges={['top']}>
                        <View style={styles.headerNav}>
                            <TouchableOpacity onPress={() => router.back()} style={styles.headerBackBtn}>
                                <IconSymbol name="chevron.left" size={24} color="#fff" />
                                <Text style={styles.headerBackText}>Go back</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>

                    <View style={styles.avatarContainer}>
                        <View style={styles.avatarBorder}>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/150?u=abubakar' }}
                                style={styles.avatar}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.contentBackground}>
                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>A.S Abubakar</Text>
                        <Text style={styles.email}>asabubakar233@gmail.com</Text>
                    </View>

                    <View style={styles.statsCard}>
                        <View style={styles.statsRow}>
                            <View style={styles.statItem}>
                                <View style={styles.statLabelRow}>
                                    <IconSymbol name="arrow.up" size={20} color="#4CAF50" />
                                    <Text style={styles.statLabel}>Total Raise</Text>
                                </View>
                                <Text style={styles.statValue}>$400,000</Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.statItem}>
                                <View style={styles.statLabelRow}>
                                    <IconSymbol name="arrow.down" size={20} color="#FFC107" />
                                    <Text style={styles.statLabel}>Total Donors</Text>
                                </View>
                                <Text style={styles.statValue}>200</Text>
                            </View>
                        </View>

                        <View style={styles.separator} />

                        <TouchableOpacity style={styles.seekDonationButton} onPress={() => router.push('/(student-tabs)/post')}>
                            <Text style={styles.seekDonationText}>Seek Donation</Text>
                        </TouchableOpacity>
                    </View>

                    {/* General Settings */}
                    <View style={styles.settingsContainer}>
                        <Text style={styles.settingsTitle}>General Settings</Text>
                        <SettingsItem onPress={() => router.push('/info')} label="Profile Information" />
                        <SettingsItem onPress={() => router.push('/notification-settings')} label="Notification" />
                        <SettingsItem onPress={() => router.push('/kyc')} label="KYC Verification" />
                        <SettingsItem onPress={() => router.push('/payment')} label="Payment preferences" />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5E46F4',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 100
    },
    headerBackground: {
        backgroundColor: '#5E46F4',
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 80,
        position: 'relative',
    },
    headerNav: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40,
    },
    headerBackBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBackText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '500',
    },
    avatarContainer: {
        position: 'absolute',
        bottom: -60,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 10,
    },
    avatarBorder: {
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 75,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    contentBackground: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        paddingTop: 50,
        paddingBottom: 20,
    },
    profileInfo: {
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 30,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        color: '#8E8E93',
    },
    statsCard: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        marginBottom: 20,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    statItem: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    statLabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 5,
    },
    statLabel: {
        fontSize: 14,
        color: '#8E8E93',
    },
    statValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 25,
    },
    divider: {
        width: 1,
        backgroundColor: '#F0F0F0',
        marginHorizontal: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginBottom: 20,
    },
    seekDonationButton: {
        backgroundColor: '#5E46F4',
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: 'center',
    },
    seekDonationText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    settingsContainer: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    settingsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#000',
    },
    settingsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    settingsLabel: {
        fontSize: 16,
        color: '#000',
    },
});