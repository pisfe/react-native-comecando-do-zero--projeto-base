import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-web";

export default function Texto ({children, style}){
    return <Text style={[style,estilos.texto]}>{children}</Text>
}


const estilos = StyleSheet.create({
    texto:{
        fontFamily: "Impact"
    },
    textoNegrito: {
        fontFamily: "Verdana" 
    }
})