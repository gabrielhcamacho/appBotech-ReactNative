import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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
    margin-top: ${RFValue(15)}px;
    padding: ${RFValue(10)}px;

    background-color: #3D4255;

    width: 100%;
    height: ${RFValue(35)}px;
    border-radius: ${RFValue(10)}px;

    justify-content: center;
`;

export const Icon = styled.View`

`;

export const TextInput = styled.TextInput`
    font-size: ${RFValue(16)}px;
    color: ${({theme})=> theme.colors.text};
`;

export const Body = styled.View`

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
    
    background-color: #3D4255;

    width: 100%;
    height: ${RFValue(120)}px;
`;

export const TechContainer = styled.View`
    margin-top: ${RFValue(15)}px;
    
    padding: ${RFValue(10)}px;

    margin-right: 15px;

    background-color: ${({theme})=> theme.colors.background};

    width: 48%;
    height: ${RFValue(100)}px;

    border-radius: ${RFValue(7)}px;
`;

export const TechHeader = styled.View`

`;

export const TechTitle = styled.Text`

`;

export const TechDescription = styled.Text`

`;
