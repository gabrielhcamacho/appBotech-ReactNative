import styled from 'styled-components/native';
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background}
`;

export const Header = styled.View`
    margin-top: ${getStatusBarHeight() + RFValue(35)}px;
    text-align: center;
    
    `;

export const TabView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 80px;
    `;

export const FeedHeader = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(28)}px;
    font-weight: 600;
    `;

export const ClubsHeader = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(28)}px;
    font-weight: 600; 
    `;