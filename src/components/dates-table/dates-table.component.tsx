import React from 'react';
import ReactDOM from 'react-dom/client';
import './dates-table.styles.scss';

import { TrainingTypes, StreamTypes, PriceTypes } from '../../data/training';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cart.actions';
import { toggleModalHidden } from '../../redux/app/app.actions';

import BookingForm from '../booking-form/booking-form.component';
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

export function getDateInWords(date: any, duration: number = 0): string  {
    let newDate = date.setDate(date.getDate() + duration);
    newDate = date.toString().split(" ").slice(1,4);
    return `${newDate[0]} ${newDate[1]}, ${newDate[2]}`
}

const DatesTable: React.FC<DatesTableTypes> = ({ training, streams }) => {
    const region: string = useAppSelector(state => state.app.region)
    const dispatch = useAppDispatch();
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ 
                minWidth: 320,
                fontSize: "20px"
            }} aria-label="simple table">
                <DatesTableHead />
                <TableBody>
                {
                streams.map((stream: StreamTypes) => {
                    const { date, duration, price } = stream;
                    return (
                    <DatesTableStream training={training} stream={stream} />
                    )}
                )
                }
                </TableBody>
            </Table>
        </TableContainer>
    )
}



const DatesTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Dates</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Duration</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
    )
}



interface DatesTableStreamTypes {
    training: TrainingTypes,
    stream: StreamTypes
}

const DatesTableStream: React.FC<DatesTableStreamTypes> = ({ training, stream }) => {
    const dispatch = useAppDispatch();
    const { date, duration, price } = stream;
    const showModal = (stream: any): any => (e: MouseEvent): any => {
        dispatch(toggleModalHidden())
        e.preventDefault();
        const Modal = React.lazy(() => import('../modal/modal.component'));
        const modalRoot = ReactDOM.createRoot(document.getElementById("modal-root") as HTMLElement);
        modalRoot.render(<React.Suspense fallback={<div style={{display: 'none'}}> </div>}>
                            <Modal root={modalRoot}>
                                <BookingForm training={training} stream={stream} />
                            </Modal>
                        </React.Suspense>)
    }
    return (
        <TableRow
            key={ date.toString() }
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
                { getDateInWords(new Date(date)) } - <br className="xs-visible" />{ getDateInWords(new Date(date), duration) }
            </TableCell>
            <TableCell align="center">{`${new Date(date).getUTCHours()}:${new Date(date).getUTCMinutes()}`}</TableCell>
            <TableCell align="center">
                { duration } days
            </TableCell>
            <TableCell align="right">
            <span 
                className="link"
                onClick={showModal(stream)}
            >
                BOOK
            </span>
            </TableCell>
        </TableRow>
    )
}



export default DatesTable;