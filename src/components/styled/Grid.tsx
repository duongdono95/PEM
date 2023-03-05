/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Paper, PaperProps, styled } from '@material-ui/core';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ContainerItemProps extends PaperProps {
  grid?: boolean;
  flex?: boolean;
  x?: [number, number];
  y?: [number, number];
  colSpan?: number | string;
  rowSpan?: number | string;
}

export type ItemProps = ContainerItemProps;

export interface DivItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  grid?: boolean;
  flex?: boolean;
  x?: [number, number];
  y?: [number, number];
  colSpan?: number | string;
  rowSpan?: number | string;
}

const span = (i: number | string): string => `span ${i}`;

export interface ContainerProps {
  rows: string;
  columns: string;
}

export type PaperItemProps = ContainerItemProps & PaperProps;

export const Container = styled('div')(({ rows, columns }: ContainerProps) => ({
  display: 'grid',
  gridTemplateRows: rows,
  gridTemplateColumns: columns,
  gap: '16px',
  width: '100%',
  height: 'max-content',
  minHeight: '100%',
  overflow: 'auto',
}));

export const FlexContainer = styled('div')((props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
  height: 'max-content',
  minHeight: '100%',
  overflow: 'auto',
}));

export const Item = styled('div')(({ grid, flex, x, y, rowSpan = 1, colSpan = 1 }: ContainerItemProps) => ({
  display: grid ? 'grid' : flex ? 'flex' : undefined,
  gridColumnStart: x ? x[0] : undefined,
  gridColumnEnd: x ? x[1] : span(colSpan),
  gridRowStart: y ? y[0] : undefined,
  gridRowEnd: y ? y[1] : span(rowSpan),
}));

export const PaperItem = ({ grid, flex, x, y, rowSpan = 1, colSpan = 1, ...paperProps }: PaperItemProps): JSX.Element => (
  <Paper
    {...paperProps}
    style={{
      display: grid ? 'grid' : flex ? 'flex' : undefined,
      gridColumnStart: x ? x[0] : undefined,
      gridColumnEnd: x ? x[1] : span(colSpan),
      gridRowStart: y ? y[0] : undefined,
      gridRowEnd: y ? y[1] : span(rowSpan),
      ...paperProps?.style,
    }}
  />
);

export const DivItem = ({ grid, flex, x, y, rowSpan = 1, colSpan = 1, ...divProps }: DivItemProps): JSX.Element => (
  <div
    {...divProps}
    style={{
      display: grid ? 'grid' : flex ? 'flex' : undefined,
      gridColumnStart: x ? x[0] : undefined,
      gridColumnEnd: x ? x[1] : span(colSpan),
      gridRowStart: y ? y[0] : undefined,
      gridRowEnd: y ? y[1] : span(rowSpan),
      ...divProps?.style,
    }}
  />
);

export const GridPaper = styled(PaperItem)({
  minHeight: 200,
  placeContent: 'center',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  overflowX: 'hidden',
  display: 'flex',
  gridColumn: 'span 1',
  gridRow: 'span 1',
});
