import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import { BoxPass } from "./components/boxPass";

export function Pass(){
    const [list, setList] = useState([])
    const focused = useIsFocused()
    const { getItem, removeItem } = useStorage()

    useEffect(() => {
        async function load(){
            const pass = await getItem("@pass")
            setList(pass)
        }

        load()
    }, [focused])

    async function deletePass(item){
        const passwords = await removeItem("@pass", item)

        setList(passwords)
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                style={{flex:1, paddingTop: 14}}
                    data={list}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => <BoxPass data={item} removePass={() => deletePass(item)}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft:14,
        paddingRight: 14, 
    },
    title: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    }, 
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,

    }
})