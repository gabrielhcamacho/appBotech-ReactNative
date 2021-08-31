import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    padding-left: ${RFValue(25)}px;
    padding-right: ${RFValue(25)}px;
`;

export const ClubCard = styled.View`
    height: ${RFValue(195)}px;
    width: ${RFValue(250)}px;
    border: 1px solid rgba(8,8,8,0.5)
`;

export const FABWrapper = styled.View`
    margin-bottom: 10px;
`;
