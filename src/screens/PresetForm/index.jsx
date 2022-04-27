import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';

import { Header, Container, Title, Body, Fields, Button, ButtonText, ButtonCancel, ButtonTextCancel } from './styles'



export function PresetForm () {

   const navigation = useNavigation();

    const [escola, setEscola] = useState("1");
    const [grau, setGrau] = useState("1")
    const [serie, setSerie] = useState("1")
    const [etapa, setEtapa] = useState("1")

    const escolas = [
    {
        id: 1,
        nome: 'Fundação Matias Machline'
    },
    {
        id: 2,
        nome: 'UFAM'
    },
    {
        id: 7,
        nome: 'UEA'
    },
    ];

    const graus = [
        {
            id: 1,
            nome: 'Ensino Médio'
        },
        {
            id: 2,
            nome: 'Ensino Fundamental'
        },
    ]

    const series = [
        {
            id: 1,
            nome: '1o ano'
        },
        {
            id: 2,
            nome: '2o ano'
        },
    ]

    const etapas = [
        {
            id: 1,
            nome: 'Etapa 1'
        },
        {
            id: 2,
            nome: 'Etapa 2'
        },
    ]

    return (
        <Container>
            <Header>
                <Title>Formulário</Title>
            </Header>
            <Body>
                <Fields>
                    {/* escolas */}
                    <Picker
                        selectedValue={escola}
                        style={{ 
                            height: 50, 
                            width: '70%', 
                            margin: 5,
                            padding: 2,
                            backgroundColor: '#d3ced3',
                            
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            setEscola(itemValue);
                        }}
                    >
                        {escolas.map( esc => (
                            <Picker.Item key={esc.id} label={esc.nome} value={esc.id} />
                        ))}
                    </Picker>
                    
                    {/* graus */}
                    <Picker
                        selectedValue={grau}
                        style={{ 
                            height: 50, 
                            width: '70%', 
                            margin: 5,
                            padding: 2,
                            backgroundColor: '#d3ced3',
                            
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            setGrau(itemValue);
                        }}
                    >
                        {graus.map( gra => (
                            <Picker.Item key={gra.id} label={gra.nome} value={gra.id} />
                        ))}
                    </Picker>

                    {/* series */}
                    <Picker
                        selectedValue={serie}
                        style={{ 
                            height: 50, 
                            width: '70%', 
                            margin: 5,
                            padding: 2,
                            backgroundColor: '#d3ced3',
                            
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            setSerie(itemValue);
                        }}
                    >
                        {series.map( ser => (
                            <Picker.Item key={ser.id} label={ser.nome} value={ser.id} />
                        ))}
                    </Picker>

                    {/* etapas */}
                    <Picker
                        selectedValue={etapa}
                        style={{ 
                            height: 50, 
                            width: '70%', 
                            margin: 5,
                            padding: 2,
                            backgroundColor: '#d3ced3',
                            
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            setEtapa(itemValue);
                        }}
                    >
                        {etapas.map( eta => (
                            <Picker.Item key={eta.id} label={eta.nome} value={eta.id} />
                        ))}
                    </Picker>
                </Fields>
                
                <Fields>
                    <Button onPress={ () => navigation.navigate('Form1', {
                        escola,
                        grau,
                        serie,
                        etapa
                    })}>
                        <ButtonText>
                            Iniciar
                        </ButtonText>
                    </Button>

                    <ButtonCancel onPress={ () => navigation.goBack()}>
                        <ButtonTextCancel>
                            Cancelar
                        </ButtonTextCancel>
                    </ButtonCancel>
                </Fields>

            </Body>
        </Container>
    );
}