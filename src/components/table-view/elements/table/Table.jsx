// import st from './Table.module.css';
import { flexRender } from '@tanstack/react-table';
import st from './Table.module.css';
import PropTypes from 'prop-types';
const Table = ({ title, tableInstance }) => {
    return (
       
            <table className={`st.`}>
                <caption>{title}</caption>
                <thead>
                    {/* Used the react Table Instance from the 
          react-table library to fetch the table headers
          and then the flexRender method is used to render the data according to the column definition
          */}
                    {tableInstance.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                              <th className={st.th} key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {/* getRowModel() only works when we have already declared it in the main react-table instance */}
                    {tableInstance.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        
    )
};

Table.propTypes = {
    title: PropTypes.string,
    tableInstance: PropTypes.object,
    restProperties: PropTypes.array,
};
export default Table;
