import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BottomSheetPicker({
    visible,
    onClose,
    options = [],
    onSelect,
    renderCustomContent,
    radio = false,
    selectedValue,
}: any) {
    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <TouchableOpacity style={{ flex: 1 }} onPress={onClose} />

                <View style={styles.sheet}>
                    {renderCustomContent ? (
                        renderCustomContent()
                    ) : (
                        options.map((item: any) => (
                            <TouchableOpacity
                                key={item}
                                style={styles.row}
                                onPress={() => onSelect(item)}
                            >
                                {radio && (
                                    <View style={styles.radioOuter}>
                                        {selectedValue === item && (
                                            <View style={styles.radioInner} />
                                        )}
                                    </View>
                                )}
                                <Text style={styles.itemText}>{item}</Text>
                            </TouchableOpacity>
                        ))
                    )}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "flex-end",
    },
    sheet: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        gap: 12,
    },
    itemText: {
        fontSize: 18,
        color: "#000",
    },
    radioOuter: {
        height: 22,
        width: 22,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#5E46F4",
        justifyContent: "center",
        alignItems: "center",
    },
    radioInner: {
        height: 12,
        width: 12,
        borderRadius: 50,
        backgroundColor: "#5E46F4",
    },
});
