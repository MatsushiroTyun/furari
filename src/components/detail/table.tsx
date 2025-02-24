import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

type Props = {
    moneyList:money[];
}

export default function DetailTable({moneyList}:Props) {
    return (
        <TableContainer >
         <Table >
            <TableHead>
            <TableRow>
                <TableCell align="right">日付</TableCell>
                <TableCell align="right">用途</TableCell>
                <TableCell align="right">金額</TableCell>
                <TableCell align="right">説明</TableCell>
                <TableCell align="right">払った人</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {moneyList.map((row) => (
                <TableRow
                key={row.day}
                >
                <TableCell>
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.payedUser}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}