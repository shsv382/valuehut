import React, { useState } from 'react';
import './booking-form.styles.scss';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { TrainingTypes, StreamTypes, PriceTypes } from '../../training';
import { getDateInWords } from '../dates-table/dates-table.component';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface BookingFormTypes {
    training: TrainingTypes,
    stream: StreamTypes
}

const BookingForm: React.FC<BookingFormTypes> = ({ training, stream }) => {
    const [bookPrice, setBookPrice] = useState(stream.price[0].amount.toString());
    const handleChange = (event: any) => {
        setBookPrice(event.target.value);
      };
    return (
        <div className="booking-form">
            <h3>{training.title}</h3>
            { getDateInWords(new Date(stream.date)) } 
            <span> </span>
            -
            <span> </span>
            <br className="xs-visible" />
            { getDateInWords(new Date(stream.date), stream.duration) }
            <br />
            <label>Choose your region</label>
            <br />
            {
                stream.price.map(({ region, regionDescription, amount }: PriceTypes) => (
                    <p><span className='details'><strong className='details'>{ region }:</strong> { regionDescription }</span></p>
                ))
            }
            <select onChange={handleChange}>
                {
                    stream.price.map(p => {
                        return (
                            <option value={p.amount}>{p.region}</option>
                        )
                    })
                }
            </select>
            <a 
                id="addToCart"
                className="button button-primary button-primary-small"
                href={`https://valuehut.foxycart.com/cart?name=${training.title}&date=${stream.date}&price=${bookPrice}`} 
            >
                BOOK FOR $ {bookPrice}
            </a>
        </div>
    )
}

export default BookingForm;