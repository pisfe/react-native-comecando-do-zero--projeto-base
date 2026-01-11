import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from 'react-native-web';
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

export default function Cesta({topo,detalhes}){
    return <>
       <Topo {...topo}></Topo>
        <View style={estilos.cesta}>
            <Detalhes {...detalhes}></Detalhes>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16
    },
   
});