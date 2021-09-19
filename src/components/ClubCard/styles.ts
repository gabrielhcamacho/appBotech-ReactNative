import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    flex: 1;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.colors.background};

    padding-top: ${RFValue(25)}px;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;

`;

export const ClubCard = styled.TouchableOpacity`
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

export const LastMessageContainer = styled.View`
    flex-direction: row;
    padding: ${RFValue(5)}px ${RFValue(10)}px;
    align-items: center;
    margin-top: ${RFValue(0)}px;
`;

export const LastMessageContainerTwo = styled.View`
    flex-direction: row;
    padding: ${RFValue(0)}px ${RFValue(10)}px;
    align-items: center;
    margin-bottom: ${RFValue(10)}px;
`;

export const PersonName = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({theme})=> theme.colors.grey};
    
`;

export const LastMessage = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme})=> theme.colors.text};
    width: 60%;
`;
export const PeopleOnContainer = styled.View`
    flex-direction: row;
    padding-left: ${RFValue(10)}px;
`;

export const Photo = styled.Image`
    width: ${RFValue(32)}px;
    height: ${RFValue(32)}px;

    margin-right: ${RFValue(5)}px;

    border-radius: 10px;
    border: 2px solid ${({theme})=> theme.colors.secondary};
`;

export const CardFooter = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction:row;

    margin-top: ${RFValue(5)}px;
    padding-top: ${RFValue(10)}px;
    
`;

export const Icon = styled(Ionicons)`
    font-size: ${RFValue(14)}px;
    color: ${({theme})=> theme.colors.grey};
`;

export const PeopleNumber = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme})=> theme.colors.grey}
`;