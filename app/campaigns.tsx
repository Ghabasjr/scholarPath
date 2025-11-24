import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from '../components/ui/icon-symbol';

const MOCK_CAMPAIGNS = [
    {
        id: '1',
        title: 'School Fees Support',
        amountRaised: 450000,
        totalAmount: 500000,
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: '2',
        title: 'Final Year Project',
        amountRaised: 120000,
        totalAmount: 200000,
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2049&q=80',
    },
    {
        id: '3',
        title: 'Laptop for Coding',
        amountRaised: 50000,
        totalAmount: 350000,
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
];

export default function CampaignsScreen() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const renderItem = ({ item }: { item: typeof MOCK_CAMPAIGNS[0] }) => {
        const progress = item.amountRaised / item.totalAmount;

        return (
            <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.title}</Text>

                    <View style={styles.progressContainer}>
                        <View style={styles.progressBarBackground}>
                            <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
                        </View>
                        <View style={styles.amountRow}>
                            <Text style={styles.raisedText}>₦{item.amountRaised.toLocaleString()}</Text>
                            <Text style={styles.totalText}>of ₦{item.totalAmount.toLocaleString()}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.arrowButton}>
                    <IconSymbol name="chevron.right" size={20} color="#000" />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="arrow.left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ongoing Campaign</Text>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <IconSymbol name="search" size={20} color="#8E8E93" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholderTextColor="#8E8E93"
                    />
                </View>
                <TouchableOpacity style={styles.filterButton}>
                    <IconSymbol name="sliders" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={MOCK_CAMPAIGNS}
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
        paddingTop: 30,
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
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    searchContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 20,
        gap: 10,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 44,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 15,
        color: '#000',
    },
    filterButton: {
        width: 44,
        height: 44,
        // backgroundColor: Colors.primary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#F3F4F6',
    },
    cardContent: {
        flex: 1,
        marginLeft: 12,
        marginRight: 8,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 8,
    },
    progressContainer: {
        marginTop: 4,
    },
    progressBarBackground: {
        height: 4,
        backgroundColor: '#E5E7EB',
        borderRadius: 2,
        marginBottom: 4,
    },
    progressBarFill: {
        height: '100%',
        // backgroundColor: Colors.primary,
        borderRadius: 2,
    },
    amountRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    raisedText: {
        fontSize: 12,
        fontWeight: '600',
        // color: Colors.primary,
    },
    totalText: {
        fontSize: 12,
        color: '#6B7280',
        marginLeft: 4,
    },
    arrowButton: {
        padding: 4,
    }
});
