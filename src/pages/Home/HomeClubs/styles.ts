import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

/* MODAL */

export const ModalContainer = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    padding: 0px 15px;

`;

export const ModalHeader = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(50)}px;
    justify-content: space-between;
    height: ${RFValue(55)}px;
    `;

export const CancelButton = styled.TouchableOpacity`
    height: 50px;
    width: 30%;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
    `;

export const CreateButton = styled.TouchableOpacity`
    height: 50px;
    width: 35%;

    background-color: ${({theme}) => theme.colors.secondary};

    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
    flex-direction: row;
    padding-left: 10px;

    `;

export const RocketIcon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.background};

    margin-left: 5px;
`;

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(20)}px;
`;

export const ModalTitle = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(22)}px;
    font-weight: 600;

    margin-top: ${RFValue(25)}px;
    margin-bottom: ${RFValue(10)}px;
    text-align: center;
`;

export const CategoriesContainer = styled.View`
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
    
    flex-direction: column;

    width: 100%;
    height: 400px;

`;

export const Category = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: ${RFValue(8)}px;
    align-self: flex-start;

    padding: ${RFValue(8)}px ${RFValue(20)}px;

    margin: ${RFValue(5)}px;
`;

export const CategoryName = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(20)}px;
    font-weight: 500;
`;


export const ClubTitle = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(22)}px;
    font-weight: 600;

    margin-top: ${RFValue(125)}px;
    margin-bottom: ${RFValue(10)}px;
    text-align: center;
`;

export const NameClubInput = styled.TextInput`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(18)}px;

    padding: ${RFValue(10)}px ${RFValue(30)}px;

    border: 1px solid rgba(136, 136, 136, 0.05);
    border-radius: ${RFValue(8)}px;

    height: ${RFValue(50)}px;
    
    `;

export const ClubDetailsContainer = styled.View`
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
    
    flex-direction: column;

    width: 100%;
`;

export const VisibilityTitle = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(22)}px;
    font-weight: 600;

    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(10)}px;
    text-align: center;
`;

export const VisibilityContainer = styled.View`
    padding-left: ${RFValue(0)}px;
    padding-right: ${RFValue(0)}px;
    justify-content: center;
    
    flex-direction: row;

    width: 100%;
`;

