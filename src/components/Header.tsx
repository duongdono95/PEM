import React from 'react';

import { Item } from './styled/Grid';
import { makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles({
  titleMaxHeight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '-webkit-fill-available',
    fontWeight: 'bolder',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bolder',
  },
});

const Header = ({ text, max, columnCount }: { text: string; max?: boolean; columnCount?: number }): JSX.Element => {
  const classes = useStyles();
  return (
    <Item colSpan={columnCount || 4} rowSpan={1}>
      <Typography variant={'h6'} color={'primary'} className={max ? classes.titleMaxHeight : classes.title}>
        {text}
      </Typography>
    </Item>
  );
};

export { Header };
