import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const PersonWrapper = styled.TouchableOpacity`
    flex-direction: column;
    padding: ${RFValue(25)}px;
`;

export const Photo = styled.Image`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;

    margin-right: ${RFValue(5)}px;

    border-radius: 10px;
    border: 2px solid ${({theme})=> theme.colors.secondary};
    `;

export const Name = styled.Text`
    color: ${({theme}) => theme.colors.lightGrey};
    font-size: ${RFValue(14)}px;
`;