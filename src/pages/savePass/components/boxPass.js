import { View, Text, StyleSheet, Pressable } from "react-native";

export function BoxPass({ data, removePass}){
    return(
        <Pressable onLongPress={removePass} style={styles.container}>
            <Text style={styles.pass}>{data}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        padding:14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    pass:{
        color: "#FFF"
    }
})