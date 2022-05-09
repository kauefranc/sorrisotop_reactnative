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

    const seriesFundamental = [
        {
            id: 6,
            nome: '6º ano'
        },
        {
            id: 7,
            nome: '7º ano'
        },
        {
            id: 8,
            nome: '8º ano'
        },
        {
            id: 9,
            nome: '9º ano'
        },
    ]

    const seriesMedio = [
        {
            id: 1,
            nome: '1º ano'
        },
        {
            id: 2,
            nome: '2º ano'
        },
        {
            id: 2,
            nome: '3º ano'
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
                                color: '#000'
                                
                            }}
                            onValueChange={(itemValue, itemIndex) => {
                                setEscola(itemValue);
                            }}
                            enabled={true}
                        >   
                            <Picker.Item label="Selecione uma escola" value="" enabled={false}/>
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
                                color: '#000'
                                
                            }}
                            onValueChange={(itemValue, itemIndex) => {
                                setGrau(itemValue);
                            }}
                        >   
                            <Picker.Item label="Selecione um grau" value="" enabled={false}/>
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
                                color:'#000'
                                
                                
                            }}
                            itemStyle={{
                            }}
                            onValueChange={(itemValue, itemIndex) => {
                                setSerie(itemValue);
                            }}
                        >   
                            <Picker.Item label="Selecione uma série" value="" enabled={false}/>
                            
                            

                            {
                                grau == 'Ensino Médio' ?
                                seriesMedio.map( ser => (
                                    <Picker.Item key={ser.id} label={ser.nome} value={ser.nome} />
                                ))
                                :
                                seriesFundamental.map( ser => (
                                    <Picker.Item key={ser.id} label={ser.nome} value={ser.nome} />
                                ))
                            }
                            
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
                            color: '#000'
                            
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            setEtapa(itemValue);
                        }}
                    >
                        <Picker.Item label="Selecione uma etapa" value="" enabled={false}/>
                        {etapas.map( eta => (
                            <Picker.Item key={eta.id} label={eta.nome} value={eta.id} />
                        ))}
                    </Picker>
                    </WrappePicker>
                </Fields>
                
                <Fields>
                    <Button onPress={ () => {

                    var nomeEscola;

                    escolas.map( e => {
                        if(e.id == escola){
                            nomeEscola = e.nome
                        }
                    });

                    if(escola && grau && serie && etapa) {
                        navigation.navigate('Form1', {
                            escola,
                            grau,
                            serie,
                            etapa,
                            nomeEscola
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