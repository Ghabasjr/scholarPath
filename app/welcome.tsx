import GradientButton from "@/components/GradientButton/GradientButton";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
    return (
        <View style={styles.container}>

            <View style={styles.titleWrap}>
                <View style={styles.iconCircle}>
                    <Image
                        source={require('@/assets/images/tick-02.png')}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.TextContainer}>
                    <Text style={styles.WelcomeText}>Welcome,</Text>
                    <Text style={styles.welcome2}>User</Text>
                </View>
            </View>

            <View style={{ flex: 2 }} />

            <View style={styles.bottomButtons}>
                <GradientButton
                    text={"Complete KYC"}
                    onPress={() => router.push("/completeProfile")}
                />

                <TouchableOpacity
                    style={{ marginTop: 16 }}
                    onPress={() => router.push("/(tabs)")}
                >
                    <Text style={styles.skipText}>Skip for now</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 24,
        paddingTop: 60,
    },

    titleWrap: {
        alignItems: 'center',
    },

    iconCircle: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 3,
        borderColor: '#5E46F4',
        alignItems: 'center',
        justifyContent: 'center',
    },

    TextContainer: {
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    WelcomeText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
    },

    welcome2: {
        fontSize: 24,
        fontWeight: '700',
        color: '#5E46F4',
    },

    bottomButtons: {
        marginBottom: 60,
        alignItems: 'center',
    },

    skipText: {
        color: '#5E46F4',
        fontSize: 16,
        fontWeight: '600',
    },
});
