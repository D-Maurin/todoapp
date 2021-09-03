import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import moment from "moment";
import { useMemo } from "react";
// @ts-ignore
import { Column, useSortBy, useTable, useGlobalFilter } from "react-table";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import styled from "styled-components";

import RowOptions from "./RowOptions";
import GlobalFilter from "./reusable/GlobalFilter";
import useResps from "../hooks/useResps";
import useLink from "../hooks/useLink";

const SortArrow = styled(ArrowDownwardIcon)<{ sorton: boolean; up: boolean }>`
  vertical-align: bottom;
  margin-left: 5px;
  transform: rotate(${(props) => (props.up ? "180deg" : "0deg")});
  transition: transform 0.2s, opacity 0.2s !important;
  opacity: ${(props) => (props.sorton ? "1" : "0")};
`;

const buildData = (resps: any, link: any) => {
  return Object.entries(resps).map(([id, value]: [id: string, value: any]) => {
    return {
      id,
      ...value,
      nTodo: Object.values(link).filter((e: any) => e.includes(id)).length,
    };
  });
};

function RespTable() {
  const resps = useResps();
  const link = useLink();

  const data = useMemo(() => buildData(resps, link), [resps, link]) as any;
  const columns: Array<Column<any>> = useMemo(
    () => [
      {
        Header: "Nom",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Prénom",
        accessor: "firstName",
      },
      {
        Header: "Date de naissance",
        accessor: "birthday",
        Cell: ({ value }: any) => {
          return <>{moment(value).format("DD/MM/YYYY")}</>;
        },
      },
      {
        Header: "Adresse",
        accessor: "address.label",
      },
      {
        Header: "Nb de tâches",
        accessor: "nTodo",
      },
      {
        Header: "",
        accessor: "id",
        Cell: RowOptions,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { globalFilter },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = tableInstance;

  return (
    <TableContainer component={Paper}>
      <Table {...getTableProps()}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={visibleColumns.length}>
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              ></GlobalFilter>
            </TableCell>
          </TableRow>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup: any) => (
              // Apply the header row props
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column: any) => (
                    // Apply the header cell props
                    <TableCell
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }
                      <span>
                        <SortArrow
                          sorton={column.isSorted}
                          up={column.isSortedDesc}
                        />
                      </span>
                    </TableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableHead>
        {/* Apply the table body props */}
        <TableBody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row: any) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <TableRow {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell: any) => {
                      // Apply the cell props
                      return (
                        <TableCell {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </TableCell>
                      );
                    })
                  }
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RespTable;
