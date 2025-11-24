import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileInfoScreen() {
    const router = useRouter();
    const [name, setName] = useState('Shuabu Aliyu');
    const [phone, setPhone] = useState('07011079676');
    const [email, setEmail] = useState('asabubakar@gmail.com');
    const [country, setCountry] = useState('Country');
    const [city, setCity] = useState('City');

    const InputField = ({ value, onChange, placeholder }: { value: string, onChange: (text: string) => void, placeholder: string }) => (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor="#8E8E93"
            />
            <IconSymbol name="pencil" size={20} color="#5E46F4" />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile Info</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?u=abubakar' }}
                        style={styles.avatar}
                    />
                    <TouchableOpacity style={styles.cameraButton}>
                        <IconSymbol name="camera" size={20} color="#5E46F4" />
                    </TouchableOpacity>
                </View>

                <View style={styles.formContainer}>
                    <InputField value={name} onChange={setName} placeholder="Name" />
                    <InputField value={phone} onChange={setPhone} placeholder="Phone" />
                    <InputField value={email} onChange={setEmail} placeholder="Email" />
                    <InputField value={country} onChange={setCountry} placeholder="Country" />
                    <InputField value={city} onChange={setCity} placeholder="City" />
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.saveButton} onPress={() => router.back()}>
                    <Text style={styles.saveButtonText}>Save Changes</Text>
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
    avatarContainer: {
        alignSelf: 'center',
        marginBottom: 30,
        position: 'relative',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    cameraButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#5E46F4',
    },
    formContainer: {
        gap: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 60,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
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
