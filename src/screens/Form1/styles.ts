import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.ScrollView`
    flex: 1;
    background: #fff;
`

export const Header = styled.View`

    height: 105px;
    background: #005757;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`

export const Card = styled.View`

    width: ${RFValue(400)}px;
    padding: 15px 40px 5px 40px;
    background: #f4f4f4;
    border: 1px #ddd solid;
    border-radius: 30px;
    color: #000;

`

export const TextTitle = styled.Text`
    padding-bottom: 20px;
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: #000;
    text-align: center;
    text-transform: uppercase;
`

export const Texts = styled.Text`
    padding-bottom: 20px;
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: #000;
`

export const Title = styled.Text`
    padding-bottom: 20px;
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: #fff;
`

export const Body = styled.View`
    display: flex;
    align-items: center;
`

export const Fields1 = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`

export const Fields = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

export const FieldsSelect = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`

export const Ask = styled.Text`
    padding-bottom: 20px;
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: #213124;
`

export const WrapperSelect = styled.View`

`

export const Button = styled.TouchableOpacity`

    width: 70%;
    height: 50px;
    background-color: #0d6efd;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
    margin-bottom: 50px;
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

export const WrapperCheckBox = styled.View`
    
`

export const WrappePicker = styled.View`
    width: ${RFValue(175)}px;
    display: flex;
    align-items: center;
    border: 1px solid #000;
    border-radius: 4px;

`

export const SameLine = styled.View`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const Line = styled.View`

    border: .25px solid black;
    width: 90%;
    margin: ${RFValue(16)}px;

`