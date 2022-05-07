import React, { useEffect, useState } from 'react'
import { ButtonText } from '../PresetForm/styles'
import { Button, ButtonTextBlue, ButtonWhite, Container, Logo, Title } from './styles'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import api from '../../services/api';

import { propsStack } from '../../routes/Stack/Models';
import { CreateTable, deleteStudent, getStudent, updateStudent } from '../../services/Students';
import { addSchool, CreateTableSchools, deleteSchools, getSchools } from '../../services/Schools';

export function Home () {
    const navigation = useNavigation<propsStack>();



    useEffect(() => {
        CreateTable();
        CreateTableSchools();
        const conexao = NetInfo.addEventListener(state => {
            // console.log("Connection type", state.type);
            // console.log("Is connected?", state.isConnected);
            if( state.isConnected ) setConected(true);
        });

        
    }, [])

    const [schools, setSchools] = useState([]);
    const [sent, setSent] = useState([])
    const [conected, setConected] = useState(false);



    const getDataSchools = async () => {

        const conexao = NetInfo.addEventListener(state => {
            // console.log("Connection type", state.type);
            // console.log("Is connected?", state.isConnected);
            if( state.isConnected ) setConected(true);
            else setConected(false);
        });


        if(conected){
        
                await api.get("/unidades")
                .then(res => {
                    setSchools(res.data);
                })
                .catch(error => console.log(error));
                
                //remove e atualiza a tabela de escolas.
                if(schools){
                    await deleteSchools();

                    schools.map( async (school) =>  {
                        await addSchool(school);
                    })
                }

                alert("Escolas atualizadas com sucesso!")

        } else alert ("Sem conexão com a internet");
        
    }

    const postData = async () => {


        const conexao = NetInfo.addEventListener(state => {
            // console.log("Connection type", state.type);
            // console.log("Is connected?", state.isConnected);
            if( state.isConnected ) setConected(true);
            else setConected(false);
        });

        if(conected){

                // await updateStudent()
                // await deleteStudent();
        
                const Students =  await getStudent() 
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
                        const dados = res.data.dados
                        setSent(dados);
                    })
                    .catch(error => console.log(error));
            
                    sent.map( async (e) => {
                        await updateStudent(e);
                    })

                    alert("Dados enviados com sucesso")
                } else alert("Sem dados a serem enviados!")

        } else alert ("Sem conexão com a internet");

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