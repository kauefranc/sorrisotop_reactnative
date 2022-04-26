import styled from "styled-components/native";

export const Container = styled.View`

`


export const Header = styled.View`

    height: 105px;
    background: #005757;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`

export const Title = styled.Text`
    padding-bottom: 20px;
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: #FFF;
`

export const Body = styled.View`

    height: 600px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Fields = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.TouchableOpacity`

    width: 70%;
    height: 50px;
    background-color: #0d6efd;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    border-radius: 50px;

`

export const ButtonText = styled.Text`

    color: #fff;
    font-family: ${({theme}) => theme.fonts.bold};
    text-transform: uppercase;
    line-height: 16px;
    letter-spacing: 0.5px;


`

