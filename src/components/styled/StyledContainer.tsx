import { styled } from '@material-ui/core';
import { Container, FlexContainer } from './Grid';

export const StyledContainer = styled(Container)(({ theme }) => ({
  gridGap: theme.spacing(2),
  padding: theme.spacing(2),
  border: 0,
  borderRadius: 0,
}));

export const StyledFlexContainer = styled(FlexContainer)(({ theme }) => ({
  gridGap: theme.spacing(2),
  padding: theme.spacing(2),
  border: 0,
  borderRadius: 0,
}));
