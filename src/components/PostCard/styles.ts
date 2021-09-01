import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.background};
    padding-top: ${RFValue(25)}px;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    align-items: center;
`;

export const PostContainer = styled.View`
    height: ${RFValue(195)}px;
    width: ${RFValue(280)}px;
    border: 1px solid rgba(136, 136, 136, 0.05);
    border-radius: ${RFValue(8)}px;

    padding: ${RFValue(20)}px;

    justify-content: space-between;
`;

export const UserName = styled.Text`
    margin-left: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(18)}px;
    font-weight: 500;

`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CardBody= styled.View`
    height: 50%;
`;

export const TextContent = styled.Text`
    margin-top: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(16)}px;
`;

export const CardFooter= styled.View`
    justify-content: space-between;
    align-items: flex-end;

    flex-direction: row;
`;

export const LikeButton = styled(AntDesign)`
    color: ${({theme}) => theme.colors.lightGrey};
    font-size: ${RFValue(18)}px;
`;
export const ShareButton = styled(Feather)`
    color: ${({theme}) => theme.colors.lightGrey};
    font-size: ${RFValue(18)}px;
`;

export const PostDate = styled.Text`
    color: ${({theme}) => theme.colors.lightGrey};
    font-size: ${RFValue(12)}px;
`;