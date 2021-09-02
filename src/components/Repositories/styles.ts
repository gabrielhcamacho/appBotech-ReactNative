import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';


export const ContainerPaddingControl = styled.View`
    padding: ${RFValue(8)}px ${RFValue(30)}px;
    width: 100%;
`;

export const Title = styled.Text`
    color: ${({theme})=> theme.colors.lightGrey};
    font-size: ${RFValue(18)}px;
    font-weight: 600;
`;



export const RepositoriesTypeContainer = styled.View`
    flex-direction: row;
`;

export const Icon = styled(FontAwesome)`
    color: ${({theme})=> theme.colors.lightGrey};
    font-size: ${RFValue(40)}px;

    margin-top: ${RFValue(10)}px;
    margin-right: ${RFValue(25)}px;
`;
