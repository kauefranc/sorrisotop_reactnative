import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect }from "react";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import { RadioButton } from "../../components/RadioButton";

import { Container, Texts, TextTitle, Card, Fields, FieldsSelect, WrapperSelect, WrappePicker, Ask, Header, Title, Button, ButtonText, WrapperCheckBox} from "./styles";
import { addStudent, CreateTable, getStudent } from "../../services/Students";


export function Form1 () {
    
   const ref = React.useRef(null);

   const route = useRoute();
   const navigation = useNavigation();
    
    const {            
        escola,
        grau,
        serie,
        etapa,
        nomeEscola 
    } = route.params;

    const [idade, setIdade] = useState(0);
    const [genero, setGenero] = useState('');

    const [r1, setR1] = useState('');
    const [r2, setR2] = useState('');

    let bouncyCheckboxRef = null; 
    const [checkboxState, setCheckboxState] = useState(false);
    const [checkboxState2, setCheckboxState2] = useState(false);
    const [checkboxState3, setCheckboxState3] = useState(false);
    const [checkboxState4, setCheckboxState4] = useState(false);
    const [checkboxState5, setCheckboxState5] = useState(false);


    const [r4, setR4] = useState('');
    const [r5, setR5] = useState('');
    const [r6, setR6] = useState('');

    const idades = [];
    for(var i = 4; i < 25; i++) {
        idades.push(i);
    }

    const generos = ["Masculino","Feminino", "Outros"];


    const SalvaForm = async () => {

        if(r1 && r2 && r4 && r5 && r6) {

            const Student = {

                enviado: 0,
                escolaID: escola,
                grau: grau,
                serie: serie,
                etapa: etapa,

                genero: genero,
                idade: idade,

                r1: r1,
                r2: r2,

                carie: checkboxState ? 1 : 0,
                gengiva: checkboxState2 ? 1 : 0,
                dentetorto: checkboxState3 ? 1 : 0,
                limparboca: checkboxState4 ? 1 : 0,
                saudebucal: checkboxState5 ? 1 : 0,

                r4: r4,
                r5: r5,
                r6: r6,
            }

            await addStudent(Student);

            setR1('');
            setR2('');
            setCheckboxState(false);
            setCheckboxState2(false);
            setCheckboxState3(false);
            setCheckboxState4(false);
            setCheckboxState5(false);
            setR4('');
            setR5('');
            setR6('');
            alert("Dados salvos com sucesso");
            ref.current.scrollTo({
                x: 5,
                y: 5,
                animated: true
            });
            return;
        }

        alert("Preencha todos os campos!");
    }

    return (
        <Container ref={ref}>
            <Header>
                <Title>Formulário</Title>
            </Header>

            <Fields>
                <Card>
                    <TextTitle>Informações</TextTitle>
                    <Texts>Escola: {nomeEscola}</Texts>
                    <Texts>Grau: {grau}</Texts>
                    <Texts>Série: {serie}</Texts>
                    <Texts>Etapa: {etapa}</Texts>
                </Card>
            </Fields>
            
            <Fields>
                <FieldsSelect>
                    
                    <WrapperSelect>
                        <Ask>Gênero:</Ask>
                        <WrappePicker>
                        <Picker
                            selectedValue={genero}
                            style={{ 
                                height: 50, 
                                width: '100%', 
                                marginBottom: 5,
                                backgroundColor: '#ffffff',
                                color: '#000'
                                
                            }}
                            onValueChange={(itemValue, itemIndex) => {
                                setGenero(itemValue);
                            }}
                            >   
                                <Picker.Item label="Selecione um gênero" value="" enabled={false} />
                                {generos.map( gen => (
                                    <Picker.Item key={gen} label={gen} value={gen} />
                                ))}
                            </Picker>
                        </WrappePicker>   
                    </WrapperSelect>


                    <WrapperSelect>
                        <Ask>Idade:</Ask>
                        <WrappePicker>
                            <Picker
                            selectedValue={idade}
                            style={{ 
                                height: 50, 
                                width: '100%', 
                                marginBottom: 5,
                                backgroundColor: '#ffffff',
                                color: '#000'
                                
                            }}
                            onValueChange={(itemValue, itemIndex) => {
                                setIdade(itemValue);
                            }}
                        >   
                            <Picker.Item label="Selecione uma idade" value='0' enabled={false} />
                            {idades.map( ida => (
                                <Picker.Item key={ida} label={ida.toString()} value={ida} />
                            ))}
                        </Picker>
                        </WrappePicker>   
                    </WrapperSelect>

                </FieldsSelect>

                <Ask>1 - Qual nota você dá para sua saúde bucal?</Ask>
                <RadioButton 
                    selected={r1}
                    options={['10 a 9', '8 a 7', '6 a 5','4 a 3', '2 a 1', '0']} 
                    onChangeSelect={(opt) => setR1(opt)}
                /> 


                <Ask>2 - Você já foi orientado sobre como cuidar da sua sáude bucal?</Ask>
                <RadioButton 
                    selected={r2}
                    options={['Sim', 'Não']} 
                    onChangeSelect={(opt) => setR2(opt)}
                /> 

                <Fields >
                    <Button onLongPress={ () => navigation.navigate('Home')} onPress={SalvaForm} delayLongPress={5000}>
                        <ButtonText>
                            Finalizar
                        </ButtonText>
                    </Button>

                </Fields> 

            </Fields>
        </Container>
    );
}