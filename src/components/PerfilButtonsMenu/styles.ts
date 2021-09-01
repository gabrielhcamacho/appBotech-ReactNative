import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const InteracionButtonContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content:space-between;
    padding: ${RFValue(0)}px ${RFValue(30)}px;
`;

export const FollowButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondary};

    padding: ${RFValue(10)}px ${RFValue(18)}px;
    border-radius: ${RFValue(8)}px;

`;
export const TextButton = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(12)}px;
`;

export const AddFriendButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondary};

    padding: ${RFValue(10)}px ${RFValue(18)}px;
    border-radius: ${RFValue(8)}px;
`;

export const PlusButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondary};

    padding: ${RFValue(10)}px ${RFValue(15)}px;
    border-radius: ${RFValue(8)}px;

`;

