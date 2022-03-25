import BigTable from "./table/BigTable"
import SmallTable from "./table/SmallTable"
import { ITable } from "./table/Table"

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