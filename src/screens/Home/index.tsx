import React from 'react'
import { ButtonText } from '../PresetForm/styles'
import { Button, ButtonTextBlue, ButtonWhite, Container, Logo, Title } from './styles'
import { useNavigation } from '@react-navigation/native';

import { propsStack } from '../../routes/Stack/Models';

export function Home () {

    const navigation = useNavigation<propsStack>();
 
    return (
        <Container>
            <Logo source={require('../../../assets/logo.jpg')} />
            <Button onPress={ () => navigation.navigate('PresetForm')}>
                <ButtonText>Iniciar Formulário</ButtonText>
            </Button>

            <Button>
                <ButtonText>Atualizar base de dados</ButtonText>
            </Button>

            <ButtonWhite>
                <ButtonTextBlue>Enviar respostas</ButtonTextBlue>
            </ButtonWhite>
        </Container>
    );
}