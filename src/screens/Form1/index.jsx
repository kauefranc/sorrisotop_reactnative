import { useRoute } from "@react-navigation/native";
import React, { useState }from "react";
import { Picker } from '@react-native-picker/picker';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from '@react-navigation/native';


import { RadioButton } from "../../components/RadioButton";

import { Container, Fields, FieldsSelect, WrapperSelect, Ask, Header, Title, Button, ButtonText, ButtonCancel, ButtonTextCancel} from "./styles";



export function Form1 () {

   const route = useRoute();
   const navigation = useNavigation();
    
    const {            
        escola,
        grau,
        serie,
        etapa 
    } = route.params;

    const [escol, setEscol] = useState("1");

    const [r1, setR1] = useState('');
    const [r2, setR2] = useState('');

    let bouncyCheckboxRef = null;
    const [checkboxState, setCheckboxState] = useState(false);
    const [checkboxState2, setCheckboxState2] = useState(false);


    const [r4, setR4] = useState('');
    const [r5, setR5] = useState('');
    const [r6, setR6] = useState('');

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


    return (
        <Container>
            <Header>
                <Title>Formulário</Title>
            </Header>
            
            <Fields>
                <FieldsSelect>
                    <WrapperSelect>
                        <Ask>Idade:</Ask>
                        <Picker
                        selectedValue={escol}
                        style={{ 
                            height: 50, 
                            width: 175, 
                            margin: 5,
                            padding: 2,
                            backgroundColor: '#f3f3f3',
                            
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            setEscol(itemValue);
                        }}
                    >
                        {escolas.map( esc => (
                            <Picker.Item key={esc.id} label={esc.nome} value={esc.id} />
                        ))}
                    </Picker>
                    </WrapperSelect>

                    <WrapperSelect>
                        <Ask>Genero:</Ask>
                        <Picker
                        selectedValue={escol}
                        style={{ 
                            height: 50, 
                            width: 175, 
                            backgroundColor: '#f3f3f3',
                            
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            setEscol(itemValue);
                        }}
                    >
                        {escolas.map( esc => (
                            <Picker.Item key={esc.id} label={esc.nome} value={esc.id} />
                        ))}
                    </Picker>
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

                     <BouncyCheckbox
                        style={{ marginTop: 16 }}
                        ref={(ref) => (bouncyCheckboxRef = ref)}
                        isChecked={checkboxState}
                        text="Cárie - Como prenenir?"
                        disableBuiltInState
                        onPress={() => setCheckboxState(!checkboxState)}
                    />

                    <BouncyCheckbox
                        style={{ marginTop: 16 }}
                        ref={(ref) => (bouncyCheckboxRef = ref)}
                        isChecked={checkboxState2}
                        text="Doenças da gengiva e sua prevenção"
                        disableBuiltInState
                        onPress={() => setCheckboxState2(!checkboxState2)}
                    />

                    <BouncyCheckbox
                        style={{ marginTop: 16 }}
                        ref={(ref) => (bouncyCheckboxRef = ref)}
                        isChecked={checkboxState2}
                        text="Dentes tortos - o que fazer?"
                        disableBuiltInState
                        onPress={() => setCheckboxState2(!checkboxState2)}
                    />

                    <BouncyCheckbox
                        style={{ marginTop: 16 }}
                        ref={(ref) => (bouncyCheckboxRef = ref)}
                        isChecked={checkboxState2}
                        text="Como limpar corretamente a boca"
                        disableBuiltInState
                        onPress={() => setCheckboxState2(!checkboxState2)}
                    />

                    <BouncyCheckbox
                        style={{ marginTop: 16 }}
                        ref={(ref) => (bouncyCheckboxRef = ref)}
                        isChecked={checkboxState2}
                        text="Alimentação e saúde bucal"
                        disableBuiltInState
                        onPress={() => setCheckboxState2(!checkboxState2)}
                    />
                


                <Ask>4 - Há quanto tempo você não vai ao dentista?</Ask>
                <RadioButton 
                    selected={r4}
                    options={['Menos de 06 meses', '06 a 12 meses', '1 ano e meio', 'Mais de 02 anos', 'Nunca fui']} 
                    onChangeSelect={(opt) => setR4(opt)}
                /> 

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

                <Fields>
                    <Button onPress={ () => navigation.navigate('Home')}>
                        <ButtonText>
                            Finalizar
                        </ButtonText>
                    </Button>

                </Fields> 

            </Fields>
        </Container>
    );
}