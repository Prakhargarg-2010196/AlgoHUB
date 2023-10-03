import {
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import st from './index.module.css';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import Table from './elements/table/Table';
const TableView = ({ data, headers }) => {
    // React Table wants the data to be memoized so that no extra rerendering takes place
    const MemoizedData = useMemo(() => data, [data]);
    const MemoizedHeaders = useMemo(() => headers, [headers]);
    // Decalares the react table instance with the data and the column names it wants
    const reactTableInstance = useReactTable({
        columns: MemoizedHeaders,
        data: MemoizedData,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });
    // Take the table instance and give it to the table component

    return (
        <div className={st.container}>
            <Table tableInstance={reactTableInstance} />;
        </div>
    );
};

TableView.propTypes = {
    data: PropTypes.array,
    headers: PropTypes.arrayOf(PropTypes.object),
};

export default TableView;
