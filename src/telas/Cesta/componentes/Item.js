import React from "react";
import Texto from "../../../componentes/Texto";
import { Image,View } from "react-native-web";
import { StyleSheet, FlatList } from "react-native";

export default function Itens ({item: {nome, imagem}}){

    return <View style={estilos.item}>
            <Image source={imagem} style={estilos.imagem}></Image>
            <Texto style={estilos.titulo}>{nome}</Texto>
        </View>
    
}


const estilos = StyleSheet.create({
    titulo:{
        color:"#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center"
    },
    imagem:{
        width: "100px",
        height: "100px"
    }
})
