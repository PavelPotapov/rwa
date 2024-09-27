import type { ITable } from "./Table.types";
import TableRow from "./TableRow";
import * as styles from "./Table.module.pcss";

const Table = ({ thead, tbody }: ITable) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {thead.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody.map((item, index) => {
            return (
              <TableRow
                key={index}
                name={item.name}
                allCount={item.allCount}
                price={item.price}
                income={item.income}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
