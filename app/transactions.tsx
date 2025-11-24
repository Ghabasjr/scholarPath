import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from '../components/ui/icon-symbol';

const MOCK_TRANSACTIONS = [
    {
        id: '1',
        name: 'Aliko Dangote',
        amount: 50000,
        date: '12 Nov 2024',
        time: '14:30',
        campaign: 'School Fees Support',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: '2',
        name: 'Femi Otedola',
        amount: 25000,
        date: '10 Nov 2024',
        time: '09:15',
        campaign: 'Final Year Project',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
        id: '3',
        name: 'Tony Elumelu',
        amount: 100000,
        date: '08 Nov 2024',
        time: '16:45',
        campaign: 'Laptop for Coding',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
];

export default function TransactionsScreen() {
    const router = useRouter();

    const renderItem = ({ item }: { item: typeof MOCK_TRANSACTIONS[0] }) => (
        <View style={styles.transactionItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.transactionDetails}>
                <Text style={styles.donorName}>{item.name}</Text>
                <Text style={styles.campaignName}>Donated to {item.campaign}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>+₦{item.amount.toLocaleString()}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="arrow.left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Transactions</Text>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>People who donated</Text>
            </View>

            <FlatList
                data={MOCK_TRANSACTIONS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    sectionHeader: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#374151',
    },
    listContent: {
        paddingHorizontal: 20,
    },
    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E5E7EB',
    },
    transactionDetails: {
        flex: 1,
        marginLeft: 12,
    },
    donorName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
    },
    campaignName: {
        fontSize: 12,
        color: '#6B7280',
        marginTop: 2,
    },
    amountContainer: {
        alignItems: 'flex-end',
    },
    amount: {
        fontSize: 15,
        fontWeight: '600',
        color: '#059669', // Green color for income
    },
    date: {
        fontSize: 11,
        color: '#9CA3AF',
        marginTop: 2,
    },
});
