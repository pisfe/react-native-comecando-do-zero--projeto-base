import React from "react";
import { Text, View, Image } from "react-native-web";
import Texto from "../../../componentes/Texto";
import logo from '../../../../assets/logo.png';
import { StyleSheet } from "react-native";

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco}) {
    return <>
        <Text style={estilos.nome}>{nome}</Text>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemfazenda}/>
            <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
        </View>
                   
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Text style={estilos.preco}>{preco}</Text>

    
    
    </>
}



const estilos = StyleSheet.create({
     nome:{
        color:"#464646",
        fontWeight:"bold",
        fontSize: 26,
        lineHeight:42
    },
    imagemfazenda:{
        width: "32px",
        height: "32px",
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
        marginLeft:12
    },
    fazenda:{
        flexDirection:"row",
        paddingVertical: 12
    },
    descricao:{
        color:"#a3a3a3",
        fontSize:16,
        lineHeight:26
    },
    preco:{
        color:"#2a9f85",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8
    }
})