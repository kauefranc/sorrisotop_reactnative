import { useRoute } from "@react-navigation/native";
import React from "react";
import { Container, Fields, Header, Title } from "./styles";



export function Form1 () {

    const route = useRoute();
    
    const {            
        escola,
        grau,
        serie,
        etapa 
    } : any = route.params;

    return (
        <Container>
            <Header>
                <Title>Formulário</Title>
            </Header>

            <Fields>
                
            </Fields>
        </Container>
    );
}