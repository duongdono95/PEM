import React from 'react';

export type SVGType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;
export type EXTradingDetails = {
  '1stLine': {
    bidVol: number;
    bidPrice: number;
    askPrice: number;
    askVol: number;
  };
  '2ndLine': {
    bidVol: number;
    bidPrice: number;
    askPrice: number;
    askVol: number;
  };
  '3rdLine': {
    bidVol: number;
    bidPrice: number;
    askPrice: number;
    askVol: number;
  };
  '4thLine': {
    bidVol: number;
    bidPrice: number;
    askPrice: number;
    askVol: number;
  };
};
export type EX = {
  date: string;
  favorite: boolean;
  data: {
    p1: {
      bestVol: number;
      bestPrice: number;
      lastTrade: number;
      tradingDetails: EXTradingDetails;
    };
    p2: {
      bestVol: number;
      bestPrice: number;
      lastTrade: number;
      tradingDetails: EXTradingDetails;
    };
    p3: {
      bestVol: number;
      bestPrice: number;
      lastTrade: number;
      tradingDetails: EXTradingDetails;
    };
    p4: {
      bestVol: number;
      bestPrice: number;
      lastTrade: number;
      tradingDetails: EXTradingDetails;
    };
    p5: {
      bestVol: number;
      bestPrice: number;
      lastTrade: number;
      tradingDetails: EXTradingDetails;
    };
    p6: {
      bestVol: number;
      bestPrice: number;
      lastTrade: number;
      tradingDetails: EXTradingDetails;
    };
    Baseload: {
      bestVol: number;
      bestPrice: number;
      lastTrade: number;
      tradingDetails: EXTradingDetails;
    };
  };
};
export type EXOrder = {
  id: number;
  orderNumber: number;
  details: {
    note: string;
    EX: string;
    Product: string;
    Date: string;
    volume: number;
    Price: number;
  };
};

export type TicketDetails =
  | {
      contract: string;
      bestVol: number;
      bestPrice: number;
      lastTrade: number;
      product: string;
      day: string;
    }
  | undefined;
