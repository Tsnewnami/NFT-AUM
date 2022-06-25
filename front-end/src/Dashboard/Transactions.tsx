import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { Title, Wrapper } from "./styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: "#141722",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "transparent",
    fontSize: 16,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const Transactions = () => {
  const [rows, setRows] = useState([
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ]);

  return (
    <>
      <Wrapper>
        <Title>Transactions</Title>
        <TableContainer
          component={Box}
          sx={{
            ".MuiTableContainer-root": {
              boxShadow: "none",
            },

            ".MuiTable-root": {
              borderCollapse: "separate",
              borderSpacing: "0 16px",
              border: "transparent",
            },
            ".MuiTable-root th": {
              border: "none",
            },
            ".MuiTable-root td": {
              background: "white",
            },
            ".MuiTableRow-root td:first-of-type": {
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
            },
            ".MuiTableRow-root td:last-child": {
              borderTopRightRadius: "16px",
              borderBottomRightRadius: "16px",
            },
          }}
        >
          <Table
            sx={{
              minWidth: 700,
            }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Coin</StyledTableCell>
                <StyledTableCell align="left">Position Val.</StyledTableCell>
                <StyledTableCell align="left">Amount</StyledTableCell>
                <StyledTableCell align="left">Leverage</StyledTableCell>
                <StyledTableCell align="left">Total Cost</StyledTableCell>
                <StyledTableCell align="left">Avg. Cost</StyledTableCell>
                <StyledTableCell align="left">Date</StyledTableCell>
                <StyledTableCell align="left">P/L</StyledTableCell>
                <StyledTableCell align="left">State</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ borderRadius: "16px" }}>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell align="left">{row.calories}</StyledTableCell>
                  <StyledTableCell align="left">{row.fat}</StyledTableCell>
                  <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="left">{row.protein}</StyledTableCell>
                  <StyledTableCell align="left">{row.protein}</StyledTableCell>
                  <StyledTableCell align="left">{row.protein}</StyledTableCell>
                  <StyledTableCell align="left">{row.protein}</StyledTableCell>
                  <StyledTableCell align="left">{row.protein}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Wrapper>
    </>
  );
};

export default Transactions;
