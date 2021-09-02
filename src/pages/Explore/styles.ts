import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    padding: ${RFValue(0)}px ${RFValue(30)}px;
    width: 100%;
    height: ${RFValue(75)}px;

    align-items: center;
    justify-content: center;

    padding-bottom: 19px;
`;

export const PageTitle = styled.Text`
    color: ${({theme})=> theme.colors.text};
    font-size: ${RFValue(20)}px;
    font-weight: 600;

    margin-top: ${RFValue(10)}px;
`;

export const SearchBarContainer = styled.View`
    margin-top: ${RFValue(10)}px;

    background-color: ${({theme})=> theme.colors.card};

    width: 100%;
    height: ${RFValue(35)}px;
    border-radius: ${RFValue(10)}px;

    justify-content: center;
`;

export const Icon = styled(FontAwesome5)`
    color: ${({theme})=> theme.colors.secondary};
    font-size: ${RFValue(22)}px;
`;

export const IconJS = styled(Ionicons)`
    color: ${({theme})=> theme.colors.secondary};
    font-size: ${RFValue(22)}px;
`;
export const IconUnreal = styled(Fontisto)`
    color: ${({theme})=> theme.colors.secondary};
    font-size: ${RFValue(22)}px;
`;


export const IconMath = styled(MaterialCommunityIcons)`
    color: ${({theme})=> theme.colors.secondary};
    font-size: ${RFValue(22)}px;
`;

export const TextInput = styled.TextInput`
    font-size: ${RFValue(16)}px;
    color: ${({theme})=> theme.colors.text};

    padding-bottom: ${RFValue(10)}px;
    padding-left: ${RFValue(10)}px;
`;

export const Body = styled.View`
    margin-bottom: ${RFValue(85)}px;
`;

export const Title = styled.Text`
    color: ${({theme})=> theme.colors.text};
    font-size: ${RFValue(15)}px;
    font-weight: 500;

    margin-top: ${RFValue(15)}px;
    padding-left: ${RFValue(30)}px;
`;

export const Row = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    margin-top: ${RFValue(0)}px;
    padding: ${RFValue(0)}px ${RFValue(10)}px;


    width: 100%;
    height: ${RFValue(120)}px;
`;

export const TechContainer = styled.View`
    margin-top: ${RFValue(15)}px;
    
    padding: ${RFValue(10)}px;

    margin-right: 15px;

    background-color: ${({theme})=> theme.colors.card};

    width: 48%;
    height: ${RFValue(110)}px;

    border-radius: ${RFValue(7)}px;
`;

export const TechHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TechTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.text};

    margin-left: ${RFValue(5)}px;
`;

export const TechDescription = styled.Text`
    margin-top: ${RFValue(5)}px;
    font-size: ${RFValue(11)}px;

    color: ${({theme}) => theme.colors.grey}
`;
