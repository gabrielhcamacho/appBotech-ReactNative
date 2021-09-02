import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const FABWrapper = styled.View`
    margin-bottom: 10px;
`;

// MODAL

export const ModalContainer = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    padding: 0px 15px;

`;

export const ModalHeader = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(50)}px;
    justify-content: space-between;
    `;

export const CancelButton = styled.TouchableOpacity`
    height: 45px;
    width: 25%;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
    `;

export const SendButton = styled.TouchableOpacity`
    height: 45px;
    width: 25%;
    background-color: ${({theme}) => theme.colors.secondary};
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
    `;

export const ContentInput = styled.TextInput`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(18)}px;

    margin-top: ${RFValue(10)}px;
    padding: ${RFValue(15)}px;

    height: ${RFValue(300)}px;

    
    `;

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(18)}px;
`;