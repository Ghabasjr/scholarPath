import GradientButton from '@/components/GradientButton/GradientButton';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RECENT_DONATIONS = [
    { id: '1', name: 'Samuel O.', amount: '₦20,000', date: 'Oct 27, 2025', purpose: 'Tuition Fees 2025/2026' },
    { id: '2', name: 'Anonymous', amount: '₦15,000', date: 'Oct 22, 2025', purpose: 'Tuition Fees 2025/2026' },
    { id: '3', name: 'Samuel O.', amount: '₦20,000', date: 'Oct 27, 2025', purpose: 'Tuition Fees 2025/2026' },
    { id: '4', name: 'Anonymous', amount: '₦15,000', date: 'Oct 22, 2025', purpose: 'Tuition Fees 2025/2026' },
    { id: '5', name: 'Samuel O.', amount: '₦20,000', date: 'Oct 27, 2025', purpose: 'Tuition Fees 2025/2026' },
    { id: '6', name: 'Anonymous', amount: '₦15,000', date: 'Oct 27, 2025', purpose: 'Tuition Fees 2025/2026' },
];

export default function StudentDonationsScreen() {
    const router = useRouter();

    const renderDonationItem = ({ item }: { item: typeof RECENT_DONATIONS[0] }) => (
        <View style={styles.donationItem}>
            <View style={styles.donationIconContainer}>
                <IconSymbol name="heart.text.square.fill" size={20} color={Colors.primary} />
            </View>
            <View style={styles.donationDetails}>
                <Text style={styles.donationText}>
                    <Text style={styles.donorName}>{item.name}</Text> donated <Text style={styles.amount}>{item.amount}</Text>
                </Text>
                <Text style={styles.dateText}>{item.date} — {item.purpose}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Donations</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Summary Cards */}
                <View style={styles.summaryContainer}>
                    <View style={styles.summaryCard}>
                        <View style={[styles.iconCircle, { backgroundColor: '#5E46F4' }]}>
                            <IconSymbol name="clock.arrow.circlepath" size={24} color="#fff" />
                        </View>
                        <View>
                            <Text style={styles.summaryLabel}>Total Raised</Text>
                            <Text style={styles.summaryValue}>$1,250,000</Text>
                        </View>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.summaryCard}>
                        <View style={[styles.iconCircle, { backgroundColor: '#FFD700' }]}>
                            <IconSymbol name="heart.text.square.fill" size={24} color="#fff" />
                        </View>
                        <View>
                            <Text style={styles.summaryLabel}>Total Donors</Text>
                            <Text style={styles.summaryValue}>300</Text>
                        </View>
                    </View>
                </View>

                {/* Campaign Overview Link */}
                <TouchableOpacity style={styles.overviewLink}>
                    <Text style={styles.overviewText}>Ongoing Campaign Overview</Text>
                    <IconSymbol name="chevron.right" size={20} color="#5E46F4" />
                </TouchableOpacity>

                {/* Recent Donations List */}
                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>Recent Donations</Text>
                    {RECENT_DONATIONS.map((item) => (
                        <View key={item.id}>
                            {renderDonationItem({ item })}
                        </View>
                    ))}
                </View>
                <GradientButton text={'Raise Fund'} onPress={() => router.push('/')} />
            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        paddingHorizontal: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    backButton: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    summaryContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    summaryCard: {
        flex: 1,
        alignItems: 'center',
    },
    divider: {
        width: 1,
        height: '80%',
        backgroundColor: '#E0E0E0',
        marginHorizontal: 10,
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    summaryLabel: {
        fontSize: 12,
        color: '#8E8E93',
        marginBottom: 4,
        textAlign: 'center',
    },
    summaryValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    overviewLink: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    overviewText: {
        fontSize: 16,
        color: '#5E46F4',
        fontWeight: '500',
    },
    listContainer: {
        backgroundColor: '#F0F4FF', // Light blue/purple tint background
        borderRadius: 16,
        padding: 20,
    },
    listTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#000',
    },
    donationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    donationIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    donationDetails: {
        flex: 1,
    },
    donationText: {
        fontSize: 14,
        color: '#000',
        marginBottom: 2,
    },
    donorName: {
        fontWeight: 'bold',
    },
    amount: {
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 12,
        color: '#8E8E93',
    },
    footer: {
        position: 'absolute',
        bottom: 80, // Above tab bar
        left: 20,
        right: 20,
    },
    raiseFundButton: {
        backgroundColor: '#5E46F4',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        shadowColor: '#5E46F4',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    raiseFundButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
