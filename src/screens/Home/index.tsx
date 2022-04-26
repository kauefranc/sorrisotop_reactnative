import React from 'react'
import { ButtonText } from '../PresetForm/styles'
import { Button, ButtonTextBlue, ButtonWhite, Container, Logo, Title } from './styles'


export function Home () {
    return (
        <Container>
            <Logo source={require('../../../assets/logo.jpg')} />
            <Button>
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