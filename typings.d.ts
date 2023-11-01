export interface ReportItem {
  firstName: string;
  lastName: string;
  cardNumber: string;
  category: string;
  collectionPoint: string;
  region: string;
  id: string;
}
export interface basicQueryProps {
  limitCount: number;
}

export interface whereQueryProps {
  field: string;
  value: string;
}

export interface searchQueryProps {
  searchQuery: string;
}

import { ReactNode } from "react";
export interface TabProps {
  tabIds: string[];
  renderTitle: (id: string) => ReactNode;
  renderContent: (id: string) => ReactNode;
}
