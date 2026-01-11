import React from "react";
import { Image, Text } from "react-native-web";
import topo from '../../../../assets/topo.png';
import { StyleSheet } from "react-native";

export default function Topo({titulo}){
    return <>
     <Image source={topo} style={estilos.topo} />
     <Text style={estilos.titulo}>{titulo}</Text>
    </>
}

const estilos = StyleSheet.create({
     topo: {
        width: "450px",
        height: "768px"
    },
    titulo:{
        width: "450px",
        position:"absolute",
        textAlign:"center",
        fontSize:16,
        lineHeight:26,
        color:"white",
        fontWeight:"bold",
        padding:16
    },
   
})