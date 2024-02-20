import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

export default function ModalPass({ pass, close }){
    return(
        <View style={styles.conteiner}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>

                <Pressable style={styles.innerPass}>
                    <Text style={styles.textPass}>{pass}</Text>
                </Pressable>

                <View style={styles.buttonArea}>

                    <TouchableOpacity style={styles.button} onPress={close}>
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.saveButton]}>
                        <Text style={styles.textSaveButton}>Salvar Senha</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingBottom: 24,
        paddingTop: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24
    },
    innerPass:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "90%",
        borderRadius: 8
    },
    textPass:{
        color: "#FFF",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
        
    },
    buttonArea:{
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button:{
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8
        
    },
    saveButton:{
        backgroundColor: "#392DE9",
        borderRadius: 8
    },
    textSaveButton: {
        color: "#FFF",
        fontWeight: "bold"
    }
})