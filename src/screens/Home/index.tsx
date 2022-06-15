import React, { useEffect, useState } from 'react'
import { ButtonText } from '../PresetForm/styles'
import { Button, ButtonTextBlue, ButtonWhite, Container, Logo, Title } from './styles'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import api from '../../services/api';
import { Alert } from 'react-native';

import { propsStack } from '../../routes/Stack/Models';
import { CreateTable, deleteStudent, getStudent, updateStudent } from '../../services/Students';
import { addSchool, CreateTableSchools, deleteSchools, getSchools } from '../../services/Schools';

export function Home () {
    const navigation = useNavigation<propsStack>();
    const [schools, setSchools] = useState([]);
    const [sent, setSent] = useState([])
    const [conected, setConected] = useState(false);

    //onCreate
    useEffect(() => {
        const conexao = NetInfo.addEventListener(state => {
            // console.log("Connection type", state.type);
            // console.log("Is connected?", state.isConnected);
            if( state.isConnected ) setConected(true);
        });
        onCreate();
    }, [])

    //onChange Schools
    useEffect(() => {
                
            if(schools.length){

                schools.map( async (school) =>  {
                    await addSchool(school)                
                    .then(res => {
                        console.log("foi")
                    })
                    .catch(error => {
                        console.log(error)
                        Alert.alert("Erro!", "Não foi possível atualizar as escolas localmente!")
                    });
                })
                Alert.alert("Feito!", "Escolas atualizadas com sucesso!")        
            }

    }, [schools]);

    useEffect(() => {
        //remove e atualiza a tabela de escolas.
            sent.map( async (e) => {
                await updateStudent(e)
                .then(res => {
                    console.log("foi")
                })
                .catch(error => {
                    console.log(error)
                    Alert.alert("Erro!", "Não foi possível atualizar as escolas localmente!")
                });
            })


    }, [sent]);


    const onCreate = async () => {
        CreateTable();
        CreateTableSchools();
    }

    const getDataSchools = async () => {

        const conexao = NetInfo.addEventListener(state => {
            if( state.isConnected ) setConected(true);
            else setConected(false);
        });


        if(conected){
        
                await api.get("/unidades")
                .then(res => {
                    setSchools(res.data);
                })
                .catch(error => {
                    console.log(error)
                    Alert.alert("Erro!", "Não foi possível baixar as escolas!")
                });
                

        } else Alert.alert ("Aviso!", "Sem conexão com a internet");
        
    }

    const postData = async () => {
        const conexao = NetInfo.addEventListener(state => {
            if( state.isConnected ) setConected(true);
            else setConected(false);
        });

        if(conected){
        
                const Students : any = await getStudent() 
                console.log(Students);

                if (Students.length) {

                    const dados = {
                        key: "1234",
                        data: Students
                    }
                                
                    await api.post("/submit", dados, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(res => {
                        const dados = res.data.dados //recebe apenas o ID
                        setSent(dados);
                    })
                    .catch(error => console.log(error));
            

                    Alert.alert ("Feito!", "Dados enviados com sucesso");
                } else Alert.alert("Aviso!", "Sem dados a serem enviados!")

        } else Alert.alert ("Aviso!","Sem conexão com a internet");

    }
 
    return (
        <Container>
            <Logo source={require('../../../assets/icon.png')} />
            <Button onPress={ () => navigation.navigate('PresetForm')}>
                <ButtonText>Iniciar Formulário</ButtonText>
            </Button>

            <Button onPress={getDataSchools}>
                <ButtonText>Atualizar base de dados</ButtonText>
            </Button>

            <ButtonWhite onPress={postData}>
                <ButtonTextBlue>Enviar respostas</ButtonTextBlue>
            </ButtonWhite>
        </Container>
    );
}