import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');


export default function StudentHomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('@/assets/images/Scholarpath.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => router.push('/notifications')}>
                            <Feather name="bell" size={24} color="#5E46F4" />
                            <View style={styles.notificationDot} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.statsContainer}>
                    {/* Funds Raised Card */}
                    <View style={[styles.statsCard, styles.cardBlue]}>
                        <View style={styles.statsHeader}>
                            <View style={[styles.iconCircle, styles.iconCircleBlue]}>
                                <FontAwesome5 name="hand-holding-usd" size={20} color="white" />
                            </View>
                            <View>
                                <Text style={styles.statsLabel}>Total Funds</Text>
                                <Text style={styles.statsLabel}>Raised</Text>
                            </View>
                        </View>
                        <Text style={styles.statsValue}>$1,250,000</Text>
                        <View style={styles.statsFooter}>
                            <Ionicons name="checkmark-circle" size={16} color="#5E46F4" />
                            <Text style={styles.statsFooterText}>30% added today</Text>
                        </View>
                    </View>

                    {/* Total Donors Card */}
                    <View style={[styles.statsCard, styles.cardYellow]}>
                        <View style={styles.statsHeader}>
                            <View style={[styles.iconCircle, styles.iconCircleYellow]}>
                                <FontAwesome5 name="hand-holding-heart" size={20} color="white" />
                            </View>
                            <View>
                                <Text style={styles.statsLabel}>Total</Text>
                                <Text style={styles.statsLabel}>Donors</Text>
                            </View>
                        </View>
                        <Text style={styles.statsValue}>100</Text>
                        <View style={styles.statsFooter}>
                            <Ionicons name="checkmark-circle" size={16} color="#EAB308" />
                            <Text style={styles.statsFooterTextYellow}>30% added today</Text>
                        </View>
                    </View>
                </View>

                {/* Ongoing Campaign */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Ongoing Campaign</Text>
                    <TouchableOpacity onPress={() => router.push('/campaigns')}>
                        <Text style={styles.seeAllText}>See all</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.campaignCard}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }}
                        style={styles.campaignImage}
                        resizeMode="cover"
                    />
                    <View style={styles.campaignContent}>
                        <View style={styles.campaignRow}>
                            <Text style={styles.campaignTitle}>About Me</Text>
                            <Text style={styles.raisingText}>
                                Raising/<Text style={styles.raisingAmount}>$300,000</Text>
                            </Text>
                        </View>

                        <View style={styles.progressRow}>
                            <Text style={styles.remainingText}>Remaining</Text>
                            <Text style={styles.remainingAmount}>$ 4000</Text>
                        </View>

                        <View style={styles.progressBarContainer}>
                            <View style={[styles.progressBarFill, { width: '70%' }]} />
                        </View>
                    </View>
                </View>

                {/* Recent Donations */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recent Donations</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>See all</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.donationsList}>
                    {/* Donation Item 1 */}
                    <View style={styles.donationItem}>
                        <View style={styles.donationIconCircle}>
                            <FontAwesome5 name="hand-holding-usd" size={20} color="#C084FC" />
                        </View>
                        <View style={styles.donationContent}>
                            <Text style={styles.donationTitle}>Donated - $300</Text>
                            <Text style={styles.donationSubtitle}>Salisu Ahmad donated $300 your request</Text>
                        </View>
                    </View>

                    {/* Donation Item 2 */}
                    <View style={styles.donationItem}>
                        <View style={styles.donationIconCircle}>
                            <FontAwesome5 name="hand-holding-usd" size={20} color="#C084FC" />
                        </View>
                        <View style={styles.donationContent}>
                            <Text style={styles.donationTitle}>Donated - $500</Text>
                            <Text style={styles.donationSubtitle}>Salisu Ahmad donated $300 your request</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    header2: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        width: width * 0.5,
        height: height * 0.08,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoTextBlack: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    logoTextBlue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5E46F4',
    },
    notificationDot: {
        position: 'absolute',
        top: 0,
        right: 2,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#EF4444',
        borderWidth: 1,
        borderColor: 'white',
    },
    statsContainer: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 32,
    },
    statsCard: {
        flex: 1,
        borderRadius: 16,
        padding: 16,
        justifyContent: 'space-between',
        height: 160,
    },
    cardBlue: {
        backgroundColor: '#DBEAFE', // Light blue
        borderWidth: 1,
        borderColor: '#5E46F4',
    },
    cardYellow: {
        backgroundColor: '#FEF9C3', // Light yellow
        borderWidth: 1,
        borderColor: '#FDE047',
    },
    statsHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconCircleBlue: {
        backgroundColor: '#5E46F4',
    },
    iconCircleYellow: {
        backgroundColor: '#EAB308', // Yellow-500
    },
    statsLabel: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 18,
    },
    statsValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
        marginTop: 12,
    },
    statsFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 8,
    },
    statsFooterText: {
        fontSize: 12,
        color: '#5E46F4',
        fontWeight: '500',
    },
    statsFooterTextYellow: {
        fontSize: 12,
        color: '#EAB308',
        fontWeight: '500',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
    },
    seeAllText: {
        fontSize: 14,
        color: '#5E46F4',
        fontWeight: '600',
    },
    campaignCard: {
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 16,
        marginBottom: 32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    campaignImage: {
        width: '100%',
        height: 150,
        borderRadius: 16,
        marginBottom: 16,
    },
    campaignContent: {
        gap: 8,
    },
    campaignRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    campaignTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
    },
    raisingText: {
        fontSize: 14,
        color: '#111827',
    },
    raisingAmount: {
        color: '#5E46F4',
        fontWeight: 'bold',
    },
    progressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    remainingText: {
        fontSize: 14,
        color: '#111827',
    },
    remainingAmount: {
        fontSize: 14,
        color: '#5E46F4',
        fontWeight: '600',
    },
    progressBarContainer: {
        height: 6,
        backgroundColor: '#E5E7EB',
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#5E46F4',
        borderRadius: 3,
    },
    donationsList: {
        gap: 16,
    },
    donationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 16,
        gap: 16,
    },
    donationIconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#F3E8FF', // Light purple
        alignItems: 'center',
        justifyContent: 'center',
    },
    donationContent: {
        flex: 1,
    },
    donationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 4,
    },
    donationSubtitle: {
        fontSize: 12,
        color: '#6B7280',
    },
});
