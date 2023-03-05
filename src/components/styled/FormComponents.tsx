import { createStyles, FormControl, FormControlProps, makeStyles } from '@material-ui/core';
import React from 'react';
import { theme } from 'style/theme';

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      textAlign: 'left',
    },
  }),
);

export const FormControlPCP = (props: FormControlProps): JSX.Element => {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <FormControl size={'small'} variant='outlined' className={classes.formControl} {...rest}>
      {children}
    </FormControl>
  );
};
