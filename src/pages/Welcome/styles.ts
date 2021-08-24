import styled from 'styled-components/native';
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'


export const Container = styled.View`
    /* flex: 1 makes the element take the whole screen, having total priority */
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    justify-content: center;


`;

    export const Slogan = styled.Text`
        font-size: ${RFValue(26)}px;
        color: ${({theme}) => theme.colors.text};
        font-family: ${({theme}) => theme.fonts.regular};
        margin-top: ${RFValue(50)}px;
        width: 100%;
        padding: 0 60px;
        
        text-align: center;
        align-items: center;
        justify-content: center;
    
    `;

   export const Title = styled.Text`
        font-size: ${RFValue(35)}px;
        color: ${({theme}) => theme.colors.text};
        font-family: ${({theme}) => theme.fonts.medium};
        margin-top: ${RFValue(15)}px;
        

    `;



    export const IconLogo = styled(Ionicons)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(60)}px;
    margin-top: ${getStatusBarHeight() + RFValue(65)}px;

    `;


    export const Icon = styled(AntDesign)`
    /* color: ${({theme}) => theme.colors.secondary}; */
    font-size: ${RFValue(30)}px;
    color: ${({theme}) => theme.colors.background};

`;


    export const LoginWrapper = styled.View`
        width: 100%;
        align-items: center;
        margin-top: ${RFValue(100)}px;
    `;

    export const LoginOption = styled.TouchableOpacity`
        width: 80%;
        flex-direction: row;
        background-color: ${({theme}) => theme.colors.text};
        height: 56px;
        margin-top: ${RFValue(16)}px;
        border-radius: ${RFValue(5)}px;
        align-items: center;
        justify-content: center;
    
    `;

    export const TextLogin = styled.Text`
        font-size: ${RFValue(18)}px;
        margin-left: ${RFValue(30)}px;
        color: ${({theme}) => theme.colors.textBlack};
        font-family: ${({theme}) => theme.fonts.medium}
    `;

    export const TextSignUp = styled.Text`
        color: ${({theme}) => theme.colors.text};
        font-size: ${RFValue(15)}px;
        margin-top: ${RFValue(40)}px;
        justify-content: flex-start;
    `;




