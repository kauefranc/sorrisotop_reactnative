import React, { useEffect } from 'react'
import { ButtonText } from '../PresetForm/styles'
import { Button, ButtonTextBlue, ButtonWhite, Container, Logo, Title } from './styles'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";

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
        
        const schools = {
            id: 3,
            nome: "FMM"
        }

        await addSchool(schools);
        console.log(schools);


    }

    const postData = async () => {

        // const allStudents =  await getSchools()
        // console.log(allStudents);

        const allStudents =  await getStudent()
        console.log(allStudents);
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