import { useRoute } from "@react-navigation/native";
import React, { useState }from "react";
import { RadioButton } from "../../components/RadioButton";
import { Container, Fields, FieldsSelect, WrapperSelect, Ask, Header, Title } from "./styles";



export function Form1 () {

    const route = useRoute();
    
    const {            
        escola,
        grau,
        serie,
        etapa 
    } = route.params;

    const [r1, setR1] = useState('');
    const [r2, setR2] = useState('');
    const [r4, setR4] = useState('');
    const [r5, setR5] = useState('');
    const [r6, setR6] = useState('');


    return (
        <Container>
            <Header>
                <Title>Formulário</Title>
            </Header>
            
            <Fields>
                <FieldsSelect>
                    <WrapperSelect>
                        <Ask>Text</Ask>
                        <Ask>SELECT 1</Ask>
                    </WrapperSelect>

                    <WrapperSelect>
                        <Ask>Text</Ask>
                        <Ask>SELECT 2</Ask>
                    </WrapperSelect>
                </FieldsSelect>

                <Ask>1 - Qual nota você dá para sua saúde bucal?</Ask>
                <RadioButton 
                    selected={r1}
                    options={['9 a 10', '7 a 8', '5 a 6','3 a 4', '1 a 2', '0']} 
                    onChangeSelect={(opt) => setR1(opt)}
                /> 


                <Ask>2 - Você já foi orientado sobre como cuidar da sua sáude bucal?</Ask>
                <RadioButton 
                    selected={r2}
                    options={['sim', 'não']} 
                    onChangeSelect={(opt) => setR2(opt)}
                /> 


                <Ask>3 - Qual(is) temas você gostaria de conhecer melhor?</Ask>
                {/*
                (     ) CÁRIE - COMO PREVENIR    (     ) DOENÇAS DA GENGIVA E SUA PREVENÇÃO
(     ) DENTES TORTOS - O QUE FAZER   (    ) COMO LIMPAR CORRETAMENTE A BOCA
(    ) ALIMENTAÇÃO E SAÚDE BUCAL   ?          
                */}
                <Ask>4 - Há quanto tempo você não vai ao dentista?</Ask>
                <RadioButton 
                    selected={r4}
                    options={['Menos de 06 meses', '06 a 12 meses', '1 ano e meio', 'Mais de 02 anos', 'Nunca fui']} 
                    onChangeSelect={(opt) => setR4(opt)}
                /> 

                {/* (   ) MENOS DE 06 MESES  (   ) 06 A 12 MESES  (   ) 13 A 18 MESES 
 (    ) MAIS DE 02 ANOS (   ) NUNCA FUI */}
                <Ask>5 - Você já teve ou está com dor de dente?</Ask>
                <RadioButton 
                    selected={r5}
                    options={['sim', 'não']} 
                    onChangeSelect={(opt) => setR5(opt)}
                /> 


                <Ask>6 - Sua gengiva sangra ou já sangrou?</Ask>
                <RadioButton 
                    selected={r6}
                    options={['sim', 'não']} 
                    onChangeSelect={(opt) => setR6(opt)}
                /> 

            </Fields>
        </Container>
    );
}