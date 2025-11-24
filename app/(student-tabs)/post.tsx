import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CATEGORIES = ['Tuition', 'Books', 'Accommodation', 'Laptop', 'Medical'];
const VISIBILITY_OPTIONS = ['Public', 'Connections Only', 'Private'];
const BANK_OPTIONS = ['Jaiz Bank', 'UBA', 'Access Bank', 'First Bank'];
const PRESET_AMOUNTS = ['5000', '10000', '20000', '40000'];

const { width } = Dimensions.get('window');

export default function StudentPostScreen() {
    const router = useRouter();
    const [step, setStep] = useState(1);

    const [categoryModalVisible, setCategoryModalVisible] = useState(false);
    const [goalModalVisible, setGoalModalVisible] = useState(false);
    const [dateModalVisible, setDateModalVisible] = useState(false);
    const [visibilityModalVisible, setVisibilityModalVisible] = useState(false);
    const [bankModalVisible, setBankModalVisible] = useState(false);

    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [goalAmount, setGoalAmount] = useState('');
    const [deadline, setDeadline] = useState('');
    const [visibility, setVisibility] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [bankName, setBankName] = useState('');

    const [selectedDay, setSelectedDay] = useState('17');
    const [selectedMonth, setSelectedMonth] = useState('January');
    const [selectedYear, setSelectedYear] = useState('2025');

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
        else router.back();
    };

    const handlePublish = () => {
        console.log('Publishing post...', { category, description, goalAmount, deadline, visibility, accountNumber, accountName, bankName });
        router.push('/(student-tabs)');
    };

    const handleKeypadPress = (value: string) => {
        if (value === 'backspace') {
            setGoalAmount(prev => prev.slice(0, -1));
        } else if (value === '.') {
            if (!goalAmount.includes('.')) setGoalAmount(prev => prev + value);
        } else {
            setGoalAmount(prev => prev + value);
        }
    };

    const renderProgressBar = () => (
        <View style={styles.progressBarContainer}>
            {[1, 2, 3].map((s) => (
                <View key={s} style={[styles.progressSegment, step >= s ? styles.activeSegment : styles.inactiveSegment]} />
            ))}
        </View>
    );

    const renderStep1 = () => (
        <View>
            <View style={styles.inputGroup}>
                <TouchableOpacity style={styles.pickerContainer} onPress={() => setCategoryModalVisible(true)}>
                    <Text style={[styles.pickerText, !category && { color: '#8E8E93' }]}>{category || 'Category'}</Text>
                    <IconSymbol name="chevron.down" size={20} color="#000" />
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Description</Text>
            <View style={styles.textAreaContainer}>
                <TextInput
                    style={styles.textArea}
                    placeholder="Please write here......"
                    multiline
                    numberOfLines={6}
                    value={description}
                    onChangeText={setDescription}
                    textAlignVertical="top"
                />
                <View style={styles.wordCountContainer}>
                    <Text style={styles.wordCount}>50 words</Text>
                </View>
            </View>
            <Text style={styles.helperText}>Explain the need and how funds will be used.</Text>
        </View>
    );

    const renderStep2 = () => (
        <View>
            <View style={styles.inputGroup}>
                <TouchableOpacity style={styles.pickerContainer} onPress={() => setGoalModalVisible(true)}>
                    <Text style={[styles.pickerText, !goalAmount && { color: '#8E8E93' }]}>
                        {goalAmount ? `$ ${goalAmount}` : 'Goal Amount'}
                    </Text>
                    <IconSymbol name="chevron.down" size={20} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.inputGroup}>
                <TouchableOpacity style={styles.pickerContainer} onPress={() => setDateModalVisible(true)}>
                    <Text style={[styles.pickerText, !deadline && { color: '#8E8E93' }]}>{deadline || 'Deadline/Target date'}</Text>
                    <IconSymbol name="chevron.down" size={20} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.inputGroup}>
                <TouchableOpacity style={styles.pickerContainer} onPress={() => setVisibilityModalVisible(true)}>
                    <Text style={[styles.pickerText, !visibility && { color: '#8E8E93' }]}>{visibility || 'Visibility'}</Text>
                    <IconSymbol name="chevron.down" size={20} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderStep3 = () => (
        <View>
            <View style={styles.inputGroup}>
                <TextInput
                    style={styles.input}
                    value={accountNumber}
                    onChangeText={setAccountNumber}
                    placeholder="Account Number"
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    style={styles.input}
                    value={accountName}
                    onChangeText={setAccountName}
                    placeholder="Account Name"
                />
            </View>
            <View style={styles.inputGroup}>
                <TouchableOpacity style={styles.pickerContainer} onPress={() => setBankModalVisible(true)}>
                    <Text style={[styles.pickerText, !bankName && { color: '#8E8E93' }]}>{bankName || 'Bank Name'}</Text>
                    <IconSymbol name="chevron.down" size={20} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.title}>Create Post</Text>
                    <Text style={styles.subtitle}>These requirements help keep our community safe and credible.</Text>

                    {renderProgressBar()}

                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}

                </ScrollView>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.primaryButton} onPress={step === 3 ? handlePublish : handleNext}>
                        <Text style={styles.primaryButtonText}>{step === 3 ? 'Publish' : 'Continue'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton} onPress={handleBack}>
                        <Text style={styles.secondaryButtonText}>Back</Text>
                    </TouchableOpacity>
                </View>

                {/* Category Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={categoryModalVisible}
                    onRequestClose={() => setCategoryModalVisible(false)}
                >
                    <TouchableWithoutFeedback onPress={() => setCategoryModalVisible(false)}>
                        <View style={styles.modalOverlay}>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalContent}>
                                    <View style={styles.modalHeader}>
                                        <Text style={styles.modalTitle}>Category</Text>
                                        <TouchableOpacity onPress={() => setCategoryModalVisible(false)}>
                                            <IconSymbol name="xmark" size={24} color="#000" />
                                        </TouchableOpacity>
                                    </View>
                                    {CATEGORIES.map((item) => (
                                        <TouchableOpacity
                                            key={item}
                                            style={styles.modalItem}
                                            onPress={() => {
                                                setCategory(item);
                                                setCategoryModalVisible(false);
                                            }}
                                        >
                                            <Text style={[styles.modalItemText, category === item && styles.selectedItemText]}>
                                                {item}
                                            </Text>
                                            {category === item && <IconSymbol name="checkmark" size={20} color={Colors.primary} />}
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                {/* Visibility Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visibilityModalVisible}
                    onRequestClose={() => setVisibilityModalVisible(false)}
                >
                    <TouchableWithoutFeedback onPress={() => setVisibilityModalVisible(false)}>
                        <View style={styles.modalOverlay}>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalContent}>
                                    <View style={styles.modalHeader}>
                                        <Text style={styles.modalTitle}>Visibility</Text>
                                        <TouchableOpacity onPress={() => setVisibilityModalVisible(false)}>
                                            <IconSymbol name="xmark" size={24} color="#000" />
                                        </TouchableOpacity>
                                    </View>
                                    {VISIBILITY_OPTIONS.map((item) => (
                                        <TouchableOpacity
                                            key={item}
                                            style={styles.modalItem}
                                            onPress={() => {
                                                setVisibility(item);
                                                setVisibilityModalVisible(false);
                                            }}
                                        >
                                            <Text style={[styles.modalItemText, visibility === item && styles.selectedItemText]}>
                                                {item}
                                            </Text>
                                            {visibility === item && <IconSymbol name="checkmark" size={20} color={Colors.primary} />}
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                {/* bank modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={bankModalVisible}
                    onRequestClose={() => setBankModalVisible(false)}
                >
                    <TouchableWithoutFeedback onPress={() => setBankModalVisible(false)}>
                        <View style={styles.modalOverlay}>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalContent}>
                                    <View style={styles.modalHeader}>
                                        <Text style={styles.modalTitle}>Bank Name</Text>
                                        <TouchableOpacity onPress={() => setBankModalVisible(false)}>
                                            <IconSymbol name="xmark" size={24} color="#000" />
                                        </TouchableOpacity>
                                    </View>
                                    {BANK_OPTIONS.map((item) => (
                                        <TouchableOpacity
                                            key={item}
                                            style={styles.modalItem}
                                            onPress={() => {
                                                setBankName(item);
                                                setBankModalVisible(false);
                                            }}
                                        >
                                            <Text style={[styles.modalItemText, bankName === item && styles.selectedItemText]}>
                                                {item}
                                            </Text>
                                            {bankName === item && <IconSymbol name="checkmark" size={20} color={Colors.primary} />}
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                {/* Goal Amount Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={goalModalVisible}
                    onRequestClose={() => setGoalModalVisible(false)}
                >
                    <View style={styles.fullScreenModal}>
                        <SafeAreaView style={{ flex: 1 }}>
                            <View style={styles.modalHeader}>
                                <TouchableOpacity onPress={() => setGoalModalVisible(false)}>
                                    <IconSymbol name="chevron.left" size={24} color="#000" />
                                </TouchableOpacity>
                                <Text style={styles.modalTitle}>Target Amount</Text>
                                <View style={{ width: 24 }} />
                            </View>

                            <View style={styles.amountDisplayContainer}>
                                <Text style={styles.amountDisplayText}>$ {goalAmount || '0'}</Text>
                            </View>

                            <Text style={styles.selectAmountLabel}>Select Amount</Text>
                            <View style={styles.presetContainer}>
                                {PRESET_AMOUNTS.map((amt) => (
                                    <TouchableOpacity key={amt} style={styles.presetChip} onPress={() => setGoalAmount(amt)}>
                                        <Text style={styles.presetText}>{amt}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View style={styles.keypadContainer}>
                                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'].map((key) => (
                                    <TouchableOpacity key={key} style={styles.keypadButton} onPress={() => handleKeypadPress(key)}>
                                        <Text style={styles.keypadText}>{key}</Text>
                                    </TouchableOpacity>
                                ))}
                                <TouchableOpacity style={[styles.keypadButton, styles.keypadAction]} onPress={() => setGoalModalVisible(false)}>
                                    <IconSymbol name="arrow.right" size={24} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    </View>
                </Modal>

                {/* Date Picker Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={dateModalVisible}
                    onRequestClose={() => setDateModalVisible(false)}
                >
                    <TouchableWithoutFeedback onPress={() => setDateModalVisible(false)}>
                        <View style={styles.modalOverlay}>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalContent}>
                                    <Text style={[styles.modalTitle, { textAlign: 'center', marginBottom: 20 }]}>Date Of Birth</Text>

                                    <View style={styles.datePickerContainer}>
                                        <View style={styles.dateColumn}>
                                            <Text style={styles.dateTextInactive}>December</Text>
                                            <View style={styles.dateHighlight}><Text style={styles.dateTextActive}>{selectedMonth}</Text></View>
                                            <Text style={styles.dateTextInactive}>February</Text>
                                        </View>
                                        <View style={styles.dateColumn}>
                                            <Text style={styles.dateTextInactive}>16</Text>
                                            <View style={styles.dateHighlight}><Text style={styles.dateTextActive}>{selectedDay}</Text></View>
                                            <Text style={styles.dateTextInactive}>18</Text>
                                        </View>
                                        <View style={styles.dateColumn}>
                                            <Text style={styles.dateTextInactive}>2024</Text>
                                            <View style={styles.dateHighlight}><Text style={styles.dateTextActive}>{selectedYear}</Text></View>
                                            <Text style={styles.dateTextInactive}>2026</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity
                                        style={styles.saveDateButton}
                                        onPress={() => {
                                            setDeadline(`${selectedMonth} ${selectedDay}, ${selectedYear}`);
                                            setDateModalVisible(false);
                                        }}
                                    >
                                        <Text style={styles.saveDateText}>Save date</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#8E8E93',
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    progressBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    progressSegment: {
        height: 6,
        flex: 1,
        borderRadius: 3,
        marginHorizontal: 4,
    },
    activeSegment: {
        backgroundColor: '#5E46F4',
    },
    inactiveSegment: {
        backgroundColor: '#F0F0F0',
    },
    inputGroup: {
        marginBottom: 20,
    },
    pickerContainer: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pickerText: {
        fontSize: 16,
        color: '#000',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textAreaContainer: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 16,
        height: 200,
        justifyContent: 'space-between',
    },
    textArea: {
        fontSize: 16,
        color: '#000',
        flex: 1,
    },
    wordCountContainer: {
        alignSelf: 'flex-end',
        backgroundColor: '#D0C9FF',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    wordCount: {
        fontSize: 12,
        color: '#5E46F4',
    },
    helperText: {
        fontSize: 12,
        color: '#8E8E93',
        marginTop: 10,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        color: '#000',
    },
    footer: {
        padding: 20,
        paddingBottom: 90,
    },
    primaryButton: {
        backgroundColor: '#5E46F4',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 16,
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondaryButton: {
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: '#000',
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingBottom: 40,
        maxHeight: '80%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    modalItemText: {
        fontSize: 16,
        color: '#000',
    },
    selectedItemText: {
        color: '#5E46F4',
        fontWeight: 'bold',
    },
    fullScreenModal: {
        flex: 1,
        backgroundColor: '#fff',
    },
    amountDisplayContainer: {
        alignItems: 'center',
        marginVertical: 40,
    },
    amountDisplayText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
    },
    selectAmountLabel: {
        fontSize: 16,
        marginLeft: 20,
        marginBottom: 10,
    },
    presetContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        marginBottom: 30,
        gap: 10,
    },
    presetChip: {
        backgroundColor: '#F5F5F5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    presetText: {
        fontSize: 16,
        color: '#000',
    },
    keypadContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 15,
    },
    keypadButton: {
        width: (width - 80) / 3,
        height: 60,
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    keypadText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    keypadAction: {
        backgroundColor: '#5E46F4',
    },
    datePickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        height: 150,
        alignItems: 'center',
    },
    dateColumn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateHighlight: {
        backgroundColor: '#E8E5FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    dateTextActive: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    dateTextInactive: {
        fontSize: 16,
        color: '#8E8E93',
    },
    saveDateButton: {
        backgroundColor: '#5E46F4',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
    },
    saveDateText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
