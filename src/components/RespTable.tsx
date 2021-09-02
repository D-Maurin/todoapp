import {
  Container,
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
import { useSelector } from "react-redux";
// @ts-ignore
import { Column, useSortBy, useTable } from "react-table";
import { IResp, IRespList } from "../types/todo";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import styled from "styled-components";

const SortArrow = styled(ArrowDownwardIcon)<{ sorton: boolean; up: boolean }>`
  vertical-align: bottom;
  margin-left: 5px;
  transform: rotate(${(props) => (props.up ? "180deg" : "0deg")});
  transition: transform 0.2s, opacity 0.2s !important;
  opacity: ${(props) => (props.sorton ? "1" : "0")};
`;

function RespTable() {
  const resps: any = useSelector((state: any) => state.todos.resps);

  const data = useMemo(() => Object.values(resps), [resps]) as any;
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
          console.log(value);
          return <>{moment(value).format("DD/MM/YYYY")}</>;
        },
      },
      {
        Header: "Adresse",
        accessor: "address",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
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
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
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
    </Container>
  );
}

export default RespTable;
