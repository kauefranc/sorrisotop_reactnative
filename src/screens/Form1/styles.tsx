import styled from "styled-components/native"

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
    display: flex;
    align-items: center;
`

export const Fields = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`