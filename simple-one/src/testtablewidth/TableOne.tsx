import * as React from 'react';
import {
    Table,
    TableRow,
    TableCell,
    TableContainer,
    TableHead,
    Stack,
    Paper,
    PaperProps,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const ExtPaper: React.FC<PaperProps> = (props) => {
    return (
        <Paper {...props} square />
    )
};

import {
    columns,
    IColumn,
} from './Columns';

const useStyles = makeStyles({
    tableWrapper: {
        width: '100%',
        overflowX: 'auto',
    }
});

export const TableOne: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Stack direction='column' height='800px'>
                <TableContainer
                    component={ExtPaper}
                    className={classes.tableWrapper}
                >
                    <Table>
                        <TableHead>
                            <TableRow key='header'>
                                {
                                    columns.map((el: IColumn) => (
                                        <TableCell key={el.id}>
                                            {el.label}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Stack>
        </>
    )
};
