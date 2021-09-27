import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`

export const Header = styled.View`
    height: ${RFValue(95)}px;
    border: 1px solid ${({theme}) => theme.colors.backgroundTabBar};

    align-items: center;
    justify-content: space-between;
    flex-direction:row;

    padding: ${RFValue(0)}px ${RFValue(30)}px;
`;

export const Button = styled(RectButton)`
    margin-top: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;

export const BackIcon = styled(AntDesign)`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.lightGrey};
`;

export const Wrapper = styled.View`
    padding: ${RFValue(0)}px ${RFValue(30)}px;
`;

export const ClubTitle = styled.Text`
    font-size: ${RFValue(24)}px;
    font-weight: 500;
    flex: 2;
    margin-top: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.lightGrey};

    text-align: center;
`;

export const MenuButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const JoinButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondary};
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;

    margin-top: ${RFValue(10)}px;
`;

export const TextButton = styled.Text`
    font-size: ${RFValue(18)}px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.text}
`;

export const SeeChatButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondary};
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
    width: 130px;

    align-items: center;
    justify-content:center;

    margin-top: ${RFValue(10)}px;
`;

export const Body = styled.View`
    border-radius: ${RFValue(10)}px;
    border: 1px solid ${({theme}) => theme.colors.grey};

    margin-top: ${RFValue(20)}px;

    flex: 1;
`;

