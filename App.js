import {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from "react-native"
import Slider from "@react-native-community/slider"
import ModalPass from './src/components/modal/index.js'

let charPass = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ0123456789"

export default function App() {
  const [size, setSize] = useState(10)
  const [passValue, setPassValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
 
  function generetionPass(){
    let pass = ""

    for(let i = 0, n = charPass.length; i < size; i++){
      pass += charPass.charAt(Math.floor(Math.random() * n))
    }

    setPassValue(pass)
    setModalVisible(true)
  }

  return(
    <View style={styles.conteiner}>
      <Image
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{height:50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#FF0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generetionPass}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPass pass={passValue} close={ () => setModalVisible(false)}/>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center"
  },

  logo:{
    marginBottom: 60
  },

  area:{
    marginTop:14,
    marginBottom:14,
    width:"80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 5,
  },

  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20
  },
  title:{
    fontSize: 30,
    fontWeight: "bold"
  }
}

)