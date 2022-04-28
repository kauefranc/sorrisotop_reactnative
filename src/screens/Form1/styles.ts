import styled from "styled-components/native"

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

