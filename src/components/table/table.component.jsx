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

const CsvTable = ({
  filepath,
  columns,
  columns_display,
  white_text = false,
}) => {
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

  var cellClassname = white_text ? "white_cell" : "cell";

  return (
    <div className="Table">
      <div className="table">
        <TableContainer sx={{ width: "100%" }}>
          <Table size="small" sx={{ width: "max-content" }}>
            <TableHead>
              <TableRow>
                {columns_display.map((column) => (
                  <TableCell key={column}>
                    <p className={cellClassname}>
                      <b>{column}</b>
                    </p>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rawRows.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell align="left" key={column}>
                      <p className={cellClassname}>{row[column]}</p>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default CsvTable;
