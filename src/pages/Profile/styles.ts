import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background}
`;

export const Header = styled.View`
    background-color: ${({ theme}) => theme.colors.backgroundTabBar};
    padding: ${RFValue(25)}px;

    width: 100%;
    height: ${RFValue(120)}px;

    align-items: center;
    flex-direction: row;

    padding-bottom: 19px;


`;

export const Photo = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;

    margin-right: ${RFValue(5)}px;
    margin-top: ${RFValue(15)}px;

    border-radius: 10px;
    border: 2px solid ${({theme})=> theme.colors.background}
`;

export const UserHeaderInfo = styled.View`
    margin-top: ${RFValue(15)}px;
    padding-left:${RFValue(10)}px;

    height: 100%;
    width: 100%;

    align-items: flex-start;
    justify-content: center;
`;

export const Name= styled.Text`
    color: ${({theme})=> theme.colors.lightGrey};
    font-size: ${RFValue(20)}px;
    font-weight: 500;
`;

export const UserName= styled.Text`
    color: ${({theme})=> theme.colors.lightGrey};
    font-size: ${RFValue(13)}px;
    font-weight: 400;
`;

export const InfoContainer = styled.View`
    width: 100%;
    height: ${RFValue(90)}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${RFValue(0)}px ${RFValue(30)}px;

`;

export const InfoFollowersContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const InfoFollowingContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const InfoFriendsContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const InfoValue = styled.Text`
    color: ${({theme})=> theme.colors.secondary};
    font-size: ${RFValue(18)}px;
    font-weight: 700;
`;

export const InfoName = styled.Text`
    color: ${({theme})=> theme.colors.lightGrey};
    font-size: ${RFValue(17)}px
`;

export const Bio = styled.Text`
    color: ${({theme})=> theme.colors.text};
    font-size: ${RFValue(17)}px;

    padding: ${RFValue(15)}px ${RFValue(25)}px;
    margin-top: ${RFValue(10)}px;
`;
