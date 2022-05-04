import React, { useEffect } from 'react'
import { ButtonText } from '../PresetForm/styles'
import { Button, ButtonTextBlue, ButtonWhite, Container, Logo, Title } from './styles'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import api from '../../services/api';

import { propsStack } from '../../routes/Stack/Models';
import { CreateTable, getStudent } from '../../services/Students';
import { addSchool, CreateTableSchools, getSchools } from '../../services/Schools';

export function Home () {
    const navigation = useNavigation<propsStack>();

    useEffect(() => {
        CreateTable();
        CreateTableSchools();
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            return state.isConnected
        });
        
    }, [])



    const getDataSchools = async () => {

        
        await api.get("/users/kauefranc")
        .then(res => {
            console.log(res.data)
        })
        .catch(error => console.log(error));


        // await addSchool(schools);
        // console.log(schools);


    }

    const postData = async () => {

        const allStudents =  await getStudent() 

        const dados = {

            key: "1234",
            data: allStudents

        }

        console.log("calma");

        await api.post("/submit", dados, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            console.log(res);
            console.log(res.data)
        })
        .catch(error => console.log(error));
        

    }
 
    return (
        <Container>
            <Logo source={require('../../../assets/logo.jpg')} />
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