export interface ITableRow {
  name: string;
  price: string;
  allCount: string;
  income: string;
}

export interface ITable {
  thead: Array<string>;
  tbody: Array<ITableRow>;
}
