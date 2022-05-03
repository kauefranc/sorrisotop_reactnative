import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 24px;
    font-weight: bold;
`;

export const Logo = styled.Image`
    width: ${RFValue(400)}px;
    height: ${RFValue(300)}px;
    margin-bottom: 20px;
`

export const Button = styled.TouchableOpacity`

    width: 70%;
    height: 50px;
    background-color: #0d6efd;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    border-radius: 50px;

`

export const ButtonWhite = styled.TouchableOpacity`

    width: 70%;
    height: 50px;
    background-color: #fff;
    border: 1px solid #0d6efd;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    border-radius: 50px;

`

export const ButtonText = styled.Text`

    color: #fff;
    font-family: ${({theme}) => theme.fonts.bold};
    text-transform: uppercase;
    line-height: 16px;
    letter-spacing: 0.5px;


`

export const ButtonTextBlue = styled.Text`

    color: #0d6efd;
    font-family: ${({theme}) => theme.fonts.bold};
    text-transform: uppercase;
    line-height: 16px;
    letter-spacing: 0.5px;


`