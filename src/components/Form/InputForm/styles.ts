import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.attention};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin: 0 0 10px 0;
`;
