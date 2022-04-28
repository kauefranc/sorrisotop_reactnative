import React from "react";
import {Text, View, TouchableOpacity} from 'react-native'
import { Container, Radio, Options } from "./styles";




export function RadioButton ({options = [], onChangeSelect, selected}){
    return(
        <Container>
            {
                options.map((opt, index) => (
                    <Radio 
                    onPress={() => onChangeSelect(opt)}
                    style={ selected == opt ? {
                        backgroundColor: '#bdf'
                    } : ''}>
                        <Options style={ selected == opt ? {
                        color: '#fff'
                    } : ''}>{opt}</Options>
                    </Radio>
                ))
            }
        </Container>
    );
}