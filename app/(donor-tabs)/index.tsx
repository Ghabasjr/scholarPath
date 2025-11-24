import { IconSymbol } from '@/components/ui/icon-symbol';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const CARD_WIDTH = width * 0.75;

const MOCK_STUDENTS = [
    {
        id: '1',
        name: 'About Me',
        description: 'Support me in purchasing my study materials — click to learn more.',
        image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        tag: 'Study Materials',
        raising: 400000,
        raised: 300,
        location: 'Lagos, Nigeria',
        school: 'UNILAG Student',
        fundingRound: '32 Funding Round',
    },
    {
        id: '2',
        name: 'About Me',
        description: 'Help me pay my tuition fees for the upcoming semester.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        tag: 'Tuition Fees',
        raising: 150000,
        raised: 50000,
        location: 'Abuja, Nigeria',
        school: 'UniAbuja Student',
        fundingRound: '12 Funding Round',
    },
];

export default function DonorHomeScreen() {
    const router = useRouter();

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

                {/* Banner */}
                <LinearGradient
                    colors={['#6366F1', '#4F46E5']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.banner}
                >
                    <View style={styles.bannerContent}>
                        <View style={styles.bannerTextContainer}>
                            <Text style={styles.bannerTitle}>Custom Donation?</Text>
                            <Text style={styles.bannerDescription}>
                                Reach out to our team — we’ll <Text style={styles.boldText}>distribute</Text> your <Text style={styles.boldText}>donations</Text>.
                            </Text>
                        </View>
                        <View style={styles.bannerImageContainer}>
                            {/* Placeholder for the illustration in the design */}
                            <Image
                                source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/charity-donation-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--box-love-volunteer-volunteering-pack-miscellaneous-illustrations-4542867.png' }}
                                style={styles.bannerImage}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.closeButton}>
                        <IconSymbol name="xmark" size={16} color="#fff" />
                    </TouchableOpacity>
                </LinearGradient>

                {/* Greeting */}
                <View style={styles.greetingContainer}>
                    <Text style={styles.greetingTitle}>Hi, Mariam!</Text>
                    <Text style={styles.greetingSubtitle}>Support a student today!</Text>
                </View>

                {/* Student Carousel */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.carouselContent}
                    decelerationRate="fast"
                    snapToInterval={CARD_WIDTH + 20}
                >
                    {MOCK_STUDENTS.map((item) => (
                        <View key={item.id} style={styles.card}>
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: item.image }} style={styles.cardImage} />
                                <View style={styles.tagContainer}>
                                    <IconSymbol name="book.fill" size={14} color="#fff" />
                                    <Text style={styles.tagText}>{item.tag}</Text>
                                </View>
                            </View>

                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>{item.name}</Text>
                                <Text style={styles.cardDescription}>
                                    {item.description.split('click to learn more.')[0]}
                                    <Text style={styles.linkText}>click to learn more.</Text>
                                </Text>

                                <View style={styles.statsRow}>
                                    <View style={styles.statsBox}>
                                        <Text style={styles.statsLabel}>Raising</Text>
                                        <Text style={styles.statsValue}>${item.raising.toLocaleString()}</Text>
                                        <View style={styles.progressBarBg}>
                                            <View style={[styles.progressBarFill, { width: `${(item.raised / item.raising) * 100}%` }]} />
                                        </View>
                                        <Text style={styles.raisedAmount}>${item.raised}</Text>
                                    </View>

                                    <View style={styles.statsBox}>
                                        <View style={styles.locationRow}>
                                            <IconSymbol name="mappin.and.ellipse" size={14} color='#5E46F4' />
                                            <Text style={styles.locationText}>{item.location}</Text>
                                        </View>
                                        <Text style={styles.schoolText}>{item.school}</Text>
                                        <Text style={styles.fundingText}>{item.fundingRound}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
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
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
    },
    logo: {
        width: width * 0.5,
        height: height * 0.08,
    },
    logoContainer: {
        flexDirection: 'row',
    },
    logoText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
    },

    banner: {
        margin: 20,
        borderRadius: 20,
        padding: 20,
        position: 'relative',
        overflow: 'hidden',
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
    bannerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bannerTextContainer: {
        flex: 1,
        paddingRight: 10,
    },
    bannerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 5,
    },
    bannerDescription: {
        fontSize: 14,
        color: '#E0E7FF',
        lineHeight: 20,
    },
    boldText: {
        fontWeight: '700',
        color: '#fff',
    },
    bannerImageContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
    },
    greetingContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    greetingTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
    },
    greetingSubtitle: {
        fontSize: 16,
        color: '#6B7280',
        marginTop: 5,
    },
    carouselContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    card: {
        width: CARD_WIDTH,
        backgroundColor: '#fff',
        borderRadius: 24,
        marginRight: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
    },
    imageContainer: {
        height: 180,
        position: 'relative',
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    tagContainer: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    tagText: {
        fontSize: 12,
        fontWeight: '600',
    },
    cardBody: {
        padding: 20,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
        marginBottom: 20,
    },
    linkText: {
        fontWeight: '600',
    },
    statsRow: {
        flexDirection: 'row',
        gap: 15,
    },
    statsBox: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 16,
        padding: 12,
    },
    statsLabel: {
        fontSize: 12,
        color: '#6B7280',
        marginBottom: 4,
    },
    statsValue: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 8,
    },
    progressBarBg: {
        height: 4,
        backgroundColor: '#E5E7EB',
        borderRadius: 2,
        marginBottom: 4,
        width: '100%',
    },
    progressBarFill: {
        height: '100%',
        borderRadius: 2,
    },
    raisedAmount: {
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'right',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 8,
    },
    locationText: {
        fontSize: 12,
        fontWeight: '500',
    },
    schoolText: {
        fontSize: 12,
        color: '#6B7280',
        marginBottom: 4,
    },
    fundingText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
    }
});
