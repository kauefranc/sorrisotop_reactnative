import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect }from "react";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import { RadioButton } from "../../components/RadioButton";

import { Container, Texts, TextTitle, Card, Fields, FieldsSelect, WrapperSelect, WrappePicker, Ask, Header, Title, Button, ButtonText, WrapperCheckBox, SameLine, Line} from "./styles";
import { addStudent, CreateTable, getStudent } from "../../services/Students";


export function Form2 () {
    
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

    const idades = [];
    for(var i = 5; i < 20; i++) {
        idades.push(i);
    }

    const generos = ["Masculino","Feminino", "Outros", "Prefiro não dizer"];


    const SalvaForm = async () => {

        if(r1 && r2 ) {

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

                carie: 0,
                gengiva:  0,
                dentetorto: 0,
                limparboca: 0,
                saudebucal: 0,

                r4: 'null',
                r5: 'null',
                r6: 'null',
            }

            await addStudent(Student);

            setR1('');
            setR2('');

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
                <Title>Sorriso TOP - Etapa {etapa}</Title>
            </Header>

            <Fields>
                <Card>
                    <Texts>Escola: {nomeEscola}</Texts>
                    <SameLine>
                        <Texts>Grau: {grau}</Texts>
                        <Texts>Série: {serie}</Texts>
                    </SameLine>
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

                <Line></Line>

                <Ask>1 - Qual nota você dá para sua saúde bucal?</Ask>
                <RadioButton 
                    selected={r1}
                    options={['10 a 9', '8 a 7', '6 a 5','4 a 3', '2 a 1', '0']} 
                    onChangeSelect={(opt) => setR1(opt)}
                /> 

                <Line></Line>

                <Ask>2 - Após sua participação no projeto "Sorriso TOP", sua escovação e cuidados bucais... :</Ask>
                <RadioButton 
                    selected={r2}
                    options={['Melhorou', 'Nada mudou', 'Piorou']} 
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