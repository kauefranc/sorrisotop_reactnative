import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
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

    height: 700px;
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

export const TitlePicker = styled.Text`
    font-size: 20px;
    padding: 5px;
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

export const ButtonCancel = styled.TouchableOpacity`

    width: 70%;
    height: 50px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-radius: 50px;
    border: 1px solid #e56767;

`

export const ButtonTextCancel = styled.Text`

    color: #e56767;
    font-family: ${({theme}) => theme.fonts.bold};
    text-transform: uppercase;
    line-height: 16px;
    letter-spacing: 0.5px;
`

