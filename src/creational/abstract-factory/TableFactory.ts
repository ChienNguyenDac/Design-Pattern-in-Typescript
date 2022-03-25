import BigTable from "./BigTable"
import SmallTable from "./SmallTable"
import { ITable } from "./Table"

class TableFactory {
    static createTable(table: string): ITable {
        if (table === 'SmallTable') {
            return new SmallTable()
        } else {
            return new BigTable()
        }
    }
}

export default TableFactory