import GradientButton from "@/components/GradientButton/GradientButton";
import { router } from "expo-router";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get('window');

export default function OnBoarding() {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            {/* Logo */}
            <View style={styles.header}>
                <Image
                    source={require('@/assets/images/Scholarpath.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            {/* Main Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={require('@/assets/images/Hungry.png')}
                    style={styles.mainImage}
                    resizeMode="contain"
                />
            </View>

            {/* Text Section */}
            <View style={styles.textContainer}>
                <Text style={styles.Btext}>
                    Connecting Hearts{'\n'}Through Education
                </Text>
                <Text style={styles.Stext}>
                    Scholarpath is a platform where donors
                    connect with students to fund education,
                    promote opportunity, and break barriers.
                </Text>
            </View>

            {/* Buttons */}
            <GradientButton
                text="Get Started"
                onPress={() => router.push("/roleSelection")}
                style={styles.button}
            />

            <TouchableOpacity style={styles.bcon} onPress={() => router.push("/login")}>
                <Text style={styles.loginText}>
                    Already have an account?
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: width * 0.5,
        height: height * 0.08,
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    mainImage: {
        width: '80%',
        height: height * 0.35,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    Btext: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        color: '#5E46F4',
        marginBottom: 12,
    },
    Stext: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
        lineHeight: 22,
    },
    button: {
        width: '100%',
        marginTop: 10,
    },
    loginText: {
        marginTop: 8,
        fontSize: 16,
        color: '#000',
    },
    bcon: {
        marginTop: 10,
        borderColor: '#5E46F4',
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        width: '100%',
        alignItems: 'center',
    }
});
