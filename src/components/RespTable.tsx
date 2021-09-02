import {
  Button,
  Container,
  IconButton,
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

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import styled from "styled-components";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router";
import useRemoveResp from "../hooks/useRemoveResp";

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
  const history = useHistory();

  const resps: any = useSelector((state: any) => state.resps);
  const link: any = useSelector((state: any) => state.link);

  const removeResp = useRemoveResp();

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
        accessor: "address",
      },
      {
        Header: "Nb de tâches",
        accessor: "nTodo",
      },
      {
        Header: "",
        accessor: "id",
        Cell: ({ value }: any) => {
          return (
            <>
              <IconButton
                onClick={() => {
                  history.push("/resps/" + value);
                }}
              >
                <EditIcon></EditIcon>
              </IconButton>

              <IconButton onClick={() => removeResp(value)}>
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </>
          );
        },
      },
    ],
    [history]
  );

  const tableInstance = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
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
