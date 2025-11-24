import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DONORS = [
    { id: '1', name: 'Aisha Yusuf', location: 'Lagos, Nigeria', image: 'https://i.pravatar.cc/150?u=aisha' },
    { id: '2', name: 'Anonymous', location: 'Private Address', image: 'https://i.pravatar.cc/150?u=anon' },
    { id: '3', name: 'Aisha Yusuf', location: 'Lagos, Nigeria', image: 'https://i.pravatar.cc/150?u=aisha2' },
    { id: '4', name: 'Anonymous', location: 'Private Address', image: 'https://i.pravatar.cc/150?u=anon2' },
    { id: '5', name: 'Aisha Yusuf', location: 'Lagos, Nigeria', image: 'https://i.pravatar.cc/150?u=aisha3' },
    { id: '6', name: 'Aisha Yusuf', location: 'University Of Lagos', image: 'https://i.pravatar.cc/150?u=aisha4' },
];

export default function StudentDonorsScreen() {
    const router = useRouter();

    const renderItem = ({ item }: { item: typeof DONORS[0] }) => (
        <TouchableOpacity style={styles.donorItem}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.donorInfo}>
                <Text style={styles.donorName}>{item.name}</Text>
                <Text style={styles.donorLocation}>{item.location}</Text>
            </View>
            <IconSymbol name="chevron.right" size={24} color="#5E46F4" />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color="#5E46F4" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Donors</Text>
                <View style={{ width: 40 }} />
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <IconSymbol name="search" size={20} color="#8E8E93" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search here"
                        placeholderTextColor="#8E8E93"
                    />
                </View>
                <TouchableOpacity style={styles.filterButton}>
                    <IconSymbol name="sliders" size={24} color="#5E46F4" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={DONORS}
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
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 50,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    filterButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderRadius: 12,
    },
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    donorItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    donorInfo: {
        flex: 1,
    },
    donorName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    donorLocation: {
        fontSize: 14,
        color: '#8E8E93',
    },
});
