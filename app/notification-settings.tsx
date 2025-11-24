import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotificationSettingsScreen() {
    const router = useRouter();

    const [settings, setSettings] = useState({
        donation: true,
        fundingReach: true,
        fundingStatus: true,
        reminder: true,
        kyc: true,
        security: true,
        updates: true,
    });

    const toggleSwitch = (key: keyof typeof settings) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const SettingItem = ({ label, value, onToggle }: { label: string, value: boolean, onToggle: () => void }) => (
        <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>{label}</Text>
            <Switch
                trackColor={{ false: '#767577', true: '#5E46F4' }}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onToggle}
                value={value}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notification</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <SettingItem
                    label="Get notified when someone donates to your request"
                    value={settings.donation}
                    onToggle={() => toggleSwitch('donation')}
                />
                <SettingItem
                    label="Be alerted when your funding reaches 50%, 80%, or 100%"
                    value={settings.fundingReach}
                    onToggle={() => toggleSwitch('fundingReach')}
                />
                <SettingItem
                    label="Know when your funding request is approved or declined"
                    value={settings.fundingStatus}
                    onToggle={() => toggleSwitch('fundingStatus')}
                />
                <SettingItem
                    label="Reminder 3 days before your campaign ends"
                    value={settings.reminder}
                    onToggle={() => toggleSwitch('reminder')}
                />
                <SettingItem
                    label="Alert when your KYC is approved, pending, or rejected"
                    value={settings.kyc}
                    onToggle={() => toggleSwitch('kyc')}
                />
                <SettingItem
                    label="Security alerts for your account"
                    value={settings.security}
                    onToggle={() => toggleSwitch('security')}
                />
                <SettingItem
                    label="Platform updates, events, or new features"
                    value={settings.updates}
                    onToggle={() => toggleSwitch('updates')}
                />
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.saveButton} onPress={() => router.back()}>
                    <Text style={styles.saveButtonText}>Save</Text>
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
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    settingLabel: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        marginRight: 10,
        lineHeight: 22,
    },
    footer: {
        padding: 20,
        paddingBottom: 40,
    },
    saveButton: {
        backgroundColor: '#5E46F4',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
