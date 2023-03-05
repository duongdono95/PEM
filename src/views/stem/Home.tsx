import { makeStyles } from '@material-ui/core';
import { Header } from 'components/Header';
import { StyledContainer, PaperItem } from 'components/styled';
import React from 'react';
import { theme } from 'style/theme';

import Stem from './Stem';

const useStyles = makeStyles({
  paper: {
    padding: theme.spacing(2),
    width: '-webkit-fill-available',
    textAlign: 'left',
    color: theme.palette.text.primary,
    whiteSpace: 'nowrap',
  },
});

function Home(): JSX.Element {
  const classes = useStyles();

  // const dealPadArray: { [k in  DealpadType]: () => JSX.Element } = { electricity_futures: Futures, GAS: Gas, carbon: Carbon };
  // const DealpadComponent = state ? dealPadArray[state.dealpad] : dealPadArray[AEProduct.ELECTRICITY];
  return (
    <StyledContainer columns={'repeat(4, 1fr)'} rows={'2.5rem repeat(4, 1fr)'}>
      <Header text={'Aotearoa Energy Short Term Electricity Market (STEM)'} max />
      <PaperItem colSpan={4} rowSpan={4} className={classes.paper}>
        <Stem />
      </PaperItem>
    </StyledContainer>
  );
}

export { Home };
