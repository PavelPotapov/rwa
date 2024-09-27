import { ITableRow } from "./Table.types";

const TableRow = ({ name, price, allCount, income }: ITableRow) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{allCount}</td>
      <td>{income}</td>
    </tr>
  );
};

export default TableRow;
