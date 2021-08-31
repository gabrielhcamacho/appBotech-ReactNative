import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.background};
    padding-top: ${RFValue(25)}px;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    align-items: center;
`;

export const ClubCard = styled.View`
    height: ${RFValue(195)}px;
    width: ${RFValue(280)}px;
    border: 1px solid rgba(136, 136, 136, 0.05);
    border-radius: ${RFValue(8)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(18)}px;
    font-weight: 600;

    padding: 0px 20px
`;

export const TechCategory = styled.Text`
    color: ${({theme}) => theme.colors.grey};
    font-size: ${RFValue(12)}px;
    font-weight: 400;
    

    padding: 15px 25px
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
`;

