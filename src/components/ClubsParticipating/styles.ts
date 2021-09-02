import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';


export const PaddingContainer = styled.View`
    padding: ${RFValue(20)}px ${RFValue(30)}px ${RFValue(0)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme})=> theme.colors.lightGrey};
    font-size: ${RFValue(18)}px;
    font-weight: 600;
`;

export const ButtonMoreClubs = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondary};

    padding: ${RFValue(8)}px ${RFValue(10)}px;
    border-radius: ${RFValue(8)}px;
`;

export const Icon = styled(AntDesign)`
     font-size: ${RFValue(14)}px;
`;

export const ClubsWrapper = styled.View`
    flex-direction: row
`;

export const ClubOne = styled.TouchableOpacity`
    flex-direction: column;
    margin: ${RFValue(10)}px;
    align-items: center;
    flex-wrap: wrap;
`;

export const ClubICon = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;

    margin-right: ${RFValue(5)}px;
    margin-top: ${RFValue(5)}px;

    border-radius: 10px;
`;

export const ClubName = styled.Text`
    color: ${({theme})=> theme.colors.text};

    font-size: ${RFValue(14)}px;
    font-weight: 400;

    max-width: ${RFValue(90)}px;
    text-align: center;
    margin-top: ${RFValue(5)}px;
`;
