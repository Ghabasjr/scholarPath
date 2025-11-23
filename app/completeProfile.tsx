import BottomSheetPicker from "@/components/bottomSheetPicker";
import CustomInput from "@/components/CustomInput/CustomInput";
import GradientButton from "@/components/GradientButton/GradientButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import { useState } from "react";

import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function CompleteProfile() {
    const [step, setStep] = useState(1);

    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");
    const [education, setEducation] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");

    const [schoolName, setSchoolName] = useState("");
    const [faculty, setFaculty] = useState("");
    const [yearOfStudy, setYearOfStudy] = useState("");

    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [bankName, setBankName] = useState("");
    const [bio, setBio] = useState("");

    const [dobModal, setDobModal] = useState(false);
    const [educationModal, setEducationModal] = useState(false);
    const [genderModal, setGenderModal] = useState(false);
    const [countryModal, setCountryModal] = useState(false);
    const [yearOfStudyModal, setYearOfStudyModal] = useState(false);
    const [bankModal, setBankModal] = useState(false);

    const handleContinue = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Submit logic here
            router.push("/(tabs)");
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            router.back();
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 140 }}>

                <View style={styles.headerContainer}>
                    <View style={{ flexDirection: "row", gap: 6 }}>
                        <Text style={styles.titleBlack}>Complete</Text>
                        <Text style={styles.titlePurple}>Profile</Text>
                    </View>
                    <Text style={styles.subtitle}>
                        These requirements help keep our community safe and credible.
                    </Text>
                </View>

                <View style={styles.progressRow}>
                    <View style={[styles.progressItem, step >= 1 ? styles.progressActive : styles.progressInactive]}></View>
                    <View style={[styles.progressItem, step >= 2 ? styles.progressActive : styles.progressInactive]}></View>
                    <View style={[styles.progressItem, step >= 3 ? styles.progressActive : styles.progressInactive]}></View>
                </View>

                {step === 1 && (
                    <View style={{ marginTop: 24 }}>
                        <CustomInput
                            placeholder="Full name"
                            value={fullName}
                            onChangeText={setFullName}
                        />

                        <TouchableOpacity onPress={() => setDobModal(true)}>
                            <View pointerEvents="none">
                                <CustomInput placeholder="Date of Birth" value={dob} dropdown />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setEducationModal(true)}>
                            <View pointerEvents="none">
                                <CustomInput placeholder="Education Level" value={education} dropdown />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setGenderModal(true)}>
                            <View pointerEvents="none">
                                <CustomInput placeholder="Gender" value={gender} dropdown />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setCountryModal(true)}>
                            <View pointerEvents="none">
                                <CustomInput placeholder="Country" value={country} dropdown />
                            </View>
                        </TouchableOpacity>

                        <CustomInput
                            placeholder="Current Home Address"
                            value={address}
                            onChangeText={setAddress}
                        />
                    </View>
                )}

                {step === 2 && (
                    <View style={{ marginTop: 24 }}>
                        <CustomInput
                            placeholder="School / Institution name"
                            value={schoolName}
                            onChangeText={setSchoolName}
                        />
                        <CustomInput
                            placeholder="Faculty / Department"
                            value={faculty}
                            onChangeText={setFaculty}
                        />
                        <TouchableOpacity onPress={() => setYearOfStudyModal(true)}>
                            <View pointerEvents="none">
                                <CustomInput placeholder="Level / Year of study" value={yearOfStudy} dropdown />
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.sectionTitle}>Upload the following Documents</Text>

                        <View style={styles.uploadRow}>
                            <Text style={styles.uploadLabel}>Valid Student ID Card</Text>
                            <TouchableOpacity>
                                <Text style={styles.uploadButton}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.uploadRow}>
                            <Text style={styles.uploadLabel}>Admission Letter</Text>
                            <TouchableOpacity>
                                <Text style={styles.uploadButton}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.uploadRow}>
                            <Text style={styles.uploadLabel}>Selfie with school ID card</Text>
                            <TouchableOpacity>
                                <Text style={styles.uploadButton}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                {step === 3 && (
                    <View style={{ marginTop: 24 }}>
                        <CustomInput
                            placeholder="Account Name"
                            value={accountName}
                            onChangeText={setAccountName}
                        />
                        <CustomInput
                            placeholder="Account Number"
                            value={accountNumber}
                            onChangeText={setAccountNumber}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity onPress={() => setBankModal(true)}>
                            <View pointerEvents="none">
                                <CustomInput placeholder="Bank Name" value={bankName} dropdown />
                            </View>
                        </TouchableOpacity>

                        <View style={styles.divider} />

                        <Text style={styles.sectionTitle}>Write about yourself</Text>
                        <View style={styles.bioContainer}>
                            <TextInput
                                style={styles.bioInput}
                                placeholder="Write here......."
                                placeholderTextColor="#A1A1A1"
                                multiline
                                value={bio}
                                onChangeText={setBio}
                            />
                        </View>
                        <Text style={styles.wordCount}>Not more than 50 words</Text>
                    </View>
                )}

            </ScrollView>

            <View style={styles.bottomArea}>
                <GradientButton
                    text={step === 3 ? "Go to dashboard" : "Continue"}
                    onPress={handleContinue}
                />
                <TouchableOpacity onPress={handleBack}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>

            {/* Modals */}
            <BottomSheetPicker
                visible={dobModal}
                onClose={() => setDobModal(false)}
                renderCustomContent={() => (
                    <DateTimePicker
                        mode="date"
                        display="spinner"
                        value={new Date()}
                        onChange={(e, selected) => {
                            if (selected) {
                                const date = selected.toISOString().split("T")[0];
                                setDob(date);
                            }
                            setDobModal(false);
                        }}
                    />
                )}
            />

            <BottomSheetPicker
                visible={educationModal}
                onClose={() => setEducationModal(false)}
                options={["High School", "Bachelors", "MSc"]}
                onSelect={(v) => {
                    setEducation(v);
                    setEducationModal(false);
                }}
            />

            <BottomSheetPicker
                visible={genderModal}
                onClose={() => setGenderModal(false)}
                radio
                selectedValue={gender}
                options={["Male", "Female"]}
                onSelect={(v) => {
                    setGender(v);
                    setGenderModal(false);
                }}
            />

            <BottomSheetPicker
                visible={countryModal}
                onClose={() => setCountryModal(false)}
                options={["Ghana", "Nigeria", "Kenya", "USA"]}
                onSelect={(v) => {
                    setCountry(v);
                    setCountryModal(false);
                }}
            />

            <BottomSheetPicker
                visible={yearOfStudyModal}
                onClose={() => setYearOfStudyModal(false)}
                options={["Level 100", "Level 200", "Level 300", "Level 400"]}
                onSelect={(v) => {
                    setYearOfStudy(v);
                    setYearOfStudyModal(false);
                }}
            />

            <BottomSheetPicker
                visible={bankModal}
                onClose={() => setBankModal(false)}
                options={["Bank A", "Bank B", "Bank C"]}
                onSelect={(v) => {
                    setBankName(v);
                    setBankModal(false);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    headerContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    titleBlack: {
        fontSize: 28,
        fontWeight: "700",
        color: "#000",
    },
    titlePurple: {
        fontSize: 28,
        fontWeight: "700",
        color: "#5E46F4",
    },
    subtitle: {
        color: "#A1A1A1",
        marginTop: 8,
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: 16,
    },
    bottomArea: {
        position: "absolute",
        bottom: 40,
        width: "100%",
        left: 24,
        right: 24,
        alignItems: "center",
    },
    backText: {
        marginTop: 12,
        fontSize: 16,
        color: "#000",
        fontWeight: "500",
    },

    progressRow: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
    },
    progressItem: {
        height: 6,
        flex: 1,
        borderRadius: 10,
    },
    progressActive: {
        backgroundColor: "#5E46F4",
    },
    progressInactive: {
        backgroundColor: "#EDEDED",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#000",
        marginBottom: 16,
        marginTop: 8,
    },
    uploadRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },
    uploadLabel: {
        fontSize: 14,
        color: "#A1A1A1",
    },
    uploadButton: {
        fontSize: 14,
        color: "#5E46F4",
        fontWeight: "500",
    },
    divider: {
        height: 1,
        backgroundColor: "#EDEDED",
        marginVertical: 24,
    },
    bioContainer: {
        backgroundColor: "#F5F7FF",
        borderRadius: 12,
        padding: 16,
        height: 150,
        marginBottom: 8,
    },
    bioInput: {
        fontSize: 16,
        color: "#000",
        textAlignVertical: "top",
    },
    wordCount: {
        fontSize: 12,
        color: "#A1A1A1",
        textAlign: "right",
    },
});
