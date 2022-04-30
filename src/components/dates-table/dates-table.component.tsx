import React from 'react';
import './dates-table.styles.scss';

import { TrainingTypes, StreamTypes, PriceTypes } from '../../training';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cart.actions';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface DatesTableTypes {
    training: TrainingTypes,
    streams: StreamTypes[]
}

const DatesTable: React.FC<DatesTableTypes> = ({ training, streams }) => {
    function getDateInWords(date: object): string  {
        let newDate = date.toString().split(" ").slice(1,4);
        return `${newDate[0]} ${newDate[1]}, ${newDate[2]}`
    }
    const region: string = useAppSelector(state => state.app.region)
    const dispatch = useAppDispatch();
    return (
        <TableContainer component={Paper}>
            <Table sx={{ 
                minWidth: 320,
                fontSize: "20px"
            }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Dates</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell align="right">Duration</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {
                streams.map(({ date, duration, price }: StreamTypes) => (
                    <><TableRow
                    key={ date.toString() }
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            { getDateInWords(new Date(date)) }
                        </TableCell>
                        <TableCell>{`${new Date(date).getUTCHours()}:${new Date(date).getUTCMinutes()}`}</TableCell>
                        <TableCell align="right">
                            { duration } hours
                        </TableCell>
                    </TableRow>
                    {
                        price.map(({ region, regionDescription, amount }: PriceTypes) => (
                            <TableRow
                                key={ date.toString() + region.toString() }
                                sx={{ backgroundColor:"#f5f5f5", '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <span className='details'><strong className='details'>{ region }:</strong> { regionDescription }</span>
                                    </TableCell>
                                    <TableCell className='dates-table__price-amount'>$ { amount }</TableCell>
                                    <TableCell align="right" className="dates-table__book-btn" onClick={() => {
                                        dispatch(addItem({ ...training, dates: [date], price: amount }))}
                                    }>
                                        <span className='link'>
                                            BOOK
                                        </span>
                                    </TableCell>
                            </TableRow>
                        )
                    )
                    }</>
                    )
                )
                }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DatesTable;