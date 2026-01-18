import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { View } from 'react-native-web';
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';

export default function Cesta({topo,detalhes, itens}){
    return <ScrollView>
       <Topo {...topo}></Topo>
        <View style={estilos.cesta}>
            <Detalhes {...detalhes}></Detalhes>
            <Itens {...itens}></Itens>
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16
    },
   
});