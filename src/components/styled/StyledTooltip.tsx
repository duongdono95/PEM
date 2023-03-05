import { Tooltip, withStyles } from '@material-ui/core';

export const StyledTooltip = withStyles({
  tooltip: {
    fontSize: '0.75rem',
    color: 'white',
    backgroundColor: 'black',
  },
})(Tooltip);
