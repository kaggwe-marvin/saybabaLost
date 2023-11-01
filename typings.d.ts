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
