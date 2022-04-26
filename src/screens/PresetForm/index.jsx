import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

import { Header, Container, Title, Body, Fields, Button, ButtonText } from './styles'


export function PresetForm () {

    const [selectedValue, setSelectedValue] = useState("1");

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
        id: 3,
        nome: 'UEA'
    },
    ];

    return (
        <Container>
            <Header>
                <Title>Formulário</Title>
            </Header>
            <Body>
                <Fields>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ 
                            height: 50, 
                            width: '70%', 
                            margin: 5,
                            padding: 2,
                            backgroundColor: '#d3ced3',
                            
                        }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    {escolas.map( escola => (
                        <Picker.Item key={escola.id} label={escola.nome} value={escola.id} />
                    ))}
                    </Picker>

                    <Picker
                        selectedValue={selectedValue}
                        style={{ 
                            height: 50, 
                            width: '70%', 
                            margin: 5,
                            padding: 2,
                            backgroundColor: '#d3ced3',
                            
                        }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    {escolas.map( escola => (
                        <Picker.Item key={escola.id} label={escola.nome} value={escola.id} />
                    ))}
                    </Picker>

                    <Picker
                        selectedValue={selectedValue}
                        style={{ 
                            height: 50, 
                            width: '70%', 
                            margin: 5,
                            padding: 2,
                            backgroundColor: '#d3ced3',
                            
                        }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    {escolas.map( escola => (
                        <Picker.Item key={escola.id} label={escola.nome} value={escola.id} />
                    ))}
                    </Picker>

                    <Picker
                        selectedValue={selectedValue}
                        style={{ 
                            height: 50, 
                            width: '70%', 
                            backgroundColor: '#d3ced3',
                            margin: 5,
                            padding: 2,                            
                        }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    {escolas.map( escola => (
                        <Picker.Item key={escola.id} label={escola.nome} value={escola.id} />
                    ))}
                    </Picker>
                </Fields>

                    <Button>
                        <ButtonText>
                            Iniciar
                        </ButtonText>
                    </Button>

            </Body>
        </Container>
    );
}