export interface Address {
  street?: string;
  zipcode?: string;
}

export enum CustomerType{
  IMPORT='IMPORT',
  EXPORT='EXPORT',
  LOCAL='LOCAL'
}
