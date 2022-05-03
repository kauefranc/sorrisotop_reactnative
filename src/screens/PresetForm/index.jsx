import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { addSchool, CreateTableSchools, getSchools } from '../../services/Schools';

import { Header, Container, Title, Body, Fields, TitlePicker, Button, ButtonText, ButtonCancel, ButtonTextCancel, WrappePicker } from './styles'



export function PresetForm () {

    const navigation = useNavigation();

    const [escolas, setEscolas] = useState([])
    const [escola, setEscola] = useState("");
    const [grau, setGrau] = useState("")
    const [serie, setSerie] = useState("")
    const [etapa, setEtapa] = useState("")

    useEffect( async () => {

            const result =  await getSchools()
            setEscolas(result)

    }, [])
    


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
            id: 6,
            nome: '6o ano'
        },
        {
            id: 7,
            nome: '7o ano'
        },
        {
            id: 8,
            nome: '8o ano'
        },
        {
            id: 9,
            nome: '9o ano'
        },
        {
            id: 1,
            nome: '1o ano'
        },
        {
            id: 2,
            nome: '2o ano'
        },
        {
            id: 2,
            nome: '3o ano'
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
                    <TitlePicker>Escola: </TitlePicker>
                    <WrappePicker>
                        <Picker
                            selectedValue={escola}
                            style={{ 
                                height: 50, 
                                width: '100%', 
                                marginBottom: 5,
                                backgroundColor: '#ffffff',
                                color: escola ? '#000' : '#fff'
                                
                            }}
                            onValueChange={(itemValue, itemIndex) => {
                                setEscola(itemValue);
                            }}
                        >
                            {escolas.map( esc => (
                                <Picker.Item key={esc.id} label={esc.nome} value={esc.id} />
                            ))}
                        </Picker>
                    </WrappePicker>
                    
                    {/* graus */}
                    <TitlePicker>Grau: </TitlePicker>
                    <WrappePicker>
                        <Picker
                            selectedValue={grau}
                            style={{ 
                                height: 50, 
                                width: '100%', 
                                marginBottom: 5,
                                backgroundColor: '#ffffff',
                                color: grau ? '#000' : '#fff'
                                
                            }}
                            onValueChange={(itemValue, itemIndex) => {
                                setGrau(itemValue);
                            }}
                        >
                            {graus.map( gra => (
                                <Picker.Item key={gra.id} label={gra.nome} value={gra.nome} />
                            ))}
                        </Picker>
                    </WrappePicker>

                    {/* series */}
                    <TitlePicker>Série: </TitlePicker>
                    <WrappePicker>
                        <Picker
                            selectedValue={serie}
                            style={{ 
                                height: 50, 
                                width: '100%', 
                                marginBottom: 5,
                                color: serie ? '#000' : '#fff'
                                
                                
                            }}
                            itemStyle={{
                            }}
                            onValueChange={(itemValue, itemIndex) => {
                                setSerie(itemValue);
                            }}
                        >
                            {series.map( ser => (
                                <Picker.Item key={ser.id} label={ser.nome} value={ser.nome} />
                            ))}
                        </Picker>
                    </WrappePicker>

                    {/* etapas */}
                    <TitlePicker>Etapa: </TitlePicker>
                    <WrappePicker>
                    <Picker
                        selectedValue={etapa}
                        style={{ 

                            height: 50, 
                            width: '100%', 
                            marginBottom: 5,
                            color: etapa ? '#000' : '#fff'
                            
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            setEtapa(itemValue);
                        }}
                    >
                        {etapas.map( eta => (
                            <Picker.Item key={eta.id} label={eta.nome} value={eta.id} />
                        ))}
                    </Picker>
                    </WrappePicker>
                </Fields>
                
                <Fields>
                    <Button onPress={ () => {

                    if(escola && grau && serie && etapa) {
                        navigation.navigate('Form1', {
                            escola,
                            grau,
                            serie,
                            etapa
                        })
                    } else alert("Preencha todos os dados!");
                    
                    }}>
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