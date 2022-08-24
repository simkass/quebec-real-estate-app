import "./table.styles.scss";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Papa from "papaparse";
import React from "react";

const CsvTable = ({ filepath, columns, columns_display }) => {
  const [rawRows, setRows] = React.useState([]);
  React.useEffect(() => {
    Papa.parse(filepath, {
      download: true,
      header: true,
      complete: (data) => {
        setRows(data.data);
      },
    });
  }, []);

  return (
    <div className="container">
      <TableContainer sx={{ width: "100%" }}>
        <Table size="small" sx={{ width: "max-content" }}>
          <TableHead>
            <TableRow>
              {columns_display.map((column) => (
                <TableCell key={column}>
                  <b>{column}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rawRows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell align="left" key={column}>
                    {row[column]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CsvTable;
