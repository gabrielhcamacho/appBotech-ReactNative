import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';


export const PaddingContainer = styled.View`
    padding: ${RFValue(20)}px ${RFValue(30)}px;
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

export const ButtonMoreClubs = styled.View`
    background-color: ${({theme}) => theme.colors.secondary};

    padding: ${RFValue(10)}px ${RFValue(15)}px;
    border-radius: ${RFValue(8)}px;
`;

export const Icon = styled(AntDesign)`
     font-size: ${RFValue(14)}px;
`;

export const ClubsWrapper = styled.View`
    flex-direction: row
`;

export const ClubOne = styled.View`
    flex-direction: column;
`;

export const ClubICon = styled.Image`
     width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;

    margin-right: ${RFValue(5)}px;
    margin-top: ${RFValue(15)}px;

    border-radius: 10px;
    border: 2px solid ${({theme})=> theme.colors.background}
`;

export const ClubName = styled.Text`
    color: ${({theme})=> theme.colors.text};
    font-size: ${RFValue(14)}px;
    font-weight: 400;
`;

export const ClubTwo = styled.View`

`;

export const ClubThree = styled.View``;